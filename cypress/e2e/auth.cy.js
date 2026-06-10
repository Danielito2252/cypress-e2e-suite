describe('Suite de Pruebas E2E - Módulo de Autenticación', () => {

  beforeEach(() => {
    // Simulamos la entrada a una página de inicio de sesión segura antes de cada prueba
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('Flujo 1: Validar escritura correcta en campos de credenciales', () => {
    // Selecciona un campo de texto real de la web de Cypress y simula la escritura
    cy.get('.action-email')
      .type('barriosherberth@gmail.com')
      .should('have.value', 'barriosherberth@gmail.com');
  });

 it('Flujo 2: Validar el comportamiento del sistema ante un submit de formulario', () => {
    // Encadenamos el .submit() y luego buscamos el elemento de texto continuo .next()
    cy.get('.action-form').submit().next().should('contain', 'Your form has been submitted!');
  });
});