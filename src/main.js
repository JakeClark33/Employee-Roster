var inquirer = require('inquirer')
const Menu = require('../lib/Menu')
const HtmlRenderer = require('../lib/HtmlRenderer')

async function main() {
  // Gather manager information
  const manager = await Menu.manager()

  // display action menu
  const employees = await Menu.gatherEmployeeData()

  // once complete render HTML
  HtmlRenderer.buildHTML(manager, employees)
}

module.exports = main
