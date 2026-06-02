describe('UI Tests - Demo Store (Cypress)', () => {
  beforeEach(() => {
    cy.visit('https://demoblaze.com/')
  })

  it('Перевірка заголовку сторінки', () => {
    // Перевіряємо, що в назві вкладки є слово STORE
    cy.title().should('include', 'STORE')
  })

  it('Перевірка наявності контейнера товарів', () => {
    // Перевіряємо блок, де лежать всі товари
    cy.get('#tbodyid').should('be.visible')
  })

  it('Перевірка, що товарів на сторінці більше 0', () => {
    // Чекаємо завантаження товарів (картки з класом .card) і перевіряємо їх кількість
    cy.get('.card', { timeout: 10000 }).should('have.length.greaterThan', 0)
  })
})