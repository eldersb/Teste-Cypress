describe("Inserção de tarefa", () => {

    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/index.html")

    })

    const tituloDaTarefa = "Comprar pão"

    it("Deve ser possível adicionar uma nova tarefa com um click em criar tarefa", () => {
        
        cy.get('#todo_title').click().type(tituloDaTarefa)
        cy.get('.bg-white > .col-auto > .btn').click()
        cy.get('[x-text="todo.task"]').should("have.text", tituloDaTarefa)
        cy.get('[x-text="getFormatedDate(todo.createdAt)"]').should("not.be.empty")
    })

 
    it("Deve ser possível adicionar uma nova tarefa com um enter", () => {
        const tituloDaTarefa = "Comprar pão"

        cy.get('#todo_title').click().type(tituloDaTarefa + '{enter}')
        cy.get('[x-text="todo.task"]').should("have.text", tituloDaTarefa)
        cy.get('[x-text="getFormatedDate(todo.createdAt)"]').should("not.be.empty")
    })
    

    it("Deve ser possível atualizar total de tarefas ao cadastrar uma nova", () => {
        const tituloDaTarefa = "Comprar pão"
        
        cy.get('#todo_title').click().type(tituloDaTarefa + '{enter}')
        cy.get('[x-text="todo.task"]').should("have.text", tituloDaTarefa)
        cy.get('[x-text="getFormatedDate(todo.createdAt)"]').should("not.be.empty")
       
        cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 1")
    })


    it("Deve ser possível exibir uma mensagem de erro caso a tarefa esteja em branco", () => {

        cy.get('.bg-white > .col-auto > .btn').click()

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Digite um título para a tarefa!')
            
        })

        cy.on('window:confirm', () => true)

        cy.get('.mb-3').should("have.text", "Tarefas cadastradas: 0")

    })

})