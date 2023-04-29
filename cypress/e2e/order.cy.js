const loginData = require('../fixtures/login.json')
const userData = require('../fixtures/user_info.json')

describe('Test Case: Order item', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginAndVerify(loginData.users.standard_user, loginData.password);
  });
  
  it('Should order a Sauce Labs Backpack', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('.cart_quantity').should('have.text', '1')
    cy.get('.inventory_item_price').should('have.text', '$29.99')
    cy.get('#checkout').click();
    cy.get('#first-name').type(userData.firstName);
    cy.get('#last-name').type(userData.lastName);
    cy.get('#postal-code').type(userData.zipcode);
    cy.get('#continue').click();
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');
    cy.get('.summary_subtotal_label').should('contain', '29.99')
    cy.get('.summary_tax_label').should('contain', '2.40')
    cy.get('.summary_total_label').should('contain', '32.39')
    cy.get('#finish').click();
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });});
