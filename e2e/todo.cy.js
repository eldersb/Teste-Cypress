
describe("Carregamento da aplicação", () =>{

    it("Deve ser possível carregar a aplicação", () => {
        cy.visit("http://127.0.0.1:5500/index.html")
        cy.get('h1').should("have.text", "O que fazer hoje?")
    })

})