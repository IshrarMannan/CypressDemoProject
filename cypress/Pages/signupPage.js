export class signupPage{

    navigate(url){

        cy.visit(url)

    }
    clickSignup(btn){
        cy.get(btn).click()
        cy.wait(1000)
    }
    signupModal(user, pass, btn){
        const username= Cypress.env('username')

        cy.get(user).type(username)
        cy.wait(2000)
        cy.get(pass).type(Cypress.env('password'))
        cy.wait(2000)
        cy.xpath(btn).click()     
    }

}