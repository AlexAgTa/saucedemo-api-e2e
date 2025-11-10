import { test, expect } from '@playwright/test';
import { Actor } from '../../e2e/actors/Actor';
import { OpenApp, Login, Logout } from '../../e2e/tasks/Tasks';
import { Ensure } from '../../e2e/questions/Questions';
import { Targets } from '../../e2e/targets/UIElements';
import 'dotenv/config';

test.describe('Login Tests', () => {

    test('should login successfully and see products page', async ({ page }) => {
        // Given
        const actor = Actor.named('Alex', page);
        const url = process.env.BASE_URL as string;
        const username = process.env.STANDARD_USER as string;
        const password = process.env.PASSWORD as string;

        // When
        await actor.attemptsTo(
            OpenApp.at(url),
            Login.withCredentials(username, password)
        );

        // Then
        const isProductsVisible = await Ensure.that(page).containsText('Products', Targets.PRODUCTS_PAGE.PRODUCTS_CONTAINER);
        expect(isProductsVisible).toBeTruthy();
    });

    test('should login locked out user and see error message', async ({ page }) => {
        // Given
        const actor = Actor.named('Alex', page);
        const url = process.env.BASE_URL as string;
        const username = process.env.LOCKED_OUT_USER as string;
        const password = process.env.PASSWORD as string;

        // When
        await actor.attemptsTo(
            OpenApp.at(url),
            Login.withCredentials(username, password)
        );

        // Then
        const isProductsVisible = await Ensure.that(page).containsText('Epic sadface: Sorry, this user has been locked out.', Targets.LOGIN_PAGE.ERROR_MESSAGE);
        expect(isProductsVisible).toBeTruthy();
    });


    test('should not login and see error message', async ({ page }) => {
        // Given
        const actor = Actor.named('Alex', page);
        const url = process.env.BASE_URL as string;
        const username = 'any';
        const password = 'any';

        // When
        await actor.attemptsTo(
            OpenApp.at(url),
            Login.withCredentials(username, password)
        );

        // Then
        const isProductsVisible = await Ensure.that(page).containsText('Epic sadface: Username and password do not match any user in this service', Targets.LOGIN_PAGE.ERROR_MESSAGE);
        expect(isProductsVisible).toBeTruthy();
    });

});