/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "C:\Users\Usuario\Desktop\newProject\cypress\e2e\step_definitions\functions.js";

Given("Entro a la URL de repartos", () => {
    cy.visit('https://sigo-reparto-test.coordinadora.com/') // change URL to match your dev URL
        
  });
  When(
    "Ingreso los datos en el username y password buenos",
    () => {
        //ingresar username
        cy.get(':nth-child(1) > input').invoke('attr', 'placeholder').should('contain', 'Nombre de usuario')

        cy.get(':nth-child(2) > input').invoke('attr', 'placeholder').should('contain', 'Contraseña')

        loginP();
       
    }
  );
  Then(
    "presiono enter para ingresar a la pagina",
    () => {
        cy.get('.login').click()           
        cy.get('.selected > .drawer-step-name').should('exist')
    });
      
    