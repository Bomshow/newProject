const { select } = require("async")

describe('Cypress Test', () => {
  it('successfully loads', () => {
    //Validación de landing page, botón Wompi inactivo y mensaje
    cy.visit('https://pagos-test.coordinadora.com/7Coxw1Q7ZaquOnFyF5xE') // change URL to match your dev URL

    cy.get(':nth-child(1) > .MuiTypography-h4').should('have.text', '73940666356')

    cy.get(':nth-child(2) > .css-dvxtzn > .MuiButtonBase-root').should('be.disabled')

    cy.get('.MuiCollapse-wrapperInner > .MuiBox-root > .MuiTypography-root').should('have.text', 'Por seguridad hemos bloqueado este método de pago, puedes pagar con crédito o al momento de la entrega')

    cy.get(':nth-child(1) > .MuiBox-root > .MuiButtonBase-root').click()

    cy.wait(5000)
    cy.get(':nth-child(1) > .css-u6v8er').should('be.visible')

    
    //VALIDACIÓN DE CAMPOS FORMULARIO APPROBE
    cy.get('.css-180rpdb > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Primer Nombre')

    cy.get('.css-180rpdb > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Primer Apellido')

    cy.get(":nth-child(3) > .css-k008qs > .css-1qa1gz4 > .MuiFormControl-root > .MuiInputBase-root").click()
    cy.get('.Mui-selected > .MuiBox-root').should('contain', 'CC')
    cy.get('[data-value="DOCUMENT_TYPE/CE"]').should('contain', 'CE')
    cy.get('[data-value="DOCUMENT_TYPE/NIT"]').should('contain', 'NIT').click()

    cy.get(':nth-child(3) > .css-k008qs > .css-1dfi58g > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Número documento')

    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Fecha expedición documento')

    cy.get(':nth-child(5) > .css-k008qs > .css-1dfi58g > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Número celular')

    cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root').should('contain', 'Correo electrónico')

    cy.scrollTo('bottom')
    cy.get(':nth-child(8) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiList-root > [tabindex="0"] > .MuiBox-root').should('contain', '01')
    cy.get('[data-value="2"] > .MuiBox-root').should('contain', '02')
    cy.get('[data-value="3"] > .MuiBox-root').should('contain', '03').click()

    cy.get('.PrivateSwitchBase-input').should('not.be.checked')

    //DILIGENCIAR FORMULARIO APPROBE Y BOTÓN CONTINUAR
    cy.get('.css-1ebhcds').click()
    cy.get('.css-180rpdb > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').type('Juan Pablo')

    cy.get('.css-180rpdb > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type('DUQUE')

    cy.get(':nth-child(3) > .css-k008qs > .css-1dfi58g > .MuiFormControl-root > .MuiInputBase-root').type('hola$123456!"hola')

    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get(':nth-child(124) > .MuiPickersYear-yearButton').click()
    cy.get(':nth-child(11) > .MuiPickersMonth-monthButton').click()
    cy.get('[data-timestamp="1700629200000"]').click()

    cy.get(':nth-child(5) > .css-k008qs > .css-1dfi58g > .MuiFormControl-root > .MuiInputBase-root').type('hola323323323hola')

    cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root').type('hola323323323hola@gmail.com')
    
    cy.get('.PrivateSwitchBase-input').check()

    cy.get('.css-1ebhcds').click()

    cy.get('.MuiCollapse-wrapperInner > .MuiTypography-root > b').should('contain', '333 333 33 33')
    cy.get(':nth-child(5) > .css-k008qs > .css-1dfi58g > .MuiFormControl-root > .MuiInputBase-root').type('3233233232')

    cy.get('.css-1ebhcds').click()

    cy.wait(5000)

    cy.url().should('not.equal', 'https://pagos-test.coordinadora.com/credito')
  })
})