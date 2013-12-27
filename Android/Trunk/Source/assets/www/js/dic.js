var language = 'pt';

var dic = {
    en: {
        'title' : 'Free Zone',
        'no-results' : 'No results found',
        'getting-your-position' : 'Getting your position...',
        'no-network-nearby' : 'No network nearby',
        'you-are-here' : 'You are here',
        'map-beta-logo-img' : 'url(../img/en-logo.png)',
        'map-not-found-text' : 'It was not possible to get your position. Please make a zoom on the map to find free networks.',
        'text-loading' : 'Please authorize the app to get your current position or click here to select manually',
        'text-choose' : 'Choose your device:',
        'text-iphone' : 'iPhone & others (open wifi)',
        'text-android' : 'Android (all networks)',
        'map-title-text' : '100 Free Zones nearby you',
        'download-android-version' : 'Click here to download the Android version of Free Zone!',
        'connection-status-conected-text' : 'Connected',
        'connection-status-trying-text' : 'Trying...',
        'connection-status-noconnection-text' : 'No connection',
        'connection-status-wifioff-text' : 'Wifi off',
        'connection-status-validating-text' : 'Validating...',
        'connection-status-nointernet-text' : 'No portal',
        'connection-status-offlinemode-text' : 'Disconnected',
        'connection-status-nonetwork-text' : 'No networks',
        'connection-status-onenetworknearby-text' : 'One network nearby',
        'connection-status-networksnearby-text' : ' networks nearby',
        'connection-status-see-the-map' : 'Find networks',
        'connection-status-click-here' : 'Click here',
        'welcome-message' : 'Welcome to Free Zone',
        'placeholder' : '',
        'app-name' : 'Free Zone Wi-Fi',
        'not-supported-on-android' : 'Feature available only in the Android App',
        'is-open-android' : 'Android is open',
        'is-open-web' : 'Web is open',
        'network-list-title-text' : 'Available Networks',
        'network-list-button-back-text' : 'Back',
        'network-list-beta-logo-img' : 'url(../img/en-logo.png)',
        'network-list-loading-networks-text' : 'Loading...',
        'network-list-no-network-found-yet-text' : 'No network found yet...',
        'terms-of-use-button-accept-text' : 'Accept',
        'terms-of-use-button-leave-text' : 'Exit',
        'terms-of-use-title-text' : 'Terms of Use',
        'terms-of-use-beta-logo-img' : 'url(../img/en-logo.png)',
        'look-for-networks-status-text' : 'Searching...',
        'look-for-networks-message-text' : 'Please wait while Free Zone searches for networks and updates the data base.<br/>',
        'look-for-networks-beta-logo-img' : 'url(../img/en-logo.png)',
        'update-available' : '<strong style="color:#bdde59">Update available:<br/>click here to update!</strong>',
        'portal-fb-share-text' : '<strong>Free Zone</strong> on Facebook',
        'portal-fb-share-like-text' : 'Like',
        'portal-row01-column01-text' : 'Free Games',
        'portal-row01-column02-text' : 'Playboy',
        'portal-row01-column03-text' : 'Youtube',
        'portal-row02-column01-text' : 'Facebook',
        'portal-row02-column02-text' : 'Twitter',
        'portal-row02-column03-text' : 'Orkut',
        'portal-row03-column01-text' : 'Wikipedia',
        'portal-row03-column02-text' : 'Gmail',
        'portal-row03-column03-text' : 'Yahoo!',
        'portal-beta-logo-img' : 'url(../img/en-logo.png)',
        'main-not-zg-notification-title-text' : 'This network is not a free zone.',
        'main-not-zg-notification-message-text' : 'Turn it into a free zone so your friends can use it too.',
        'main-zg-notification-title-text' : 'Use the Internet for free!!!',
        'main-zg-notification-message-text' : 'You are connected to a free zone!',
        'main-internet-button-text' : 'Browse Internet',
        'main-share-network-button-text' : 'Share network',
        'main-icon-map-text' : 'Search for free zones on the map',
        'main-icon-network-text' : 'Check Wi-Fi networks nearby',
        'main-network-name-text' : 'Connected to:',
        'main-beta-logo-img' : 'url(img/en-logo.png)',
        'main-download-market' : 'Download on Android Market',
        'search-zg-notification-title-text' : 'There are more than 300,000 free zones networks in the world!',
        'search-zg-notification-message-text' : 'When there is a free zone nearby, you can use the Internet for free!',
        'search-failed-notification-title-text' : 'Connection failed.',
        'search-failed-notification-message-text' : 'Could not find a free zone nearby.',
        'search-tip-notification-title-text' : 'Keep an eye on this icon!',
        'search-tip-notification-message-text' : 'If it appears, it means that a free zone is nearby!',
        'search-zg-button-text' : 'Search free zones',
        'search-zg-retry-button-text' : 'Try again',
        'search-map-3g-button-text' : 'Locate on map',
        'search-continue-button-text' : 'Use this network',
        'search-beta-logo-img' : 'url(../img/en-logo.png)',

        'dealoftheday-show-text' : 'Show Deal of the Day',
        'dealoftheday-title-text' : 'Deal of the Day',

        'help-title-text' : 'Help',

        'help-what-is-it-title-text' : 'What is it?',
        'help-what-is-it-content-text' : 'Free Zone app wants to bring <strong style="color:#bdde59">portal for all</strong>!<br/>' +
                '<br/>The Free Zone app helps your ANDROID to find open and shared Wi-Fi networks with portal access. ' +
                'Using this app, you\'ll be able to check your emails, Facebook, Twitter and more, <strong style="color:#bdde59">much faster ' +
                'than 3G and totally FREE!</strong><br/>' +
                '<br/>The app <strong style="color:#bdde59">automatically finds available networks</strong>, so you stay connected all the time. ' +
                'Even after leaving Free Zone main, it keeps running and finds available Wi-Fi for you!<br/>' +
                '<br/>And you can also share new networks with the entire Free Zone community worldwide.<br/>' +
                '<br/>By now, <strong style="color:#bdde59">there are already over 300 thousand available networks ' +
                'registered by Free Zone</strong>, and potentially over 26 million networks to be shared! Ask your ' +
                'friends to help you make the Free Zone community grow bigger and bigger!',

        'help-how-works-title-text' : 'How does it work?',
        'help-how-works-content-text' : 'Free Zone is always looking for Wi-Fi networks nearby.<br/>' +
                '<br/>When Wi-Fi networks are found, Free Zone <strong style="color:#bdde59">tries to automatically connect</strong> to the one with the ' +
                'best signal. It can connect to open networks, your already known networks, or, what is even better, ' +
                'it <strong style="color:#bdde59">can connect to networks which are unknown by you</strong> that were shared with the Free Zone community.<br/>' +
                '<br/><strong style="color:#bdde59">Open and shared Wi-Fi networks are known as Free Zones.</strong> As the number of people on the community ' +
                'and number of shared networks grow, it will be easier to find Free Zones wherever you go.<br/>',

        'help-updating-data-title-text' : 'Updating data',
        'help-updating-data-content-text' : 'Free Zone app keeps a data base with information of all the available ' +
                'Free Zones.<br/>' +
                '<br/>To update this data and be able to find the Free Zones, the <strong style="color:#bdde59">app needs to have access to the ' +
                'portal</strong>. It has to be done <strong style="color:#bdde59">at least once</strong> after the installation, so the app ' +
                '<strong style="color:#bdde59">can properly work.</strong> If you are not connected to a Wi-Fi network, Free Zone may use ' +
                'your 3G to make the necessary update.<br/>',

        'help-creating-zg-title-text' : 'Creating a Free Zone',
        'help-creating-zg-content-text' : '<strong style="color:#bdde59">Sharing new networks with Free Zone users is the key element</strong> ' +
                'for Free Zone to work even better, and achieve the goal of taking free portal access to more people ' +
                'and places.<br/>' +
                '<br/>When you know a password for a Wi-Fi network and you <strong style="color:#bdde59">share this password with the ' +
                'community</strong>, you will create a new Free Zone, <strong style="color:#bdde59">contributing to increase the available areas ' +
                'with free portal access.</strong><br/>' +
                '<br/>It is also good to know that:<br/>' +
                    '<br/><span style="margin-left: 16px">- The <strong style="color:#bdde59">password for a shared network is safely kept</strong> at the server and is never revealed, ' +
                    'not even for other Free Zone users;</span><br/>' +
                    '<br/><span style="margin-left: 16px">- <strong style="color:#bdde59">Only Free Zone users will be able to access shared Wi-Fi networks</strong> through ' +
                    'their devices;</span><br/>' +
                    '<br/><span style="margin-left: 16px">- Whenever possible, <strong style="color:#bdde59">the geolocation of the shared network will be stored</strong> so the app ' +
                    'can indicate where the Free Zones are located on the map.</span>',

        'help-always-on-title-text' : 'Always on',
        'help-always-on-content-text' : 'When you leave the Free Zone app, it <strong style="color:#bdde59">continues running on ' +
                'background</strong> so it can keep on searching for networks. This way, even without direct ' +
                'interaction, the app will connect to Wi-Fi networks, allowing other apps to download data to ' +
                'your device (such as downloading emails).',

        'help-beta-version-title-text' : 'Beta Version',
        'help-beta-version-content-text' : 'This product is in beta version and is improving with the feedback ' +
                'of our users! Help us make it even better. Send your critic, suggestion or compliment ' +
                'to <a style="color:#bdde59" href="mailto:help@zonagratis.com.br" target="_blank">help@zonagratis.com.br</a>.',

        'terms-of-use-message-text' : 'Please carefully read this agreement that provides for the terms and conditions ' +
                'governing the operation of the application (software) Zona Grátis. Upon using the application Zona Grátis,' +
                'Users agree to be bound by this agreement terms and conditions.<br/>' +

                '<br/><strong>1. Definitions</strong><br/>' +
                '<strong>1.1</strong> The following words or expressions, if mentioned herein, shall mean:<br/>' +
                'Zona Grátis: application and/or software enabling Users to send and receive content, via Wi-Fi; browse the Internet ' +
                'and share Wi-Fi networks, whether open or not, with friends registered with their social networks. ' +
                'Zona Grátis also provides entertainment through services and promotions, as well as access to social network.<br/>' +
                'Provider: company named Alouw Internet LTDA., with main office at Rua Alexandre Dumas, n. 1.711, ' +
                'Ed. Birmann 12, 2º andar, São Paulo-SP, CEP 04717-004, whose CNPJ/MF (Corporate Taxpayer’s Number) is ' +
                '13.516.831/0001-62, owner of the property and copyright related to the application and/or software Zona Grátis.<br/>' +
                'User: all and any person legally capable of using Zona Grátis.<br/>' +

                '<br/><strong>2. Acceptance Terms</strong><br/>' +
                '<strong>2.1</strong> The use of Zona Grátis by Users shall automatically mean their full acceptance of the terms and conditions ' +
                'herein. In case of no acceptance, Users shall not be allowed to use Zona Grátis.<br/>' +
                '<strong>2.2</strong> Any person who is not capable pursuant to the laws in force shall not use Zona Grátis or accept ' +
                'this agreement terms and conditions.<br/>' +

                '<br/><strong>3. Zona Grátis Use</strong><br/>' +
                '<strong>3.1</strong> Users can access Zona Grátis through cell phones, via Wi-Fi or other mobile communication technology, ' +
                'and the carrier can charge such access. Pre-paid or postpaid cell phones can be used, as long as they ' +
                'are equipped with the required technology, through the carrier or other networks.<br/>' +
                '<strong>3.2</strong> To gain access to Zona Grátis, Users can be asked to supply personal data (such as identification ' +
                'or contact info) as a part of the registration process or as a part of the continued use of Zona Grátis. ' +
                'Users agree the registration information they provide shall always be accurate, correct and up-to-date.<br/>' +
                '<strong>3.3</strong> Users agree to use Zona Grátis only for the allowed purposes: (a) as mentioned herein; and (b) ' +
                'by any laws, regulations or generally accepted guidelines.<br/>' +
                '<strong>3.4</strong> Users agree not to access (or try to access) Zona Grátis by any means other than through the ' +
                'interface supplied by the Provider.<br/>' +
                '<strong>3.5</strong> Users agree not to take part in any activity interfering or interrupting Zona Grátis operation ' +
                '(or servers and networks connected to Zona Grátis).<br/>' +
                '<strong>3.6</strong> Users agree not to reproduce, duplicate, copy, sell, commercialize or resell Zona Grátis for ' +
                'any purpose whatsoever.<br/>' +
                '<strong>3.7</strong> Users agree they will be the only parties liable (and that Zona Grátis is not liable to Users ' +
                'or third parties) for any failure to perform their obligations concerning the terms and conditions ' +
                'hereof and for the consequences (including any loss or damage Zona Grátis can sustain) resulting ' +
                'from such failure.<br/>' +

                '<br/><strong>4. Policy of Use and Limitation of Liability</strong><br/>' +
                '<strong>4.1</strong> Users shall be solely liable for all their actions, behavior or omissions. Users shall not ' +
                'share or allow third parties to access their passwords and shall also hold in confidentiality the ' +
                'passwords associated with any account they use to access Zona Grátis. Users shall also be responsible ' +
                'for the acts performed by third parties in their name, by using their cell phone or chip. Users ' +
                'undertake to compensate the Provider for any costs, damages or obligations sustained due to Users’ acts ' +
                'or omissions which violate the laws and the terms and conditions hereof, which can result in ' +
                'consequences of civil or criminal nature.<br/>' +
                '<strong>4.2</strong> The Provider reserves the right, at its discretion, to cancel the registration and disqualify ' +
                'any Users if the Provider thinks that Users are acting in bad faith concerning the process of use ' +
                'of Zona Grátis such as, however without limitation to reverse engineering, translation, modification, ' +
                'compilation, attempt to access the source code of the application Zona Grátis, act in violation hereof, ' +
                'exploit and develop derivatives and imitations of Zona Grátis.<br/>' +
                '<strong>4.3</strong> The Provider shall not be responsible for:<br/>' +
                '(a) any direct, indirect, incidental, special, consequential or exemplary damages sustained by Users, ' +
                'caused and under any theory of liability. That includes, however without limitation to any loss of ' +
                'data Users can sustain, with losses of costs of acquisition of goods or services or other intangible loss;<br/>' +
                '(b) any loss or damage Users can sustain, including, however without any limitation to losses or ' +
                'damages resulting from:<br/>' +
                '(i) any Users’ expectation concerning the integrity, accuracy or existence of any advertisements or ' +
                'as the result from any relation or transaction conducted with any advertiser or sponsor whose ' +
                'advertisement is shown in Zona Grátis;<br/>' +
                '(ii) any changes made in Zona Grátis due to any permanent or temporary cessation of the supply ' +
                'of Zona Grátis, or any functionalities in Zona Grátis itself;<br/>' +
                '(iii) elimination, corruption or incapacity to store any content or other communication ' +
                'data maintained or transmitted using Zona Grátis by Users;<br/>' +
                '(iv) Users’ failure to safeguard their account and password safety and confidentiality.<br/>' +

                '<br/><strong>5. Property Rights</strong><br/>' +
                '<strong>5.1</strong> The Provider holds all the legal rights, titles and interest related to Zona Grátis, including ' +
                'any intellectual property rights underlying in Zona Grátis, regardless such rights are registered ' +
                'or not and anywhere in the world where such rights can exist.<br/>' +

                '<br/><strong>6. Zona Grátis License</strong><br/>' +
                '<strong>6.1</strong> The Provider gives Users a personal, international, limited, noncommercial, royalty-free, ' +
                'non-assignable and non-exclusive license for the specific purpose of using Zona Grátis as it is ' +
                'supplied and pursuant to this agreement.<br/>' +
                '<strong>6.2</strong> Users shall not exploit, distribute, copy, modify, create derivative work, conduct reverse ' +
                'engineering, decompile, disassemble, reduce, adjust or any other way try or extract Zona Grátis source code.<br/>' +
                '<strong>6.3</strong> Users shall not assign or grant any sublicense or guarantee of their rights to use Zona Grátis, ' +
                'or any other way transfer them, whether partially or totally.<br/>' +

                '<br/><strong>7. Software updates</strong><br/>' +
                '<strong>7.1</strong> Zona Grátis can occasionally download and install updates automatically. Such updates are ' +
                'conceived to improve, streamline and develop Zona Grátis and can be provided as patches, improved ' +
                'functions, new software modules and brand-new versions. Users agree to receive such ' +
                'update as part of the use of Zona Grátis.<br/>' +
                '<strong>7.2</strong> Zona Grátis can occasionally evidence malfunction and potential security failures in case the ' +
                'application version is not updated. As a result, keep the application up-to-date ' +
                'and avoid connection issues.<br/>' +

                '<br/><strong>8. Termination of the relation between Users and Zona Grátis</strong><br/>' +
                '<strong>8.1</strong> In addition to the other events provided herein, Zona Grátis can any time terminate it if:<br/>' +
                '(A) Users have violated any term or condition herein or have behaved in a way clearly demonstrating ' +
                'that they do not intend or cannot comply with them;<br/>' +
                '(B) such action is required from Zona Grátis due to a court order or by a new law which prevents, ' +
                'prohibits or makes Zona Grátis continuity unfeasible; or<br/>' +
                '(C) Zona Grátis is no longer commercially viable to the Provider.<br/>' +

                '<br/><strong>9. Exclusion of Warranties</strong><br/>' +
                '<strong>9.1</strong> Users understand and expressly agree the use of Zona Grátis is at their own risk, and Zona ' +
                'Grátis is supplied on a "as it is" and "availability" basis.<br/>' +
                '<strong>9.2</strong> The Provider shall not warrant:<br/>' +
                '(a) Zona Grátis use will meet Users’ requirements;<br/>' +
                '(b) Zona Grátis use will be uninterrupted, timely, safe and free from errors;<br/>' +
                '(c) any information obtained by Users resulting from the use of Zona Grátis will be accurate or reliable; and<br/>' +
                '(d) failures in the operation or functionality of any software supplied to Users as part of Zona Grátis will be repaired.<br/>' +
                '<strong>9.3</strong> Any material or software downloaded by Users or obtained otherwise by means of Zona Grátis is ' +
                'obtained at Users’ sole discretion and risk, and Users shall be singly liable for any damage to ' +
                'the system of their computers or any other equipment, as well as for any potential loss ' +
                'of data as the result from downloading any material.<br/>' +

                '<br/><strong>10. Cookie and Privacy Policy</strong><br/>' +
                '<strong>10.1</strong> Upon registering with Zona Grátis, Users shall supply personal data which identify them.<br/>' +
                '<strong>10.2</strong> In order to improve the performance and manage Users’ information, Zona Grátis can use cell ' +
                'phone ID or cookies. Cookies are small pieces of information a website transfers to a hard disk ' +
                'for the purpose of maintaining records. Cookies make web browsing easier for users by saving users’ ' +
                'registration, passwords and references while users are on the site.  The use of cookies is a ' +
                'standard procedure – they can be found in most large Websites.  Through the command "searching" for ' +
                'a cookie, servers can determine whether users have registered to use the service or not. Cookies can ' +
                'also help Zona Grátis to provide users with better service. By using cookies, Zona Grátis can better ' +
                'comprehend which information users are interested in.<br/>' +
                '<strong>10.3</strong> Zona Grátis personally collects identifying information during the use of the service and ' +
                'such information can be used from time to time to: confirm entries and selectively display users’ ' +
                'ads or send promotions. However, Users’ e-mails, addresses, passwords (keys) and other personal ' +
                'information are kept in safe databases in order to protect the Users’ privacy; however they can be ' +
                'shared with third parties according to Zona Grátis interest.<br/>' +
                '<strong>10.4</strong> Zona Grátis uses the collected information for the following general purposes:<br/>' +
                '(a) Optimize the use and the interactive experience during Users’ browsing;<br/>' +
                '(b) Prepare general statistics without identifying the Users;<br/>' +
                '(c) Answer Users’ questions and requests;<br/>' +
                '(d) Carry out communication and marketing campaigns of its own or jointly with partners;<br/>' +
                '(e) Communicate with Users, to provide information about the company, products, services and promotions;<br/>' +
                '(f) Support the investigation of security incidents or violation of laws or of these Terms and Conditions.<br/>' +
                '(g) Identify the site where the hotspot is working and provide better services on the platform.<br/>' +
                '<strong>10.5</strong> Zona Grátis respects your privacy. In case you have any question about this policy, please send ' +
                'it to: support.zonagratis@alouw.com<br/>' +

                '<br/><strong>11. Modifications</strong><br/>' +
                '<strong>11.1</strong> The Provider can change, modify, add or remove parts of this agreement any time and at its ' +
                'sole discretion. Users understand and agree their use of Zona Grátis after the date of change of ' +
                'any term and condition hereof shall mean their full acceptance.<br/>' +
                '<strong>11.2</strong> As a result from the prior item, Users shall frequently check the terms and conditions of ' +
                'this agreement to become aware of any modifications.<br/>' +

                '<br/><strong>12. General</strong><br/>' +
                '<strong>12.1</strong> In case Zona Grátis fails to exercise or use any rights contained herein or granted by the ' +
                'laws, that shall not mean waiver, and such rights shall remain available for all purposes.<br/>' +
                '<strong>12.2</strong> In case any item, clause and/or term or condition hereof is regarded as invalid, such fact ' +
                'shall not affect the others, which shall remain in full force.<br/>' +
                '<strong>12.3</strong> This agreement and the relationship between Users and Zona Grátis shall be governed by ' +
                'the Brazilian laws, regardless of the conflict of legal clauses.<br/>' +
                '<strong>12.4</strong> The parties hereby select the Court of the City of São Paulo, State of São Paulo, to settle ' +
                'any dispute arising out of this agreement, with the exclusion of any others, ' +
                'however privileged they can be.<br/>'
    },
    es: {
        'title' : 'Zona Libre',
        'no-results' : 'No hay resultados',
        'getting-your-position' : 'Obtener su posición...',
        'no-network-nearby' : 'Ninguna red cercana',
        'you-are-here' : 'Usted está aquí',
        'map-not-found-text' : 'No se puede obtener su posición. Haga doble clic en una región para ampliar el mapa.',
        'map-beta-logo-img' : 'url(../img/es-logo.png)',
        'text-loading' : 'Por favor, autorizar la aplicación para obtener su posición actual o haga clic aquí para seleccionar manualmente',
        'text-choose' : 'Elige tu dispositivo:',
        'text-iphone' : 'iPhone y otros (open network)',
        'text-android' : 'Android (all networks)',
        'map-title-text' : '100 Zonas Libres cerca de usted',
        'download-android-version' : 'Haga clic aquí para descargar la versión de Android de la Zona Libre!',
        'connection-status-conected-text' : 'Conectado',
        'connection-status-trying-text' : 'Intentando...',
        'connection-status-noconnection-text' : 'Sin conexíon',
        'connection-status-wifioff-text' : 'Wifi apagado',
        'connection-status-validating-text' : 'Validando...',
        'connection-status-nointernet-text' : 'Sin portal',
        'connection-status-offlinemode-text' : 'Desconectado',
        'connection-status-nonetwork-text' : 'No redes',
        'connection-status-onenetworknearby-text' : 'Una red cerca',
        'connection-status-networksnearby-text' : ' redes cerca',
        'connection-status-see-the-map' : 'Ver el mapa',
        'connection-status-click-here' : 'Clic acá',
        'welcome-message' : 'Bienvenidos a la Zona Libre!',
        'placeholder' : '',
        'app-name' : 'Zona Libre Wi-Fi',
        'not-supported-on-android' : 'Función disponible sólo en la aplicación para Android',
        'network-list-title-text' : 'Redes Disponibles',
        'network-list-button-back-text' : 'Atrás',
        'network-list-beta-logo-img' : 'url(../img/es-logo.png)',
        'network-list-loading-networks-text' : 'Cargando...',
        'network-list-no-network-found-yet-text' : 'Ninguna red detectada...',
        'terms-of-use-button-accept-text' : 'Aceptar',
        'terms-of-use-button-leave-text' : 'Salir',
        'terms-of-use-title-text' : 'Términos de Uso',
        'terms-of-use-beta-logo-img' : 'url(../img/es-logo.png)',
        'look-for-networks-status-text' : 'Buscando...',
        'look-for-networks-message-text' : 'Please wait while Free Zone searches for networks and updates the data base.<br/>',
        'look-for-networks-beta-logo-img' : 'url(../img/es-logo.png)',
        'update-available' : '<strong style="color:#bdde59">Actualización disponible:<br/>haga clic aquí para ver!</strong>',
        'portal-fb-share-text' : '<strong>Zona Libre</strong> en Facebook',
        'portal-fb-share-like-text' : 'Me gusta',
        'portal-row01-column01-text' : 'Juegos Gratis',
        'portal-row01-column02-text' : 'Playboy',
        'portal-row01-column03-text' : 'Youtube',
        'portal-row02-column01-text' : 'Facebook',
        'portal-row02-column02-text' : 'Twitter',
        'portal-row02-column03-text' : 'Orkut',
        'portal-row03-column01-text' : 'Wikipedia',
        'portal-row03-column02-text' : 'Gmail',
        'portal-row03-column03-text' : 'Yahoo!',
        'portal-beta-logo-img' : 'url(../img/es-logo.png)',
        'main-not-zg-notification-title-text' : 'Esta red no es una Zona Libre.',
        'main-not-zg-notification-message-text' : 'Convertirla en una red Zona Libre para que sus amigos también se puede utilizar.',
        'main-zg-notification-title-text' : 'Navegar por Internet gratis!!!',
        'main-zg-notification-message-text' : 'Usted está conectado a una Zona Libre!',
        'main-internet-button-text' : 'Navegar por Internet',
        'main-share-network-button-text' : 'Compartir red',
        'main-icon-map-text' : 'Buscar zonas libres en el mapa',
        'main-icon-network-text' : 'Ver redes Wi-Fi cercanas',
        'main-network-name-text' : 'Conectado a:',
        'main-beta-logo-img' : 'url(img/es-logo.png)',
        'main-download-market' : 'Descargar en Android Market',
        'search-zg-notification-title-text' : 'Hay más de 300.000 redes Zona Libre en todo el mundo!',
        'search-zg-notification-message-text' : 'Cuando hay una zona libre cerca, se puede usar Internet gratis!',
        'search-failed-notification-title-text' : 'Error en la conexion.',
        'search-failed-notification-message-text' : 'No se encontró ningúna zona libre por aquí.',
        'search-tip-notification-title-text' : 'Atención!',
        'search-tip-notification-message-text' : 'Este icono muestra que hay una zona libre disponible!',
        'search-zg-button-text' : 'Buscar Zonas Libres',
        'search-zg-retry-button-text' : 'Volver a intentarlo',
        'search-map-3g-button-text' : 'Localizar en mapa',
        'search-continue-button-text' : 'Seguir en esta red',
        'search-beta-logo-img' : 'url(../img/es-logo.png)',

        'dealoftheday-show-text' : 'Mostrar Oferta del Día',
        'dealoftheday-title-text' : 'Oferta del Día',

        'help-title-text' : 'Ayuda',

        'help-what-is-it-title-text' : 'What is it?',
        'help-what-is-it-content-text' : 'Free Zone app wants to bring <strong style="color:#bdde59">portal for all</strong>!<br/>' +
                '<br/>The Free Zone app helps your ANDROID to find open and shared Wi-Fi networks with portal access. ' +
                'Using this app, you\'ll be able to check your emails, Facebook, Twitter and more, <strong style="color:#bdde59">much faster ' +
                'than 3G and totally FREE!</strong><br/>' +
                '<br/>The app <strong style="color:#bdde59">automatically finds available networks</strong>, so you stay connected all the time. ' +
                'Even after leaving Free Zone main, it keeps running and finds available Wi-Fi for you!<br/>' +
                '<br/>And you can also share new networks with the entire Free Zone community worldwide.<br/>' +
                '<br/>By now, <strong style="color:#bdde59">there are already over 300 thousand available networks ' +
                'registered by Free Zone</strong>, and potentially over 26 million networks to be shared! Ask your ' +
                'friends to help you make the Free Zone community grow bigger and bigger!',

        'help-how-works-title-text' : 'How does it work?',
        'help-how-works-content-text' : 'Free Zone is always looking for Wi-Fi networks nearby.<br/>' +
                '<br/>When Wi-Fi networks are found, Free Zone <strong style="color:#bdde59">tries to automatically connect</strong> to the one with the ' +
                'best signal. It can connect to open networks, your already known networks, or, what is even better, ' +
                'it <strong style="color:#bdde59">can connect to networks which are unknown by you</strong> that were shared with the Free Zone community.<br/>' +
                '<br/><strong style="color:#bdde59">Open and shared Wi-Fi networks are known as Free Zones.</strong> As the number of people on the community ' +
                'and number of shared networks grow, it will be easier to find Free Zones wherever you go.<br/>',

        'help-updating-data-title-text' : 'Updating data',
        'help-updating-data-content-text' : 'Free Zone app keeps a data base with information of all the available ' +
                'Free Zones.<br/>' +
                '<br/>To update this data and be able to find the Free Zones, the <strong style="color:#bdde59">app needs to have access to the ' +
                'portal</strong>. It has to be done <strong style="color:#bdde59">at least once</strong> after the installation, so the app ' +
                '<strong style="color:#bdde59">can properly work.</strong> If you are not connected to a Wi-Fi network, Free Zone may use ' +
                'your 3G to make the necessary update.<br/>',

        'help-creating-zg-title-text' : 'Creating a Free Zone',
        'help-creating-zg-content-text' : '<strong style="color:#bdde59">Sharing new networks with Free Zone users is the key element</strong> ' +
                'for Free Zone to work even better, and achieve the goal of taking free portal access to more people ' +
                'and places.<br/>' +
                '<br/>When you know a password for a Wi-Fi network and you <strong style="color:#bdde59">share this password with the ' +
                'community</strong>, you will create a new Free Zone, <strong style="color:#bdde59">contributing to increase the available areas ' +
                'with free portal access.</strong><br/>' +
                '<br/>It is also good to know that:<br/>' +
                    '<br/><span style="margin-left: 16px">- The <strong style="color:#bdde59">password for a shared network is safely kept</strong> at the server and is never revealed, ' +
                    'not even for other Free Zone users;</span><br/>' +
                    '<br/><span style="margin-left: 16px">- <strong style="color:#bdde59">Only Free Zone users will be able to access shared Wi-Fi networks</strong> through ' +
                    'their devices;</span><br/>' +
                    '<br/><span style="margin-left: 16px">- Whenever possible, <strong style="color:#bdde59">the geolocation of the shared network will be stored</strong> so the app ' +
                    'can indicate where the Free Zones are located on the map.</span>',

        'help-always-on-title-text' : 'Always on',
        'help-always-on-content-text' : 'When you leave the Free Zone app, it <strong style="color:#bdde59">continues running on ' +
                'background</strong> so it can keep on searching for networks. This way, even without direct ' +
                'interaction, the app will connect to Wi-Fi networks, allowing other apps to download data to ' +
                'your device (such as downloading emails).',

        'help-beta-version-title-text' : 'Beta Version',
        'help-beta-version-content-text' : 'This product is in beta version and is improving with the feedback ' +
                'of our users! Help us make it even better. Send your critic, suggestion or compliment ' +
                'to <a style="color:#bdde59" href="mailto:help@zonagratis.com.br" target="_blank">help@zonagratis.com.br</a>.',

        'terms-of-use-message-text' : 'Se solicita la lectura atenta de este acuerdo que dispone sobre los términos ' +
                'y condiciones que disciplinan el funcionamiento de la aplicación (software) Zona Grátis. Al utilizar ' +
                'la aplicación Zona Grátis el Usuario concuerda en vincularse a las reglas de este acuerdo.<br/>' +

                '<br/><strong>1. Definiciones</strong><br/>' +
                '<strong>1.1</strong> Las siguientes palabras o expresiones, cuando citadas en este acuerdo, deberán entenderse como:<br/>' +
                'Zona Grátis: aplicación y/o software que le permite al Usuario enviar y recibir contenido, vía Wi-Fi; ' +
                'navegar en portal y compartir redes Wi-Fi, abiertas o no, con los amigos registrados en sus redes ' +
                'sociales. El Zona Grátis también ofrece oportunidades de entretenimiento a través de servicios y ' +
                'promociones, así como accesos a redes sociales.<br/>' +
                'Proveedor: sociedad denominada Alouw Internet LTDA., con domicilio en Rua Alexandre Dumas, ' +
                'nº 1.711, Ed. Birmann 12, 2º andar, São Paulo-SP, CEP 04717-004, debidamente inscrita en el CNPJ/MF ' +
                'bajo n° 13.516.831/0001-62, detenedora de los derechos de autor y patrimoniales de la ' +
                'aplicación y/o software Zona Grátis.<br/>' +
                'Usuario: toda y cualquier persona legalmente capaz para utilizar el Zona Grátis.<br/>' +

                '<br/><strong>2. Aceptación de los Términos</strong><br/>' +
                '<strong>2.1</strong> El uso del Zona Grátis por el Usuario implica automáticamente su aceptación integral de los ' +
                'términos de este acuerdo. En el caso de no aceptación no se le permitirá al Usuario la ' +
                'utilización del Zona Grátis.<br/>' +
                '<strong>2.2</strong> No podrá utilizar el Zona Grátis no aceptar los términos de este acuerdo la persona que no ' +
                'sea capaz en los términos de la ley vigente.<br/>' +

                '<br/><strong>3. Uso del Zona Grátis</strong><br/>' +
                '<strong>3.1</strong> El Usuario puede acceder al Zona Grátis a través de teléfonos celulares, vía Wi-Fi u otra ' +
                'tecnología de comunicación móvil, pudiendo haber tarifación por parte de la operadora. Pueden ' +
                'usarse teléfonos celulares prepagos o post pagos, siempre y cuando estén equipados con la tecnología ' +
                'necesaria, a través de la operadora u otras redes.<br/>' +
                '<strong>3.2</strong> Para acceder al Zona Grátis, podrá solicitársele al Usuario que proporcione información personal ' +
                '(como identificación o detalles de contacto) como parte del proceso de registro o como parte de la ' +
                'utilización continuada del Zona Grátis. El Usuario concuerda que la información de registro que ' +
                'proporcione será siempre exacta, correcta y actualizada.<br/>' +
                '<strong>3.3</strong> El Usuario concuerda en usar el Zona Grátis solamente para los fines permitidos: (a) por el ' +
                'presente acuerdo; y (b) por cualesquier leyes, reglamentos o directrices generalmente aceptadas.<br/>' +
                '<strong>3.4</strong> El Usuario concuerda en no acceder (ni tampoco intentar acceder) al Zona Grátis por cualquier ' +
                'otro medio que no sea a través de la interfaz suministrada por el Proveedor.<br/>' +
                '<strong>3.5</strong> El Usuario concuerda en no participar en ninguna actividad que interfiera o interrumpa el ' +
                'funcionamiento del Zona Grátis (o servidores y redes conectados al Zona Grátis).<br/>' +
                '<strong>3.6</strong> El Usuario concuerda en no reproducir, duplicar, copiar, vender, comercializar o revender ' +
                'el Zona Grátis para cualquier efecto.<br/>' +
                '<strong>3.7</strong> El Usuario concuerda que será el único responsable (y que Zona Grátis no tiene ninguna ' +
                'responsabilidad ante el Usuario o terceros) por cualquier incumplimiento de sus obligaciones en lo ' +
                'que se refiere a los términos del presente acuerdo y por las consecuencias (incluyendo pérdida o ' +
                'daño Zona Grátis pueda sufrir) resultantes de dicho incumplimiento.<br/>' +

                '<br/><strong>4. Política de Uso y Limitación de Responsabilidades</strong><br/>' +
                '<strong>4.1</strong> El Usuario es exclusivamente responsable de todas sus acciones, comportamientos u omisiones. ' +
                'El Usuario no debe compartir o permitir a terceros acceso a sus contraseñas, debiendo mantener la ' +
                'confidencialidad de las contraseñas asociadas a cualquier cuenta que utilice el acceso al Zona Grátis. ' +
                'El Usuario es también responsable de acciones practicadas por terceros en su nombre, por medio del ' +
                'uso de su aparato celular o chip. El Usuario asegura indemnizarle al Proveedor cualesquier costos, ' +
                'daños u obligaciones derivados de acciones u omisiones del Usuario que violen la ley y los términos ' +
                'de este acuerdo, pudiendo generar consecuencias de orden civil o criminal.<br/>' +
                '<strong>4.2</strong> El Proveedor se reserva el derecho de, a su juicio, retirar del registro y descalificar a ' +
                'cualquier Usuario al considerar que esté actuando de mala fe respecto del proceso de uso del Zona ' +
                'Grátis, tales como, pero sin limitación, ingeniería reversa, traducción, modificación, compilación, ' +
                'intento de acceder al código-fuente de la aplicación Zona Grátis, actuar en violación de los términos ' +
                'de este acuerdo, explotar y desarrollar derivativos e imitaciones del Zona Grátis.<br/>' +
                '<strong>4.3</strong> El Proveedor no se responsabiliza de:<br/>' +
                '(a) cualesquier daños directos, indirectos, incidentales, especiales, consecuenciales o ejemplares ' +
                'incurridos por el Usuario, causados y bajo cualquier teoría de responsabilidad. Esto incluirá, pero ' +
                'sin limitación, cualquier pérdida de datos que el Usuario pueda sufrir, con pérdidas de costos de ' +
                'adquisición de bienes o servicios u otra pérdida intangible;<br/>' +
                '(b) cualquier pérdida o daño en que pueda incurrir el Usuario, incluyendo, pero sin limitación, ' +
                'pérdida o daños en virtud de:<br/>' +
                '(i) cualquier expectativa del Usuario en cuanto a la integridad, precisión o existencia de cualquier ' +
                'publicidad, o como resultado de cualquier relación o transacción realizada con cualquier anunciante ' +
                'o patrocinador cuya publicidad aparezca en el Zona Grátis;<br/>' +
                '(ii) cualesquier alteraciones que pueda hacer en el Zona Grátis, por cualquier cesación permanente ' +
                'o temporal del suministro del Zona Grátis¸ o cualesquier funcionalidades en el propio Zona Grátis;<br/>' +
                '(iii) la eliminación, corrupción o incapacidad de almacenamiento de cualquier contenido u otros ' +
                'datos de comunicaciones mantenidos o transmitidos por la utilización del Zona Grátis por parte del Usuario;<br/>' +
                '(iv) el no mantenimiento, por parte del Usuario, de la seguridad y la confidencialidad de los ' +
                'detalles de sus cuentas y contraseñas.<br/>' +

                '<br/><strong>5. Derechos de Propiedad</strong><br/>' +
                '<strong>5.1</strong> El Proveedor detiene todos los derechos legales, títulos y participaciones relativos al Zona Grátis, ' +
                'incluyendo cualesquier derechos de propiedad intelectual que subsistan en el Zona Grátis, sin importar ' +
                'que derechos estén registrados o no y en cualquier parte del mundo en donde puedan existir esos derechos.<br/>' +

                '<br/><strong>6. Licencia del Zona Grátis</strong><br/>' +
                '<strong>6.1</strong> El Proveedor le concede al Usuario una licencia personal, internacional, limitada, no comercial, ' +
                'exenta de "royalties", no atribuible y no exclusiva para el fin específico de utilizar el Zona Grátis ' +
                'tal y como es suministrado y en la forma permitida en este acuerdo.<br/>' +
                '<strong>6.2</strong> El Usuario no podrá explotar, distribuir, copiar, modificar, crear una obra derivada, realizar ' +
                'ingeniería inversa, descompilar, desmontar, reducir, adaptar o, de cualquier otro modo, intentar o ' +
                'extraer el código-fuente del Zona Grátis.<br/>' +
                '<strong>6.3</strong> El Usuario no podrá atribuir o conceder sublicencia o garantía de sus derechos de utilización del ' +
                'Zona Grátis, o de cualquier otro modo, transferirlos, total o parcialmente.<br/>' +

                '<br/><strong>7. Actualizaciones de software</strong><br/>' +
                '<strong>7.1</strong> El Zona Grátis puede, ocasionalmente, efectuar download e instalar automáticamente ' +
                'actualizaciones. Esas actualizaciones son concebidas para mejorar, perfeccionar y desarrollar el Zona ' +
                'Grátis y pueden presentarse bajo la forma de correcciones de errores, funciones mejoradas, nuevos ' +
                'módulos de software y versiones completamente nuevas. El Usuario concuerda en recibir esas ' +
                'actualizaciones como parte de la utilización del Zona Grátis.<br/>' +
                '<strong>7.2</strong> El Zona Grátis puede, ocasionalmente, presentar mal funcionamiento y eventuales fallas de ' +
                'seguridad si la versión de la aplicación no está actualizada. Mantenga actualizada la aplicación y ' +
                'evite problemas de conexión.<br/>' +

                '<br/><strong>8. Término de la relación del Usuario con el Zona Grátis</strong><br/>' +
                '<strong>8.1</strong> Además de las demás hipótesis previstas en el presente acuerdo, el Zona Grátis puede, a cualquier ' +
                'momento, cerrarse en el caso de que:<br/>' +
                '(A) el Usuario haya violado cualquier término de este acuerdo o aún haya actuado de forma que ' +
                'claramente muestre que no pretende o no puede cumplirlos;<br/>' +
                '(B) tal acción sea exigida del Zona Grátis por determinación judicial o por ley nueva que imposibilite, ' +
                'prohíba o haga inviable la continuidad del Zona Grátis; o<br/>' +
                '(C) el Zona Grátis deje de ser comercialmente viable para el Proveedor.<br/>' +

                '<br/><strong>9. Exclusión de Garantías</strong><br/>' +
                '<strong>9.1</strong> El Usuario entiende y concuerda expresamente que el uso del Zona Grátis se realiza a su cargo y riesgo, ' +
                'así como que el Zona Grátis se suministra "en la forma en que se encuentra" y "de acuerdo a la disponibilidad".<br/>' +
                '<strong>9.2</strong> El Proveedor no garantiza que:<br/>' +
                '(a) el uso del Zona Grátis atenderá a los requisitos del Usuario;<br/>' +
                '(b) el uso del Zona Grátis será ininterrumpido, puntual, seguro y exento de errores;<br/>' +
                '(c) cualquier información que obtenga el Usuario en virtud del uso del Zona Grátis será precisa o confiable; y<br/>' +
                '(d) los defectos en el funcionamiento o en la funcionalidad de cualquier software suministrado al ' +
                'Usuario como parte del Zona Grátis serán corregidos.<br/>' +
                '<strong>9.3</strong> Cualquier material o software descargado por el Usuario u obtenido de otra forma por medio del ' +
                'Zona Grátis es obtenido a su propio juicio y riesgo, siendo el Usuario el único responsable de ' +
                'cualquier daño al sistema de su computadora o cualquier otro aparato, así como de la pérdida de ' +
                'datos que eventualmente suceda como resultado del download de cualquier material.<br/>' +

                '<br/><strong>10. Política de Privacidad y Cookies</strong><br/>' +
                '<strong>10.1</strong> Al registrarse en el Zona Grátis, el Usuario proporcionará información personal capaz de identificarlo.<br/>' +
                '<strong>10.2</strong> A fin de mejorar el desempeño y  gestionar información del Usuario, el Zona Grátis puede ' +
                'utilizar cookies o ID de celulares. Los cookies son pequeños trozos de información que un sitio web ' +
                'transfiere al disco rígido a los fines de mantenimiento de registros. Los cookies hacen la navegación ' +
                'en la web más fácil para el usuario salvando el registro del usuario, las contraseñas y referencias ' +
                'mientras el usuario está en el sitio. El uso de cookies es un procedimiento estándar – ellos se ' +
                'encuentran en la mayoría de los grandes sitios web. A través del mando "buscando" por un cookie, ' +
                'servidores pueden determinar o no si el usuario ya se registró para usar el servicio. Los cookies ' +
                'también ayudan Zona Grátis a atender mejor a los usuarios. A través de la utilización de cookies Zona ' +
                'Grátis puede comprender mejor que información es de más interés para los usuarios.<br/>' +
                '<strong>10.3</strong> El Zona Grátis recoge personalmente información identificadora durante el uso del servicio y ' +
                'esta información podrá utilizarse esporádicamente para: confirmar entradas, y selectivamente mostrar ' +
                'anuncios de usuarios o enviar promociones. Sin embargo, e-mails de los Usuarios, direcciones, contraseñas ' +
                '(claves) y otras informaciones personales son mantenidas en bancos de datos seguros para proteger la ' +
                'privacidad del Usuario, pero pueden compartirse con terceros, de acuerdo a los intereses del Zona Grátis.<br/>' +
                '<strong>10.4</strong> El Zona Grátis usa la información colectada para las siguientes finalidades generales:<br/>' +
                '(a) Optimizar el uso y la experiencia interactiva durante la navegación de Usuarios;<br/>' +
                '(b) Elaborar generalidades estadísticas sin identificación de Usuarios;<br/>' +
                '(c) Despejar dudas y atender a solicitudes de sus Usuarios;<br/>' +
                '(d) Efectuar campañas de comunicación y marketing propias o juntamente con aparceros;<br/>' +
                '(e) Comunicarse con Usuarios, para brindarles información sobre la compañía, productos, servicios y promociones;<br/>' +
                '(f) Ayudar en la investigación de incidente de seguridad o violación de ley o de estos Términos y Condiciones.<br/>' +
                '(g) Identificar el lugar en donde está funcionando el hotspot y ofrecer mejores servicios en la plataforma.<br/>' +
                '<strong>10.5</strong> El Zona Grátis respeta su privacidad. Si usted tiene preguntas sobre esta política, ' +
                'por favor envía email a: support.zonagratis@alouw.com<br/>' +

                '<br/><strong>11. Alteraciones en los Términos</strong><br/>' +
                '<strong>11.1</strong> El Proveedor podrá alterar, modificar, adicionar o remover partes del presente acuerdo a cualquier ' +
                'tiempo y a su exclusivo juicio. El Usuario comprende y concuerda que la utilización del Zona Grátis ' +
                'tras la fecha de alteración de cualquier término de este acuerdo implicará su integral aceptación.<br/>' +
                '<strong>11.2</strong> En virtud de lo dispuesto en el apartado anterior, es responsabilidad del Usuario verificar ' +
                'frecuentemente los términos del presente acuerdo para acompañar eventuales modificaciones.<br/>' +

                '<br/><strong>12. Normas Generales</strong><br/>' +
                '<strong>12.1</strong> En el caso de que el Zona Grátis no ejercite o utilice cualesquier derechos contenidos en este ' +
                'acuerdo o a él conferidos por ley, esto no se considerará como renuncia, manteniéndose dichos ' +
                'derechos disponibles a todos los efectos.<br/>' +
                '<strong>12.2</strong> En el caso de que cualquier apartado, cláusula y/o término del presente acuerdo sea considerado ' +
                'nulo, tal hecho no afectará a los demás, que seguirán en pleno vigor.<br/>' +
                '<strong>12.3</strong> El presente acuerdo y la relación entre el Usuario y el Zona Grátis serán regidos pela ' +
                'legislación brasileña, independientemente del conflicto de cláusulas legales.<br/>' +
                '<strong>12.4</strong> Queda elegido el Fuero de la Comarca de San Pablo, Estado de San Pablo, para la resolución de ' +
                'cualesquier cuestiones resultantes de este acuerdo, con exclusión de cualquier otro, aún privilegiado.<br/>'
    },
    pt: {
        'no-results' : 'Nenhum resultado',
        'getting-your-position' : 'Localizando sua posição...',
        'no-network-nearby' : 'Nenhuma rede próxima',
        'you-are-here' : 'Você está aqui',
        'map-not-found-text' : 'Não foi possível obter sua posição. Dê um zoom no mapa para mostar redes próximas de você.',
        'connection-status-conected-text' : 'Conectado',
        'connection-status-trying-text' : 'Tentando...',
        'connection-status-noconnection-text' : 'Conexão caiu',
        'connection-status-wifioff-text' : 'Wifi desligado',
        'connection-status-validating-text' : 'Validando...',
        'connection-status-nointernet-text' : 'Sem Internet',
        'connection-status-offlinemode-text' : 'Desconectado',
        'connection-status-nonetwork-text' : 'Nenhuma rede',
        'connection-status-onenetworknearby-text' : 'Uma rede próxima',
        'connection-status-networksnearby-text' : ' redes próximas',
        'connection-status-see-the-map' : 'Veja o mapa',
        'connection-status-click-here' : 'Clique aqui',
        'not-supported-on-android' : 'Função disponível somente na aplicação do Android',
        'network-list-no-network-found-yet-text' : 'Nenhuma rede encontrada ainda...',
        'update-available' : '<strong>Atualização disponível<br/>clique aqui para atualizar!</strong>',
        'main-download-market' : 'Baixar no Android Market'
    }
};
