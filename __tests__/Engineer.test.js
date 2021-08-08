const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Engineer', () => {
  const engineer = EmployeeFixture.engineer()

  it('should return correct name', () => {
    expect(engineer.getName()).toBe('Bob Dole')
    expect(engineer.name).toBe('Bob Dole')
  })

  it('should return correct id', () => {
    expect(engineer.getId()).toBe(1234)
    expect(engineer.id).toBe(1234)
  })

  it('should return correct email address', () => {
    expect(engineer.getEmail()).toBe('bob.dole@dingis.com')
    expect(engineer.email).toBe('bob.dole@dingis.com')
  })

  it('should return correct github user name', () => {
    expect(engineer.getEmail()).toBe('bob.dole@dingis.com')
    expect(engineer.email).toBe('bob.dole@dingis.com')
  })

  it('should return correct role', () => {
    expect(engineer.getRole()).toBe('Engineer')
  })
})
