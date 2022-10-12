Projektarbete Tech Store

De studerande skall få en förståelse av vad arbete i grupp i samband med Github innebär samt behärska hur versionshanteringprogram fungerar. De studerande skall även fått förståelse av hur HTML, CSS & Javascript kan kombineras för att skapa en dynamisk e-handelsplattform (större system).  

 

Beskrivning: 

Arbetet skall göras i grupp om 2-3 personer.

Ni har fått ett uppdrag där ni skall bygga en hemsida för ett nystartat företag som säljer teknikprylar. Företaget heter TechStore och har bett om er hjälp för att bygga deras e-handelssida. För att leva upp till deras förväntan och få godkänt på den här inlämningsuppgiften måste ni följa kravspecifikationen som du hittar under rubriken "kravspecifikation".

Gruppen skall utöver e-handelssidan skriva ett gemensamt Utvärderingsdokument (ett A4) som ämnar att belysa de delar som varit utmanande gällande såväl tekniska aspekter som gruppdynamik (inspiration: https://www.projektmallar.se/avsluta/). 

 

Kravspecifikation:

Möjliga betyg är IG, G & VG.

 

G-krav:

Filer & mappar att utgå ifrån (se i dokument för kursen):

index.html : Projektets startfil.
products.json : JSON fil som innehåller produkterna.
main.js : Javascript startkod som läser in JSON filen.
assets : Mapp som innehåller bilder på produkterna.
mockups : Mapp som innehåller mockups på hur sidan skall se ut.
 

Utvärderingsdokument skall belysa följande punkter:

Vilka beslut som togs kring kodstrukturen, inkludera några exempel.
Vilka tekniker (ex. Bootstrap, SASS, JQuery mm) som har har används och varför.
Arbetsfördelning och samarbete.
Svårigheter.
Vad hade kunnat göras annorlunda.
Vidareutveckling.
Omfattning 1 A4 sida datorskriven 
 

Navigationsbar:

Hemsidan skall innehålla en fixerad navigationsbar längst upp på sidan som går hela vägen från vänster till höger.
Till vänster i navigationsbaren skall det finnas en titel (TechStore) som skall vara klickbar, ett klick på titeln tar användaren till startsidan.
Till höger i navigationsbaren skall det finnas en kundvagnsknapp som skall vara klickbar, ett klick på knappen tar användaren till kundvagnssidan.
När en produkt läggs till i kundvagnen skall detta reflekteras med att det visas en siffra intill kundvagnsknappen som reflekterar antalet produkter i kundvagnen.
 

Startsida:

Startsidan skall lista produkterna som finns i products.json filen.
Varje presentationsyta för produkterna skall ta upp ungefär hela höjden av skärmen och presentera all produktinformation.
Det skall även, för varje produkt, finnas en knapp för att lägga till produkterna i kundvagnen.
Produkterna som har lags till i kundvagnen skall sparas i localStorage så det är möjligt att komma åt informationen från alla sidor.
 

Kundvagnssida:

Kundvagnssidan skall lista produkterna som användaren har lagt till i kundvagnen.
Listan skall vara horizontell och centrerad.
Det ska gå att se flera produkter utan att behöva skrolla på sidan.
Varje produkt i listan skall visa bilden, titeln, priset och en knapp för att ta bort produkten ur kundvagnen.
Nedanför listan skall det finnas ett totalbelopp samt en knapp för att slutföra köpet.
Knappen för att slutföra köpet skall, vid klickning, visa en bekräftelse på köpet i en popup.
 

Övrigt: 

Hemsidan skall vara responsiv, dvs den skall gå att öppna på en mobil, en surfplatta och en datorskärm.
Hemsidan skall efterlikna bilderna som finns i mockup-mappen (inklusive samtliga färger, font-typ, textstorlek osv).
GIT:

Ni skall jobba enligt GIT-Flow.
Alla ändringar i koden skall gå igenom en Pull-Request in i er default-branch (main/master).
Er default branch skall vara låst så ni ej kan pusha direkt till den branchen, detta sätts med en regel i Github.
 

VG-krav: 

Utöka produktlistan med ett urval från årets modeller så det totalt finns 10 stycken telefoner.
När man bekräftar ett köp skall kundvagnen tömmas.
Skapa en loginsida där det är möjligt att skapa ett konto samt logga in och se alla beställningarna som har gjorts. Här är design och funktionaliteten frivillig men det skall finnas en motivation kring vilka besluts som har tagits och varför i er readme fil. Använd localStorage för att spara nya användare samt gjorda beställningar.
 

Tips:

Planera arbetet genom att dela upp det i små enkla delar som skall göras, lämpligt är att använda sig av Issues på GitHub.
Använd gärna Flexbox för er layout.
Läs eventuella felmeddelanden ni får i konsollen.
Skriv ut innehållet i variabler med console.log() för att kolla så allt stämmer, (OBS. dessa skall tas bort före inlämning).
Använd föreläsningsmaterialet och dess länkar för mer information.
Använd liveshare i VS-code.
Använd Google för att hitta lösningar på era problem!
 

Inlämning & deadline:

Projektet skall göras i grupp av 2-3 personer och med hjälp av GitHub, dvs en av er ska skapa ett Repository på GitHub där ni bjuder in de andra i gruppen till ett samarbete (Collaborators). När ni är klara och det är dags för inlämning skall projektet zippas ihop och laddas upp på its learning, kom ihåg att även länka till GitHub repot i er README för att kunna bli godkända!

Det skall finnas en README.md fil på erat Repo som innehåller en kort beskrivning av ert projekt.
Om ni av något anledning har valt att inte följa kravspecen skall detta förklaras i README.md filen.
Förbättringar är tillåtet men då ska dessa motiveras i README.md filen.
Ni skall i er README.md lista alla krav ni gjort samt om ni satsar på G eller VG.
Githublänk till repot skall finnas.
 

Lycka till!