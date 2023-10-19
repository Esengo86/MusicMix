describe('Audio Player', () => {
  it('plays audio', () => {
    cy.visit('/')

    cy.get('.compostion-name:first').click()
    cy.get('#play-btn')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get('#player-play-btn').click()
  })
})
