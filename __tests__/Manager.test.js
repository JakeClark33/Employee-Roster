const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Manager', () => {
  const manager = EmployeeFixture.manager()

  it('should return correct name', () => {
    expect(manager.getName()).toBe('Bob Dole')
    expect(manager.name).toBe('Bob Dole')
  })

  it('should return correct id', () => {
    expect(manager.getId()).toBe(1234)
    expect(manager.id).toBe(1234)
  })

  it('should return correct email address', () => {
    expect(manager.getEmail()).toBe('bob.dole@dingis.com')
    expect(manager.email).toBe('bob.dole@dingis.com')
  })

  it('should return correct office number', () => {
    expect(manager.officeNumber).toBe(123456789)
  })

  it('should return correct role', () => {
    expect(manager.getRole()).toBe('Manager')
  })
})
