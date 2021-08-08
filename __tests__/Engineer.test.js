const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Engineer', () => {
  const engineer = EmployeeFixture.engineer()

  it('getName should return correct name', () => {
    expect(engineer.getName()).toBe('Bob Dole')
  })

  it('getId should return correct mail engineer id', () => {
    expect(engineer.getId()).toBe(1234)
  })

  it('getEmail should return correct email address', () => {
    expect(engineer.getEmail()).toBe('bob.dole@dingis.com')
  })

  it('getGithub should return correct github user name', () => {
    expect(engineer.getEmail()).toBe('bob.dole@dingis.com')
  })

  it('getRole should return correct role', () => {
    expect(engineer.getRole()).toBe('Engineer')
  })
})
