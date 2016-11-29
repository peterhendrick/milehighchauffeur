'use strict';

require('protractor');

let url = process.env.URL_TO_TEST || 'http://localhost:8080';

describe('milehighchauffeur.com', () => {
    it('should display all elements on landing page', () => {
        browser.get(url);
        browser.waitForAngular();

        expect(element(by.id('headerLogo')).isDisplayed()).toBeTruthy();
        expect(element(by.id('workBtn')).isDisplayed()).toBeTruthy();
        expect(element(by.id('ourCarsBtn')).isDisplayed()).toBeTruthy();
        expect(element(by.id('aboutBtn')).isDisplayed()).toBeTruthy();
        expect(element(by.id('contactBtn')).isDisplayed()).toBeTruthy();

        expect(element(by.id('home')).isDisplayed()).toBeTruthy();
        expect(element(by.id('skiPageLink')).isDisplayed()).toBeTruthy();
        expect(element(by.id('corporateTravelLink')).isDisplayed()).toBeTruthy();
        expect(element(by.id('airportLink')).isDisplayed()).toBeTruthy();

        expect(element(by.id('copyright')).isDisplayed()).toBeTruthy();
    });

    it('should navigate to airport link', () => {
        element(by.id('airportLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('airportPagePhoto')).isDisplayed()).toBeTruthy();
    });

    it('should navigate home by clicking the headerLogo', () => {
        element(by.id('headerLogo')).click();
        browser.waitForAngular();
        expect(element(by.id('home')).isDisplayed()).toBeTruthy();
    });

    it('should navigate to corporate travel link', () => {
        element(by.id('corporateTravelLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('corporatePagePhoto')).isDisplayed()).toBeTruthy();
    });

    _goHome();

    it('should navigate to ski page link', () => {
        element(by.id('skiPageLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('skiPagePhoto')).isDisplayed()).toBeTruthy();
    });

    it('should navigate to our services header link', () => {
        element(by.id('workBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('home')).isDisplayed()).toBeTruthy();
    });

    it('should navigate to our cars link', () => {
        element(by.id('ourCarsBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('mercedesPhoto')).isDisplayed()).toBeTruthy();
        expect(element(by.id('chevyPhoto')).isDisplayed()).toBeTruthy();
    });

    it('should navigate to about link', () => {
        element(by.id('aboutBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('aboutTitle')).getText()).toEqual('About Mile High Chauffeur');
    });

    it('should open contact form', () => {
        element(by.id('contactBtn')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeTruthy();
    });

    it('should close contact form', () => {
        element(by.id('contactCloseButton')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeFalsy();
    });

    it('should navigate away from contact form', () => {
        element(by.id('contactBtn')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeTruthy();
        element(by.id('headerLogo')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeFalsy();
    });

    // _goHome()
    function _goHome() {
        it('should go home', () => {
            browser.get(url);
            browser.waitForAngular();
        });
    }
})
