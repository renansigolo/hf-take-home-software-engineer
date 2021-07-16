context('Navigation Pages', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has loaded the home page', () => {
    cy.contains(
      'The first app with cognitive analysis for people with ADHD!'
    ).should('be.visible')
  })
})
