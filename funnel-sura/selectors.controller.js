
timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

const L1 = [ 
    // {
    //     input: 'checkbox',
    //     selector: '#mat-checkbox-1-input',
    // },
    {
        input: 'select',
        option: 8,
        selector: '#mat-select-0',
    },
    {
        input: 'select',
        option: 5,
        selector: '#mat-select-1',
    },
    {
        input: 'select',
        option: 0,
        selector: '#mat-select-2',
    },
    {
        input: 'radio',
        option: 0,
        selector: 'mat-radio-button input',
    },
    {
        input: 'button',
        option: 0,
        selector: '.submit-button',
    }
]

const Quote = [
    {
        input: 'button',
        selector: '.contratar'
    }
]

const C1 = [
    {
        input: 'text',
        selector: '#mat-input-5',
        value: '23423424'
    },
    {
        input: 'text',
        selector: '#mat-input-6',
        value: 'SGHA78'
    },
    {
        input: 'text',
        selector: '#mat-input-7',
        value: 'NEGRO'
    },
    {
        input: 'text',
        selector: '#mat-input-12',
        value: '999999999'
    },
    {
        input: 'text',
        selector: '#mat-input-11',
        value: '10-01-1991'
    },
    {
        input: 'radio',
        selector: '#mat-radio-5 input'
    },
    {
        input: 'text',
        selector: '#mat-input-14',
        value: 'isaiasegomez@gmail.com'
    },
    {
        input: 'text',
        selector: '#mat-input-15',
        value: 'Camino el Alba'
    },
    {
        input: 'select',
        option: 4,
        selector: '#mat-select-3',
    },
    {
        input: 'select',
        option: 1,
        selector: '#mat-select-4',
    },
    {
        input: 'radio',
        selector: '#mat-radio-8 input'
    },
    {
        input: 'radio',
        selector: '#mat-radio-11 input'
    },
    {
        input: 'button',
        selector: '.siguiente'
    }
]

const C2 = [
    {
        input: 'checkbox',
        selector: '.agreement',
    },
    {
        input: 'button',
        selector: '.siguiente'
    }
]

const C3 = [
    {
        input: 'checkbox',
        selector: '.agreement:nth-child(2)',
    },
    {
        input: 'checkbox',
        selector: '.agreement:nth-child(4)',
    },
    {
        input: 'button',
        selector: 'button'
    }
]

module.exports = {
    L1,
    Quote,
    C1,
    C2,
    C3,
}