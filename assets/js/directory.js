const form = document.getElementById('dirSearchBar');
const button = document.getElementById('dirSearchButton');
const results = document.getElementById('card');

const directory = [
    {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '3135',
            ecoDesc: 'Daz Santa Rosalia',
            manager: 'Jose Luciano Garcia Celis',
            managerPhone: '6131088733',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '4042',
            ecoDesc: ' Paseo La Paz',
            manager: 'Luis Alberto Rivera Villa',
            managerPhone: '6131088733',
            leader: 'Garcia Alanis Hugo Gerardo',
            leaderPhone: '6121589008'
        },
        {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '5116',
            ecoDesc: 'EKT La Paz Forjadores',
            manager: 'Alfonso Aguirre Adame ',
            managerPhone: '6121425340',
            leader: 'Garibaldi Camacho Gabriel',
            leaderPhone: '6122250426'
        },
        {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '5429',
            ecoDesc: 'Mega La Paz Ocampo',
            manager: 'Hilda Esmeralda Diaz Martinez ',
            managerPhone: '5576105339',
            leader: 'Hinojosa Geraldo Paola Berenice',
            leaderPhone: '6121112249'
        },
        {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '6005',
            ecoDesc: 'Daz Loreto',
            manager: 'Ana Magali Cota Talamantes',
            managerPhone: '6131169686',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'La Paz',
            eco: '8190',
            ecoDesc: 'Daz La Paz',
            manager: 'Francisca Anel Velis Davis',
            managerPhone: '6121112249',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '1099',
            ecoDesc: 'EKT San Jose Del Cabo Guaymitas',
            manager: 'Bañuelos Robles Jose Enrique',
            managerPhone: '6241165896',
            leader: 'Jose Eduardo Herrera Gonzalez',
            leaderPhone: '6242558357'
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '2949',
            ecoDesc: 'Daz San Jose Del Cabo',
            manager: 'Rios Ordoñez Maria De Los Angeles',
            managerPhone: '6241141096',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '3378',
            ecoDesc: 'Daz Divisas Cabo San Lucas',
            manager: 'Ibarra Valdez Maria Antonieta ',
            managerPhone: '6241067546',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '6244',
            ecoDesc: 'Daz Cabo San Lucas',
            manager: 'Julio Cesar Arizmendi',
            managerPhone: '6241686506',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '7582',
            ecoDesc: 'EKT Estacionamiento Cabo San Lucas',
            manager: 'Rita Quezada Dominguez',
            managerPhone: '6241362370',
            leader: 'De Leon Covarrubias Jose Adrian',
            leaderPhone: '6241787171'
        },
        {
            territory: 'Baja California Sur',
            region: 'Los Cabos',
            eco: '9970',
            ecoDesc: 'Mega Patio Cabo San Lucas',
            manager: 'Garzon Serrano Nereyda',
            managerPhone: '6242426599',
            leader: 'Plata Garcia Leonardo Alfonso',
            leaderPhone: '6241696031'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '215',
            ecoDesc: 'EKT Celaya Morelos',
            manager: 'Mauricio Rangel Jera',
            managerPhone: '4613849213',
            leader: 'José Ricardo Martínez Guerrero',
            leaderPhone: '4611327854'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '974',
            ecoDesc: 'Mega Apaseo El Grande',
            manager: 'Juan Fernando Huerta Arce',
            managerPhone: '4611417465',
            leader: 'Brenda Maria Zarate Almaguer',
            leaderPhone: '4611405672'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '2110',
            ecoDesc: 'EKT Celaya Tecnologico',
            manager: 'Cristofer Betsabe Lara',
            managerPhone: '4612308512',
            leader: 'Luis Ferndo Espinoza Guerrero',
            leaderPhone: '4616792623'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '2202',
            ecoDesc: 'Mega Celaya 1 Portal Gro',
            manager: 'María Estela Dionicio Hernández',
            managerPhone: '4613058647',
            leader: 'Elizabeth Montoya Ruiz',
            leaderPhone: '4611796041'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '4530',
            ecoDesc: 'EKT Celaya 2 Manuel Doblado',
            manager: 'Enrique Marín Rebolledo',
            managerPhone: '6241565288',
            leader: ' Juan Antonio Aguayo Hernández',
            leaderPhone: '4612597908'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '5458',
            ecoDesc: 'Mega Celaya 3 Antonio Plaza',
            manager: 'Rosa Ivett Pérez Diosdado',
            managerPhone: '4612182047',
            leader: 'Ernesto Meneses Ramírez',
            leaderPhone: '4612703656'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '7223',
            ecoDesc: 'Mega Apaseo El Alto',
            manager: 'Huizache Bustamante Maria Guadalupe',
            managerPhone: '4612775737',
            leader: 'Perez Ortega Maria Jannet',
            leaderPhone: '4612348774'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '8011',
            ecoDesc: 'EKT Plaza Celaya',
            manager: 'Ferndo Isaac Zavala Samano',
            managerPhone: '4612552812',
            leader: 'José Eduardo Lozano Arredondo',
            leaderPhone: '4613084620'
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '8977',
            ecoDesc: 'Daz San Miguel Octopan',
            manager: 'A Isabel Rodríguez Manzano',
            managerPhone: '4612928219',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Celaya',
            eco: '9390',
            ecoDesc: 'Daz Celaya Jardines',
            manager: 'Arturo Campos Márquez',
            managerPhone: '4613065047',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '1559',
            ecoDesc: 'Mega Acambaro',
            manager: 'Valencia Guido Angel',
            managerPhone: '4171162501',
            leader: 'Cortes Perez Manuel Salvador',
            leaderPhone: '4171783676'
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '1746',
            ecoDesc: 'Daz Jerecuaro',
            manager: 'Camacho Martinez Viridia',
            managerPhone: '4211031509',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '2809',
            ecoDesc: 'Daz Galerias Metropolitana',
            manager: 'Juarez Vazquez Ricardo',
            managerPhone: '4451004234',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '3395',
            ecoDesc: 'EKT Moroleon',
            manager: 'Ortiz Martinez Francisco Javier',
            managerPhone: '4291104998',
            leader: 'Arriaga Gomez Ncy Valeria',
            leaderPhone: '4451380314'
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '4156',
            ecoDesc: 'EKT Guanajuato Jerecuaro',
            manager: 'Piña Paz Maria De Los Angeles',
            managerPhone: '4211067127',
            leader: 'Sanchez Rivera Maria De Los Angeles',
            leaderPhone: '4361190984'
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '6138',
            ecoDesc: 'EKT Guanajuato Yuriria Centro',
            manager: 'Lopez Lara Pablo',
            managerPhone: '4451106531',
            leader: 'Garcia Juarez Marco Antonio',
            leaderPhone: '4451211004'
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '6978',
            ecoDesc: 'Mega Salvatierra',
            manager: 'Perez Aviles Sergio Rafael',
            managerPhone: '4451041115',
            leader: 'Ramirez Capetillo Raul',
            leaderPhone: '4616795951'
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '8791',
            ecoDesc: 'Daz Tarimoro',
            manager: 'Lopez Calvo Freddy',
            managerPhone: '4171066310',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Moroleon',
            eco: '9881',
            ecoDesc: 'Mega Galerias Metropolitana Uriangato',
            manager: 'Jacob Cisneros Rigoberto',
            managerPhone: '4451677270',
            leader: 'Villanueva Herndez Rigoberto',
            leaderPhone: '4451677270'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '9949',
            ecoDesc: 'Mega Parque Celaya',
            manager: 'Ericka Núñez Ramírez',
            managerPhone: '4612641874',
            leader: 'Luis Adrián García Hernández',
            leaderPhone: '4612753776'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '482',
            ecoDesc: 'EKT Valle Santiago',
            manager: 'Jose Igcio Roa Acosta ',
            managerPhone: '4171130206',
            leader: ' Elizabeth Herrera Trujillo',
            leaderPhone: '4641041971'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '1079',
            ecoDesc: 'EKT Cortazar Guanajuato',
            manager: 'Alfaro Miranda Fatima',
            managerPhone: '4111044438',
            leader: 'Presa Balderas Beatriz',
            leaderPhone: '5526189270'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '2111',
            ecoDesc: 'EKT Comonfort',
            manager: 'Juan Adrian Cardes Mata',
            managerPhone: '4461222154',
            leader: 'Alberto Gutierrez Guerra',
            leaderPhone: '4121273566'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '3020',
            ecoDesc: 'Mega Valle De Santiago',
            manager: 'Banda Ramirez German',
            managerPhone: '4561074134',
            leader: 'Cisneros Esteves Rubicelia',
            leaderPhone: '4561077128'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '4397',
            ecoDesc: 'Daz Villagran',
            manager: 'Patricio Gerardo Badillo Peru ',
            managerPhone: '4121052095',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '5915',
            ecoDesc: 'Presta Prenda Valle De Santiago Gto',
            manager: 'Leon Escobedo Maria Dolores',
            managerPhone: '4561172822',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '6210',
            ecoDesc: 'Daz Jaral Del Progreso',
            manager: 'Jose Trinidad Nieto Gonzalez ',
            managerPhone: '4111168721',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '6787',
            ecoDesc: 'Mega Juventino Rosas',
            manager: 'Eloy Miguel Aguilera Villafaña',
            managerPhone: '4121114547',
            leader: 'Alexis Michel Ayala Gonzalez',
            leaderPhone: '4561079378'
        },
        {
            territory: 'Bajío',
            region: 'Valle De Santiago',
            eco: '7794',
            ecoDesc: 'Daz Valtierrilla',
            manager: 'Brenda Yazmin Lo Guerra ',
            managerPhone: '4641104841',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '2218',
            ecoDesc: 'EKT Leon Plaza Obelisco',
            manager: 'Maria Del Pilar Aguilar Rocha',
            managerPhone: '4771535419',
            leader: 'Dia Patricia Terrones Cervantes',
            leaderPhone: '4778067037'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '2368',
            ecoDesc: 'Presta Prenda Blvd Delta Gto',
            manager: 'Rosa Isela Fernández Lopez',
            managerPhone: '4772434483',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '3405',
            ecoDesc: 'EKT Guanajuato',
            manager: 'Lilia Jeannette Rangel Moreno',
            managerPhone: '4731525714',
            leader: 'Sergio Mejia Cuellar',
            leaderPhone: '4731555388'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '4540',
            ecoDesc: 'Mega Miguel Hidalgo Silao',
            manager: 'Juan Carlos Tolentino Grados',
            managerPhone: '4724669877',
            leader: 'Maritza Castillo Ortega',
            leaderPhone: '4721447754'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '5856',
            ecoDesc: 'Mega Guanajuato Sindicato',
            manager: 'Mario Moreno Alvarez',
            managerPhone: '4731205028',
            leader: 'Maria Del Rosario Juarez Ramirez',
            leaderPhone: '4776411920'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '6094',
            ecoDesc: 'EKT Leon Torremolinos Gto',
            manager: 'Pablo Javier Abundiz Martinez',
            managerPhone: '4771169568',
            leader: 'Brenda Kari Carlos Rios',
            leaderPhone: '4777523688'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '6729',
            ecoDesc: 'Mega Silao',
            manager: 'Azuce Rangel Rangel ',
            managerPhone: '4721051791',
            leader: 'Ubaldo Heriberto Vazquez Jimenez ',
            leaderPhone: '4727263427'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '8003',
            ecoDesc: 'Mega Blvd Delta',
            manager: 'Viridia Edith Taboada Rivero',
            managerPhone: '4776737292',
            leader: 'María Elizabeth Olmos García',
            leaderPhone: '4771549726'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '8676',
            ecoDesc: 'Daz Valle De Jerez',
            manager: 'José De Jesús Meza Martínez',
            managerPhone: '4776516994',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '9801',
            ecoDesc: 'Mega Vicente Valtierra Leon',
            manager: 'Varro Rivas Irma Irene',
            managerPhone: '4771994512',
            leader: 'Greta Elizabeth Jimenez Jimenez',
            leaderPhone: '4776872308'
        },
        {
            territory: 'Bajío',
            region: 'Guanajuato',
            eco: '9181',
            ecoDesc: 'Mega Romita Gto',
            manager: 'Ruiz Gonzalez Luis Ernesto',
            managerPhone: '4741592186',
            leader: 'Olvera Resendiz Monica',
            leaderPhone: '4191201822'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '210',
            ecoDesc: 'EKT Leon Aleman',
            manager: 'Tomas Sanchez Aguilar',
            managerPhone: '4772320799',
            leader: 'Juan Manuel Ponce Rodeiguez',
            leaderPhone: '4772028414'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '602',
            ecoDesc: 'EKT Leon 2 Pino Suarez',
            manager: 'Víctor Alonso Flores Marín ',
            managerPhone: '4778683164',
            leader: 'Luis Alfredo Romero Salis',
            leaderPhone: '4775728636'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '1601',
            ecoDesc: 'EKT Leon 1 5 De Mayo',
            manager: 'Claudia Jaramillo Jasso ',
            managerPhone: '4776774636',
            leader: 'Ma Altagracia Orozco Villalpando ',
            leaderPhone: '4777939202'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '1964',
            ecoDesc: 'Mega Leon Echeveste',
            manager: 'Gloria Gomar García',
            managerPhone: '4773830910',
            leader: 'Omar Rodríguez Alcántara ',
            leaderPhone: '4631071858'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '2195',
            ecoDesc: 'EKT Leon',
            manager: 'Ma Teresa Centeno Juarez ',
            managerPhone: '4772618896',
            leader: 'Eden Salvador Rodríguez Amaro',
            leaderPhone: '4771741270'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '5610',
            ecoDesc: 'Mega Leon Lopez Mateos',
            manager: 'Jessica Vianey Ocampo Leal',
            managerPhone: '4436232770',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '6023',
            ecoDesc: 'EKT Leon San Juan Bosco',
            manager: 'Gabriel Eduardo Yañez Cruz',
            managerPhone: '4772334023',
            leader: 'Kari Maricela Saldaña Barron',
            leaderPhone: '4772354923'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '7061',
            ecoDesc: 'Mega Torres Landa Leon',
            manager: 'Jorge Rubén Romero Macias ',
            managerPhone: '4771512044',
            leader: 'Marisela Olvera Tavares',
            leaderPhone: '4776847165'
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '8533',
            ecoDesc: 'Daz Los Castillos',
            manager: 'Beatriz Adria Galván Juárez',
            managerPhone: '4775763391',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Leon',
            eco: '9951',
            ecoDesc: 'Mega Blvd Miguel Hidalgo Leon',
            manager: 'Juan Carlos Velazquez Mendoza',
            managerPhone: '4772568233',
            leader: 'Monica Del Rocio Cano Ramos',
            leaderPhone: '4771444354'
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '758',
            ecoDesc: 'Daz Cueramaro',
            manager: 'Lilia Medi Murillo',
            managerPhone: '4291035859',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '801',
            ecoDesc: 'Daz Pastor Ortiz Michoacan',
            manager: 'Luis Felipe García Negrete',
            managerPhone: '4291098940',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '3447',
            ecoDesc: 'EKT Penjamo',
            manager: 'Reto Grados Torres',
            managerPhone: '4691262436',
            leader: 'Antonio Guzman Armenta',
            leaderPhone: '4691069170'
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '4947',
            ecoDesc: 'Presta Prenda Penjamo J Mendez',
            manager: 'Sanjua Morales Jaime',
            managerPhone: '4691022423',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '6092',
            ecoDesc: 'EKT Guanajuato Abasolo',
            manager: 'Isela Hurtado Castillo',
            managerPhone: '4731540154',
            leader: 'Jua Gutierrez Ponce',
            leaderPhone: '4731540158'
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '6800',
            ecoDesc: 'Mega Irapuato Guerrero',
            manager: 'Sanjua Aguilera Olivares',
            managerPhone: '4621425466',
            leader: 'Enrique Guerrero Alvarado ',
            leaderPhone: '4623452029'
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '8518',
            ecoDesc: 'Daz Huanimaro',
            manager: 'Angel Chávez Alfaro',
            managerPhone: '4291072222',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '9594',
            ecoDesc: 'Daz Irapuato',
            manager: 'Karla Maria Mendozalo',
            managerPhone: '4622289077',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '9809',
            ecoDesc: 'Mega Plaza Jacarandas Irapuato',
            manager: 'Gabriel Mandujano Morales ',
            managerPhone: '4621281263',
            leader: 'Juan Francisco Fuente Argote',
            leaderPhone: '4622641254'
        },
        {
            territory: 'Bajío',
            region: 'Penjamo',
            eco: '9847',
            ecoDesc: 'Daz Gto San Marcos',
            manager: 'Omar Mendoza Fuentes',
            managerPhone: '4621961044',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '9752',
            ecoDesc: 'Mega San Roque Irapuato',
            manager: 'Solorio Ramirez Jose Roberto',
            managerPhone: '4621288191',
            leader: 'Gustavo Alonso Medi Ibarra',
            leaderPhone: '4621221955'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '162',
            ecoDesc: 'Mega Salamanca Hidalgo',
            manager: 'Gonzalez Cervantes Jorge',
            managerPhone: '4433905569',
            leader: 'Lopez Acevedo Bertha Marissa',
            leaderPhone: '4646445840'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '199',
            ecoDesc: 'EKT Irapuato 4 Leandro Valle',
            manager: 'Herndez Estrada Rosa Isela',
            managerPhone: '3621224385',
            leader: 'Ramirez Guerra Christian Daniel',
            leaderPhone: '4621819131'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '1070',
            ecoDesc: 'EKT Irapuato 2 Diaz Ordaz',
            manager: 'Castañeda Sanchez Antoli',
            managerPhone: '4622102932',
            leader: 'Galvan Castañeda Jose Emmanuel',
            leaderPhone: '4621611008'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '1753',
            ecoDesc: 'EKT Irapuato 3 M Doblado',
            manager: 'Barroso Rocio Maria Candelaria',
            managerPhone: '4626027721',
            leader: 'Garcia Aguilar Jorge',
            leaderPhone: '4623540244'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '3007',
            ecoDesc: 'EKT Salamanca',
            manager: 'Herndez Ocampo Yecenia',
            managerPhone: '4641453030',
            leader: 'Ortiz Lopez Daniel',
            leaderPhone: '4622314279'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '3152',
            ecoDesc: 'Syr Irapuato',
            manager: 'Arguello Rodriguez David',
            managerPhone: '4621743356',
            leader: 'Delgado Gonzalez Rogelio',
            leaderPhone: '4626208258'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '4788',
            ecoDesc: 'Presta Prenda Salamanca',
            manager: 'Mosqueda Ruiz Edgar De Jesus',
            managerPhone: '4646446498',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '7167',
            ecoDesc: 'EKT Salamanca Sanchez Torrado',
            manager: 'Garcia Aguilera Raul',
            managerPhone: '4641782357',
            leader: 'Rivera Tovar Berenice Angelica',
            leaderPhone: '4641198426'
        },
        {
            territory: 'Bajío',
            region: 'Salamanca',
            eco: '8575',
            ecoDesc: 'EKT Salamanca Juarez',
            manager: 'Martinez Garcidueñas Angel Candido',
            managerPhone: '4622342122',
            leader: 'Arteaga Banda Braulio Arnulfo',
            leaderPhone: '4641375911'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '179',
            ecoDesc: 'EKT Los Reyes Michoacan',
            manager: 'Torres Alvarez Victor Camerino',
            managerPhone: '4535415511',
            leader: 'Mendoza Barragan Mario Jaime',
            leaderPhone: '4521427528'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '1541',
            ecoDesc: 'Daz Tancitaro',
            manager: 'Santillan Sanson Francisco Javier',
            managerPhone: '4581440407',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '2217',
            ecoDesc: 'EKT Uruapan Los Angeles',
            manager: 'Maldodo Mejia Maricruz',
            managerPhone: '4521240261',
            leader: 'Morazan Elizarraras Jóse Ignacio',
            leaderPhone: '4522878969'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '3340',
            ecoDesc: 'EKT Uruapan',
            manager: 'Hernández Moreno Claudia',
            managerPhone: '4521378205',
            leader: 'Gil Chavez Yaneth',
            leaderPhone: '4524328364'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '5488',
            ecoDesc: 'Presta Prenda Uruapan Alvaro Obre',
            manager: 'Diaz Perez Damian Alejandro',
            managerPhone: '4433628966',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '5682',
            ecoDesc: 'Daz Periban',
            manager: 'Nuñez Ramos Miguel Angel',
            managerPhone: '5579665435',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '5733',
            ecoDesc: 'Mega Uruapan',
            manager: 'Rodriguez Magaña Enrique',
            managerPhone: '4361119447',
            leader: 'Vazquez Martinez Irene',
            leaderPhone: '4522461616'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '8946',
            ecoDesc: 'Daz Los Reyes Michoacan',
            manager: 'Zamudio Herrera Carlos De Jesus',
            managerPhone: '3541190430',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '9782',
            ecoDesc: 'Mega Libramiento Uruapan',
            manager: 'Claudia Susa De La Mora Mendez',
            managerPhone: '4522368314',
            leader: 'Dimas Gaona Maria Del Rocio',
            leaderPhone: '4431920172'
        },
        {
            territory: 'Bajío',
            region: 'Uruapan',
            eco: '711',
            ecoDesc: 'Daz Cotija Hidalgo',
            manager: 'Pulido Gonzalez Delia Esther',
            managerPhone: '5579665440',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '1119',
            ecoDesc: 'Mega Morelia Centro',
            manager: 'Alcantar Garcia Maria',
            managerPhone: '4433477946',
            leader: 'Beltran Morales Kuricaveri Israel',
            leaderPhone: '4432887757'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '4506',
            ecoDesc: 'Syr Morelia',
            manager: 'Suarez Garduño Jose Hawy',
            managerPhone: '4431783137',
            leader: 'Roman Rodriguez Vianey',
            leaderPhone: '4432526922'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '4886',
            ecoDesc: 'EKT Morelia 5 L Cardenas',
            manager: 'Toral Sanchez Silvia Guadalupe',
            managerPhone: '4431376079',
            leader: 'Villaseñor Ruvalcaba Joan Salvador',
            leaderPhone: '4432540354'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '5607',
            ecoDesc: 'EKT Morelia 1 Corregidora',
            manager: 'Lupian Bermejo Ma Isabel',
            managerPhone: '4432038505',
            leader: 'Jimenez Barragan Berenice',
            leaderPhone: '4434478437'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '8604',
            ecoDesc: 'Daz Lomas Del Valle',
            manager: 'Gomez De La Paz Juan Carlos',
            managerPhone: '4433473793',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '8948',
            ecoDesc: 'Daz Paseo De La Republica',
            manager: 'Cruz Gonzalez Mario Israel',
            managerPhone: '4433052786',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '8988',
            ecoDesc: 'Daz Tinijaro',
            manager: 'Villa Ortiz Edith Adeli',
            managerPhone: '4435504058',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '9672',
            ecoDesc: 'Mega Ventura Puente Morelia',
            manager: 'Bautista Benitez Amairani Kari',
            managerPhone: '4435614781',
            leader: 'Rosas Olvera Jorge',
            leaderPhone: '4436501255'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '9706',
            ecoDesc: 'Mega Plaza Punta Huerta Morelia',
            manager: 'Jimenez Basilio Sonia',
            managerPhone: '4436345701',
            leader: 'Soto Suazo Estefani',
            leaderPhone: '4432318539'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '7320',
            ecoDesc: 'Mega Morelia Cuautla',
            manager: 'Arreola Sanchez Maria Alejandra',
            managerPhone: '4432164155',
            leader: 'Flores Vidals Alma Lilia',
            leaderPhone: '4434514986'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Centro',
            eco: '9978',
            ecoDesc: 'Ppr Insignia Morelia Madero',
            manager: 'Evelyn Samantha Ríos Dávila',
            managerPhone: '4431662254',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '1546',
            ecoDesc: 'EKT Morelia 4 Madero',
            manager: 'Arcos Guzman Francisco Ramon',
            managerPhone: '4434331535',
            leader: 'Mendoza Tinoco Marimar',
            leaderPhone: '4641668729'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '2088',
            ecoDesc: 'EKT Morelia',
            manager: 'Alejandre Zarco A Maria',
            managerPhone: '4531261952',
            leader: 'Pioquinto Garcia Jose Hilario',
            leaderPhone: '4432602071'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '4599',
            ecoDesc: 'Daz Alvaro Obregon',
            manager: 'Tinoco Samano Jesus Zadig',
            managerPhone: '4432843903',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '4606',
            ecoDesc: 'Daz Huandacareo',
            manager: 'Herrera Guzman Omar',
            managerPhone: '4431029029',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '5495',
            ecoDesc: 'EKT Michoacan Zinapecuaro',
            manager: 'Vargas Lopez Maria Luisa',
            managerPhone: '4434138010',
            leader: 'Robles Garcia Josue',
            leaderPhone: '4434512373'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '5975',
            ecoDesc: 'Daz El Trebol',
            manager: 'Benitez Moreno Jose Guadalupe',
            managerPhone: '7871100750',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '6161',
            ecoDesc: 'EKT Morelia Torreon Nuevo',
            manager: 'Coria Acosta A Maria',
            managerPhone: '4361127229',
            leader: 'Franco Contreras Maria Areli',
            leaderPhone: '4435664782'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '9683',
            ecoDesc: 'Mega Plaza El Prado Tarimbaro',
            manager: 'Arias Ortega Juan Carlos',
            managerPhone: '4433090569',
            leader: 'Garcia Alcantar Luis Miguel',
            leaderPhone: '7861156172'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '1089',
            ecoDesc: 'EKT Morelia Pedregal',
            manager: 'Torres Acosta Omar',
            managerPhone: '4431259321',
            leader: 'Boyzo Gonzalez Samuel',
            leaderPhone: '4435283542'
        },
        {
            territory: 'Bajío',
            region: 'Morelia Norte',
            eco: '9378',
            ecoDesc: 'Mega Periferico Republica Morelia',
            manager: 'Lozano Sebastian Daniel',
            managerPhone: '4432215826',
            leader: 'Castellanos Gonzalez Arturo',
            leaderPhone: '4434514953'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '710',
            ecoDesc: 'Daz Santa Clara Del Cobre',
            manager: 'Cisneros Abad Luis Austreberto',
            managerPhone: '4361188255',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '1543',
            ecoDesc: 'Daz Ario De Rosales',
            manager: 'Solorio Garcia Moises',
            managerPhone: '4341036140',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '1751',
            ecoDesc: 'Daz Quiroga',
            manager: 'Lopez Herndez A Laura',
            managerPhone: '4341440587',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '3109',
            ecoDesc: 'Plaza Patzcuaro',
            manager: 'Juan Igcio Pulido Hinojosa',
            managerPhone: '5573119094',
            leader: 'Martinez Serrano Roberto Carlos',
            leaderPhone: '4434514211'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '4677',
            ecoDesc: 'Presta Prenda Patzcuaro',
            manager: 'Silva Alvarez Guillermo',
            managerPhone: '4341044245',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '6136',
            ecoDesc: 'EKT Michoacan Tacambaro Conv 582366',
            manager: 'Sosa Juarez Ines',
            managerPhone: '4591277028',
            leader: 'Toledo Villaseñor Karina Berenice',
            leaderPhone: '4431359730'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '8316',
            ecoDesc: 'EKT Patzcuaro',
            manager: 'Eduardo Delgado Campuzano',
            managerPhone: '4341303211',
            leader: 'Medina Garfias Ana Maria',
            leaderPhone: '4341355187'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '9764',
            ecoDesc: 'Mega Ario De Rosales',
            manager: 'Perez Tapia Isaac',
            managerPhone: '4591245530',
            leader: 'Lopez Arreola Edith Dianey',
            leaderPhone: '4591244835'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '6137',
            ecoDesc: 'EKT Michoacan Puruandiro',
            manager: 'Yepez Casillas Mauricio',
            managerPhone: '4381130655',
            leader: 'Lemus Vargas Daniel',
            leaderPhone: '4381130731'
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '8868',
            ecoDesc: 'Daz Coeneo Michoacan',
            manager: 'Flores Arevalo Manuel Alejandro',
            managerPhone: '4361044231',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Patzcuaro',
            eco: '8945',
            ecoDesc: 'Daz Panindicuaro',
            manager: 'Herrera Mendoza Xochitl Adria',
            managerPhone: '4431772280',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '5538',
            ecoDesc: 'Presta Prenda Zacapu Morelos',
            manager: 'Lopez Guerrero Alicia',
            managerPhone: '4361025823',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '5736',
            ecoDesc: 'Daz Purepero',
            manager: 'Coro Garcia Alma Delia',
            managerPhone: '4361044550',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '6211',
            ecoDesc: 'Mega Zacapu',
            manager: 'Zamora Zamora Karen Lizbeth',
            managerPhone: '4531185445',
            leader: 'Hernandez Prado Patricia',
            leaderPhone: '4433311724'
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '428',
            ecoDesc: 'Daz Chavinda',
            manager: 'Garcia Moreno Luis',
            managerPhone: '3511684226',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '713',
            ecoDesc: 'Daz Michoacan Paracho',
            manager: 'Varro Barajas Jose Luis',
            managerPhone: '4361263451',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '1122',
            ecoDesc: 'EKT Zamora 2 Madero',
            manager: 'Luquin Gil Laura Patricia',
            managerPhone: '3511447180',
            leader: 'Diaz Rodriguez Apolonio',
            leaderPhone: '3512346671'
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '2471',
            ecoDesc: 'EKT Zamora 5 De Mayo',
            manager: 'Herrera Chavez Martha Giuliana',
            managerPhone: '3512160905',
            leader: 'Morales Arreguin Maria De Lourdes',
            leaderPhone: '3511125292'
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '4076',
            ecoDesc: 'EKT Michoacan Paracho',
            manager: 'Sanchez Estrada Cristobal Fernando',
            managerPhone: '4521322323',
            leader: 'Medina Pio Omar',
            leaderPhone: '4341384310'
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '4196',
            ecoDesc: 'EKT Michoacan Jacona De Plancarte',
            manager: 'Ortiz Alvarado Estheisy Liliana',
            managerPhone: '3512273720',
            leader: 'Rodriguez Salinas Angelica',
            leaderPhone: '3511741038'
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '4781',
            ecoDesc: 'Presta Prenda Tangancicuaro Mich',
            manager: 'Ceja Lopez Juan Carlos',
            managerPhone: '3513042785',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Bajío',
            region: 'Zamora',
            eco: '9993',
            ecoDesc: 'Mega Valle Esmeralda',
            manager: 'Herndez Estrada Maria Guadalupe',
            managerPhone: '3511060428',
            leader: 'Cazares Anguiano Edgar Gustavo',
            leaderPhone: '4525207908'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '708',
            ecoDesc: 'Daz San Diego De La Union',
            manager: 'Cindy Lizbeth Garcia Herrera',
            managerPhone: '4181145046',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '1054',
            ecoDesc: 'Mega San Miguel De Allende',
            manager: 'Alejandro Herndez Jorge',
            managerPhone: '4625957548',
            leader: 'Maria Magdale Sofia Cruz Martinez',
            leaderPhone: '4151052681'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '2083',
            ecoDesc: 'EKT Guanajuato San Luis De La Paz',
            manager: 'Miguel Mendez Ibarra',
            managerPhone: '4181246664',
            leader: 'Lilia Lizbeth Tovar Lagu',
            leaderPhone: '4121040136'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '2770',
            ecoDesc: 'Mega Los Heroes Dolores',
            manager: 'Vacante',
            managerPhone: '',
            leader: 'Juan Jose Mellado Ramirez',
            leaderPhone: '4181521925'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '3105',
            ecoDesc: 'Mega San Jose De Iturbide',
            manager: 'Alejandra Vazquez Gutierrez',
            managerPhone: '4427539922',
            leader: 'Javier Arturo Verde Valencia',
            leaderPhone: '4341350452'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '4155',
            ecoDesc: 'EKT Gto San Jose Iturbide',
            manager: 'Jose Luis Velazquez Guzman ',
            managerPhone: '4192978887',
            leader: 'Jose Billy Diaz Vega',
            leaderPhone: '4681141606'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '4867',
            ecoDesc: 'Presta Prenda Guerrero Dolores Hgo',
            manager: 'Ramon Rodriguez Perez',
            managerPhone: '4181085129',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '5806',
            ecoDesc: 'EKT San Felipe Guanajuato',
            manager: 'Esteban Alejandro Valdivia Gonzalez',
            managerPhone: '4281193324',
            leader: 'Miguel Angel Rocha Perez',
            leaderPhone: '4281043084'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '6088',
            ecoDesc: 'Mega Dolores Hidalgo',
            manager: 'Julio Enrique Castillo Aguilar',
            managerPhone: '4181033046',
            leader: 'Vito Anthony Cervantes Gutierrez',
            leaderPhone: '4185933999'
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '9846',
            ecoDesc: 'Daz San Luis De La Paz',
            manager: 'Julia Martinez Igcio',
            managerPhone: '4681808080',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Centro',
            region: 'Dolores Hidalgo',
            eco: '1534',
            ecoDesc: 'Daz Santa Maria Del Rio *',
            manager: 'Mendez Ibarra Gloria',
            managerPhone: '4851021277',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '4715',
            ecoDesc: 'Presta Prenda Ezequiel Montes',
            manager: 'Luis Reyramirez Resendiz',
            managerPhone: '4411176239',
            leader: '',
            leaderPhone: ''
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '5636',
            ecoDesc: 'Mega Ixmiquilpan',
            manager: 'Vanessa January Castro Cruz',
            managerPhone: '7717959101',
            leader: 'Julio Cesar Villa Perez',
            leaderPhone: '7721318134'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '6082',
            ecoDesc: 'EKT Queretaro Cadereyta',
            manager: 'Luz Perez Urbano',
            managerPhone: '4412523725',
            leader: 'Griselda García Rodriguez',
            leaderPhone: '4411130560'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '6182',
            ecoDesc: 'EKT Ezequiel Montes',
            manager: 'Caroli Herndez Herndez',
            managerPhone: '4411549898',
            leader: 'Oscar Daniel Lira Barrera',
            leaderPhone: '4271119188'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '9471',
            ecoDesc: 'Mega Huichapan',
            manager: 'Gabriel Armando Guerrero Martinez',
            managerPhone: '7731436456',
            leader: 'Jorge Luis Gomez Gomez',
            leaderPhone: '4275443882'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '9578',
            ecoDesc: 'Mega Ixmiquilpan Plaza Centro',
            manager: 'Jose Luis Meza Espindola',
            managerPhone: '7717266270',
            leader: 'Javier Martinez Alvarez',
            leaderPhone: '7717461812'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '9612',
            ecoDesc: 'EKT Tequisquiapan Queretaro',
            manager: 'Maria Guadalupe Galvan Perez',
            managerPhone: '4271260568',
            leader: 'Jesus Manuel Rojas Cruz',
            leaderPhone: '5566941622'
        },
        {
            territory: 'Centro',
            region: 'Ixmiquilpan',
            eco: '9835',
            ecoDesc: 'Daz Hidalgo Zimapan',
            manager: 'Breslin Romero Chavez',
            managerPhone: '7721216764',
            leader: 'Juan Antonio Vega Espino',
            leaderPhone: '7721242765'
        },
        {
            territory: 'Centro',
            region: 'Queretaro Satelite',
            eco: '518',
            ecoDesc: 'EKT Queretaro Reforma',
            manager: 'Maricruz Coral Alviter Alameda',
            managerPhone: '7721257724',
            leader: 'David Rosales Rosales ',
            leaderPhone: '4426494853'
        },
        {
            territory: 'Centro',
            region: 'Queretaro Satelite',
            eco: '2299',
            ecoDesc: ''
        }
]

