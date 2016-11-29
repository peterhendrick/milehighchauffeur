'use strict';

require('protractor');

let url = process.env.URL_TO_TEST || 'http://localhost:8080';

describe('milehighchauffeur.com', () => {
    it('should display all elements on landing page', (done) => {
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
        done();
    });

    it('should navigate to airport link', (done) => {
        element(by.id('airportLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('airportPagePhoto')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should navigate home by clicking the headerLogo', (done) => {
        element(by.id('headerLogo')).click();
        browser.waitForAngular();
        expect(element(by.id('home')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should navigate to corporate travel link', (done) => {
        element(by.id('corporateTravelLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('corporatePagePhoto')).isDisplayed()).toBeTruthy();
        done();
    });

    _goHome();

    it('should navigate to ski page link', (done) => {
        element(by.id('skiPageLink')).click();
        browser.waitForAngular();
        browser.sleep(800);
        expect(element(by.id('skiPagePhoto')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should navigate to our services header link', (done) => {
        element(by.id('workBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('home')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should navigate to our cars link', (done) => {
        element(by.id('ourCarsBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('mercedesPhoto')).isDisplayed()).toBeTruthy();
        expect(element(by.id('chevyPhoto')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should navigate to about link', (done) => {
        element(by.id('aboutBtn')).click();
        browser.waitForAngular();
        expect(element(by.id('aboutTitle')).getText()).toEqual('About Mile High Chauffeur');
        done();
    });

    it('should open contact form', (done) => {
        element(by.id('contactBtn')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeTruthy();
        done();
    });

    it('should close contact form', (done) => {
        element(by.id('contactCloseButton')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeFalsy();
        done();
    });

    it('should navigate away from contact form', (done) => {
        element(by.id('contactBtn')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeTruthy();
        element(by.id('headerLogo')).click();
        browser.waitForAngular();
        browser.sleep(500);
        expect(element(by.id('submitButton')).isDisplayed()).toBeFalsy();
        done();
    });

    // _goHome()
    function _goHome() {
        it('should go home', (done) => {
            browser.get(url);
            browser.waitForAngular();
            done();
        });
    }
})
