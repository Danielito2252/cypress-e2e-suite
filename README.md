# 🚀 Cypress End-to-End & API Testing Suite
![Cypress](https://img.shields.io/badge/Cypress-v13+-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-Awesome%20Reporter-8D6748?logo=mocha&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=github-actions&logoColor=white)
![CI](https://github.com/Danielito2252/cypress-e2e-suite/actions/workflows/cypress.yml/badge.svg)
![License](https://img.shields.io/badge/License-MIT-green)

Suite automatizada de pruebas para validar la calidad de software tanto en la interfaz de usuario (Frontend/E2E) como en la capa de servicios (Backend/API).

El proyecto está construido con **Cypress**, siguiendo principios de:

- Arquitectura Limpia
- Page Object Model (POM)
- Integración Continua (CI/CD)

---

## 📋 Características Principales

### 🧪 Pruebas End-to-End (E2E)

Cobertura de flujos críticos de usuario como:

- Autenticación
- Gestión de tareas
- Creación de flujos

### 🔌 Pruebas de API

Validaciones de integración y consistencia de datos en endpoints HTTP:

- 200 OK
- 201 Created
- 400 Bad Request

### 📊 Reportes Dinámicos

Integración con **Mocha Awesome Reporter** para generar reportes visuales en entornos locales y pipelines CI/CD.

### 🏗️ Arquitectura Escalable

Organización modular basada en **Page Object Model (POM)** para facilitar el mantenimiento y crecimiento de la suite.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| Cypress v13+ | Framework de automatización |
| JavaScript / TypeScript | Lenguaje de desarrollo |
| Mocha Awesome Reporter | Generación de reportes |

---

## 📁 Estructura del Proyecto

```text
cypress-e2e-suite/
│
├── cypress/
│   ├── api/
│   │   └── api_spec.cy.js
│   │
│   ├── e2e/
│   │   ├── auth.cy.js
│   │   └── tasks.cy.js
│   │
│   ├── fixtures/
│   └── support/
│
├── .github/
│   └── workflows/
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
├── LICENSE
└── README.md
```

---

## 📊 Arquitectura de la Suite de Pruebas

```text
                    CYPRESS RUNNER
                           │
          ┌────────────────┴────────────────┐
          │                                 │
          ▼                                 ▼

 cypress/e2e/auth.cy.js      cypress/api/api_spec.cy.js

 - Login de usuario          - GET /posts  → 200 OK
 - Formularios               - POST /posts → 201 Created
```

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- Node.js v18 o superior
- Git

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/Danielito2252/cypress-e2e-suite.git
```

### 2️⃣ Acceder al proyecto

```bash
cd cypress-e2e-suite
```

### 3️⃣ Instalar dependencias

```bash
npm install
```

### 4️⃣ Ejecutar las pruebas

#### Modo Interactivo

```bash
npx cypress open
```

#### Modo Headless

```bash
npx cypress run
```

---

## 📈 Reportes

Después de cada ejecución se generan reportes automáticos mediante:

- Mocha Awesome Reporter

Estos reportes facilitan el análisis de resultados y fallos durante la ejecución de pruebas.

---

## 🛡️ Buenas Prácticas Implementadas

### Git Flow

Uso de ramas:

- main
- develop

### Aislamiento de Entorno

Configuración estricta de:

- `.gitignore`
- Variables de entorno

### Pruebas Independientes

Cada prueba puede ejecutarse de forma aislada y repetible.

### Arquitectura POM

Separación de:

- Elementos de interfaz
- Lógica de negocio
- Casos de prueba

---

## 📌 Resumen

| Característica | Estado |
|---------------|---------|
| Pruebas E2E | ✅ |
| Pruebas API | ✅ |
| Arquitectura POM | ✅ |
| CI/CD | ✅ |
| Reportes Automatizados | ✅ |
| TypeScript | 🚧 En progreso |

## 🔮 Próximas Mejoras

- Migración completa a TypeScript.
- Integración con Allure Reports.
- Ejecución paralela en CI/CD.
- Integración con Cypress Cloud.

---

## 👨‍💻 Autor

**Herberth Barrios**

GitHub:
https://github.com/Danielito2252

---

## 📄 Licencia

Este proyecto está distribuido bajo la licencia MIT.