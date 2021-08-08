const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const inquirer = require('inquirer')

class Menu {
  static manager = async () => {
    return inquirer
      .prompt([
        {
          type: 'text',
          name: 'name',
          message: 'What is the name of your manager?',
        },

        {
          type: 'number',
          name: 'id',
          message: 'What is your employee Id?',
        },
        {
          type: 'text',
          name: 'email',
          message: 'What is your email address?',
        },
        {
          type: 'number',
          name: 'office',
          message: 'What is your office number?',
        },
      ])
      .then((answers) => {
        return new Manager(
          answers['name'],
          answers['id'],
          answers['email'],
          answers['office']
        )
      })
  }

  static gatherEmployeeData = async () => {
    const employees = []
    let finished = false

    while (!finished) {
      const menuSelection = await Menu.displayActionMenu()

      switch (menuSelection.action) {
        case 'Add Engineer':
          const engineer = await Menu.eningeer()
          employees.push(engineer)
          break
        case 'Add Intern':
          const intern = await Menu.intern()
          employees.push(intern)
          break
        case 'Finish':
          finished = true
          break
        default:
          finished = true
          break
      }
    }

    return employees
  }

  static displayActionMenu = async () => {
    return inquirer.prompt([
      {
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
        name: 'action',
        message: 'What would you like to do?',
      },
    ])
  }

  static eningeer = async () => {
    return inquirer
      .prompt([
        {
          type: 'text',
          name: 'name',
          message: 'What is the name of the employee?',
        },

        {
          type: 'number',
          name: 'id',
          message: 'What is the employee Id?',
        },
        {
          type: 'text',
          name: 'email',
          message: 'What is the email address?',
        },
        {
          type: 'text',
          name: 'github',
          message: 'What is the github user?',
        },
      ])
      .then((answers) => {
        return new Engineer(
          answers['name'],
          answers['id'],
          answers['email'],
          answers['github']
        )
      })
  }

  static intern = async () => {
    return inquirer
      .prompt([
        {
          type: 'text',
          name: 'name',
          message: 'What is the name of the employee?',
        },

        {
          type: 'number',
          name: 'id',
          message: 'What is the employee Id?',
        },
        {
          type: 'text',
          name: 'email',
          message: 'What is the email address?',
        },
        {
          type: 'text',
          name: 'school',
          message: 'What is the name of the school?',
        },
      ])
      .then((answers) => {
        return new Intern(
          answers['name'],
          answers['id'],
          answers['email'],
          answers['school']
        )
      })
  }
}

module.exports = Menu
