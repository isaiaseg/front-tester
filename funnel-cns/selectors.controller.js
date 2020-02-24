
timeout = ms => { return new Promise(resolve => setTimeout(resolve, ms)) }

const L1 = [ 
    {
        input: 'text',
        selector: '#rutInput',
        value: '253329904'
    },
    {
        input: 'text',
        selector: '#telefonoInput',
        value: '912341234'
    },
    {
        input: 'text',
        selector: '#emailInput',
        value: 'igomez@jooycar.com'
    },
    {
        input: 'text',
        selector: '#diaNacimientoInput',
        value: '10'
    },
    {
        input: 'text',
        selector: '#diaNacimientoInput',
        value: '10'
    },
    {
        input: 'select',
        option: '1',
        selector: '#mesNacimientoSelect',
    },
    {
        input: 'select',
        option: '1991',
        selector: '#anoNacimientoSelect',
    },
    {
        input: 'checkbox',
        selector: '#vehiculoNuevoCheckbox',
    },
    {
        input: 'select',
        option: '45:Chevrolet',
        selector: '#marcaSelect',
    },
    {
        input: 'select',
        option: '1488:AVEO',
        selector: '#modeloSelect',
    },
    {
        input: 'select',
        option: '2019',
        selector: '#anoVehiculoSelect',
    },
    {
        input: 'checkbox',
        selector: '#aceptaCheckbox',
    },
    {
        input: 'button',
        selector: 'button',
    }
]

const Quote = [
    {
        input: 'button',
        selector: 'button'
    },
    {
        input: 'button',
        selector: '.close'
    },
    {
        input: 'button',
        selector: 'button'
    },
    {
        input: 'button',
        selector: '.close'
    }
]

const C1 = [
    {
        input: 'text',
        selector: '#nombreInput',
        value: 'Isaias'
    },
    {
        input: 'text',
        selector: '#apellidoPaternoInput',
        value: 'Gomez'
    },
    {
        input: 'text',
        selector: '#apellidoMaternoInput',
        value: 'Gonzalez'
    },
    {
        input: 'select',
        option: '13:XIII. Metropolitana de Santiago',
        selector: '#regionSelect',
    },
    {
        input: 'select',
        option: '13019:LAS CONDES',
        selector: '#comunaSelect',
    },
    {
        input: 'select',
        option: '13019:LAS CONDES',
        selector: '#comunaSelect',
    },
    {
        input: 'text',
        selector: '#nombreCalleInput',
        value: 'Callao'
    },
    {
        input: 'text',
        selector: '#numeroCalleInput',
        value: '10'
    },
    {
        input: 'button',
        selector: 'button'
    }
]

const C2 = [ 
    {
        input: 'text',
        selector: '#diaEmisionInput',
        value: String(new Date().getDate())
    },
    {
        input: 'select',
        selector: '#mesEmisionSelect',
        option: String(new Date().getMonth()+1)
    },
    {
        input: 'select',
        selector: '#anoEmisionSelect',
        option: String(new Date().getFullYear())
    },
    {
        input: 'text',
        selector: 'input#facturaInput',
        value: '232'
    },
    {
        input: 'button',
        selector: 'button'
    }
]

const C3 = [
    {
        input: 'text',
        selector: '#telefonoMovilInput',
        value: '912341234'
    },
    {
        input: 'checkbox',
        selector: '#aceptaTerminos',
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