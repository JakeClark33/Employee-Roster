// import Employee from '../lib/Employee'
const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')
const Manager = require('../lib/Manager')
const Intern = require('../lib/Intern')
class EmployeeFixture {
  static employee = () => {
    return new Employee('Bob Dole', 1234, 'bob.dole@dingis.com')
  }

  static engineer = () => {
    return new Engineer('Bob Dole', 1234, 'bob.dole@dingis.com', 'JakeClark33')
  }

  static manager = () => {
    return new Manager('Bob Dole', 1234, 'bob.dole@dingis.com', 123456789)
  }

  static intern = () => {
    return new Intern('Bob Dole', 1234, 'bob.dole@dingis.com', 'UW Madison')
  }
}
module.exports = EmployeeFixture
