context('Navigation Pages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has loaded the footer', () => {
    cy.get('[data-test=footer]').should('be.visible')
  })
})
