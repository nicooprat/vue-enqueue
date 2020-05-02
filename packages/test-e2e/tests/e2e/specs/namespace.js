const { $, _ } = Cypress

describe('namespaced queues', () => {
  beforeEach(() => {
    cy.visit('/namespace')
  })

  // Test 1 & 2 has same namespace
  // Test 3 has its own namespace
  it('respects namespace queues', () => {
    // No test should exist
    cy.get('[data-cy="button1"]').should('not.exist')
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('not.exist')

    // // Show all tests
    cy.get('[data-cy="start"]').click()
    // // Only first and third tests should exist
    cy.get('[data-cy="button1"]').should('exist')
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('exist')

    // Hide first test
    cy.get('[data-cy="button1"]').click()
    // Second and third test should exist
    cy.get('[data-cy="button1"]').should('not.exist')
    cy.get('[data-cy="button2"]').should('exist')
    cy.get('[data-cy="button3"]').should('exist')

    // Hide second test
    cy.get('[data-cy="button2"]').click()
    // Only third test should exist
    cy.get('[data-cy="button1"]').should('not.exist')
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('exist')

    // Hide third test
    cy.get('[data-cy="button3"]').click()
    // No test should exist
    cy.get('[data-cy="button1"]').should('not.exist')
    cy.get('[data-cy="button2"]').should('not.exist')
    cy.get('[data-cy="button3"]').should('not.exist')
  })
})
