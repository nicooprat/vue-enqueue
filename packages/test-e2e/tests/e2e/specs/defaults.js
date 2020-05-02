const { $, _ } = Cypress

describe('defaults behavior with 2 enqueued components', () => {
  beforeEach(() => {
    cy.visit('/defaults')
  })

  it('show components one after the other', () => {
    // No test should exist
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('not.exist')

    // Show both tests
    cy.get('[data-cy="button1"]').click()
    // Only first test should exist
    cy.get('[data-cy="button2"]').should('exist')
    cy.get('[data-cy="button3"]').should('not.exist')

    // Hide first test
    cy.get('[data-cy="button2"]').click()
    // Only second test should exist
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('exist')

    // Hide second test
    cy.get('[data-cy="button3"]').click()
    // No test should exist
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('not.exist')
  })
})
