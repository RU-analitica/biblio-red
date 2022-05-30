const form = document.querySelector('#searchBar')
const button = document.querySelector('#searchButton')
const results = document.querySelector('.results')

const files = [
    {
        title: 'Baz Super App',
        content: '​¿que es baz? es la unica superapp en mexico con todo lo que necesitas en un solo lugar, desde música, compras, noticias, hasta el control de tu negocio y tu dinero. que puede hacer el cliente? descargar la app de forma gratuita. enviar y recibir dinero de manera segura y sencilla (incluso por chat y a personas que se encuentren cerca) Hacer compras con un solo click. solicitar créditos y pagar servicios. escuchar música, ver la tele, películas y enterarse de las noticias de actualidad comunicarse en una red social y ¡mucho más! todo en un solo lugar ¿tiene algún costo instalar baz? no tiene costo alguno. es seguro utilizar la súperapp? sí, es totalmente seguro; baz cuenta con todas las medidas de seguridad y nuestra súperapp está respaldada por play Store y app store. ¿cuanto tiempo tarda en que un usuario se dé de alta? Si ya usa la app de banco azteca, el proceso es muy rapido, casi instantaneo. Si es un cliente nuevo, le toma de 3 a 5 minutos maximo ¡por qué la súperapp solicita datos personales? Solicitamos datos personales y domicilio para poder generar una cuenta con la que el cliente podrá realizar todas sus compras y operaciones financieras dentro de baz. Los datos son almacenados con los más altos y estrictos estánderes de seguridad.¿Cómo puedo aprender más de baz súperapp? Continúa aprendiendo sobre esta funcionalidad consultando tu plan de capacitación. ¡Es la súperapp con todo!',
        index: '../../../pages/bazsuperapp/bazSuperapp.html'
    },
    {
        title: 'Retiro de dinero - SuperApp',
        content: 'selecciona “retiro sin tarjeta” autentícate ya sea con huella, cara o 6 dígitos ingresa monto a retirar desliza baz para confirmar el retiro muestra tu código QR qr en ventanilla para retira Ahora podrás realizar tu retiro de dinero como retiro dinero desde superapp cómo puedo retirar dinero, retiros de dinero superapp, como puedo retirar dinero desde superapp como puedo retirar dinero en superapp',
        index: '../../../pages/bazsuperapp/retiroSuperapp.html'
    },
    {
        title: 'Cancelación - Superapp',
        content: 'programa red única capacitación. innovación. banco azteca.veamos las consultas y servicios que podrás realizar con baz súperappantes de comenzar recuerda: un cliente que no tiene cuenta en banco azteca, al abrir su cuenta en súperapp va a tener una cuenta nivel 2para poder otorgarle todos los servicios a continuación, primero debe de hacerse un mantenimiento de biométricos en sucursal.mismo caso aplica para cliente que abre su cuenta súperapp previamente teniendo una cuenta en banco azteca de nivel 2. un cliente que es nivel 4 en banco azteca y abre su cuenta súperapp, no necesita el mantenimiento de biométricos para que ya se le puedan ofrecer los siguientes servicios.para poder ofrecer consultas desde sucursal a nuestros clientes súperapp debes ingresar desde escritorio a la ruta ya conocida:front captación ->consultaselige el tipo de consulta busca al cliente por: • número de cuenta • nombre • cliente único • huella • clave nip ¿qué consultas podemos ofrecer?estado de cuentabusca al cliente por: • número de cuenta • nombre • cliente únicoautentifica al cliente a través de huellaentrega la información 4 requerida al clientepara poder ofrecer servicios desde sucursal a nuestros clientes súperapp debes ingresar desde escritorio a la ruta ya conocida:​servicios de mantenimiento y actualización:​solicitud y estatus de mantenimiento de biométricossolicitud y estatus de actualización de expediente​envíostraspaso entre cuentas baztransferencias spei/tefservicios baz en punto de ventaincremento transaccional de cuentas digitalesupgrade de cuenta n2 a n4envíosmantenimiento de biométricosactualización de expedienteupgrade de cuenta nivel 2 a nivel 4ingresa los datos y documentos que solicita el sistema para realizar el proceso de up grade a cuenta nivel 4folio*: se obtiene una vez que se inicia un proceso y se utiliza para validar el estatus del procesootros servicios baz en punto de venta son:pago a beneficiarios:ngresa a la ruta conocida front captación --> beneficiariosselecciona criterio de búsquedacancelación de cuenta desde ventanillaretiros o depósitos desde ventanillaahora que conoces las consultas y servicios que podemos realizar, practícalos y se un experto en baz súperapp. como hago una cancelacion, como cancelo, como hago una cancelación, como cancelo en superapp, como hago cancelaciones en superapp, como se hace una cancelacion en superapp, cancelacion, cancelación.',
        index: '../../../pages/bazsuperapp/cancelacionSuperapp.html'
    },
    {
        title: 'Red Social - SuperApp',
        content: '¿que son las funcionalidades de chat y red social?son las secciones de baz súperapp en las que damos al cliente herramientas para mantenerse en contacto con sus familiares y amigos.¿qué puede hacer el cliente?podrá crear su perfil en la red social.publicar fotos y subir videos para compartir con sus contactoschatear como lo hace en otras redes, pero ¡con la oportunidad única de realizar y recibir pagos por esta vía!¿es seguro hacer enviar o recibir dinero a través del chat? tus transacciones son 100% seguras.¿puedo crear conversaciones grupales? sí.¿puedo realizar funciones como agregar contactos, bloquear personas o no aceptar conversaciones de otros? sí, puedes realizar todas esas acciones."',
        index: '../../../pages/bazsuperapp/redsocial.html'
    },
    {
        title: 'Pagos - SuperApp',
        content: '¿que es la funcionalidad pagos?es la sección de baz súperapp en la que el cliente podrá realizar pagos seguros, fáciles y más convenientes que el efectivo.¿qué puede hacer el cliente?comprar tiempo aire y pagar servicios.pagar el abono a su crédito con banco azteca o elektra.hacer pagos a personas con qr, traspaso o transferencia.enviar y recibir dinero a una cuenta, con número celular o contacto.comprar tarjetas de pre-pago.pagar a otras personas o comercios que se encuentran cerca de él/ella.si tu cliente es de comercio, podrá: recibir pagos mediante transferencia o código qr.  recibir notificaciones de voz cuando reciba el pago de su producto o servicio, lo que le evitará distraer sus manos de las labores que esté realizando¿cuánto tiempo tarda en reflejarse un pago de servicio? usualmente se refleja de manera inmediata. en ocasiones puede tardar un día dependiendo del proveedor o día en que se realiza el pago.¿cuánto tiempo tarda en reflejarse un abono a mi crédito de banco azteca o elektra? se refleja de manera inmediata.¿es seguro pagar con baz? baz cuenta con todas las medidas de seguridad y sus transacciones son 100% seguras: cada operación siempre le pedirá usar su contraseña o huella digital.¿puedo pagar recibos vencidos de servicios (agua, luz, teléfono)? no¿cómo obtengo el comprobante de pago de servicio? llega una notificación directamente a la súperapp.',
        index: '../../../pages/bazsuperapp/pagosSuperapp.html'
    },
    {
        title: 'Ofertas - SuperApp',
        content: '¿que es la funcionalidad ofertas?es la sección de baz súperapp en la que el cliente podrá comprar productos con una oferta diferenciada a crédito.¿qué puede hacer el cliente?ver el catálogo de productos, con descripciones, características y fotos.comprar celulares, computador as, tablets, pantallas y motos.comprar a crédito eligiendo el plazo que más le convenga.¿todo el mundo puede hacer compras en la funcionalidad ofertas? solo las personas que tienen un crédito activo podrán hacer compras en la funcionalidad ofertas. los que no lo tienen, no les aparecerá nada.¿cuál es el costo de envío de un producto? por el momento todos los productos que se adquieren a través de baz tienen envío gratis. ¡aprovecha ahora este beneficio!¿cuáles son las formas de entrega? cualquier compra que hagas a través de baz llegará hasta la puerta de tu casa u oficina.¿cómo puedo dar seguimiento a mi pedido? una vez realizada tu compra, recibirás notificaciones vía push, correo electrónico y en baz desde el momento en que se envía hasta que es entregado.¿cómo cancelo una compra? solo ponte en contacto con baz al 55 6377 4447, desde que confirmas tu compra, hasta 5 días naturales después de la entrega del pedido.¿cuánto me cuesta cancelar y devolver un envío? las cancelaciones y devoluciones son gratuitas en todos las compras que realices mediante baz; solo ponte en contacto al 55 6377 4447 dentro de los primeros 5 días naturales después de la entrega del pedido',
        index: '../../../pages/bazsuperapp/ofertasSuperapp.html'
    },
    {
        title: 'Noticias - SuperApp',
        content: '​¿que es la funcionalidad noticias?es la sección de baz súperapp en la que el cliente podrá satisfacer su necesidad de sentirse informado.¿qué puede hacer el cliente?recibir las noticias más relevantes de méxico y el mundo.contará con una sección que le mostrará las noticias que por su temporalidad, son muy relevantes (ejemplo: las olimpiadas).personalizar las secciones de su interés.compartir noticias con sus contactos en redes sociales.¿qué información tendré en noticias? baz te dará las noticias más importantes al momento, para que estés informado de lo más relevante y con lo que a ti te interesa.¿tiene costo el acceso a noticias? no tiene costo.',
        index: '../../../pages/bazsuperapp/noticiasSuperapp.html'
    },
    {
        title: 'Negocio - SuperApp',
        content: '​ejecutan: cajeros, asesor de comercio, asesor de crédito y servicios financieros, asesor de servicios financieros, líder financiero, líder de comercio, líder de operaciones y gerente líder punto de venta¿cuánto tiempo lleva el proceso de dar de alta la tienda virtual? entre 3 a 5 minutos, dependiendo de la cantidad de información que el cliente quiera capturar.¿cuántos negocios puede dar de alta un cliente? hasta tres negocios.¿hay un costo para el negocio por usar la súper caja? no tiene ningún costo.¿hay diferencia entre la cuenta personal de baz y la cuenta de negocio? no hay ninguna diferencia, es la misma.¿cuánto tiempo tarda en mostrarse el negocio una vez que se da de alta? se muestra de inmediato al terminar el proceso.',
        index: '../../../pages/bazsuperapp/negocioSuperapp.html'
    },
    {
        title: 'Música, Películas y TV - SuperApp',
        content: '¿que encuentro en entretenimiento?son las funcionalidades de baz súperapp donde tu cliente disfrutará de tv en vivo, renta de películas y escuchar música en listas de reproducción, así como podcasts.¿qué puede hacer 2 el cliente?escuchar la música de su elección. escoger listas de reproducción. disfrutar de podcasts gratuitos.con películas, podrá:ver películas sin costo. contar con un catálogo de películas para rentar en el momento que desee.con tv en vivo, podrá:ver la programación de azteca 1, azteca 7, a más y adn40. revisar la programación a 5 días de cada uno de los canales. activar alarmas que le permitan recordar que su programa favorito está por comenzar.¿tiene algún costo ver tv en vivo? no tiene costo alguno¿utiliza mis datos al ver tv en vivo? sí, utiliza aproximadamente 65 mb por cada 5 minutos¿consume datos el rentar películas? sí, a tu cliente le aparecerá una notificación avisándole que el ver la película le consumirá datos. recomiéndale que se conecte a una red wi-fi.¿cuánto tiempo tiene mi cliente para ver una película, una vez que la ha rentado? tiene 24 horas para ver la película a partir de que la rentó.¿puedo adelantar o regresar una canción que se está tocando? por el momento, esa función no está habilitada.¿puedo hacer mis propias playlists?por el momento solo están disponibles los playlists que están en música, no se pueden personalizar listas en este momento.¿por qué no encuentro a mi artista o canción?nuestro catálogo se encuentra en constante crecimiento para mejorar tu experiencia y estaremos adicionando artistas y canciones. entretenimiento, musica, peliculas, tv, television, donde veo pelicuas, como veo peliculas, donde escucho musica, mi musica',
        index: '../../../pages/bazsuperapp/mptvSuperapp.html'
    },
    {
        title: 'Juego de gemas - Promotor',
        content: '​juego de gemas promotor accede desde al módulo de juego de gemas.¡gana grandes premios de la boveda promotores son las figuras responsables de darle ritmo al juego; con su interacción, lograrán que los activadores e impulsores tengan en sus metas de actividad diaria cumplir con su rol. participan: líder regional y líder territorial.marca el ritmo de los activadores de tu territorio o región.gana gemas si los activadores de tu región o territorio alcanzan la meta semanal que aparece en la pantalla del juego. son metas distintas para cada región o territorio.canjea por grandes premios los días juevesentra diario a ver los premios, traza la ruta para ganar y motiva a los activadores.si tu región o territorio es la que más activó, ganarás increíbles premios por etapa, ¡espera más información!.tus gemas no caducan durante la vigencia del juego ¡para que acumules más!¿estás listo para divertirte? nosotros también, así que, en sus marcas, ¡promueve, impulsa y activa! boveda podrás entrar a ella todos los días.canjeos recuerda, sólo los días jueves puedes entrar a canjear mis gemas .',
        index: '../../../pages/bazsuperapp/gemasPromotor.html'
    },
    {
        title: 'Juego de gemas - Impulsor',
        content: 'juego de gemas impulsor Accede desde al módulo de juego de gemas IMPULSORES Son los principales motivadores de los Activadores. Su función consiste en mandarles Clientes que no hayan descargado baz súperapp. Participan: Gerente Líder Punto de Venta, Líder Financiero, Líder Comercial, Líder Operativo, Cajero Líder, Cajero Supervisor, Cajero Senior, Cajero Universal, Cajero de Tiempo Parcial y Asesor de Comercial.Motiva a tu equipo a activar baz súperapp en el celular de los Clientes.baz súperapp preguntará si alguien ayudó a nuestro Cliente.Verifica que el Activador proporcione su número de Colaborador y nuestro Cliente lo ingrese correctamente para que la activación cuenteEntre más Clientes refieras, más oportunidades tendrás de ganar gemas y canjearlas por increíbles premios los jueves.Gana 5 gemas (o 3 si eres tiempo parcial) a la semana si tu Punto de Venta logra la meta que aparece en la pantalla del juego. Cada Punto de Venta tiene una meta distinta.¡Recuerda! Si tu Punto de Venta es el que más activó, ganarás un increíble premio por etapa, ¡espera más información!BÓVEDA Podrás entrar a ella todos los días.CANJEOS Recuerda, sólo los días jueves puedes entrar a canjear mis gemas .',
        index: '../../../pages/bazsuperapp/gemasImpulsor.html'
    },
    {
        title: 'Juego de gemas - Activador',
        content: '​juego de gemas activador accede desde al módulo de juego de gemas.activadores son los únicos encargados de activar baz súperapp en los celulares de los clientes. participan: asesor de crédito y asesor de servicios financieros.ten claro tu número de colaborador red única.descarga la baz súperapp en el celular de tus clientes, llena el formulario con sus datos y déjala lista para usarla.baz súperapp preguntará si alguien ayudó a nuestro cliente.dale tu número y en ese instante, ¡la activación te cuenta a ti!por cada 5 personas que actives diario, ganarás una gema, ¡en múltiplos de 5!si logras al menos 25 activaciones en la semana, sin importar los días en que las hiciste, te completarán las gemas que te falten en múltiplos de 5, ¡tus activaciones no se pierden!además, todas tus activaciones cuentan para el premio por etapa y la liga de oro, ¡espera más información!bóveda podrás entrar a ella todos los días.canjeos recuerda, sólo los días jueves puedes entrar a canjear.¡vamos por todo, todos! activa y, gana con baz súperapp mis gemas .',
        index: '../../../pages/bazsuperapp/gemasActivador.html'
    },
    {
        title: 'Hotspot - SuperApp',
        content: '​hotspot superapp ¿quée es la funcionalidad hotspot? es la sección de baz súperapp que ayuda a tu cliente a mantenerse siempre conectado a través de la red de totalplay¿qué puede hacer el cliente?conectarse a los hotspots de la red de totalplay.recibir notificaciones para usar la red de totalplay.durante el período de lanzamiento, podrá usar los hotspots de la red de totalplay gratis durante 60 días.¿es seguro hacer transacciones con baz en los hotspots?sí es seguro ya que tus transacciones están protegidas por la tecnología de baz y el uso de tus contraseñas o huellas digitales.¿cómo puedo recuperar mi código de navegación gratuita por 60 días? acude a un punto de venta de totalplay, donde un asesor te podrá orientar al respecto.¿cómo uso esta funcionalidad en baz súperapp?continúa aprendiendo sobre esta funcionalidad consultando tu plan de capacitación.',
        index: '../../../pages/bazsuperapp/hotspotSuperapp.html'
    },
    {
        title: 'Recarga tu tarjeta - SuperApp',
        content: 'flujo recarga tu tarjeta seleccionar “recarga tu tarjeta” autentícate ya sea con huella, cara o 6 dígitosingresa monto que quieres recargar y presiona “continuar”agrega la tarjeta a la cual se realizará el cargoingresa los datos de la tarjeta y presiona “continuar”escribe tus datos personales relacionados a la tarjetaescribe el domicilio relacionado a tu tarjetafinaliza con la selección de la tarjeta recién cargada y presiona “continuar”¡listo! tu tarjeta ha sido recargada exitosamente',
        index: '../../../pages/bazsuperapp/recargaSuperapp.html'
    },
    {
        title: 'Pagos con QR - Superapp',
        content: 'flujo pagos con código qr selecciona acciones rápidas de “dinero”selecciona pagar con qrescanea el qr en el comercioautentícate ya sea con huella, cara o 6 dígitosingresa monto a pagar y presiona “continuar”confirma los datos y desliza baz para pagar¡listo! tu pago con código qr ha sido realizado exitosamente.',
        index: '../../../pages/bazsuperapp/pagosQRSuperapp.html'
    },
    {
        title: 'Cobros con QR - Superapp',
        content: '​flujo cobros con código qr selecciona acciones rápidas de “dinero”selecciona cobrar con qrselecciona “editar monto”ingresa monto a cobrar y presiona continuarenseña tu qr para ser escaneado y cobrar',
        index: '../../../pages/bazsuperapp/cobrosQRSuperapp.html'
    },
    {
        title: 'Donaciones - Superapp',
        content: '¿que es la funcionalidad donar? es la sección de baz súperapp en la que el cliente cuenta con una opción sencilla para realizar aportaciones para mejorar su entornohacer donativos desde 15 pesos.obtener un recibo deducible de impuestos.seleccionar la causa que desea apoyar: educación, medio ambiente y comunidad.¿se puede programar una donación recurrente?por ahora no es posible programarlo de forma automática, pero el usuario puede donar cuantas veces lo desee.¿cómo se puede obtener el recibo deducible de impuestos? puede solicitarlo a la línea baz 556377 4447.¿cuál es el destino de los donativos? los recursos se destinan en su totalidad a la causa que elegiste apoyar; tus aportaciones se suman a las de otras empresas y organizaciones civiles.¿cómo uso esta funcionalidad en baz súperapp?continúa aprendiendo sobre esta funcionalidad consultando tu plan de capacitación.',
        index: '../../../pages/bazsuperapp/donacionesSuperapp.html'
    },
    {
        title: 'Dinero - Superapp',
        content: '¿que es la funcionalidad dinero? es la sección de baz súperapp en la que el cliente maneja su dinero en forma digital, para evitar el riesgo que implica el manejo del efectivo.¿qué puede hacer el cliente? eliminar riesgos por manejo de efectivoretirar dinero en ventanillas de banco aztecaenviar y recibir dinero en forma digital y de manera segura, sin preocuparse por recibir dinero falso.tener el control de sus gastos.recibir en su domicilio una tarjeta de débito vaz sin pre-requisito de saldorevisar su saldo y movimientosutilizar una tarjeta digital de débito para el manejo de su cuentasi el cliente es sujeto a crédito tendrá acceso a una tarjeta de crédito digitallas dos tarjetas digitales (credito y debito) usan la tecnología de codigo cvv dinámico, lo que hace que sus operaciones sean totalmente seguras.¿hay que mantener un saldo mínimo en la cuenta de débito? no.¿es seguro usar baz para transacciones de dinero? baz cuenta con todas las medidas de seguridad y nuestra súperapp está respaldada por play store y app store. las transacciones siempre piden el uso de contraseña o huella digital o el código cvv de las tarjetas: es 100% segura.¿mi cliente puede enviar dinero desde baz a otros bancos? sí.¿cuándo puede mi cliente cambiar a sus beneficiarios? en cualquier momento.¿qué es el código cvv en la tarjeta digital y por qué cambia? el código cvv es una medida de seguridad que se requiere para hacer compras y prevenir fraudes; el código cvv de la tarjeta digital cambia cada tres minutos, lo cual representa mayor seguridad para tu cliente.¿la tarjeta de crédito digital está activa todo el tempo? la tarjeta de crédito digital estará activa cuando el cliente así lo decida; puede desactivarla en cualquier momento para mayor control y seguridad.¿cómo uso esta funcionalidad en baz súperapp?continúa aprendiendo sobre esta funcionalidad consultando tu plan de capacitación.',
        index: '../../../pages/bazsuperapp/dineroSuperapp.html'
    },
    {
        title: 'Estado de cuenta - Superapp',
        content: '​flujo consulta de estado de cuenta ingresa a sección “dinero” en súperappautentícate ya sea con huella, cara o 6 dígitosselecciona las opciones de tu tarjetaseleccionar la opción de estados de cuentaseleccionar el mes que quiera consultarescribir últimos 4 dígitos de tu número de cuenta¡listo! ahora podrás visualizar y consultar el estado de cuenta.',
        index: '../../../pages/bazsuperapp/estadoCuentaSuperapp.html'
    },
    {
        title: 'Preguntas Frecuentes - Excelencia en Red',
        content: 'version actualizada excelencia en red encuentra la respuesta a tus dudas sobre excelencia en red, que es excelencia en red? es el programa de reconocimiento para todos los colaboradores del punto de venta de red unica que premia el mejor desempeño, quienes participan en excelencia en red? quienes participan en el programa de excelencia en red?  todos los colaboradores del punto de venta que hayan permanecido en el mismo puesto durante todo el a de evaluacion (trimestre=13 semanas). beneficios economicos de excelencia en red, momentos de reconocimiento y dias de descanso adicionales, entre otros beneficios emocionales. que beneficios tengo con excelencia en red? beneficios excelencia en red? como puedo conseguir beneficios excelencia en red? - ganas si logras, al menos, el 110% de cumplimiento en cada indicador de tu puesto y si te encuentras dentro del mejor 10% del ranking de tu territorio. todos los ganadores reciben los mismos beneficios? los beneficios se dan de acuerdo con tu nivel de reconocimiento: el mejor 2% sobresaliente entre el 3% y 5% mejor destacado entre el 6% y el 10% mejor   para el incentivo econdmico adicional al nivel de reconocimiento, se considera tu puesto y antiguedad en el grupo. las evaluaciones se llevan a cabo de manera trimestral (cada 13 semanas) cuanto dura el periodo de evaluacion? Cuanto dura excelencia en red? tiempo excelencia en red? cuando me dan mis beneficios de excelencia en red? cuando obtengo excelencia en red? fecha excelencia en red? despues de la publicacion oficial de los resultados, al cierre del trimestre. esto sucede al terminar el periodo de evaluacién. posicion en el ranking? en donde puedo consultar mi posicion en el rankin? Como veo mi posicion en el ranking? mi ranking, mi progreso excelencia en red? mi progreso en excelencia en red portal sie en el menu de excelencia en red portal red unica: en el modulo de excelencia en red. que pasa en caso de empate en el ranking? empate excelencia en red la primera variable de productividad de tu puesto es el criterio de desempate. hay algun otro criterio para entrar en el ranking? ademas de cumplir con todas las bases del programa, es indispensable no contar con actas administrativas ni honesteles comprobados para mantener tu posicién en el ranking. para el caso de los puestos de liderazgo, se debe considerar un minimo de ipn de clientes. que ocurre cuando tengo vacaciones? que pasa cuando tengo vacaciones? que pasa si tuve una incapacidad? incapacidad? para poder participar en el trimestre de evaluacion, se consideran hasta 14 dias de vacaciones o incapacidades en el trimestre, debidamente registradas en el sistema de capital humano. los resultados esperados semanales se calculan sobre la base de dias activos de cada colaborador. ) en caso de resultar ganador, cuando podre obtener mis beneficios, cuando me dan mis beneficios, cuando me dan mis premios, si me encuentro de incapacidad? se te otorgaran tus beneficios una vez que regreses de tu periodo de incapacidad. mis beneficios excelencia en red, estuve de incapacidad ',
        index: '../../../pages/excelenciaenred/faqExcelencia.html'
    },
    {
        title: '¿Qué puedo ganar? - Excelencia en Red',
        content: 'Que es excelencia en red? Programa que reconoce y premia a los mejores por sus resultados y aquienes viven con pasion por nuestra cultura, que puedo ganar? que puedo ganar en excelencia en red? Beneficios economicos, momentos de reconocimiento, dias de descanso adicionales entre otros beneficios emocionales',
        index: '../../../pages/excelenciaenred/beneficiosExcelencia.html'
    },
    {
        title: '¿Cómo puedo ganar? - Excelencia en Red',
        content: 'Ganas si eres uno de los mejores de tu puesto en el territorio, excelencia en red premia hasta el mejor 10% por puesto de cada territorio, es decir, casi tres mil colaboradores a nivel nacional por trimestre, para participar y obtener un reconocimiento es indispensable haber superado los resultados al menos al 110% de cada indicador. El incentivo unicamente se paga cuando el colaborador esta activo en el mismo puesto durante todo el periodo de medicion. aquellos colaboradores con honesteles comprobados o actas administrativas en el periodo de la medicion quedan fuera de este programa. en caso de empate el lugar del ranking de la primera variable de productividad del puesto es el criterio de decision, como gano en excelencia en red , como gano en excelencia en red? como puedo ganar en excelencia en red? ',
        index: '../../../pages/excelenciaenred/ganarExcelencia.html'
    },
    {
        title: '¿Dónde consulto mi posición en el ranking? - Excelencia en Red',
        content: 'Ingresa al ranking en 3 pasos, ingresa al portal RU, da clic en excelencia en red, consulta tu posición. como veo mi posicion en el ranking , mi lugar en el ranking, mi progreso excelencia posicion en el ranking?',
        index: '../../../pages/excelenciaenred/rankingExcelencia.html'
    },
    {
        title: 'Indicadores de excelencia - CAJERO',
        content: 'Cajeros, se considera la transaccionalidad esperada (ATM + RAP* + Ventanilla) de la semana de acuerdo con el tipo de punto de venta en el que estes. Recepto de abonos y pagos. Indicadores considerados para cada posicion: cajero universal cajero universal de tiempo completo cajero universal de tiempo parcial cumplimiento de transaccionalidad esperada de acuerdo al tipo de punto de venta y puesto cumplimiento de operacion impecable un maximo de eventos por faltantes cheques mal operados servicios de cajen mal operados porcentaje de transacciones digitales del punto de venta por arriba de un minimo, cuales son mis indicadores? cuales son los indicadores de excelencia de un cajero? indicadores excelencia en red cajero, indicadores de excelencia en red del cajero indicadores de cajero en excelencia en red',
        index: '../../../pages/excelenciaenred/cajero.html'
    },
    {
        title: 'Indicadores de excelencia - ASESOR',
        content: 'Las semanas de antiguedad en tu puesto actual, tipo de punto de venta en el que estes, indicadores considerados para cada posicion, asesor de credito y servicios financieros colocacion cartera vigente se considera un maximo de pase de cartera para poder participar asesor de servicios financieros monto de apertura guardadito debito negocio y somos de clientes nuevos a cierre de semana afiliaciones de afore contar con un minimo de portabilidades al trimestre haber realizado al menos una operacion de afiliaciones de afore a la semana durante 11 semanas haber efectuado minimo una operacion de portabilidades de nomina a la semana durante 5 semanas asesor de comercio ventas a credito elektra ventas totales cuales son mis indicadores como asesor? indicadores de excelencia de asesores indicadores de excelencia de asesor, indicadores de excelencia en red asesor indicadores de excelencia en red del asesor',
        index: '../../../pages/excelenciaenred/asesor.html'
    },
    {
        title: 'Indicadores de excelencia - LIDER',
        content: 'Se evalua el lugar promedio que ocupan los colaboradores del equipo de trabajo indicadores considerados para cada posicion gerente lider de punto de venta ranking de colaboradores del pdv lider de servicios financieros ranking de asesores de credito del pdv ranking de asesores de servicios financieros del pdv lider de comercio ranking de asesores de comercio del pdv lider de operaciones ranking de cajeros incluyendo al cajero supervisor operacion impecable se considera un maximo de eventos por faltantes cheques mal operados y servicios de canje mal operados porcentaje de transacciones digitales del pdv arriba del minimo cajero supervisor ranking de cajeros operacion impecable se considera un maximo de eventos por faltantes cheques mal operados y servicio de canje mal operados porcentaje de transacciones digitales del pdv arriba del minimo para todos los puestos de liseres se considera un opn de clientes minimo para poder participar cuales son los indicadores de excelencia en red del lider indicadores de excelencia del lider indicadores de excelencia en red de los lideres indicadores de excelencia en red del lider cuales son mis indicadores de excelencia en red',
        index: '../../../pages/excelenciaenred/lider.html'
    },
    {
        title: '¿Qué es excelencia en red? - Excelencia en Red',
        content: 'Que es excelencia en red? programa que reconoce y premia a los mejores por sus resultados y a quienes viven con pasion nuestra cultura. Que puedo ganar en excelencia en red? que puedo ganar en excelencia? Beneficios economicos, momentos de reconocimiento, dias de descanso adicionales, entre otros beneficios emocionales.',
        index: '../../../pages/excelenciaenred/ganarExcelencia2.html'
    },
    {
        title: 'Ritual - Excelencia en Red',
        content: 'Datos generales del ritual - escenarios. Participantes menos de 15, participantes 15 - 40, participantes mas de 40, como hacer el ritual de excelencia en red? en que consiste el ritual de excelencia en red? ritual de excelencia en red, cuando aplica el ritual de excelencia en red? kits de reconocimiento.',
        index: '../../../pages/excelenciaenred/ritual.html'
    },
    {
        title: 'Guía de celebración - Excelencia en Red',
        content: 'guia para tener una celebracion de excelencia. lider territorial despliega la estrategia lider de gestion al colaborador asegura el protocolo y la calidad del ritual lider regional ejecuta los rituales genrete lider punto de venta solicita y hace uso del presupuesto que debo hacer para el ritual de excelencia en red? como llevar el ritual de excelencia en red? que hago para llevar el ritual de excelencia en red indicaciones ritual excelencia en red',
        index: '../../../pages/excelenciaenred/guia.html'
    },
    {
        title: '¿Qué hacer y qué no debes hacer? - Excelencia en Red',
        content: 'Estos son los pasos que debes hacer y no hacer para reconocer la excelencia en red generar un ambiente cordial de reconocimiento para el ritual incentivar el reconocimiento de los ganadores, que debo hacer que no debo hacer que hacer',
        index: '../../../pages/excelenciaenred/todo.html'
    },
    {
        title: 'Conoce más de tu Samsung Galaxy Tab - SAC',
        content: 'Conoce más de tu Samsung Galaxy Tab Active Pro y cómo le darás uso a tu herramienta SAC. ofrecele a tu ciente la pluma s pen que viene integrada en tu tableta cuando el sac le solicite su firma quiosco sac sera la pantalla de bienvenida de la tableta y desde ahi podras ingresar a las aplicaciones panes de configuraciones conexion de red.',
        index: '../../../pages/sac/galaxytab.html'
    },
    {
        title: 'Manual de usuario Galaxy Tab - SAC',
        content: 'Toma en cuenta que la samsung tab tiene partes en especifico que debes cuidar, conocelas y explota su potencial. frontal del equipo posterior del equipo concoe el s pen guardar el s pen como guardar el s pen donde guardar el s pen como colocar la funda protectora a la galaxy tab como extraer la funda protectora a la galaxy tab lector watson mini quiosco sac panel de aplicaciones seccion de configuraciones conexiones de red dispositivos android permisos sac bienvenida sac comunicado para otorgar permiso a la plaicacion sac ingreso al sistema de asesoramiento al cliente sac autenticacion sac autenticacion de clientes autenticacion de empleados',
        index: '../../../pages/sac/manual.html'
    },
    {
        title: '¿Qué es SAC? - SAC',
        content: 'Sistema de acompañamiento al cliente nos permitira operar nuestros puntos de venta digitalmente con alta eficacia y eficiencia a traves de cualquier dispositivo. 3 pilares pilar 1 yo pilar 2 mis clientes pilar 3 mis herramientas que es sac para que sirve sac que es sac? para que sirve sac? que puedo hacer en sac? cuales son los 3 pilares de sac?',
        index: '../../../pages/sac/sac.html'
    }
]

