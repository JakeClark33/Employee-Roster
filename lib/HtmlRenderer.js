const fs = require('fs')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

class HtmlRenderer {
  static buildHTML = async (manager, employees) => {
    let html = HtmlRenderer.generateHtml(manager)
    employees.forEach((employee) => {
      html += HtmlRenderer.generateHtml(employee)
    })
    await fs.writeFile(
      'index.html',
      `<html><body>${html}</body></html>`,
      () => {}
    )
  }

  static generateHtml = (employee) => {
    let result = `<h3>${employee.name}</h3>`

    result += `<ul>`
    result += `<li>Role: ${employee.getRole()}</li>`
    result += `<li>Employee ID: ${parseInt(employee.getId())}</li>`
    result += `<li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>`
    if (employee instanceof Manager) {
      result += `<li>Office Number: ${employee.officeNumber}</li>`
    }
    if (employee instanceof Engineer) {
      result += `<li>GitHub User: <a href='https://github.com/${employee.getGithub()}' target='_blank'>${employee.getGithub()}</a></li>`
    }
    if (employee instanceof Intern) {
      result += `<li>School: ${employee.getSchool()}</li>`
    }
    result += `</ul>`

    return result
  }
}
module.exports = HtmlRenderer
