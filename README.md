Cypress End-to-End & API Testing Suite 🚀

Suite automatizada de pruebas para validar la calidad de software tanto en la interfaz de usuario (Frontend/E2E) como en la capa de servicios (Backend/API). El proyecto está construido con Cypress, siguiendo principios de Arquitectura Limpia, Page Object Model (POM) e Integración Continua (CI/CD).

📋 Características principales

Pruebas End-to-End (E2E)

Cobertura de flujos críticos de usuario como autenticación, gestión de tareas y creación de flujos.

Pruebas de API

Validaciones de integración y consististencia de datos en endpoints HTTP, incluyendo códigos de estado 200, 201 y 400.

Reportes dinámicos

Integración con Mocha Awesome Reporter para generar reportes visuales útiles en entornos locales y pipelines de CI/CD.

Arquitectura escalable

Organización modular basada en Page Object Model (POM) para facilitar el mantenimiento y crecimiento de la suite.

🛠️ Stack tecnológico

Tecnología

	

Uso




Cypress (v13+)

	

Framework de automatización




JavaScript / TypeScript

	

Lenguaje de desarrollo




Mocha Awesome Reporter

	

Generación de reportes

📁 Estructura del proyecto

Organización principal de directorios y archivos.

Estructura

cypress-e2e-suite/
├── cypress/
│   ├── api/                 # Módulo de Aseguramiento de Calidad para Servicios
│   │   └── api_spec.cy.js   # Pruebas automatizadas de Endpoints (API REST)
│   └── e2e/                 # Módulo de Pruebas de Interfaz de Usuario
│       └── auth.cy.js       # Pruebas de Flujos de Autenticación y Formularios
├── .gitignore               # Exclusión estricta de entornos locales (node_modules)
├── cypress.config.js        # Configuración global del motor de Cypress
├── LICENSE                  # Licencia de código abierto MIT
├── package-lock.json        # Registro estricto del árbol de dependencias
└── package.json             # Manifiesto del proyecto y scripts de ejecución

📊 Arquitectura de la suite de pruebas

Relación entre el runner de Cypress y las suites E2E y API.

Arquitectura

       ┌────────────────────────────────────────────────────────┐
       │                   CYPRESS RUNNER                       │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
📂 cypress/e2e/auth.cy.js                        📂 cypress/api/api_spec.cy.js
├─ Flujo 1: Escritura de credenciales            ├─ GET /posts  → 200 OK
└─ Flujo 2: Envío de formularios                 └─ POST /posts → 201 Created

🚀 Instalación y ejecución local

Si quieres probar esta suite en tu computadora, sigue estos pasos.

Prerrequisitos

Node.js v18 o superior
Git

1. Clonar el repositorio

git clone https://github.com/Danielito2252/cypress-e2e-suite.git

2. Entrar al directorio del proyecto

cd cypress-e2e-suite

3. Instalar dependencias

npm install

4. Ejecutar las pruebas

Elige una de las siguientes modalidades según tu necesidad.

Modo interactivo (UI de Cypress)

Permite ver el navegador ejecutando las pruebas en tiempo real.

npx cypress open

Modo headless (CLI / CI-CD)

Ideal para pipelines de integración continua y ejecución en segundo plano.

npx cypress run

📈 Reportes de ejecución

La suite utiliza Mocha Awesome Reporter para generar reportes visuales de las ejecuciones.

Después de correr las pruebas, los reportes se generan automáticamente en el directorio configurado por Cypress y el reporter.

🛡️ Buenas prácticas implementadas

Page Object Model (POM)

Separación de lógica de pruebas y elementos de UI para mejorar la mantenibilidad.

Git Flow

Uso de ramas main y develop para simular entornos de producción y staging.

Aislamiento de entorno

Configuración estricta de .gitignore para evitar subir dependencias locales o variables sensibles.

Pruebas independientes

Cada prueba está diseñada para ejecutarse de forma aislada y repetible.

📌 Próximas mejoras

Migración completa a TypeScript.

Integración con dashboards de calidad (Allure, Cypress Cloud, etc.).

Paralelización de pruebas en CI/CD.

👤 Autor

Desarrollado por Herberth Barrios

GitHub: github.com/Danielito2252

📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.