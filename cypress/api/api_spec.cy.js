describe('Suite de Pruebas Automatizadas - API Testing', () => {

  it('Validar exitosamente la obtención de tareas (GET /posts)', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        // Verifica que la API responda un código 200 OK
        expect(response.status).to.eq(200);
        // Verifica que el cuerpo no esté vacío y contenga la estructura correcta
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
      });
  });

  it('Validar la creación de una nueva tarea (POST /posts)', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Configurar Jenkins Pipeline',
      body: 'Integrar escaneos de seguridad en el ecosistema',
      userId: 1
    }).then((response) => {
      // Verifica que el recurso haya sido creado con éxito (Status 201)
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq('Configurar Jenkins Pipeline');
    });
  });
});