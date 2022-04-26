const form = document.querySelector('#searchBar')
const button = document.querySelector('#searchButton')
const results = document.querySelector('.results')

const files = [{
        title: 'Baz Super App',
        content: '​¿que es baz? es la unica superapp en mexico con todo lo que necesitas en un solo lugar, desde música, compras, noticias, hasta el control de tu negocio y tu dinero. que puede hacer el cliente? descargar la app de forma gratuita. enviar y recibir dinero de manera segura y sencilla (incluso por chat y a personas que se encuentren cerca) Hacer compras con un solo click. solicitar créditos y pagar servicios. escuchar música, ver la tele, películas y enterarse de las noticias de actualidad comunicarse en una red social y ¡mucho más! todo en un solo lugar ¿tiene algún costo instalar baz? no tiene costo alguno. es seguro utilizar la súperapp? sí, es totalmente seguro; baz cuenta con todas las medidas de seguridad y nuestra súperapp está respaldada por play Store y app store. ¿cuanto tiempo tarda en que un usuario se dé de alta? Si ya usa la app de banco azteca, el proceso es muy rapido, casi instantaneo. Si es un cliente nuevo, le toma de 3 a 5 minutos maximo ¡por qué la súperapp solicita datos personales? Solicitamos datos personales y domicilio para poder generar una cuenta con la que el cliente podrá realizar todas sus compras y operaciones financieras dentro de baz. Los datos son almacenados con los más altos y estrictos estánderes de seguridad.¿Cómo puedo aprender más de baz súperapp? Continúa aprendiendo sobre esta funcionalidad consultando tu plan de capacitación. ¡Es la súperapp con todo!',
        index: '../../../bazSuperapp.html'
    },
    {
        title: 'Retiro de dinero - SuperApp',
        content: 'selecciona “retiro sin tarjeta” autentícate ya sea con huella, cara o 6 dígitos ingresa monto a retirar desliza baz para confirmar el retiro muestra tu código QR qr en ventanilla para retira Ahora podrás realizar tu retiro de dinero como retiro dinero desde superapp cómo puedo retirar dinero, retiros de dinero superapp, como puedo retirar dinero desde superapp como puedo retirar dinero en superapp',
        index: '../../../retiroSuperapp.html'
    },
    {
        title: 'Cancelación Superapp',
        content: 'como hago una cancelacion, como cancelo, como hago una cancelación, como cancelo en superapp, como hago cancelaciones en superapp, como se hace una cancelacion en superapp, cancelacion, cancelación, ​programa red única capacitación. innovación. banco azteca.veamos las consultas y servicios que podrás realizar con baz súperappantes de comenzar recuerda: un cliente que no tiene cuenta en banco azteca, al abrir su cuenta en súperapp va a tener una cuenta nivel 2para poder otorgarle todos los servicios a continuación, primero debe de hacerse un mantenimiento de biométricos en sucursal.mismo caso aplica para cliente que abre su cuenta súperapp previamente teniendo una cuenta en banco azteca de nivel 2. un cliente que es nivel 4 en banco azteca y abre su cuenta súperapp, no necesita el mantenimiento de biométricos para que ya se le puedan ofrecer los siguientes servicios.para poder ofrecer consultas desde sucursal a nuestros clientes súperapp debes ingresar desde escritorio a la ruta ya conocida:front captación ->consultaselige el tipo de consulta busca al cliente por: • número de cuenta • nombre • cliente único • huella • clave nip ¿qué consultas podemos ofrecer?estado de cuentabusca al cliente por: • número de cuenta • nombre • cliente únicoautentifica al cliente a través de huellaentrega la información 4 requerida al clientepara poder ofrecer servicios desde sucursal a nuestros clientes súperapp debes ingresar desde escritorio a la ruta ya conocida:​servicios de mantenimiento y actualización:​solicitud y estatus de mantenimiento de biométricossolicitud y estatus de actualización de expediente​envíostraspaso entre cuentas baztransferencias spei/tefservicios baz en punto de ventaincremento transaccional de cuentas digitalesupgrade de cuenta n2 a n4envíosmantenimiento de biométricosactualización de expedienteupgrade de cuenta nivel 2 a nivel 4ingresa los datos y documentos que solicita el sistema para realizar el proceso de up grade a cuenta nivel 4folio*: se obtiene una vez que se inicia un proceso y se utiliza para validar el estatus del procesootros servicios baz en punto de venta son:pago a beneficiarios:ngresa a la ruta conocida front captación --> beneficiariosselecciona criterio de búsquedacancelación de cuenta desde ventanillaretiros o depósitos desde ventanillaahora que conoces las consultas y servicios que podemos realizar, practícalos y se un experto en baz súperapp.',
        index: '../../../cancelacionSuperapp.html'
    }
]

const filter = () => {
    results.innerHTML = '';
    const string = form.value.toLowerCase()

    for (let file of files) {
        let content = file.content.toLowerCase()
        if (content.indexOf(string) !== -1) {
            results.innerHTML += `
            <a class="title" href="${file.index}">${file.title}</a>
            <br>
            <p class="content">${file.content}</p>
            `
        }
    }
    if (results.innerHTML === '') {
        results.innerHTML = `<li>No se encontraron resultados</li>`
    }

    if (form.value === '') {
        results.innerHTML = ''
    }

}

button.addEventListener('click', filter)
form.addEventListener('keyup', filter)

filter()