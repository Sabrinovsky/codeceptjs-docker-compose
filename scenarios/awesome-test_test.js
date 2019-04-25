/// <reference path="../steps.d.ts" />
Feature('codeceptjs');

Scenario('test something', (I) => {
    I.amOnPage('/')
    I.see('Effective End 2 End Testing')
});
