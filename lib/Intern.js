// import Employee from 'Employee'
const Employee = require('./Employee')
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }
  getSchool = () => {
    return this.school
  }
  getRole = () => {
    return 'Intern'
  }
  getHtml = () => {
    return ` <h3>${this.name}</h3>
    <ul>
      <li>Role: ${this.getRole()}</li>
      <li>Employee ID: ${this.id}</li>
      <li>Email: ${this.email}</li>
      <li>School: ${this.school}</li>
    </ul>`
  }
}
module.exports = Intern
