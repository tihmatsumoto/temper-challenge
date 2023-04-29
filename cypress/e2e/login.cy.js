const loginData = require('../fixtures/login.json')

describe('Test Case: Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it(`Should login successfully with ${loginData.users.standard_user}`, () => {
    cy.loginAndVerify(loginData.users.standard_user, loginData.password);
  });
  
  it(`Should login successfully with ${loginData.users.problem_user}`, () => {
    cy.loginAndVerify(loginData.users.problem_user, loginData.password);
  });
  
  /**This one will sometimes timeout because of how it is set up to have 
  performance waiting issues **/
  it(`Should login successfully with ${loginData.users.performance_glitch_user}`, () => {
    cy.loginAndVerify(loginData.users.performance_glitch_user, loginData.password);
  });

  it(`Should fail to login with ${loginData.users.locked_out_user}`, () => {
    cy.login(loginData.users.locked_out_user, loginData.password)
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  });
});
