const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Employee', () => {
  const employee = EmployeeFixture.employee()

  it('getName should return correct email address', () => {
    expect(employee.getName()).toBe('Bob Dole')
  })

  it('getId should return correct mail addresse', () => {
    expect(employee.getId()).toBe(1234)
  })

  it('getEmail should return correct email address', () => {
    expect(employee.getEmail()).toBe('bob.dole@dingis.com')
  })

  it('getRole should return correct email address', () => {
    expect(employee.getRole()).toBe('Employee')
  })
})