const filter = () => {
    results.innerHTML = ''
    const string = form.value.toLowerCase()
    for (let contact of directory){
        const eco = contact.eco
        const ecoDesc = contact.ecoDesc.toLowerCase();
        const manager = contact.manager.toLowerCase();
        const leader = contact.leader.toLowerCase()
        if (eco.includes(string) || ecoDesc.includes(string) || manager.includes(string) || leader.includes(string)){
            const html = `
            <div class="card-header">
                Territorio: ${contact.territory} <br> Región: ${contact.region}
            </div>
            <div class="card-body">
            <h5 class="card-title mb-3">${contact.eco} ${contact.ecoDesc}</h5>
            <p class="card-text"><span class="sp-text">Gerente Líder PDV:</span> ${contact.manager} <br>
            <span class="sp-text">Teléfono: </span>:<a href="tel:+${contact.managerPhone}"> ${contact.managerPhone}</a></p>
            <p class="card-text"><span class="sp-text">Líder Comercial:</span> ${contact.leader} <br>
            <span class="sp-text">Teléfono: </span><a href="tel:${contact.leaderPhone}">${contact.leaderPhone}</a></p>
            </div>
            `
            results.innerHTML += html
        }
        // else if(results.innerHTML === ''){
        //     results.innerHTML = `<div class="alert alert-danger" role="alert">No results found</div>`
        // }
        if(form.value===''){
            results.innerHTML = ''
        }
    }
}

button.addEventListener('click', filter)
form.addEventListener('keyup', filter)

filter()