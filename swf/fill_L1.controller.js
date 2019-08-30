const L1 = [
    {
        input: 'text',
        selector: 'input[name="RUT"]',
        value: '14.540.270-0'
    },
    {
        input: 'text',
        selector: 'input[name="Código"]',
        value: '9'
    },
    {
        input: 'text',
        selector: 'input[name="Teléfono"]',
        value: '98936698'
    },
    {
        input: 'text',
        selector: 'input[name="Correo electrónico"]',
        value: 'lu_gama@hotmail.com'
    },
    {
        input: 'text',
        selector: 'input[placeholder="DD/MM/AAAA"]',
        value: '06/08/1984'
    },
    {
        input: 'text',
        selector: 'input[title="Nombre"]',
        value: 'LUCILA'
    },
    {
        input: 'text',
        selector: 'input[name="Apellido paterno"]',
        value: 'GAMALERO'
    },
    {
        input: 'text',
        selector: 'input[name="Calle"]',
        value: 'La Gloria 77, 307'
    },
    {
        input: 'select',
        selector: 'div[name="state"]',
        value: JSON.parse(`{"id":"13:004613   00:METROPOLITANA DE SANTIAGO","name":"METROPOLITANA DE SANTIAGO","position":13}`)
    },
    {
        input: 'select',
        selector: 'div[name="municipalidad"]',
        value: JSON.parse(`{"id":"131:0045LCO  00:LAS CONDES","idRegion":13,"name":"LAS CONDES","position":131}`)
    },
    {
        input: 'select',
        selector: 'div[name="brand"]',
        value: JSON.parse(`{"id":"4:FIA:FIAT","name":"FIAT"}`)
    },
    {
        input: 'select',
        selector: 'div[name="model"]',
        value: JSON.parse(`{"id":"3612:60:500","idBrand":"4","name":"500"}`)
    },
    {
        input: 'select',
        selector: 'div[name="year"]',
        value: "2015"
    }
];

fill_L1 = async (input, selector, page, replace) => {
    await page.waitForSelector(selector);
    if (input === 'text') {
        await page.type(selector, replace, replace);
    } else if (input === 'select') {
        await page.evaluate((selector, replace) => {
            angular.element(document.querySelector(selector)).scope().$select.selected = replace;
        }, selector, replace);
    }
}

module.exports = {
    L1,
    fill_L1
}