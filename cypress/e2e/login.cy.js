/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Ignora o erro e continua o teste
});

// funcionalidade
describe("Teste Login no site Lojinha - iPhone 14 com Edge", () => {
  // Simula a resolução do iPhone 14 (390x844)
      beforeEach(() => {
        cy.viewport(390, 844);
      });
  

  //1.Cenário Login para acessar Lojinha com Sucesso
  it.only("Login com sucesso", () => {
    //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e inserindo um usuário válido
    cy.get('#usuario').type('admin', { force: true });
    cy.get('#senha').type('admin', { force: true });

    //Quando (When)  
    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click();

    //Então (Then)  
    // Espera a página carregar e verifica se mostra a lista de produtos do site Lojinha
    cy.url().should('include', 'http://165.227.93.41/lojinha-web/v2/produto');
    
    // Verificar se a lista de produtos está visível, após login
    cy.get('h3').should('contain', 'Lista de Produtos'); // Ajuste conforme a página
    
  });

  //2.Cenário Login para acessar Lojinha com usuário inválido
  it("Usuario invalido", () => {
     //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e inserindo um usuário inválido
    cy.get('#usuario').type('addrre', { force: true });
    cy.get('#senha').type('admin', { force: true });

    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click(); //Falha ao fazer login

  });

  //3.Cenário Login para acessar Lojinha Senha inválida 
  it("Senha invalida", () => {
    //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e inserindo uma senha inválido
    cy.get('#usuario').type('admin', { force: true });
    cy.get('#senha').type('234569', { force: true });

    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click(); //Falha ao fazer login

  });

  //4.Cenário Login para acessar Lojinha com Senha vazia 
  it("Senha vazia", () => {
    //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e deixar o campo senha vazia
    cy.get('#usuario').type('admin', { force: true });
    cy.get('#senha').type(' ', { force: true });

    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click(); //Falha ao fazer login

  });

  //5.Cenário Login para acessar Lojinha com Usuário vazio 
  it("Usuario vazio", () => {
    //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e deixa o campo usuário vazio
    cy.get('#usuario').type(' ', { force: true });
    cy.get('#senha').type('admin', { force: true });

    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click(); //Falha ao fazer login
  });

  //6.Cenário Login para acessar Lojinha Usuário e Senha vazios
  it("Usuario e senha vazios", () => {
     //DADO
    // abrir a aplicacao
    cy.visit('http://165.227.93.41/lojinha-web/v2/', {
      headers: {
         'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) EdgiOS/120.0.0.0 Mobile/15E148 Safari/537.36",
 },
});
    // Esperando os campos usuário e senha aparecerem e deixarem os campos usuário e senha vazios
    cy.get('#usuario').type(' ', { force: true });
    cy.get('#senha').type(' ', { force: true });

    // Clica no botão "Entrar"
    cy.get('#btn-entrar').click();  //Falha ao fazer login
  });
});  
