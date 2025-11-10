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
        PRODUCTS_CONTAINER: '[data-test="title"]',
        ADD_TO_CART_SAUCE_LABS_BACKPACK_BUTTON: '[data-test="add-to-cart-sauce-labs-backpack"]'
    };

    static readonly CART_PAGE = {
        SHOPPING_CART_LINK: '[data-test="shopping-cart-link"]',
        CHECKOUT_BUTTON: '[data-test="checkout"]'
    };

    static readonly CHECKOUT_YOUR_INFORMATION_PAGE = {
        FIRST_NAME_FIELD: '[data-test="firstName"]',
        LAST_NAME_FIELD: '[data-test="lastName"]',
        POSTAL_CODE_FIELD: '[data-test="postalCode"]',
        CONTINUE_BUTTON: '[data-test="continue"]'
    };

    static readonly CHECKOUT_OVERVIEW_PAGE = {
        FINISH_BUTTON: '[data-test="finish"]'
    };

    static readonly CHECKOUT_COMPLETE_PAGE = {
        THANK_YOU_HEADER: '[data-test="complete-header"]'
    };

    static readonly NAVIGATION_MENU = {
        HAMBURGER_MENU_BUTTON: '//*[@id="react-burger-menu-btn"]',
        LOGOUT_SIDEBAR_LINK: '/html/body/div/div/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/nav/a[3]'
    };
}