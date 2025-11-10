# Automatización de Pruebas de API para saucedemo.com

### Descripción

Este proyecto se enfoca en la automatización de pruebas de API para el sitio de demostración [saucedemo.com](https://www.saucedemo.com/).

### Tabla de Contenidos

-   [Stack de Tecnologías](#stack-de-tecnologías)
-   [Estructura del Proyecto](#estructura-del-proyecto)
-   [Instalación](#instalación)
-   [Uso](#uso)

### Stack de Tecnologías

-   **Lenguaje:** TypeScript, JavaScript
-   **Entorno:** Node.js
-   **Framework:** Playwright Test

### Estructura del Proyecto

```
saucedemo-api-e2e/
│
├── .github/
│   └── workflows/
│       └── main.yml
├── tests/
│   ├── karate/
│   └── tests_screenplay/
│       └── login.spec.ts
├── .gitignore
├── package.json
└── README.md
```

### Instalación

1.  **Pre-requisitos:**
    -   Node.js (v14 o superior)
    -   npm (v6 o superior)
2.  **Clonar Repositorio:**
    ```bash
    git clone https://github.com/AlexAgTa/saucedemo-api-e2e
    cd saucedemo-api-e2e
    ```
3.  **Instalar Dependencias:**
    ```bash
    npm install
    ```
    ```bash
    npx playwright install
    ```

### Uso

Para ejecutar las pruebas, utiliza los siguientes comandos:

-   **Ejecutar todas las pruebas:**
    ```bash
    npx playwright test
    ```
-   **Ejecutar un archivo de prueba específico:**
    ```bash
    npx playwright test tests/tests_screenplay/login.spec.ts
    ```
-   **Generar un reporte de pruebas:**
    ```bash
    npx playwright show-report
    ```

### Características

-   **Reportes de Pruebas:** Generación de reportes detallados con el HTML Reporter de Playwright.
-   **Integración Continua:** Flujo de trabajo de CI/CD con GitHub Actions.


### Licencia

Este proyecto está bajo la Licencia MIT.



### Agradecimientos



-   Agradecimientos al equipo de `Swag Labs` por proporcionar el entorno de demostración.

[Volver al inicio](#automatización-de-pruebas-de-api-para-saucedemocom)
