context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has loaded the footer', () => {
    cy.get('[data-test=footer]').should('be.visible')
  })

  it('has returns a JSON from the API', () => {
    // Test a request on the GET method of the API
    const apiURL = Cypress.env('API_URL')
    cy.request(`${apiURL}/recipes`)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  // Once the JSON test passes this function it's declared for reusability of the API
  const apiURL = Cypress.env('API_URL')
  const getItems = () => cy.request(`${apiURL}/recipes`).its('body')

  it('loads at least 5 items', () => {
    getItems().should('have.length.at.least', 5)
  })

  it('has the correct key values', () => {
    getItems().each((value) =>
      expect(value).to.have.all.keys(
        'createdAt',
        'isActive',
        'name',
        'imageURL',
        'link',
        'selection',
        'rating',
        'nutrition',
        'headline',
        'totalOrdered',
        'id'
      )
    )
  })

  // TODO: add a test for the POST request
  // it('adds an item', () => {})

  // TODO: add a test for the PUT request
  // it('modifies an item', () => {})

  // TODO: add a test for the DELETE request
  // it('deletes an item', () => {})
})
