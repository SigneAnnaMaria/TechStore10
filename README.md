# TechStore10
E-handelsplattform

Beskrivning:
Det här är ett projekt som visar en mockup åt en kund, över en enkel interface på en internetshop med startsida och en kundkorg. Utöver det finns det en inloggningssida för registrerade konton där personen kan kolla sin köphistorik eller skapa nytt konto. 

Hårdkodad användare:
username: fredrik
password: 12345

Kravspecifikation som vi har med:
G:
Navigationsbar
Startsida
Kundvagnssida
Responsiv
Följer mockups
Arbetar enligt git-flow
Local Storage-nycklar

VG:
Utökad produktlista
Kundvagn tömms efter köp
Login-sida med funktion för att skapa ny användare
Orderhistorik

Vi satsar på VG!

Övrigt:

Vi valde att lägga en log in-knapp i headern som enligt mockups inte skulle vara med då man inte är inloggad för att möjliggöra inloggning från alla sidor. Vi har även lagt in en user-icon i headern som visar att man är inloggad och tar en till orderhistoriken.
Vi har valt att ha en annan typ av utformning på knapparna i login.html eftersom vi vill skilja på konto-knappar och köp-knappar, samt att stylingen blev bättre med svarta knappar på den sidan och passar interfacen. Däremot har vi behållt den blåa färgen vid hovering för att matcha köp-knapparna och tydliggöra tryckeffekten.


Utöver de svårigheter som vi tog upp i utvärderingsdokumentet så hade vi också problem med bland annat att få ut bildena från vår JSON fil. På det sättet vi hade skrivit vår kod så syntes inte bilderna då dess sökväg inte va fullständig i JSON-filen. Vi löste det problemet med att lägga till /assets/ innan i filnamnet i vår JSON fil. Ett annat enklare alternativ hade varit att enbart lägga till assets/ innan ${product.image} i vår 'main.js'-fil. Men då detta varit en lärdom så beslöt vi att lämna kvar det i vårt dokument.