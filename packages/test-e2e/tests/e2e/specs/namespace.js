const { $, _ } = Cypress

describe('update enqueue according to viewport width', () => {
  beforeEach(() => {
    cy.visit('/namespace')
  })

  it('has 3 enqueue on desktop', () => {
    cy.viewport(1440, 480)
    cy.get('.parent').should('exist').should('have.length', 1)
    cy.get('.parent > *').should('exist').should('have.length', 3)
  })
})
