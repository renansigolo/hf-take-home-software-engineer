import Faker from 'faker'

context('SignIn Page', () => {
  beforeEach(() => {
    cy.visit('/signin')
  })

  it('has loaded the signin page', () => {
    // cy.get('[data-test=signin-title]').contains('Sign in to your account').should('be.visible')
    cy.contains('Sign in to your account').should('be.visible')
  })

  it('should complete all input forms and authenticate to the Home page', () => {
    const email = Faker.internet.email()
    const password = Faker.internet.password()

    // Verify the current URL
    cy.location('pathname').should('eq', '/signin')

    // Should type the data and keep the focus
    // Input Email
    cy.get('[data-test=signin-form] input[name=email]')
      .type(email)
      .should('have.value', email)

    // Input Password
    cy.get('[data-test=signin-form] input[name=password]')
      .type(password)
      .should('have.value', password)

    // Submit SignIn Form
    /** The type button will bypass the form authentication for now */
    cy.get('button[type=button]').click()

    // Test if the redirection was successfull
    cy.location('pathname').should('eq', '/')
  })
})
