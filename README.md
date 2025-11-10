# Automatización de Pruebas de API para saucedemo.com

### Badges

![Build Status](https://img.shields.io/travis/com/tu-usuario/saucedemo-api-e2e.svg?style=flat-square)
![Coverage](https://img.shields.io/coveralls/github/tu-usuario/saucedemo-api-e2e.svg?style=flat-square)
![License](https://img.shields.io/github/license/tu-usuario/saucedemo-api-e2e.svg?style=flat-square)

### Descripción

Este proyecto se enfoca en la automatización de pruebas de API para el sitio de demostración [saucedemo.com](https://www.saucedemo.com/).

### Tabla de Contenidos

-   [Stack de Tecnologías](#stack-de-tecnologías)
-   [Estructura del Proyecto](#estructura-del-proyecto)
-   [Instalación](#instalación)
-   [Uso](#uso)

### Stack de Tecnologías

-   **Lenguaje:** JavaScript
-   **Entorno:** Node.js
-   **Framework:** Mocha
-   **Afirmaciones:** Chai
-   **Cliente HTTP:** Supertest

### Estructura del Proyecto

```
saucedemo-api-e2e/
│
├── .github/
│   └── workflows/
│       └── main.yml
├── node_modules/
├── test/
│   ├── data/
│   │   ├── expected/
│   │   │   ├── cart.expected.js
│   │   │   ├── inventory.expected.js
│   │   │   └── users.expected.js
│   │   └── request/
│   │       ├── cart.request.js
│   │       └── users.request.js
│   ├── helpers/
│   │   └── credentials.helper.js
│   ├── specs/
│   │   ├── cart.spec.js
│   │   └── login.spec.js
│   └── utils/
│       └── session.util.js
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
    git clone https://github.com/tu-usuario/saucedemo-api-e2e.git
    cd saucedemo-api-e2e
    ```
3.  **Instalar Dependencias:**
    ```bash
    npm install
    ```

### Uso

Para ejecutar las pruebas, utiliza los siguientes comandos:

-   **Ejecutar todas las pruebas:**
    ```bash
    npm test
    ```
-   **Ejecutar un archivo de prueba específico:**
    ```bash
    npm run test:specific -- --spec=test/specs/login.spec.js
    ```
-   **Generar un reporte de pruebas:**
    ```bash
    npm run test:report
    ```

### Variables de Entorno

-   `BASE_URL`: URL base de la API.
-   `USERNAME`: Nombre de usuario para la autenticación.
-   `PASSWORD`: Contraseña para la autenticación.

### Características

-   **Reportes de Pruebas:** Generación de reportes detallados con `mochawesome`.
-   **Integración Continua:** Flujo de trabajo de CI/CD con GitHub Actions.

### Solución de Problemas

**Error: `Cannot find module 'module-name'`**

Asegúrate de haber instalado todas las dependencias con `npm install`.

**Las pruebas fallan por timeouts**

Incrementa el tiempo de espera en la configuración de `Mocha`.

### Built With

-   [Node.js](https://nodejs.org/)
-   [Mocha](https://mochajs.org/)
-   [Chai](https://www.chaijs.com/)
-   [Supertest](https://github.com/visionmedia/supertest)

### Contacto

-   **Nombre:** John Doe
-   **Correo:** johndoe@example.com
-   **GitHub:** [@johndoe](https://github.com/johndoe)

### Licencia

Este proyecto está bajo la Licencia MIT.



### Agradecimientos



-   Agradecimientos al equipo de `Swag Labs` por proporcionar el entorno de demostración.

[Volver al inicio](#automatización-de-pruebas-de-api-para-saucedemocom)
