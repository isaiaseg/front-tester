const validations = [
    {
        input: 'text',
        selector: 'input[name="RUT"]',
        errorMsg: 'Error empty RUT',
        value: ' '
    },
    {
        input: 'text',
        selector: 'input[name="RUT"]',
        value: '14.540.270-0'
    },
    {
        input: 'text',
        selector: 'input[name="Código"]',
        errorMsg: 'Error empty phone code',
        value: '  ',
    },
    {
        input: 'text',
        selector: 'input[name="Código"]',
        value: '9'
    },
    {
        input: 'text',
        selector: 'input[name="Teléfono"]',
        errorMsg: 'Error no text allow on phone field & empty phone number',
        value: 'hola',
    },
    {
        input: 'text',
        selector: 'input[name="Teléfono"]',
        value: '98936698'
    },
    {
        input: 'text',
        selector: 'input[name="Correo electrónico"]',
        errorMsg: 'Error empty email',
        value: '  ',
    },
    {
        input: 'text',
        selector: 'input[name="Correo electrónico"]',
        value: 'lu_gama@hotmail.com'
    },
    {
        input: 'text',
        selector: 'input[placeholder="DD/MM/AAAA"]',
        errorMsg: 'Error wrong date format',
        value: '/2/2',
    },
    {
        input: 'text',
        selector: 'input[placeholder="DD/MM/AAAA"]',
        errorMsg: 'Error empty date',
        value: ' ',
    },
    {
        input: 'text',
        selector: 'input[placeholder="DD/MM/AAAA"]',
        value: '06/08/1984'
    },
    {
        input: 'text',
        selector: 'input[title="Nombre"]',
        errorMsg: 'Error no number allow on name field & empty phone name field',
        value: '123',
    },
    {
        input: 'text',
        selector: 'input[title="Nombre"]',
        value: 'LUCILA'
    },
    {
        input: 'text',
        selector: 'input[name="Apellido paterno"]',
        errorMsg: 'Error no number allow on lastname field & empty phone name field',
        value: '123',
    },
    {
        input: 'text',
        selector: 'input[name="Apellido paterno"]',
        value: 'GAMALERO'
    },
    {
        input: 'text',
        selector: 'input[name="Calle"]',
        errorMsg: 'Error empty street',
        value: ' ',
    },
    {
        input: 'text',
        selector: 'input[name="Calle"]',
        value: 'La Gloria 77, 307'
    },
    {
        input: 'select',
        selector: 'div[name="state"]',
        errorMsg: 'Error empty state',
        value: undefined
    },
    {
        input: 'select',
        selector: 'div[name="state"]',
        value: JSON.parse(`{"id":"13:004613   00:METROPOLITANA DE SANTIAGO","name":"METROPOLITANA DE SANTIAGO","position":13}`)
    },
    {
        input: 'select',
        selector: 'div[name="municipalidad"]',
        errorMsg: 'Error empty municipality',
        value: undefined
    },
    {
        input: 'select',
        selector: 'div[name="municipalidad"]',
        value: JSON.parse(`{"id":"131:0045LCO  00:LAS CONDES","idRegion":13,"name":"LAS CONDES","position":131}`)
    },
    {
        input: 'select',
        selector: 'div[name="brand"]',
        errorMsg: 'Error empty brand',
        value: undefined
    },
    {
        input: 'select',
        selector: 'div[name="brand"]',
        value: JSON.parse(`{"id":"4:FIA:FIAT","name":"FIAT"}`)
    },
    {
        input: 'select',
        selector: 'div[name="model"]',
        errorMsg: 'Error empty model',
        value: undefined
    },
    {
        input: 'select',
        selector: 'div[name="model"]',
        value: JSON.parse(`{"id":"3612:60:500","idBrand":"4","name":"500"}`)
    },
    {
        input: 'select',
        selector: 'div[name="year"]',
        errorMsg: 'Error empty year',
        value: undefined
    },
    {
        input: 'select',
        selector: 'div[name="year"]',
        value: "2015"
    }
];

runValidation = async (input, selector, page, replace, errorMsg) => {
    const save = await page.waitForSelector(`button[ng-click="updatePresale('Quote', false)`);
    let error;
    await page.waitForSelector(selector);
    if (input === 'text') {
        await page.click(selector, { clickCount: 3 })
        await page.type(selector, replace, replace);
    } else if (input === 'select') {
        await page.evaluate((selector, replace) => {
            angular.element(document.querySelector(selector)).scope().$select.selected = replace;
        }, selector, replace);
    }
    if (!errorMsg) return;
    await timeout(1000);
    save.click();
    await timeout(500);
    error = await page.evaluate(() => document.querySelector('#loading').style.display)
    if (error === 'none') console.log(errorMsg);
    else console.log(`No error found for this validation on field ${selector}`)
    error = undefined;
}

module.exports = {
    validations,
    runValidation
}