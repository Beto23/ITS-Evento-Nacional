module.exports = function(ngModule){
	ngModule.controller('documentacionCtrl', documentacionCtrl);

	documentacionCtrl.$inject = ['HelpersFactory', '$scope', '$mdDialog', '$mdMedia']
	function documentacionCtrl(HelpersFactory, $scope, $mdDialog, $mdMedia){
		HelpersFactory.bgFullPage();

		    $scope.delegaciones = [
		      {
		        logoTec : './img/logosTecs/aguascalientes.jpg',
		        tec: 'IT Aguascalientes',
		        nombre: 'Instituto Tecnol&#243;gico de Aguascalientes',
		        descripcion: '<p>La banda de guerra y escolta de bandera surge en el mes de enero de 1994 como una actividad de conjunto, que requieren de un ambiente de disciplina para obtener organizaci&#243;n y un buen desempeño en sus actividades. <br>La disciplina es fundamental para el desarrollo adecuado de una banda de guerra y de una escolta de bandera, su importancia no solo se debe al origen de car&#225;cter militar de estos grupos. Si no a que, bien aplicada.Actualmentecuenta con 32 alumnos.</p><p>Desde el año de 1994 participan en el encuentro nacional de bandas de guerra y escolta, as&#237; mismos tienen una amplia participaci&#243;n a nivel estatal, ya sea en el interior de la ciudad como en diversas comunidades.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/apizaco.jpg',
		        tec: 'IT Apizaco',
		        nombre: 'Instituto tecnol&#243;gico de apizaco.',
		        descripcion: '<p>Tlaxcala, "Lugar del ma&#237;z y la tortilla". Llamada tambi&#233;n la legendaria tierra de Xicot&#233;ncatl. Entre sus ciudades m&#225;s importantes encontramos la Ciudad rielera de Apizaco en donde se encuentra su m&#225;xima casa de estudios; EL INSTITUTO TECNOL&#243;GICO DE APIZACO de donde surge la Escolta y Banda de Guerra "TOROS TEC" la cual fue fundada en el mes de febrero de 2004 y a partir del año 2005 ha participado. En los Encuentros Nacionales de Escoltas y Bandas de Guerra de los Institutos Tecnol&#243;gicos. <br>La Banda de Guerra y Escolta "TOROS TEC", tiene firmes los valores &#233;ticos y C&#237;vicos, poniendo en alto su lema Institucional:"PENSAR PARA SERVIR, SERVIR PARA TRIUNFAR"</p>'
		      },
		      {
		        logoTec : './img/logosTecs/cancun.jpg',
		        tec: 'IT Canc&#250;n',
		        nombre: 'Instituto Tecnol&#243;gico de Canc&#250;n',
		        descripcion: '<p>La Banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Canc&#250;n se fund&#243; el 2 de mayo 1996 al mando del ex militar el C. &#225;lvaro Ciau Puc, solamente con 6 tambores y 6 cornetas.</p><p>Ha realizado diversas presentaciones en el estado de Quinta Roo, tambi&#233;n ha participado en eventos locales como los desfiles c&#237;vicos militares y deportivos, regionales y nacionales.</p><p>Ha participado en 17 eventos nacionales de Banda de Guerra y Escoltas <ul class="uls"><li class="lis">1998 primera participaci&#243;n en el IV Encuentro Nacional de Bandas de Guerra y Escoltas de los institutos tecnol&#243;gicos en Los Mochis, Sinaloa</li><li class="lis">1999 V Encuentro Nacional en Hermosillo, Sonora</li>		<li class="lis">2000 VI Encuentro Nacional en las ciudades de Celaya, Dolores Hidalgo, Le&#243;n y Guanajuato, Guanajuato</li><li class="lis">2001 VII Encuentro Nacional en Tepic Nayarit</li><li class="lis">2002 VIII Encuentro Nacional en Cd. Guzm&#225;n, Jalisco</li><li class="lis">2003 IX Encuentro Nacional en Durango, Durango</li><li class="lis">2004 X Encuentro Nacional en Zacatecas, Zacatecas</li><li class="lis">2005 XI Encuentro Nacional en Morelia, Michoac&#225;n</li><li class="lis">2006 XII Encuentro Nacional en Chihuahua, Chihuahua</li><li class="lis">2007 XIII Encuentro Nacional en Orizaba, Veracruz</li><li class="lis">2008 XIV Encuentro Nacional en Reynosa, Tamaulipas</li><li class="lis">2009 XV Encuentro Nacional en Tuxtla Guti&#233;rrez, Chiapas</li><li class="lis">2010 XVI Encuentro Nacional en M&#233;xico, D.F.</li><li class="lis">2011 XVII Encuentro Nacional en San Luis Potos&#237;, S.L.P.</li><li class="lis">2012 XVIII Encuentro Nacional en Minatitl&#225;n, Veracruz</li>	<li class="lis">2013 XIX Encuentro Nacional en Torre&#243;n Coahuila</li><li class="lis">2014 XX Encuentro Nacional en Chetumal, Quintana Roo</li><li class="lis">2015 XXI Encuentro Nacional en Nuevo Laredo Tamaulipas</li></ul></p><p>Dos encuentros regionales de evaluaci&#243;n <ul class="uls"><li class="lis">2014 en Chetumal, Q. Roo</li><li class="lis">2015 en Esc&#225;rcega Campeche</li></ul></p><p>Hoy se presenta ante ustedes realizando una serie de evoluciones y toques de fantas&#237;a militares acompañados de tambores, cornetos y clarines Recibamos con fuerte aplauso a la Banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Canc&#250;n.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/cuauhtemoc.jpg',
		        tec: 'IT Ciudad Cuahutemoc',
		        nombre: 'Instituto Tecnol&#243;gico de Ciudad Cuauht&#233;moc',
		        descripcion: '<p>La Escolta y Banda de Guerra del Instituto Tecnol&#243;gico de Ciudad Cuauht&#233;moc, desde sus inicios hace 19 años es el grupo c&#237;vico m&#225;s representativo de la regi&#243;n noroeste del Estado de Chihuahua. Este grupo Da cabida a j&#243;venes entusiastas con un alto sentido c&#237;vico, amor a su patria y sus buenos valores.</p> <p>La Escolta y Banda de Guerra del Instituto Tecnol&#243;gico de Cd. Cuauht&#233;moc ha participado en incontables presentaciones, as&#237; como en los encuentros nacionales de los Institutos Tecnol&#243;gicos con sedes en:</p><ul class="uls"><li class="lis">Ciudad Guzm&#225;n, Jalisco</li><li class="lis">Chihuahua, Chihuahua</li><li class="lis">Orizaba, Veracruz</li><li class="lis">Reynosa, Tamaulipas</li><li class="lis">Tuxtla Guti&#233;rrez, Chiapas</li><li class="lis">M&#233;xico D.F.</li><li class="lis">San Luis Potos&#237;, SLP</li><li class="lis">Minatitl&#225;n, Veracruz</li><li class="lis">Chetumal, Quintana Roo</li><li class="lis">Saltillo Coahuila</li></ul>'
		      },
		      {
		        logoTec : './img/logosTecs/cGuzman.jpg',
		        tec: 'IT Ciudad Guzm&#225;n',
		        nombre: 'Instituto Tecnol&#243;gico de Ciudad Guzm&#225;n',
		        descripcion: '<p>El Grupo c&#237;vico de Escoltas y Banda de Guerra del Instituto Tecnol&#243;gico de Cd. Guzm&#225;n. Tienen por mascota a los "gavilanes" y cumplen en este año 2016 ya 31 de haber integrado este grupo c&#237;vico. Ha participado en todos y cada uno de los encuentros nacionales convocados por el Tecnol&#243;gico Nacional de M&#233;xico. A lo largo del año asisten a eventos de aniversarios de Tecnol&#243;gicos hermanos en los estados de Colima, Michoac&#225;n, Guanajuato y con mayor presencia en el estado de Jalisco. Desarrollan como grupo actividades que promueven los valores c&#237;vicos, as&#237; como labores que ponen al descubierto la integridad y apoyo a la sociedad que tienen como estudiantes de nivel profesional y futuros constructores de su porvenir al egresar su carrera. Trabajan con el apoyo de su director Ing. Jos&#233; Roberto Gudiño Venegas y la instrucci&#243;n del Ing. Francisco Javier Magall&#243;n L&#243;pez. Esta es la semblanza de los gavilanes del Tec. De Cd. guzm&#225;n quienes tienen el compromiso de poner el alto el nombre de su ciudad, regi&#243;n y estado dentro de este XXII Encuentro Nacional de Escoltas y Bandas de Guerra de los Tecnol&#243;gicos del pa&#237;s.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/itHidalgo.jpg',
		        tec: 'IT Ciudad Hidalgo',
		        nombre: 'Instituto Tecnol&#243;gico Superior de Los R&#237;os',
		        descripcion: '<p>El instituto tecnol&#243;gico superior de ciudad hidalgo cumple con este ciclo escolar, 15 a&ntildeos de servir a la comunidad y se constituye como la instituci&#243;n de Mayor n&#250;mero de alumnos en ciudad hidalgo, la banda de guerra y la escolta de jaguares, cuyo lema es, "educaci&#243;n herencia para el &#233;xito", es relativamente un Grupo joven, aunque su primera participaci&#243;n a nivel estatal fue en la ciudad de Morelia en el 2007, en una exhibici&#243;n de bandas de guerra de tecnol&#243;gico de Todo el estado, en febrero del 2012, participan por primera vez en un evento nacional en el xix encuentros de bandas de guerra y escoltas que se llev&#243; a cabo En la ciudad de torre&#243;n Coahuila, un a&ntildeo m&#225;s tarde viajan hasta Chetumal quintana roo en el xx encuentro nacional de escoltas y bandas de guerra de Tecnol&#243;gicos, junto con otras 77 bandas de guerra y escoltas del pa&#237;s, en el 2014 asistieron al 1er. Encuentro nacional de evaluaci&#243;n en la ciudad de roque, Guanajuato; y en noviembre del a&ntildeo 2015 fueron sede del 2° encuentro nacional de evaluaci&#243;n de la zona centro. Y hoy se encuentran presentes en su tercer Nacional, en el xxii evento nacional de escoltas y bandas de guerra. Esta es la banda de guerra y escolta del instituto tecnol&#243;gico superior de ciudad Hidalgo.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/cJuarez.jpg',
		        tec: 'IT Ciudad Ju&#225;rez',
		        nombre: 'Instituto Tecnol&#243;gico de Ciudad Ju&#225;rez',
		        descripcion: '<p>La banda de guerra y escolta del instituto tecnologico de cd juarez es una de las pioneras de los encuentros nacionales, a representado a cd juarez y a mexico en el extranjero en cuidades como las vegas nevada, chicago illinois, las cruces nuevo mexico y su vecina ciudad el el paso texas. <br> Integrado por estudiantes de las diferentes carreras que ofrece su institucion, a logrado ganar concursos a nivel local, estatal y nacional siendo el grupo con mucho prestigio y orgullo para su instucion. <br> Actualmente y desde hace 10 anos es dirigida por el licenciado mario alberto benitez marentes</p>'
		      },
		      {
		        logoTec : './img/logosTecs/celaya.jpg',
		        tec: 'IT Celaya',
		        nombre: 'Instituto Tecnol&#243;gico de Celaya',
		        descripcion: '<p>La banda de guerra y escolta del Instituto Tecnol&#243;gico de Celaya tiene su primera presentaci&#243;n el 14 de enero de 1994 en la ceremonia de inicio de cursos. Actualmente realiza honores el primer lunes de cada. Mes en ambos campus, en los &#250;ltimos años ha participado en eventos c&#237;vicos tanto del municipio como de la regi&#243;n. Ha participado realizando honores a la bandera en los encuentro nacionales deportivos en las ciudades de Morelia, Michoac&#225;n San Luis Potos&#237;, Pachuca, Le&#243;n as&#237; como el 250 aniversario de Miguel Hidalgo en la ciudad de Corralejo, Gto. Realizo honores y exhibici&#243;n en el palacio legislativo de San L&#225;zaro en la Ciudad de M&#233;xico as&#237; como honores a la bandera y exhibici&#243;n en el castillo de Chapultepec para celebrar el 60 aniversario del Tecnol&#243;gico Nacional de M&#233;xico.</p><p>Ha participado en diferentes concursos convocados por instituciones c&#237;vicas-educativas en las ciudades de Aguascalientes, Quer&#233;taro, San Luis de la paz, Torre&#243;n, obteniendo siempre excelentes resultados.Desde su inicio el instructor es el Arq. Salvador P&#233;rez Guerrero.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/chetumal.jpg',
		        tec: 'IT Chetumal',
		        nombre: 'Instituto Tecnol&#243;gico de Chetumal',
		        descripcion: ''
		      },
		      {
		        logoTec : './img/logosTecs/culiacan.jpg',
		        tec: 'IT Culiac&#225;n',
		        nombre: 'Instituto Tecnol&#243;gico de Culiac&#225;n',
		        descripcion: '<p>Esta banda de guerra tuvo sus inicios en el año de 2001 a partir de este se incorporaron a los eventos nacionales de los institutos tecnol&#243;gicos siendo el primero en la cd. De Durango y han participado Ininterrumpidamente en estos eventos hasta el año 2014 que fue en la cd. De Chetumal quintana roo, e incorpor&#225;ndose a los encuentros evaluativos, por mencionar algunas de sus participaciones relevantes.</p><p>Podemos mencionar la participaci&#243;n en el desfile navideño en la cd de Tucson Arizona E.U en el año de 2003 y han tenido participaciones locales importantes como en el congreso del estado as&#237; como los eventos de internos de nuestra instituci&#243;n tales como graduaciones, lunes c&#237;vicos cada mes y diversas inauguraciones deportivas culturales y acad&#233;micas. La escolta viene a cargo del Lic. Alfredo Nieblas y la banda de guerra a cargo del Ing. Aldo Moreno Z&#250;ñiga</p>'
		      },
		      {
		        logoTec : './img/logosTecs/delicias.jpg',
		        tec: 'IT Delicias',
		        nombre: 'Instituto Tecnol&#243;gico de Delicias',
		        descripcion: '<p>La banda de guerra y escolta del instituto tecnol&#243;gico de Delicias dio inicios a principios del año 2000 por inquietud de los alumnos y maestros del plantel, iniciando participaciones internas en el plantel y poco a Poco fue dando cada vez m&#225;s participaci&#243;n que la comunidad requer&#237;a. <br>Fue su primera participaci&#243;n en Cd. Guzm&#225;n Jalisco en los encuentros nacionales as&#237; mismo ininterrumpidamente hasta el encuentro que hoy en d&#237;a se est&#225; realizando aqu&#237; en Saltillo. <br>La banda y escolta est&#225; conformada por 32 elementos cuya finalidad adem&#225;s de poner en alto el nombre del tecnol&#243;gico nacional de M&#233;xico es promover los s&#237;mbolos patrios.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/durango.jpg',
		        tec: 'IT Durango',
		        nombre: 'Instituto Tecnol&#243;gico de Durango',
		        descripcion: '<p>El Instituto Tecnol&#243;gico de Durango Fue Fundado el 2 de Agosto de 1948, siendo el primer Tecnol&#243;gico en provincia y con &#233;l naci&#243; el grupo c&#237;vico, conformado por la Banda de Guerra, Escolta Bandera y un Guion que Han representado a Durango en cada uno de los encuentros Nacionales de Bandas de Guerra y Escoltas. El Grupo C&#237;vico del Instituto Tecnol&#243;gico de Durango, siempre se ha destacado como uno de los Grupos de mayor presencia en el Sistema Nacional de los Institutos Tecnol&#243;gicos. Hace 67 años de orgullo y tradici&#243;n que acompaña a sus integrantes, la mascota representativa del grupo es una burrita.</p><p>Blanca de nombre Pola, siendo por ello los Burros Blancos del ITD. Los Participantes del Grupo C&#237;vico Siempre han comprometido a portar el Uniforme del Instituto Tecnol&#243;gico de Durango, pero sobretodo Siempre han tenido y tendr&#225;n presente que es un Orgullo ser del Tecno.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/felipeCarrillo.jpg',
		        tec: 'IT Felipe Carrillo',
		        nombre: 'Instituto Tecnol&#243;gico Superior de Felipe Carrillo Puerto',
		        descripcion: '<br><p>Desde el inicio de sus funciones el 2 de septiembre de 1997 en el Instituto Tecnol&#243;gico Superior de Felipe Carrillo Puerto se promueve la formaci&#243;n integral y humanista de los estudiantes a trav&#233;s de la Escolta y Banda de Guerra difundiendo entre el alumnado una cultura c&#237;vica y respeto a los s&#237;mbolos patrios. Desde entonces generaci&#243;n tras generaci&#243;n un grupo de j&#243;venes han representado con gallard&#237;a a nuestro Instituto al sonoro rugir de tambores y cornetas.</p><p>La Escolta Y Banda de Guerra que se presenta hoy, Participar&#225; por primera vez al Encuentro Nacional de Escoltas y Bandas de Guerra a celebrarse del 21 al 26 de febrero del presente a&ntildeo en el Instituto Tecnol&#243;gico de Saltillo, despu&#233;s de obtener su pase al evento ubic&#225;ndose en el lugar 20 de las 40 escoltas y bandas de guerra clasificadas en los Encuentros Pre nacionales de Evaluaci&#243;n de Escoltas y Bandas de Guerra de los Institutos Tecnol&#243;gicos de todo el pa&#237;s, en los cuales se eval&#250;an el desempe&ntildeo de sus integrantes, gallard&#237;a y Cadencia de los Toques Militares que ah&#237; se emplean.</p><p>Este grupo c&#237;vico est&#225; Integrado por 1 guion, una escolta con un comandante de &#243;rdenes, un abanderado y cuatro vanguardias. Una Banda de Guerra integrado por un comandante de &#243;rdenes, ocho cajas y ocho cornetas incluyendo una corneta de &#243;rdenes. Despu&#233;s de 17 generaciones hoy la Escolta Y Banda de Guerra Leoncillos del Tecnol&#243;gico de Carrillo Puerto portan con orgullo su uniforme de Gala de los grupos c&#237;vicos del Tecnol&#243;gico Nacional de M&#233;xico y se presenta con la ejecuci&#243;n de toques y marchas reglamentarias como son: Paso Redoblado, Ataque, Llamada de Tropa, Marcha Marinos, Patria, Diablo, Tierra Blanca, Notas entre otras m&#225;s.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/hermosillo.jpg',
		        tec: 'IT Hermosillo',
		        nombre: 'Instituto Tecnol&#243;gico de Hermosillo',
		        descripcion: '<p>La Banda de Guerra y Escolta del ITH fue fundada en 1997 a cargo Alonso Enrique Mungarro en ese momento como estudiante de Licenciatura. Su primera participaci&#243;n la tuvo en el V Evento Nacional de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos, realizado en nuestro Tecnol&#243;gico de Hermosillo, Sonora. Desde ese momento este grupo c&#237;vico ha participado en los diferentes desfiles y Ceremonias realizadas tanto a nivel municipio como a nivel estatal, llegando a ser considerada en dos ocasiones como Banda de Guerra y Escolta Oficial del Gobiernos del Estado de Sonora. Cabe destacar que a partir de la conformaci&#243;n de este grupo, se ha logrado participar en todos los eventos nacionales realizados por la Direcci&#243;n de Institutos Tecnol&#243;gicos ahora TNM.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/huatabampo.jpg',
		        tec: 'IT Huatabampo',
		        nombre: 'Instituto Tecnol&#243;gico de Huatabampo',
		        descripcion: '<p>La banda de guerra PELICANOS del Instituto Tecnol&#243;gico de Huatabampo, surge en los años de 2001, realizando en sus primeras participaciones dentro y fuera del plantel, as&#237; como en desfiles, inauguraciones de diferentes eventos, ceremonias de actos c&#237;vicos en la ciudad de Huatabampo. A si mismo se fue fortaleciendo para despu&#233;s participar en su primer encuentro nacional de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos con sede en la Ciudad de Durango, posteriormente en la Ciudad de Morelia, Zacatecas, Chihuahua y Chetumal. De igual forma participaci&#243;n en el encuentro nacional de bandas de guerra organizado por el DEBATE de Los Mochis Sinaloa, es por ello que la banda de guerra sigue participando para fortalecer los s&#237;mbolos patrios como un ejemplo mexicano.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/jiquilpan.jpg',
		        tec: 'IT Jiquilpan',
		        nombre: 'Instituto Tecnol&#243;gico de Jiquilpan',
		        descripcion: '<p>La Escolta y Banda de Guerra del Instituto Tecnol&#243;gico de Jiquilpan, Michoac&#225;n. Fue fundada en 1990 a cargo del Ing. Luis Rosales, la cual a participado en todos los Eventos Nacionales de Escolta y Banda de Guerra. Su Escolta fue abanderada por el Presidente de la Rep&#250;blica el ciudadano Ernesto Zedillo, es una de las Bandas de Guerra del Estado que ha ganado el concurso General&#237;simo Morelos actualmente es dirigida por el Lic. Julio cesar peralta Alfaro. Cuenta con 2100 alumnos con sus ocho carreras certificadas.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/laguna.jpg',
		        tec: 'IT Laguna',
		        nombre: 'Instituto Tecnol&#243;gico de La Laguna',
		        descripcion: '<p>La Escolta y Banda de Guerra del Instituto Tecnol&#243;gico de la Laguna, mismo que est&#225; ubicado en la ciudad de Torre&#243;n Coahuila, se conform&#243; en el año de 1993, desde esa fecha ha sido parte importante en los Honores que se le tributan a la Bandera, con motivo de ceremonias c&#237;vicas, culturales y deportivas. As&#237; mismo, ha participado en desfiles de diversos festejos, la feria del algod&#243;n en esta misma ciudad y Concursos a nivel Nacional. Comenz&#243; a participar desde el II Encuentro Nacional de Bandas de Guerra y Escoltas, celebrado en la ciudad de Durango, Dgo.</p><p>Hasta el d&#237;a de hoy, ha participado en todos los Encuentros Nacionales de Bandas de Guerra y Escoltas, celebrado en distintas partes de la Rep&#250;blica Mexicana. Conocidos como los Gatos Negros, adoptando &#233;sta mascota por ser cabal&#237;stico el treceavo en crearse, de los m&#225;s de 266 instituciones pertenecientes al Tecnol&#243;gico Nacional de M&#233;xico. El Tecnol&#243;gico de la Laguna cuenta con 50 años de servicio a la Preparaci&#243;n de profesionistas, mismos que, en parte, hoy portan nuestros S&#237;mbolos de identidad Nacional. Su director actual, Dr. Miguel &#225;ngel Cisneros Guerrero.</p><p>Esta delegaci&#243;n, siempre se ha distinguido por el gran sentido de responsabilidad, disciplina, el empeño y dedicaci&#243;n. Demostrando a la sociedad el respeto y el amor por los S&#237;mbolos Patrios.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/losMochis.jpg',
		        tec: 'IT Los Mochis',
		        nombre: 'Instituto Tecnol&#243;gico de Los Mochis',
		        descripcion: '<p>La banda de guerra del instituto tecnol&#243;gico de Los Mochis, se funda en el año de 1995, teniendo su primera participaci&#243;n a nivel nacional en el segundo encuentro de bandas de guerra y escoltas de los institutos tecnol&#243;gicos en la ciudad de Durango en el año de 1996. Este grupo c&#237;vico ha sido reconocido como uno de los mejores en su regi&#243;n. Su instructor el Lic. Arturo Vladimir Guerra Mena, egresado de la misma instituci&#243;n, se hace cargo del grupo en el año de 2002. Y hasta la fecha han participado en los eventos nacionales de los tecnol&#243;gicos de Durango, Chihuahua, Los Mochis, Zacatecas, Morelia, Orizaba, Tuxtla Guti&#233;rrez, DF, San Luis Potos&#237;, Minatitl&#225;n, La Laguna, Chetumal, Nuevo Laredo y ahora presentes en este Vig&#233;simo Segundo Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnol&#243;gico Nacional de M&#233;xico en la Ciudad de Saltillo Coahuila.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/merida.jpg',
		        tec: 'IT M&#233;rida',
		        nombre: 'Instituto Tecnol&#243;gico de M&#233;rida',
		        descripcion: '<p>El Grupo C&#237;vico del Instituto Tecnol&#243;gico de M&#233;rida, actual, empieza su trayectoria en noviembre del año 2000, bajo el mando del entonces alumno Felipe Jim&#233;nez, siendo Coordinador Cultural Prof. Joaqu&#237;n Cortes Villamil (Q. E. P. D), Es en febrero del 2002 que debuta en los eventos nacionales de bandas de guerra y escoltas de los institutos tecnol&#243;gicos asistiendo por primera vez en Ciudad Guzm&#225;n, Jalisco.</p><p>De esta manera se fue ganando terreno en los Eventos Nacionales, Gracias al apoyo de la instituci&#243;n y de la disciplina del Grupo. Despu&#233;s de este primer evento se han sumado los de:</p><ul class="uls"><li class="lis">9° Encuentro Durango. 2003</li><li class="lis">10° Encuentro. Morelia. 2004</li><li class="lis">11° Encuentro Zacatecas. 2005</li><li class="lis">12° Encuentro Chihuahua. 2006</li><li class="lis">13° Encuentro Orizaba. 2007</li><li class="lis">14° Encuentro Reynosa. 2008</li><li class="lis">15° Encuentro Tuxtla Guti&#233;rrez. 2009</li></ul>'
		      },
		      {
		        logoTec : './img/logosTecs/mazatlan.jpg',
		        tec: 'IT Mazatlan',
		        nombre: 'Instituto Tecnol&#243;gico de Mazatl&#225;n',
		        descripcion: '<p>El grupo c&#237;vico del Instituto Tecnol&#243;gico de Mazatl&#225;n se form&#243; el 15 de febrero del 2013, con el prop&#243;sito de participar en ceremonias de la instituci&#243;n y participar en eventos del Tecnol&#243;gico Nacional de M&#233;xico, en el año del 2014 participa por primera vez en un nacional de Escoltas y Bandas de Guerra de los Institutos Tecnol&#243;gicos en la Ciudad de Chetumal, Quintana Roo y en el Primer Encuentro de Evaluaci&#243;n para Escoltas y Bandas de Guerra del TNM que se Realiz&#243; en la Ciudad de Nogales, Sonora, y el 2015 en el Segundo Encuentro de Evaluaci&#243;n en la misma Ciudad de Nogales.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/minatitlan.jpg',
		        tec: 'IT Minatitl&#225;n',
		        nombre: 'Instituto Tecnol&#243;gico de Minatitl&#225;n',
		        descripcion: '<p>La Banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Minatitl&#225;n, Veracruz, est&#225; conformada por 33 elementos, Tuvo sus inicios en el año de 1999, teniendo su primera participaci&#243;n en el evento nacional de Escoltas y Bandas de Guerra en el año 2000, siendo sede el IT de Celaya Gto. Cabe mencionar que este grupo C&#237;vico del año 2000- actual, no ha dejado de participar en los eventos nacionales del Sistema.</p><p>Han participado en informes Gubernamentales, culturales, deportivos como son en la Cd. de M&#233;rida, Villahermosa, Cd. Madero, Saltillo. Desde sus inicios a la fecha ha sido dirigida por el L.E.F. Jes&#250;s Miguel Jim&#233;nez Aguirre.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/morelia.jpg',
		        tec: 'IT Morelia',
		        nombre: 'Instituto Tecnol&#243;gico de Morelia',
		        descripcion: '<p>La Banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Morelia inicia sus actividades en el año 2000. Originalmente, nacieron para protocolizar los eventos del propio Instituto, pero en estos años han superado ampliamente ese primer objetivo, convirti&#233;ndose en un factor importante para la formaci&#243;n c&#237;vica de los estudiantes, han participado en diversos actos c&#237;vicos, acad&#233;micos, deportivos y culturales dentro y fuera del Instituto. Son y han sido protagonistas de gran presencia en eventos del Gobierno Federal, Estatal, Municipal y Sector Empresarial.</p><p>Es importante mencionar que han sido campeones, en diversas organizaciones, alcanzado primeros lugares estatales y nacionales en los cuales se le ha premiado como Mejor Corneta de &#243;rdenes, Mejor Cajero, Mejor Comandante y Mejor Abanderada. Siempre perseverantes, a la fecha son dirigidos por el Ing. Ricardo Tinoco Mondrag&#243;n, qui&#233;n junto con sus alumnos han logrado una gran trayectoria, haciendo gala de gallard&#237;a en cada una de sus presentaciones para difundir en la sociedad nuestros valores patrios.</p> <p>Es importante señalar que el lema de Instituto Tecnol&#243;gico de Morelia es "T&#233;cnica, Progreso de M&#233;xico" y su mascota un Pony motivo por el cual los llena de gran orgullo y valor de pertenencia a ser llamados los ponys del tec de Morelia.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/nogales.jpg',
		        tec: 'IT Nogales',
		        nombre: 'Instituto Tecnol&#243;gico de Nogales',
		        descripcion: '<p>La banda de guerra del Instituto tecnol&#243;gico de Nogales fue fundada en el año de 1996 por el entonces estudiante Ricardo Sander Torres a petici&#243;n del ingeniero Cabanillas que fung&#237;a como director de esta instituci&#243;n, este grupo c&#237;vico a participado en eventos deportivos acad&#233;micos Y c&#237;vicos en los cuales por su destacada actuaci&#243;n Y esp&#237;ritu de servicio a llegado A recibir invitaciones en eventos fuera de nuestro pa&#237;s, llevando con ello la formaci&#243;n c&#237;vica y el respeto patrio a los estados unidos de Norteam&#233;rica, teniendo como marco alusivo la batalla de Puebla el d&#237;a de la Independencia y la revoluci&#243;n mexicana. Celebrados por consulados mexicanos en el extranjero.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoLaredo.jpg',
		        tec: 'IT Nuevo Laredo',
		        nombre: 'Instituto Tecnol&#243;gico de Nuevo Laredo',
		        descripcion: '<p>Este grupo inicio hace aproximadamente 10 años, tiempo en el cual ha participado en los encuentros nacionales de bandas de guerra y escoltas de los institutos tecnol&#243;gicos, adem&#225;s de representar a la instituci&#243;n en diversos eventos y concursos, as&#237; como prestar servicios a la comunidad, apoyando en eventos c&#237;vicos realizados tanto por el gobierno municipal como estatal.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/orizaba.jpg',
		        tec: 'IT Orizaba',
		        nombre: 'Instituto Tecnol&#243;gico de Orizaba',
		        descripcion: '<p>La Escolta y Banda de Guerra del Instituto Tecnol&#243;gico de Orizaba, tienen sus inicios en el año de 1957, participando en los desfile c&#237;vicos de la ciudad, su trayectoria se divide en dos etapas, la primera comprende de los años 1957 al 1968, &#233;poca en ambos grupos se ganaron el respeto y cariño de la sociedad Orizaba.</p><p>Despu&#233;s de un periodo de ausencia, resurge en el año de 1989 bajo la coordinaci&#243;n de un integrante de la Banda de Guerra de los años 60´s el Ing. Jos&#233; Lu&#237;s Zepahua Peralta (q.e.p.d.), realizando un trabajo invaluable para la promoci&#243;n c&#237;vica en cada uno de los desfiles y homenajes a los s&#237;mbolos patrios en la regi&#243;n y a nivel nacional en los que se han presentado, as&#237; como tambi&#233;n su amor hacia su Instituto Tecnol&#243;gico de Orizaba.</p> <br>Las participaciones a nivel nacional la banda han sido: <ul class="uls">Aperturas de Desfiles c&#237;vicos de la ciudad de Orizaba.<li class="lis"></li><li class="lis">Desfiles de la Feria Expori.</li></ul>'
		      },
		      {
		        logoTec : './img/logosTecs/queretaro.jpg',
		        tec: 'IT Quer&#233;taro',
		        nombre: 'Instituto Tecnol&#243;gico de Quer&#233;taro',
		        descripcion: '<p>La banda de guerra y escolta del <b>INSTITUTO TECNOL&#243;GICO DE QUER&#233;TARO</b> creada en el año 2000 se ha caracterizado por ser un grupo con gran inter&#233;s en fomentar los valores c&#237;vicos y el respeto a los s&#237;mbolos patrios, as&#237; como su disciplina y entrega,destac&#225;ndose por encabezar honores a la bandera del gobierno del estado y representar al estado de Quer&#233;taro en los ENCUENTROS NACIONALES DE ESCOLTAS Y BANDAS DE GUERRA DE LOS INSTITUTOS TECNOL&#243;GICOS desde el año 2000 hasta el año 2015 con sede en Nuevo Laredo Tamaulipas de manera ininterrumpida as&#237; como los Encuentros de Evaluaci&#243;n de Escoltas y Bandas de Guerra de los Institutos Tecnol&#243;gicos con sede en Instituto Tecnol&#243;gico de Roque en 2014 e Instituto Tecnol&#243;gico Superior de Ciudad Hidalgo, Michoac&#225;n en 2015,adem&#225;s ha participado en diferentes concursos obteniendo los primeros lugares. Este grupo c&#237;vico est&#225; integrado por j&#243;venes estudiantes futuros ingenieros de este pa&#237;s, quienes con orgullo llevan muy en altoel nombre de su instituci&#243;n, sus colores y su mascota. <br>Su lema:NARANJA, NEGRO Y BLANCO SON LOS COLORES DE MI CORAZ&#243;N? ZORROS!</p>'
		      },
		      {
		        logoTec : './img/logosTecs/roque.jpg',
		        tec: 'IT Roque',
		        nombre: 'Instituto Tecnol&#243;gico de Roque',
		        descripcion: '<p><b>Instituto Tecnol&#243;gico de Roque, Guanajuato.</b> Se integr&#243; el d&#237;a 10 de Octubre del 2005 gracias al apoyo de la comunidad Estudiantil y Directivos de ese periodo. Sus primeras presentaciones fueron en comunidades, Desfiles y eventos pol&#237;ticos. <br>Actualmente han participado en 10 encuentros Nacionales y en concursos de esta actividad c&#237;vica obteniendo buenos lugares. <br>M&#225;s que aprender a tocar un instrumento y marchar , en esta Escolta y Banda de Guerra se aprende bueno Valores como Uni&#243;n, Constancia, Perseverancia, trabajo en equipo y muchos m&#225;s. <br>Su mascota "El Carnero" <br>Su Lema: "En el campo est&#225; la supervivencia y en tus manos la soluci&#243;n". <br>Instructor Lic. Carlos Valent&#237;n Cervantes Mart&#237;nez.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/sanLuisPotosi.jpg',
		        tec: 'IT San Luis Potos&#237;',
		        nombre: 'Instituto Tecnol&#243;gico de San Luis Potos&#237;',
		        descripcion: '<p>Las agrupaciones de Banda de Guerra y Escolta se conformaron y dieron inicio a sus actividades en el mes de octubre del periodo AGO-DIC03. <br>La primera generaci&#243;n se conform&#243; de 23 alumnos de Banda de Guerra y 7 alumnas de Escolta de las diferentes carreras de &#233;sta instituci&#243;n. <br>Dentro de las actividades programadas a nivel instituci&#243;n, &#233;sta agrupaci&#243;n a ofrecido invariablemente sus servicios, entre otros a la realizaci&#243;n de ceremonias oficiales y extraoficiales tales como: graduaciones, aniversarios, honores a la bandera, cursos de inducci&#243;n, eventos deportivos, concursos estatales y encuentros de Escoltas y Bandas de Guerra. <br>A continuaci&#243;n se enlistan algunos eventos en los que la Banda de Guerra y la Escolta han tenido participaci&#243;n: <ul class="uls"><li class="lis">Honores a la Bandera y ceremonias c&#237;vicas dentro del ITSLP.</li><li class="lis">- Participaci&#243;n en el Encuentro Nacional de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos siendo sede de la edici&#243;n n&#250;mero 17 en el estado de San Luis Potos&#237;.</li><li class="lis">- Participaci&#243;n en el Concurso Estatal de Bandas de Guerra convocado por el Pentatl&#243;n Deportivo Militarizado Universitario, Zona San Luis Potos&#237;.</li></ul></p>'
		      },
		      {
		        logoTec : './img/logosTecs/saltillo.jpg',
		        tec: 'IT Saltillo',
		        sede: 'Sede',
		        nombre: 'Instituto Tecnol&#243;gico de Saltillo',
		        descripcion: '<p>La Escolta de Bandera y la Banda de Guerra del <b>Instituto Tecnol&#243;gico de Saltillo</b> es un grupo c&#237;vico &#237;ntimamente ligado a las actividades militares y aunque &#233;sta sea una expresi&#243;n art&#237;stica, en ella se une la m&#250;sica, la est&#233;tica, la gallard&#237;a y el coraje. Grupo representativo que tiene sus inicios en el año de 1958, siendo su primera presentaci&#243;n en el desfile del 24 de febrero de ese año. <br>LOGROS OBTENIDOS DE LA ESCOLTA Y BANDA DE GUERRA 2015: <ul class="uls"><li class="lis">Menci&#243;n honor&#237;fica como la mejor banda de guerra actual de la ciudad de Saltillo, Coahuila de parte del museo de las aves de M&#233;xico en Saltillo. En el mes de febrero.</li><li class="lis">Participaci&#243;n de la escolta y banda de guerra en el XXI Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnol&#243;gico Nacional de M&#233;xico, del 23 al 26 de febrero de 2015 en la ciudad de Laredo, Tamps.</li></ul></p>'
		      },
		      {
		        logoTec : './img/logosTecs/tehuacan.jpg',
		        tec: 'IT Tehuac	&#225;n',
		        nombre: 'Instituto Tecnol&#243;gico de Tehuac&#225;n',
		        descripcion:'<p>La banda de guerra y escolta del Instituto Tecnol&#243;gico de Tehuac&#225;n se constituye como un grupo representativo en el mes de octubre de 1997. <br>Participando en actos c&#237;vicos del Instituto as&#237; como de la ciudad, desfiles y presentaciones. <br>Han participado en los Encuentros Nacionales de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos del año de 1997 al año 2014, as&#237; como en los Aniversarios de los Tecnol&#243;gicos de Puebla, Apizaco, El Roque, Orizaba y Gustavo A. Madero. <br>En mayo de 2003 asisten al Aniversario de Miguel Hidalgo en la ciudad de Corralejo Guanajuato, teniendo presentaciones en las ciudades de San Miguel de Allende y Dolores Hidalgo. <br>La mascota representativa del Tecnol&#243;gico de Tehuac&#225;n: Cardenal <br>El lema del Instituto Tecnol&#243;gico de Tehuac&#225;n: <b>Excelencia en la Educaci&#243;n, Fortaleza del Pa&#237;s</b></p>'
		      },
		      {
		        logoTec : './img/logosTecs/tepic.jpg',
		        tec: 'IT Tepic',
		        nombre: 'Instituto Tecnol&#243;gico de Tepic',
		        descripcion: '<p>La banda de guerra y escoltas del <b>instituto tecnol&#243;gico de Tepic</b>, fue creada en el año de 1998 desde entonces a participado en los encuentros nacionales de bandas de guerra y escoltas de los institutos tecnol&#243;gicos, desfiles, ceremonias del plantel y del TNM, presentaciones en distintas plazas p&#250;blicas, en el castillo de Chapultepec, en el congreso de la uni&#243;n, entre otros. <br>Merecedores del premio c&#237;vico estatal en dos ocasiones, han sido ganadores de m&#250;ltiples concursos de bandas de guerra y escoltas en el pa&#237;s. <br>Ellos dan muestra de la gallard&#237;a y patriotismo que les caracteriza, su mascota: El tigre, sus colores: el negro, marfil y naranja, su instructor: Erik Misael Bautista Galicia, su director: M.C Albino Rodr&#237;guez D&#237;az. <br>Representando con Sabidur&#237;a, Poder y Coraje al estado de Nayarit la banda de guerra y escoltas del instituto tecnol&#243;gico de Tepic.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/toluca.png',
		        tec: 'IT Toluca',
		        nombre: 'Instituto Tecnol&#243;gico de Toluca',
		        descripcion: '<p>Fundada en el mes de Agosto del 2010 por el Profesor Gustavo Antonio Muñiz Moreno, con la finalidad de fortalecer el sentido de pertenencia como mexicanos en los j&#243;venes universitarios as&#237; como el amor a nuestro Labaro Patrio. <br>En agosto del 2015 la Escolta y Banda de Guerra recibe del presidente municipal de Metepec una menci&#243;n honorifica por sus 5 años ininterrumpidos representando a su alma mater el Instituto Tecnol&#243;gico de Toluca tanto en eventos locales, municipales, estatales y nacionales, algunos por mencionar: <ul class="uls"><li class="lis">XVIII ENCUENTRO NACIONAL DE BANDAS DE GUERRA Y ESCOLTAS, MINATITLAN VERACRUZ.</li><li class="lis">XIX ENCUENTRO NACIONAL DE BANDAS DE GUERRA Y ESCOLTAS, LA LAGUNA TORREON, COAHUILA.</li><li class="lis">XX ENCUENTRO NACIONAL DE ESCOLTAS Y BANDAS DE GUERRA, CHETUMAL QUINTANARRO.</li><li class="lis">XXI ENCUENTRO NACIONAL DE ESCOLTAS Y BANDAS DE GUERRA, NUEVO LAREDO, TAMAULIPAS.</li></ul></p><p>Cabe mencionar que a pesar de la falta de cultura bandera los j&#243;venes han adquirido con gusto este estilo de vida sin dejar de lado los estudios profesionales.<br>Con el lema: Educaci&#243;n, Integridad y Ciencia, la Escolta y Banda de Guerra HALCONES... del Instituto Tecnol&#243;gico de Toluca llega ante ustedes desde las alturas del fr&#237;o Volc&#225;n Xinantecatl.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/tuxtepec.jpg',
		        tec: 'IT Tuxtepec',
		        nombre: "Instituto Tecnol&#243;gico de Tuxtepec",
		        descripcion: 'Hace sus inicios y fundaci&#243;n en octubre del 2007 bajo la direcci&#243;n e instrucci&#243;n del Ing. Sa&#250;l Rosales Zendejas, para hacer su primer desfile el 20 de noviembre de ese mismo año. El 5 de mayo del 2008 hace gran relevancia al participar en el desfile siendo la primer banda de guerra con uniforme de gala tipo colegio militar. A partir de esta fecha han sido contantes destacando siempre en todos los eventos. Sus participaciones principales son:<ul class="uls"><li class="lis">Desfiles del 5 de Mayo, 16 de Septiembre, 20 de Noviembre, en la ciudad de Tuxtepec, Oaxaca.</li><li class="lis">Ceremonias de Graduaci&#243;n del Instituto Tecnol&#243;gico de Tuxtepec y del Instituto Tecnol&#243;gico de la Cuenca del Papaloapan.</li><li class="lis">Concursos Regionales de Bandas de Guerra Categor&#237;a libres Obteniendo 1°s y 2°s Lugares.</li></ul>',
		      },
		      {
		        logoTec : './img/logosTecs/veracruz.jpg',
		        tec: 'IT Veracruz',
		        nombre: 'Instituto Tecnol&#243;gico de Veracruz',
		        descripcion: '<br><h4>Banda de Guerra y Escolta Tiburones Blancos del Instituto Tecnol&#243;gico de Veracruz ANTORCHA Y LUZ DE FUEGO PERMANENTE</h4><br><p>El Instituto Tecnol&#243;gico de Veracruz cuenta con una larga tradici&#243;n en banda de guerra debido a la incursi&#243;n de la gloriosa y monumental banda de guerra existente en los primeros a&ntilde;os de esta instituci&#243;n, sintiendo un gran orgullo al ser comparada con instituciones de origen puramente militar como lo es la Heroica Escuela Naval Militar, esto por la gallard&#237;;a y precisi&#243;n en toques que exhib&#237;;an los entonces estudiantes de la escuela de artes y oficios cuna de nuestro Instituto Tecnol&#243;gico, con el paso del tiempo, despu&#233;s de innumerables logros y por azares del destino fue perdi&#233;ndose el inter&#233;s en esta banda de guerra y a consecuencia l&#243;gica fue desapareciendo. <br>En el a&ntilde;o 2003 un grupo de j&#243;venes alumnos amantes de esta disciplina se dio a la tarea de volver a la vida esta legendaria banda bajo la atinada Supervisi&#243;n del ilustre Profesor El&#237;;as Nicol&#225;s Cortes Guzm&#225;n; siendo su primera participaci&#243;n como observadores en el X Encuentro Nacional de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos el del a&ntilde;o 2004 en la ciudad de Durango, siendo hasta el siguiente a&ntilde;o en la ciudad de Morelia Michoac&#225;n la primera participaci&#243;n Oficial en el marco del XI Encuentro Nacional de Bandas de Guerra y Escoltas de los Institutos Tecnol&#243;gicos marcando el renacimiento dentro del sistema de esta banda. <br>A la fecha La banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Veracruz ha realizado numerosas presentaciones a lo largo y ancho de nuestro pa&#237;;s.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/villaHermosa.jpg',
		        tec: 'IT Villa Hermosa',
		        nombre: 'Instituto Tecnol&#243;gico Superior de Arandas',
		        descripcion: '<br><p>La banda de Guerra y Escolta del Instituto Tecnol&#243;gico de Villahermosa se inicia en el a&ntilde;o 2004, con el apoyo de autoridades del Instituto en coordinaci&#243;n con el departamento de actividades extraescolares y el entusiasmo de los alumnos. Dentro de las participaciones destacadas se encuentra:<ul class="uls"><li class="lis">El 49 encuentro nacional deportivo de los Institutos Tecnol&#243;gicos siendo sede el Instituto Tecnol&#243;gico de Villahermosa.</li><li class="lis">Participaci&#243;n en los Encuentros nacionales de Bandas de guerra y escolta de los Institutos Tecnol&#243;gicos desde el XII encuentro el cual se llev&#243; a cabo en el Instituto Tecnol&#243;gico de Chihuahua en el a&ntilde;o 2005. Desde esa fecha y hasta el XX encuentro nacional de bandas de guerra y escolta de los Institutos Tecnol&#243;gicos en este 2014 en la ciudad de Chetumal Quintana Roo.</li><li class="lis">Participando en el II encuentro de evaluaci&#243;n de escoltas y bandas de guerra del Tecnol&#243;gico nacional de M&eactute;xico, con sede en la ciudad de Esc&#225;rcega Campeche, Noviembre 2015.</li><li class="lis">Destacadas participaciones en eventos del sector p&#250;blico y privado dentro y fuera del estado.</li></ul><br>En la actualidad se encuentra bajo el mando del instructor Ing. Braulio Alberto Mateos Gallegos. Siendo director del Instituto Tecnol&#243;gico de Villahermosa, el Dr. Humberto Jos&eactute; Cervera Brito Cuenta con integrantes de las diferentes carreras que se ofertan en el Instituto Tecnol&#243;gico de Villahermosa.Participaci&#243;n en concursos de Escolta de bandera y Banda de guerra en el estado de Tabasco</p>'
		      },
		      {
		        logoTec : './img/logosTecs/arandas.jpg',
		        tec: 'ITS Arandas',
		        nombre: "Instituto Tecnol&#243;gico Superior de Arandas",
		        descripcion: 'El Instituto Tecnol&#243;gico Superior proveniente de la tierra destacada por su Tequila, Arandas, Jalisco, el cual fue fundado en el a&ntildeo 2000 con las carreras de Ingenier&#237;a en Sistemas Computacionales e Ingenier&#237;a <br> Industrial, posteriormente se integraron las carreras de Ingenier&#237;a en Industrias Alimentarias, Ingenier&#237;a en Gesti&#243;n Empresarial, Ingenier&#237;a ambiental y finalmente Ingenier&#237;a Electromec&#225;nica. <br> La banda de guerra y escolta de esta instituci&#243;n se form&#243; en Enero de 2011, para la participaci&#243;n en el XVII Encuentro Nacional de Bandas de Guerra y Escoltas que se celebr&#243; en la Ciudad de San Luis Potos&#237; <br> En 2011, posteriormente particip&#243; en el XVIII Encuentro celebrado en la Cd. De Minatitl&#225;n, Veracruz 2012, Torre&#243;n, Coahuila en 2013, Chetumal, Quintana Roo en 2014 y Nuevo Laredo Tamaulipas 2015. <br> La banda de Guerra ha participado activamente en Eventos C&#237;vicos en el Municipio apoyando al ayuntamiento, desfiles c&#237;vicos, actos acad&#233;micos, inauguraciones deportivas, y presentaciones en escuelas, Plazas p&#250;blicas y comunidades, as&#237; como en fiestas patronales de los municipios vecinos de Arandas. <br> En el a&ntildeo 2012 particip&#243; en 5 encuentros de bandas de guerra y escoltas: En el Tecnol&#243;gico de Ocotl&#225;n, Jalisco; Tecnol&#243;gico de Zamora, Michoac&#225;n Tecnol&#243;gico de Jiquilpan Michoac&#225;n, el cuarto siendo Cede en Arandas y el quinto en Ciudad Guzm&#225;n, Jalisco. Y en esta ocasi&#243;n con mucho orgullo participando en el XXI encuentro nacional en esta bella ciudad de Saltillo Coahuila. La Escolta y Banda de Guerra Escorpiones del Instituto Tecnol&#243;gico Superior de Arandas.'
		      },
		      {
		        logoTec : './img/logosTecs/escarcega.jpg',
		        tec: 'ITS Esc&#225;rcega',
		        nombre: "Instituto Tecnol&#243;gico Superior de Esc&#225;rcega",
		        descripcion: '<br><h4>BANDA DE GUERRA Y ESCOLTA JAGUARES</h4><p>El instituto Tecnol&#243;gico Superior de Esc&#225;rcega fue inaugurado en Octubre del 2004, con el nombre de Instituto Tecnol&#243;gico Superior del Sur, Su director general es el Dr. Luis Ram&#243;n Carrillo Orteg&#243;n. Actualmente se imparten 6 carreras de las cuales 3 son ingenier&#237;as y 3 licenciaturas.</p><p>La banda de guerra y escolta del Instituto Tecnol&#243;gico Superior de Esc&#225;rcega se integra el 18 de Octubre del 2004. <br> La banda de guerra est&#225; integrada por 10 cajeros, 10 corneteros, una corneta de &#243;rdenes y un comandante. <br> La escolta por 1 comandante, 1 abanderado, 2 guardias, 2 retaguardias. 1 guion y 2 heraldos.</p><p>Los colores con que se identifica la instituci&#243;n es el rojo, verde y blanco, su logotipo est&#225; conformado por un jaguar el cual es el s&#237;mbolo de la instituci&#243;n por su grandeza, habilidad, inteligencia y fuerza.</p><p>Participan en los honores a la bandera en el primer lunes de cada mes as&#237; como los inicio de semestres, aniversarios y graduaci&#243;n realizado en el ITSE <br>Participa en los desfiles y eventos municipales y estatales. <br>En el 2012 participa en el XVIII encuentro nacional de bandas de guerra y escoltas de los institutos tecnol&#243;gicos con sede en la Ciudad de Minatitl&#225;n Veracruz. <br>En el 2013 participan en el XIX encuentro nacional de bandas de guerra y escolta de los institutos tecnol&#243;gicos con sede en la Ciudad de Torre&#243;n Coahuila. <br>En el 2014 participan en el XX encuentro nacional de bandas de escoltas y bandas de guerra de los institutos tecnol&#243;gicos con sede en la Ciudad de Chetumal Quintana Roo. <br>En el 2015 participan en el XXI encuentro nacional de bandas de escoltas y bandas de guerra de los institutos tecnol&#243;gicos con sede en la Ciudad de Nuevo Laredo, Tamaulipas.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/LosReyes.jpg',
		        tec: 'ITS Los Reyes',
		        nombre: 'Instituto Tecnol&#243;gico de Los Reyes'
		      },
		      {
		        logoTec : './img/logosTecs/losRios.jpg',
		        tec: 'ITS Los R&#237;os',
		        nombre: 'Instituto Tecnol&#243;gico Superior de Los R&#237;os',
		        descripcion: '<br><p>El Instituto Tecnol&#243;gico Superior de los r&#237;os se ubica en el Municipio de Balancan del estado de Tabasco su Director General M.C. Jorge Alberto Lezama Suarez contamos con una matr&#237;cula de 2036 Desde su formaci&#243;n en el a&ntildeo de 2009, la escolta y banda de guerra del instituto tecnol&#243;gico superior de los r&#237;os, ha tenido importantes participaciones en diferentes actos c&#237;vicos y de relevancia dentro y fuera del municipio de Balancan, participando en ceremonias como las del tradicional grito de independencia, en los altos del H. Ayuntamiento de Balancan los 15 de septiembre, desfile c&#237;vico del 16 de septiembre y desfiles deportivos del 20 de noviembre.</p>'
		      },
		      {
		        logoTec : './img/logosTecs/nuevoCasasGrandes.jpg',
		        tec: 'ITS Nuevo Casas Grandes',
		        descripcion: 'Es considerada la mejor Escolta y Banda de Guerra, de la Zona Noroeste del Estado de Chihuahua, misma que a su vez, presta servicio dentro y fuera de la regi&#243;n, y ha participado en eventos libres realizados. <br> En las ciudades de Guadalajara, Jal., Mazatl&#225;n, Sin., M&#233;xico, D.F., Mexicali, B.C. y Rosarito, B.C., entre otras, como tambi&#233;n ha participado en eventos Nacionales de Escolta y Banda de Guerra del Tecnol&#243;gico Nacional de M&#233;xico del pa&#237;s, llevados a cabo en, Minatitl&#225;n, Ver., Torre&#243;n, Coah., Chetumal, Q. Roo, misma que Obtuvo su pase para participar en el XXII Evento Nacional de Escoltas y Bandas de Guerra del Tecnol&#243;gico nacional de M&#233;xico. <br> Este grupo se caracteriza porque se inculcan valores c&#237;vicos, por lo que los alumnos, se distinguen por su gallard&#237;a, disciplina y compromiso social, todo a ellos dirigidos por la Directora General del ITSNCG, Ing. Marcia Navarro Solano.'
		      },
		      {
		        logoTec : './img/logosTecs/santiago-papasquiaro.jpg',
		        tec: 'ITS Santiago Papasquiaro',
		        nombre: 'Instituto Tecnol&#243;gico Superior de Santiago Papasquiaro',
		        descripcion: '<br><p>El grupo c&#237;vico LINCES del <b>Instituto Tecnol&#243;gico Superior de Santiago Papasquiaro Durango</b>, es conformado por la Banda de Guerra, Escolta de Bandera, Guion y Bander&#237;n, el cual tiene 20 años de formaci&#243;n.</p><p>En este tiempo, se han cosechado grandes logros gan&#225;ndose el renombre de la gente, no solo en su municipio, tambi&#233;n en su estado, adem&#225;s de en algunas ciudades del Pa&#237;s. Este grupo, se conform&#243; a partir. Del año de 1995 en el nacimiento de su instituci&#243;n. Dentro de los eventos que participan en el transcurso del ciclo escolar, se encuentran los siguientes:<ul class="uls"><li class="lis">Ceremonia de Inicio de cursos de la Instituci&#243;n.</li><li class="lis">Ceremonia de Aniversario del propio Instituto.</li><li class="lis">Desfile de Aniversario de la instituci&#243;n en el mes de Septiembre.</li><li class="lis">Honores a la Bandera, el primer lunes de cada mes en el tecnol&#243;gico.</li><li class="lis">Izamiento de Bandera el d&#237;a 12 de Octubre para conmemorar el d&#237;a de la raza en la plaza c&#237;vica del municipio.</li><li class="lis">Desfile conmemorativo de la revoluci&#243;n mexicana el d&#237;a 20 de noviembre.</li><li class="lis">Invitaciones a desfiles de aniversario de las diferentes localidades de la regi&#243;n noreste del estado de Durango.</li></ul></p><br><p>Desde el año 2003 se ha participado en el concurso nacional "Orgullo Guinda" organizado por los ex-alumnos del Instituto Tecnol&#243;gico de Durango, obteniendo resultados favorables en Banda de Guerra y Escolta de Bandera como lo son:<ul class="uls"><li class="lis">Primer Lugar en Banda de Guerra en categor&#237;a libre en el año 2003.</li><li class="lis">Tercer lugar en Banda de Guerra en categor&#237;a libre en el año 2004.</li><li class="lis">Primer lugar en la modalidad de "mejor comandante" en el año 2003.</li><li class="lis">Primer lugar en la modalidad de "mejor cajero" en el año 2008 y 2011.</li><li class="lis">Tercer lugar en la modalidad de Escolta de Bandera en los años 2009 y 2012.</li></ul></p><br><p>Se ha participado en los encuentros nacionales de Escoltas y Bandas de Guerra del Tecnol&#243;gico Nacional de M&#233;xico en las siguientes sedes:<ul class="uls"><li class="lis">Durango 2003</li><li class="lis">Zacatecas 2004</li><li class="lis">Morelia 2005</li><li class="lis">Chihuahua 2006</li><li class="lis">Reynosa Tamaulipas 2008</li><li class="lis">Ciudad de M&#233;xico 2010</li><li class="lis">Torre&#243;n Coahuila 2013</li><li class="lis">Y en esta ocasi&#243;n en Saltillo Coahuila 2016</li></ul></p>'
		      }
		    ];


		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

		$scope.show = function(delegacion) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
				$mdDialog.show({
					controller: DialogController,
					url: '/popup',
					template: require ('./popupSemblanza.html'),
					parent: angular.element(document.body),
					clickOutsideToClose:true,
					fullscreen: useFullScreen,
					locals: {
						delegacion: delegacion
					}
				})
		};

	};
	DialogController.$inject = ['$scope', '$mdDialog', 'delegacion']
	function DialogController($scope, $mdDialog, delegacion) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.delegacion = delegacion;
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	}
};