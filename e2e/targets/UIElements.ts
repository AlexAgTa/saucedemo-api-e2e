/**
 * Contains all UI element selectors used in the application
 */
export class Targets {
    static readonly LOGIN_PAGE = {
        USERNAME_FIELD: '[data-test="username"]',
        PASSWORD_FIELD: '[data-test="password"]',
        // LOGIN_BUTTON: 'role=button[name="LOGIN"]',
        LOGIN_BUTTON: '[data-test="login-button"]',
        ERROR_MESSAGE: '[data-test="error"]'
    };

    static readonly PRODUCTS_PAGE = {
        PRODUCTS_CONTAINER: '[data-test="title"]'
    };
}