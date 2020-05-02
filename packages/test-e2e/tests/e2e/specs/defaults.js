const { $, _ } = Cypress

describe('defaults behavior with 2 dialogs', () => {
  beforeEach(() => {
    cy.visit('/defaults')
  })

  it('display dialogs one after the other', () => {
    // Open dialogs
    $('.el-button--primary').click()
    cy.get('.el-dialog__title').should(title => {
      // Only first dialog should be displayed
      expect(title).to.have.length(1)
      expect(title).to.contain('Dialog 1')
    })
    .then(() => {
      // Close first dialog
      $('.el-dialog__headerbtn').click()
      cy.get('.el-dialog__title').should(title => {
        // Only second dialog should be displayed
        expect(title).to.have.length(1)
        expect(title).to.contain('Dialog 2')
      })
    })
  })
})
