const { $, _ } = Cypress

describe('defaults behavior with 3 enqueue', () => {
  beforeEach(() => {
    cy.visit('/defaults')
  })

  it('creates right amount of enqueue', () => {
    cy.get('.parent').should('exist').should('have.length', 1)
    cy.get('.parent > *').should('exist').should('have.length', 3)
  })

  it('dispatches children evenly', () => {
    cy.get('.child').should('have.length', 12)
    const texts = ["1", "4", "7", "10", "2", "5", "8", "11", "3", "6", "9", "12"]
    cy.get('.child').then(($children) => {
      _.each($children.get(), (child, i) => {
        expect($(child).text()).to.eq(texts[i])
      })
    })
  })

  it('has equal enqueue widths', () => {
    cy.get('.parent > *').then(($enqueue) => {
      const widths = _.map($enqueue.get(), (column, i) => $(column).width())
      expect(_.uniq(widths).length).to.eq(1)
    })
  })
})
