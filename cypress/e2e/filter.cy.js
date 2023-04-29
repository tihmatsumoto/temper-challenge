const loginData = require('../fixtures/login.json')

describe.only('Test Case: Filter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginAndVerify(loginData.users.standard_user, loginData.password);
  });
  
  it('Should filter by price (low to high)', () => {
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.fixture('inventory_prices').its('item_price').then((prices) => { 
      cy.get('.inventory_item_price').each(($elem, index) => {
        expect($elem).to.have.text(prices[index])
      })
    })
  });
});
