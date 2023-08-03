describe('Novidades', () => {
  
  it('Cadastrar email com sucesso', () => {
    // acessar a aplicação
    cy.visit('/').get('#top_header')

    // criar as ações
    // selecionar esse elemento
    // preencher um campo
    cy.get('.form-control').type('dudu@teste.com.br')

    // click em um elemento
    cy.get('.clear .theme-btn-one.btn_md').click()

    cy.get('#swal2-title').should('be.visible').should('have.text', 'Success')

  })

  it('Cadastrar email com sucesso apertando enter', () => {

    cy.visit('/').get('#top_header')

    cy.get('.form-control').type('dudu@teste.com.br{enter}')

    cy.get('#swal2-title').should('be.visible').should('have.text', 'Success')

  })

  it('Verificar fechamento da mensagem de sucesso', () => {

    cy.visit('/').get('#top_header')

    cy.get('.form-control').type('dudu@teste.com.br')

    cy.get('.clear .theme-btn-one.btn_md').click()

    cy.get('.swal2-actions .swal2-confirm').click()
    cy.wait(500)

    cy.get('#swal2-title').should('not.exist')

  })

})