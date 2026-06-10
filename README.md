# Cypress End-to-End & API Testing Suite 🚀

Este repositorio contiene la arquitectura estrella de pruebas automatizadas para el ecosistema del proyecto. Diseñado bajo el patrón de diseño Page Object Model (POM) para garantizar escalabilidad, mantenibilidad y robustez en la validación de software.

## 📋 Características del Proyecto
* **Pruebas E2E:** Cobertura completa de flujos críticos de usuario (Autenticación, Gestión de Tareas, Creación de Flujos).
* **Pruebas de API:** Validaciones de integración y consistencia de datos de endpoints (códigos de estado 200, 201, 400).
* **Reportes Dinámicos:** Integración visual para análisis de fallos en ciclos de CI/CD.

---

## 🛠️ Stack Tecnológico
* **Framework:** Cypress (v13+)
* **Lenguaje:** JavaScript / TypeScript
* **Reportes:** Mocha Awesome Reporter

---

## 📁 Estructura del Directorio

```text
cypress-e2e-suite/
├── .github/workflows/       # Integración con el pipeline de CI/CD
├── cypress/
│   ├── e2e/                 # Tests organizados por funcionalidad (features)
│   │   ├── auth.cy.js       # Pruebas de Login y Permisos
│   │   └── tasks.cy.js      # Pruebas E2E de flujos
│   ├── api/                 # Pruebas de endpoints e integración
│   │   └── api_spec.cy.js   
│   ├── fixtures/            # Datos estáticos para pruebas (JSON)
│   └── support/             # Comandos personalizados y configuraciones globales
├── .gitignore               # Exclusión estricta de node_modules y .env
├── package.json             # Gestión de dependencias
└── README.md
