function loginP(){
    cy.get(':nth-child(1) > input').type('30709')

    cy.get(':nth-child(2) > input').type('1234')
    
    return 0;
}

function loginN(){
    cy.get(':nth-child(1) > input').type('30709')

    cy.get(':nth-child(2) > input').type('123')
    
    return 0;
}