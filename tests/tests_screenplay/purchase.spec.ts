import { test, expect } from '@playwright/test';
import { Actor } from '../../e2e/actors/Actor';
import { OpenApp, Login, PurchaseProduct } from '../../e2e/tasks/Tasks';
import { Ensure } from '../../e2e/questions/Questions';
import { Targets } from '../../e2e/targets/UIElements';
import 'dotenv/config';

test.describe('Purchase Tests', () => {

    test('User should purchase successfully and see Checkout Complete page', async ({ page }) => {
        // Given
        const actor = Actor.named('Alex', page);
        const url = process.env.BASE_URL as string;
        const username = process.env.STANDARD_USER as string;
        const password = process.env.PASSWORD as string;

        // When
        await actor.attemptsTo(
            OpenApp.at(url),
            Login.withCredentials(username, password),
            PurchaseProduct.withDetails(process.env.PURCHASE_FIRST_NAME as string, process.env.PURCHASE_LAST_NAME as string, process.env.PURCHASE_POSTAL_CODE as string)
        );

        // Then
        const isThankYouMessageVisible = await Ensure.that(page).containsText('Thank you for your order!', Targets.CHECKOUT_COMPLETE_PAGE.THANK_YOU_HEADER);
        expect(isThankYouMessageVisible).toBeTruthy();
    });

});