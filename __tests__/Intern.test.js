const EmployeeFixture = require('../fixtures/Employee.Fixture')

describe('Intern', () => {
  const intern = EmployeeFixture.intern()

  it('should return correct name', () => {
    expect(intern.getName()).toBe('Bob Dole')
    expect(intern.name).toBe('Bob Dole')
  })

  it('should return correct id', () => {
    expect(intern.getId()).toBe(1234)
    expect(intern.id).toBe(1234)
  })

  it('should return correct email address', () => {
    expect(intern.getEmail()).toBe('bob.dole@dingis.com')
    expect(intern.email).toBe('bob.dole@dingis.com')
  })
  it('should return correct school', () => {
    expect(intern.getSchool()).toBe('UW Madison')
    expect(intern.school).toBe('UW Madison')
  })

  it('should return correct role', () => {
    expect(intern.getRole()).toBe('Intern')
  })
})
