describe("Exclusão de uma tarefa", () =>{

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html")
        const tituloDaTarefa = "Comprar pão"

        cy.get('#todo_title').click().type(tituloDaTarefa)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("have.text", tituloDaTarefa)
        cy.get('[x-text="getFormatedDate(todo.createdAt)"]').should("not.be.empty")

    })

    it("Deve ser posssível exibir uma mensagem de confirmação ao clicar no botão Excluir", () => {
        cy.get('.text-end > .btn').click()

        cy.on('window:confirm', (msgConfirmacao) => {
            expect(msgConfirmacao).to.equal('Tem certeza que deseja remover?')
            
        })
    })


    it("Deve ser possível excluir uma tarefa ao clicar no botão Excluir", ()=>{
        cy.get('.text-end > .btn').click()
      
        cy.on('window:confirm', () => true)
        
        cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 0")
    })

})