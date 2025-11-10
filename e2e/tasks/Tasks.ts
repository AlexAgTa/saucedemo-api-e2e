import { Performable } from '../interactions/Performable';
import { Enter, Click, ClickByLocator, Navigate } from '../interactions/Interactions';
import { Targets } from '../targets/UIElements';

export class OpenApp implements Performable {
    private readonly url: string;

    private constructor(url: string) {
        this.url = url;
    }

    static at(url: string): OpenApp {
        return new OpenApp(url);
    }

    async performAs(page: any): Promise<void> {
        await Navigate.to(this.url).performAs(page);
    }
}

export class Login implements Performable {
    private readonly username: string;
    private readonly password: string;

    private constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    static withCredentials(username: string, password: string): Login {
        return new Login(username, password);
    }

    async performAs(page: any): Promise<void> {
        await Enter.text(this.username).into(Targets.LOGIN_PAGE.USERNAME_FIELD).performAs(page);
        await Enter.text(this.password).into(Targets.LOGIN_PAGE.PASSWORD_FIELD).performAs(page);
        await ClickByLocator.on(Targets.LOGIN_PAGE.LOGIN_BUTTON).performAs(page);
    }
}


export class PurchaseProduct implements Performable {
    private readonly firstName: string;
    private readonly lastName: string;
    private readonly postalCode: string;

    private constructor(firstName: string, lastName: string, postalCode: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.postalCode = postalCode;
    }

    static withDetails(firstName: string, lastName: string, postalCode: string): PurchaseProduct {
        return new PurchaseProduct(firstName, lastName, postalCode);
    }

    async performAs(page: any): Promise<void> {
        await ClickByLocator.on(Targets.PRODUCTS_PAGE.ADD_TO_CART_SAUCE_LABS_BACKPACK_BUTTON).performAs(page);
        await ClickByLocator.on(Targets.CART_PAGE.SHOPPING_CART_LINK).performAs(page);
        await ClickByLocator.on(Targets.CART_PAGE.CHECKOUT_BUTTON).performAs(page);
        await Enter.text(this.firstName).into(Targets.CHECKOUT_YOUR_INFORMATION_PAGE.FIRST_NAME_FIELD).performAs(page);
        await Enter.text(this.lastName).into(Targets.CHECKOUT_YOUR_INFORMATION_PAGE.LAST_NAME_FIELD).performAs(page);
        await Enter.text(this.postalCode).into(Targets.CHECKOUT_YOUR_INFORMATION_PAGE.POSTAL_CODE_FIELD).performAs(page);
        await ClickByLocator.on(Targets.CHECKOUT_YOUR_INFORMATION_PAGE.CONTINUE_BUTTON).performAs(page);
        await ClickByLocator.on(Targets.CHECKOUT_OVERVIEW_PAGE.FINISH_BUTTON).performAs(page);
    }
}

export class Logout implements Performable {
    static perform(): Logout {
        return new Logout();
    }

    async performAs(page: any): Promise<void> {
        await ClickByLocator.on(Targets.NAVIGATION_MENU.HAMBURGER_MENU_BUTTON).performAs(page);
        await ClickByLocator.on(Targets.NAVIGATION_MENU.LOGOUT_SIDEBAR_LINK).performAs(page);
    }
}