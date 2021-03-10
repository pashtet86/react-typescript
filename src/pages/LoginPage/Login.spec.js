import React          from "react";
import { mount }      from "cypress-react-unit-test";
import Login          from "./index";
import { Provider }   from 'react-redux';
import configureStore from 'redux-mock-store';


const defaultForm = {
  email: '',
  password: '',
};

const state = {
  loading: false,
  error: null,
  token: 'token',
  form: defaultForm,
};

const initialState = { login: state};

const mockStore = configureStore();
const store = mockStore(initialState);

describe("Login page", () => {


  it("renders fileds and control", () => {
    mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    cy.get('input[data-testing="email"]').should('be.visible')
    cy.get('input[data-testing="password"]').should('be.visible')
    cy.get('input[type="submit"]').should('be.visible')
  });

  it("show validation feedback", () => {
    mount(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    cy.get('input[type="submit"]').click();
    cy.get('.login-page').find('.error-message').should('have.length', 2);
  });

});
