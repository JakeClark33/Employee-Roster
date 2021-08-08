const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Employee', () => {
  const employee = EmployeeFixture.employee()

  it('should return correct name', () => {
    expect(employee.getName()).toBe('Bob Dole')
    expect(employee.name).toBe('Bob Dole')
  })

  it('should return correct id', () => {
    expect(employee.getId()).toBe(1234)
    expect(employee.id).toBe(1234)
  })

  it('should return correct email address', () => {
    expect(employee.getEmail()).toBe('bob.dole@dingis.com')
    expect(employee.email).toBe('bob.dole@dingis.com')
  })

  it('should return correct role', () => {
    expect(employee.getRole()).toBe('Employee')
  })
})