const list = ['gemas', 'dinero', 'retiro', 'cancelación', 'cancelacion', 'red', 'pagos', 'ofertas', 'noticias', 'negocio', 'música', 'películas', 'impulsor', 'promotor', 'activador', 'QR', 'donaciones', 'superapp', 'excelencia', 'ranking', 'indicadores', 'celebración']
const cachedinputs = []

const filter = () => {
    results.innerHTML = '';
    const string = form.value.toLowerCase()
    cachedinputs.push(string)
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
        if(didYouMean(string, list) != null){
            results.innerHTML = `<li style="list-style: none;">Quizás quisiste decir <span style='font-style: italic; text-transform: uppercase; font-weight: 800;'>${ didYouMean(string, list)} </span>.</li>`
        }
        else{
            results.innerHTML = `<li style="list-style: none;">No se encontraron resultados de busqueda. <br> <br>
                                    Por favor, reformule su consulta o envie un correo a <a style="font-weight: 700; font-style: italic;" href="mailto:zeusru@elektra.com.mx">zeusru@elektra.com.mx</a> para que el contenido solicitado sea añadido.</li>`
        }
    }

    if (form.value === '') {
        results.innerHTML = ''
    }

}

button.addEventListener('click', filter)
form.addEventListener('keyup', filter)

filter()