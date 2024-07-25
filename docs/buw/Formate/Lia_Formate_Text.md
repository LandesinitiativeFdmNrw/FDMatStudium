<!--
author:   t. rathmann

email:    fdm@uni-wuppertal.de

version:  0.0.4

Changes to version 0.0.3:
  - Citation adapted
  - Copyright notice added as comment

language: de

narrator: Deutsch Male

comment:  Dieser Selbstlernkurs ist im Rahmen des vom Ministerium für Kultur und Wissenschaft Nordrhein-Westfalens geförderten Kooperationsprojekts ‚FDM@Studium.nrw‘, im Teilprojekt der Universitätsbibliothek der Bergischen Universität Wuppertal, entstanden.

Herausgeber: 'fdm@studium.nrw' Teilprojekt BUW
Autor/innen: Kerstin Kaiser (0000-0002-4250-5109), Dr. Torsten Rathmann (0000-0001-5880-1546)
Bearbeitungsdauer gesamt (inkl. Selbstlernzeit): ≈ 10 - 15 Stunden
Zuletzt geändert: 2024-02-XX
Kontakt: fdm@uni-wuppertal.de
Voraussetzungen: Für dieses Lernmodul sind keine Vorkenntnisse erforderlich.
Zielgruppe: Studierende im Bachelorstudium und weitere Interessierte.
---

Kommentar Nachnutzung Modul: Text & Tabellen

Zielgruppe: Studierende BA und MA

Bedarf & Relevanz: Mit dem Thema Dateiformate sind alle Computer-Nutzenden konfrontiert und Texte und Tabellen werden in fast jedem Studium am Computer bearbeitet. Es handelt sich um ein lohnendes Querschnittsthema, das sowohl im Forschungsdatenmanagement als auch im Studienalltag von Relevanz ist.

Lernaufgaben: Für verschiedene Aufgaben gibt es unterschiedliche Textformate. Im Modul wird dargestellt, wie sich die Formate unterscheiden und wo ihre Stärken und Schwächen liegen. Hinweise auf häufige Fehler und auf was bei der Langzeitarchivierung von Texten und Tabellen beachtet werden soll, sollen die Arbeit — da gehört das Forschungsdatenmanagement dazu — mit diesen Formaten erleichtern. Das Modul enthält auch eine Einführung in XML, weil TEI, OOXML (.docx, .xlsx) und ODF (.odt, .ods) darauf beruhen. XML wird auch später noch einmal zum Verständnis von SVG benötigt. Die Fehlersuche in XML und CSV wird in Aufgaben geübt.

Erfolg: Die Lernenden kennen je ein bis zwei Beispielformate für die Beforschung von Text (TEI), für die geräteunabhängige Ausgabe auf Bildschirmen und Druckern (PDF, PDF/A), für die Arbeit mit Textverarbeitungsprogrammen (.docx, .odt), für Web-Seiten und für Tabellendokumente. Sie sind in der Lage, Syntaxfehler in XML und CSV zu finden.

Evaluation: Um die Lernergebnisse zu prüfen, werden die vermittelten Wissensinhalte orientiert an den zuvor formulierten Lernzielen durch ein Quiz abgefragt.

Lernziel (Wissen): Die Studentinnen und Studenten kennen einige im Forschungsbereich weit verbreitete Textformate.
Lernziel (Verstehen): Die Studentinnen und Studenten können ein für den jeweiligen Zweck zumindest grundsätzlich geeignetes Textformat auswählen.
Lernziel (Verstehen): Die Studentinnen und Studenten können eine Reihe häufig vorkommender Fehler im Zusammenhang mit Textdaten vermeiden.

LZ Matrix: BA ... ? [SK 1]

---

link:     https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css

script:   https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js

translation: Deutsch  translations/German.md

translation: Français translations/French.md

tags:      Forschungsdaten, Datenmanagement, Studium, Bachelor, Digital Literacy

© Copyright notice: Dieses Werk ist urheberrrechtlich geschützt. Eine Nutzung ist erlaubt unter Beachtung der Creative-Commons-Lizenz CC BY 4.0, https://creativecommons.org/licenses/by/4.0/.  Nachnutzende können ihrer Namensnennungs- und Verlinkungspflicht folgendermaßen nachkommen:
Kerstin Kaiser (0000-0002-4250-5109) und Torsten Rathmann (ORDID iD 0000-0001-5880-1546); Lernmodul Text und Tabellen, https://github.io/fdmatstudium.nrw, Lizenz CC BY 4.0, https://creativecommons.org/licenses/by/4.0/; Haftung ausgeschlossen
-->

# Text & Tabellen

![](Schmuckgrafiken/G-0006_BUW_Header_Module.svg)

**Über dieses Modul**

Hier erfahren Sie etwas über 
<br>
<br>

- die Auszeichnungssprache XML
- das Text- und Metadatenformat TEI
- die Büroanwendungsformate OOXML (.docx für Textdokumente, .xlsx für Tabellendokumente) und ODF (.odt für Textdokumente, .ods für Tabellendokumente)
- PDF
- Texte und Tabellen im Web
- das Tabellenformat CSV
<br>
<br>

**Lernziel** (Wissen): Die Studentinnen und Studenten kennen einige im Forschungsbereich weit verbreitete Textformate.

**Lernziel** (Verstehen): Die Studentinnen und Studenten können ein für den jeweiligen Zweck zumindest grundsätzlich geeignetes Textformat auswählen.

**Lernziel** (Verstehen): Die Studentinnen und Studenten können eine Reihe häufig vorkommender Fehler im Zusammenhang mit Textdaten vermeiden.

**Bearbeitungsdauer**: ≈ 90 Min.



## Warum gibt es so viele Textformate?

Auf den ersten Blick ist die Vielfalt der Textformate vielleicht verwirrend, aber es gibt nun einmal mehrere, ganz unterschiedliche Verwendungszwecke für Text und viel Auswahl bei der Software. Hier werden einige wenige Formate vorgestellt, die in der Forschung weit verbreitet sind. Die Tabelle gibt eine Übersicht.

|Zweck                                              |Format                            |Dateiendung|
|:--------------------------------------------------|:---------------------------------|:----------|
|Beforschung von Text                               |TEI (Text Encoding Initiative)[^1]|.tei       |
|Austauschformate[^2] für Textverarbeitungsprogramme|OOXML, ODF                        |.docx, .odt|
|Dokumentation und Archivierung                     |PDF/A                             |.pdf       |
|Web-Seiten                                         |HTML (HyperText Markup Language)  |.html, .htm|

Mit TEI, OOXML und ODF sind gleich drei Formate dabei, die den XML-Regeln folgen. Deshalb soll am Anfang eine Einführung in XML (Extensible Markup Language) stehen.

[^1]: **TEI (Text Encoding Initiative)** ist sowohl ein **Dokumentenformat** als auch der **Name der Organisation**, die an Standards für dieses Dokumentenformat arbeitet. Das Dokumentenformat TEI sieht einen Dateikopf (Header) mit Pflichtelementen und Hunderten optionaler Elemente vor, in denen beschreibende Daten zum Text untergebracht werden können. TEI ist daher auch ein **Metadatenstandard**.<br>TEI-Homepage: [https://tei-c.org/](https://tei-c.org/)<br>TEI-Dokumentation: [https://tei-c.org/release/doc/tei-p5-doc/en/html/index.html](https://tei-c.org/release/doc/tei-p5-doc/en/html/index.html)<br>Wichtige Dateien: [https://tei-c.org/release/xml/tei/](https://tei-c.org/release/xml/tei/)

[^2]: Ein **Austauschformat** ist ein Dateiformat, in dem die Weitergabe (der "Austausch") von Dateien üblich ist. Austauschformate sind meist weit verbreitet und können meist von vielen Anwendungsprogrammen unter mehreren Betriebssystemen verarbeitet werden.




## XML (Extensible Markup Language)

Eine **Markup Language** (deutsch **Auszeichnungssprache**) *ist eine maschinenlesbare Sprache für die Gliederung und Formatierung von Texten und anderen Daten*[^a]. Strukturelemente sind in Auszeichnungssprachen gekennzeichnet. Beispielsweise wird in den Textformaten HTML und TEI ein neuer Absatz mit dem Tag[^3] `<p>`<!-- style="font-family: Courier New, Courier, mono;" --> eingeleitet. Das `p`<!-- style="font-family: Courier New, Courier, mono;" --> steht dabei für "paragraph" oder "prose".

XML[^b] ist eine Auszeichnungssprache 2. Stufe in dem Sinne, dass XML anderen Auszeichnungssprachen einige grundsätzliche Regeln vorgibt. Beispielsweise fordert XML, dass es zu jedem Start-Tag ein End-Tag gibt. In TEI, das auf XML basiert, muss also nicht nur der Anfang eines Absatzes gekennzeichnet sein, sondern auch dessen Ende.

<svg width="500" viewBox="0 0 500 70">
    <title>Start-Tags bestehen in der hier gezeigten einfachsten Form aus Spitzklammer auf, Elementname und Spitzklammer zu. Zwischen Start-Tag und End-Tag steht der Textinhalt.</title> --
    <symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2">
        <path d="M 0,0 L -2,1 L -2,-1 z"></path>
    </symbol>

    <text x="100" y="10" style="font-family: Courier New, Courier, mono;">
        <tspan dx="0" dy="0" fill="red">&lt;p&gt;</tspan>Dies ist ein Absatz.<tspan dx="0" dy="0" fill="red">&lt;/p&gt;</tspan>
    </text>
    <line x1="112" y1="15" x2="112" y2="35" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(112,15) rotate(-90)"></use>
    <text x="112" y="50" style="text-anchor: middle; font-size: x-small; outline: 1.5px solid black; outline-offset: 0.3em;">Markierung Absatz: Start-Tag</text>
    <line x1="322" y1="15" x2="322" y2="35" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(322,15) rotate(-90)"></use>
    <text x="322" y="50" style="text-anchor: middle; font-size: x-small; outline: 1.5px solid black; outline-offset: 0.3em;">End-Tag (Pflicht in XML)</text>
</svg>

Das Konstruktionsprinzip ähnelt der Kennzeichnung von Siedlungen an überörtlichen Straßen[^c]. Beginn und Ende von Siedlungen werden durch Ortsschilder kenntlich gemacht.

![Ortsanfang-Straßenschild Wuppertal](XML/Ortsanfang.JPG) ![Ortsende-Straßenschild Wuppertal](XML/Ortsende.JPG)

Sogar die diagonale Durchstreichung im Siedlungsende-Schild hat eine Entsprechung in XML in Form des Schrägstrichs im End-Tag.

HTML, das nicht auf XML basiert, stellt es hingegen frei, schließende Tags zu verwenden. Manchmal geht dadurch die Eindeutigkeit der Textstruktur verloren. Web-Browser stellen HTML-Seiten ohne schließende Tags dann nach internen Regeln dar.

XML ist da also strenger. XML-basierte Auszeichnungssprachen werden auch **XML-Dialekte** genannt. Die Abbildung zeigt eine Auswahl.

<svg width="800" viewBox="0 0 800 210">
    <title>Oben steht XML als Auszeichnungssprache 2. Stufe, darunter die XML-Dialekte, wie z.B. SVG</title>    <symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2">
        <path d="M 0,0 L -2,1 L -2,-1 z"></path>
    </symbol>

    <text x="240" y="30" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">XML</text>
    <text x="40" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">TEI</text>
    <line x1="230" y1="40" x2="40" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(40,157) rotate(148.376)"></use>
    <text x="120" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">DOCX</text>
    <line x1="234" y1="40" x2="120" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(120,157) rotate(134.256)"></use>
    <text x="200" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">ODT</text>
    <line x1="238" y1="40" x2="200" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(200,157) rotate(107.993)"></use>
    <text x="280" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">XHTML</text>
    <line x1="242" y1="40" x2="280" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(280,157) rotate(72.007)"></use>
    <text x="360" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">MathML</text>
    <line x1="246" y1="40" x2="360" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(360,157) rotate(45.744)"></use>
    <text x="440" y="180" style="text-anchor: middle; outline: 1.5px solid black; outline-offset: 0.3em;">SVG</text>
    <line id="pfeilSVG" x1="250" y1="40" x2="440" y2="157" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(440,157) rotate(31.624)"></use>
    <text transform="translate(10,0)" style="font-size: 12px;">
        <textPath xlink:href="#pfeilSVG" startOffset="10%">gibt grundlegende Regeln vor</textPath>
    </text>
    <text x="500" y="180">XML-Dialekte</text>
</svg>

**XHTML** ist eine strengere Form von HTML und kodiert wie HTML Web-Seiten. Es wird aber zugunsten von HTML 5 nicht weiterentwickelt und läuft daher aus. In **MathML** lassen sich mathematische Formeln schreiben. XML kann auch in Sprachen verwendet werden, die keinen Text kodieren. Ein Beispiel hierfür ist das Vektorgrafikformat **SVG (Scalable Vector Graphics)**.

[^a]: Wikipedia Suchbegriff *Auszeichnungssprache*. Zugriff: 13.03.2024. [https://de.wikipedia.org/wiki/Auszeichnungssprache](https://de.wikipedia.org/wiki/Auszeichnungssprache)

[^b]: Ausführlichere Informationen zu XML: (a) [XML-Tutorium von W³schools](https://www.w3schools.com/xml/) mit nur wenig Text, (b) [XML-Tutorium von selfhtml](https://wiki.selfhtml.org/wiki/XML), (c) [XML 1.0 Recommendation (W3C-Standard)](https://www.w3.org/TR/REC-xml/)

[^c]: Die Idee, den Aufbau von XML-Tags anhand von Ortschildern zu erklären, stammt von José Calvo Tello, erstmals präsentiert 2011 bei einem Vortrag an der JMU Würzburg, [José Calvo Tello's Website](http://www.morethanbooks.eu/)

[^3]: Kennzeichner, Abgrenzer



### Vorteile von XML

Außer den schon erwähnten gibt es noch sehr viel mehr XML-Dialekte und eigene zu entwickeln ist jederzeit möglich. Den hohen Verbreitungsgrad verdankt XML einer Reihe von Vorteilen, von denen die wichtigsten in der nächsten Abbildung zusammengestellt sind.

<svg width="900" viewBox="0 0 1200 650">
    <rect x="20" y="40" rx="10" ry="10" height="62" width="220" fill="darkblue"></rect>
    <text x="40" y="80" style="fill: white; font-size: 24px;">Vorteile von XML</text>
    <line x1="58" y1="80" x2="58" y2="533" stroke="darkblue" stroke-width="2"></line>

    <rect x="86" y="146" rx="10" ry="10" height="54" width="695" fill="transparent" stroke="darkblue" stroke-width="3"></rect>
    <text x="100" y="180" style="font-size: 18px;">Erweiterbar: Nutzer können nach Belieben eigene Tags zum Vokabular beitragen</text>
    <line x1="58" y1="173" x2="86" y2="173" stroke="darkblue" stroke-width="2"></line>

    <rect x="86" y="236" rx="10" ry="10" height="54" width="695" fill="transparent" stroke="darkblue" stroke-width="3"></rect> <text x="100" y="270" style="font-size: 18px;">Menschen- und maschinenlesbar zugleich</text>
    <line x1="58" y1="263" x2="86" y2="263" stroke="darkblue" stroke-width="2"></line>

    <rect x="86" y="326" rx="10" ry="10" height="54" width="695" fill="transparent" stroke="darkblue" stroke-width="3"></rect>
    <text x="100" y="360" style="font-size: 18px;">Austausch der Daten zwischen verschiedenen Anwendungen ohne Datenverluste</text>
    <line x1="58" y1="353" x2="86" y2="353" stroke="darkblue" stroke-width="2"></line>

    <rect x="86" y="416" rx="10" ry="10" height="54" width="695" fill="transparent" stroke="darkblue" stroke-width="3"></rect>
    <text x="100" y="450" style="font-size: 18px;">Software- und Hardware-unabhängig</text>
    <line x1="58" y1="443" x2="86" y2="443" stroke="darkblue" stroke-width="2"></line>

    <rect x="86" y="506" rx="10" ry="10" height="54" width="695" fill="transparent" stroke="darkblue" stroke-width="3"></rect>
    <text x="100" y="540" style="font-size: 18px;">Daten komplexen Aufbaus können gespeichert werden</text>
    <line x1="58" y1="533" x2="86" y2="533" stroke="darkblue" stroke-width="2"></line>
</svg>



### Aufbau eines XML-Dokuments

Am Anfang eines XML-Dokuments steht zumeist ein **Prolog**.

>**Info!** Der Prolog ist optional aber empfehlenswert, denn dort kann das Dokument als XML-Dokument gekennzeichnet und so eine Verwechslung vermieden werden. Außerdem können dort grundlegende Regeln vorgegeben oder entsprechende Dateien eingelesen werden.

Im XML-Beispiel unten ist der Prolog in weißer Schrift hervorgehoben.

<svg viewBox="0 0 800 450">
    <title>Ein sehr einfaches XML/TEI-Dokument mit dem Absatz "Dies ist nicht zu viel Text."</title>
    <symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2">
        <path d="M 0,0 L -2,1 L -2,-1 z"></path>
    </symbol>

    <rect x="200" y="50" width="650" height="380" style="fill: #bbbbbb"></rect>
    <text x="0" y="70" style="font-family: Courier New, Courier, mono; font-size:small;">
        <tspan x="210" dy="0" fill="white">&lt;?xml version="1.0"?&gt;</tspan>
        <tspan x="210" dy="1.2em" fill="white">&lt;!DOCTYPE tei SYSTEM "file:///D:/tei/tei_all.dtd"&gt;</tspan>
        <tspan x="210" dy="1.2em" fill="white">&lt;?xml-stylesheet type="text/xsl" href="file:///D:/tei/html/html.xsl"?&gt;</tspan>
        <tspan x="210" dy="1.2em" fill="red">&lt;TEI&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;teiHeader&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;fileDesc&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;titleStmt&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;XML/TEI-Beispiel minimaler Komplexität&lt;/title&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/titleStmt&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;publicationStmt&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Open Educational Resources, 2023&lt;/p&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/publicationStmt&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;sourceDesc&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Born digital&lt;/p&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/sourceDesc&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fileDesc&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/teiHeader&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;text&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Dies ist nicht zu viel Text.&lt;/p&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;</tspan>
        <tspan x="210" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/text&gt;</tspan>
        <tspan x="210" dy="1.2em" fill="red">&lt;/TEI&gt;</tspan>
    </text>
    <text x="0" y="70" style="font-family: Arial; font-size:small;">
        <tspan x="10" dy="0">XML-Deklaration</tspan>
        <tspan x="10" dy="1.2em">Dokumenttyp-Deklaration</tspan>
        <tspan x="10" dy="1.2em">Wie im Browser darstellen?</tspan>
        <tspan x="10" dy="1.2em">Wurzelelement (Start-Tag)</tspan>
        <tspan x="10" dy="22.8em">Wurzelelement (End-Tag)</tspan>
    </text>
    <line x1="175" y1="67" x2="198" y2="67" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(198,67) rotate(0)"></use>
    <line x1="175" y1="82.5" x2="198" y2="82.5" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(198,82.5) rotate(0)"></use>
    <line x1="175" y1="98" x2="198" y2="98" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(198,98) rotate(0)"></use>
    <line x1="175" y1="113.5" x2="198" y2="113.5" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(198,113.5) rotate(0)"></use>
    <line x1="175" y1="410" x2="198" y2="410" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(198,410) rotate(0)"></use>
    <text x="500" y="25" textLength="155" style="font-family: Arial; font-size:small;">Regeln aus Datei auslesen</text>
    <path d="M 498,22 L 480,22 L 480,70" fill="transparent" stroke="black" stroke-width="1"></path>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(480,70) rotate(90)"></use>
    <path d="M 658,22 L 675,22 L 675,86" fill="transparent" stroke="black" stroke-width="1"></path>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(675,86) rotate(90)"></use>
</svg>

Dem Prolog folgen das **Wurzelelement** (<span style="color: rgb(239, 69, 64);">rot</span>) und darunter alle anderen Elemente. Diese anderen Elemente sind alle Kindelemente oder Kindeskinder des TEI-Wurzelelements und der besseren Lesbarkeit wegen eingerückt.

>**Merke!** In jedem XML-Dokument muss es genau ein Wurzelelement geben.

Der Prolog hingegen kann mehrere Bestandteile enthalten oder auch ganz weggelassen sein. Im Beispiel besteht der Prolog aus drei Zeilen.

**Zeile 1:** Die **XML-Deklaration** kennzeichnet die Datei als XML-Dokument. Im Beispiel ist als Version 1.0 angegeben. Daneben gibt es noch die Version 1.1, die mehr Sonderzeichen in Elementnamen erlaubt und seltener verwendet wird. An der Stelle noch zwei Begriffe:

- `<? ... ?>`<!-- style="font-family: Courier New, Courier, mono;" --> kennzeichnet in allen XML-Dateien eine **Verarbeitungsanweisung**. Die vorliegende Datei soll also als XML-Dokument verarbeitet werden.
- Die Versionsnummer ist in Form eines **Attributs** beigegeben. Attribute haben die Form `Name="Wert"`<!-- style="font-family: Courier New, Courier, mono;" --> (hier `Version="1.0"`<!-- style="font-family: Courier New, Courier, mono;" -->)

**Zeile 2:** In der **Dokumenttyp-Deklaration (DTD)** stehen

- der Name des deklarierten Typs, im Beispiel `tei`<!-- style="font-family: Courier New, Courier, mono;" -->
- ob die DTD öffentlich ist (`PUBLIC`<!-- style="font-family: Courier New, Courier, mono;" --> für öffentlich, `SYSTEM`<!-- style="font-family: Courier New, Courier, mono;" --> für nicht öffentlich)
- die Elementdeklarationen (welche Elemente es gibt und für jedes Element, welche Kindelemente das Element haben muss bzw. darf)
- die Attributlistendeklationen (Attributnamen, zulässige Werte, und ob das Attribut erforderlich ist oder weggelassen werden kann)
- Entities (Texte für automatische Ersetzungen)

Im Beispiel sind die drei letzten Punkte in einen File tei_all.dtd ausgelagert, der lokal unter Windows auf Laufwerk "D:" im Verzeichnis "tei" gespeichert ist. Anstelle eines Files könnte hier auch eine Web-Adresse angegeben sein.

**Zeile 3:** Die Verarbeitungsanweisung **`<?xml-stylesheet ...?>`<!-- style="font-family: Courier New, Courier, mono;" -->** gibt an, wie die Elemente grafisch dargestellt werden sollen. Die Regeln selbst sind im Beispiel in einen XSL-File (Extensible Stylesheet Language)[^4] ausgelagert. XSL ist übrigens selbst XML, d.h. gehorcht der XML-Syntax.<br><br>

>**Merke! XML-Elemente** sind stets hierarchisch strukturiert, d.h. an oberster Stelle steht ein **Wurzelelement** und sie können beliebig viele **Kindelemente**, aber nur ein **Elternelement** haben. Gekennzeichnet werden die Elemente durch Tags[^1]:
>
>- Jedes Element hat ein **Start-Tag** und ein **End-Tag**, das von spitzen Klammern umschlossen wird. Das End-Tag besitzt zusätzlich einen Schrägstrich: `</...>`<!-- style="font-family: Courier New, Courier, mono;" -->
>- In jedem Tag muss ein **Elementname** vergeben sein. Der Elementname im Start-Tag muss immer exakt mit dem Elementnamen im End-Tag übereinstimmen. Groß- und Kleinschreibung im Namen sind signifikant
>- Für leere Elemente können Start- und End-Tag zusammengefasst werden zu `<.../>`<!-- style="font-family: Courier New, Courier, mono;" -->, d.h. vor der schließenden Spitzklammer steht ein Schrägstrich. Ein Beispiel ist das Element `<empty/>`<!-- style="font-family: Courier New, Courier, mono;" -->, das zur Markierung leerer Elemente im TEI-Quelltext verwendet wird.

Ein Element kann leer sein oder **Inhalt** enthalten. Aber selbst mit Inhalt darf sich ein Element nicht über das End-Tag seines Elternelements hinaus erstrecken, sondern muss schließen, ehe das Elternelement schließt.

Das Beispiel oben erfüllt diese und alle übrigen XML-Regeln. Das Diagramm zeigt die hierarchische Struktur der Elemente des Beispiels als Baum.

<svg viewBox="0 0 900 320">
    <title>Ein TEI-Dokument besteht aus einem Wurzelelement TEI, das sich in einem Header und einen Text-Body gliedert. Darunter befinden sich weitere Elemente</title>
    <rect x="5" y="165" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="75" y="190" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        TEI
    </text>
    <line x1="140" y1="185" x2="195" y2="100" stroke="darkblue" stroke-width="2"></line>
    <line x1="140" y1="185" x2="195" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="195" y="80" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="265" y="105" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        teiHeader
    </text>
    <line x1="330" y1="100" x2="380" y2="100" stroke="darkblue" stroke-width="2"></line>
    <rect x="195" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="265" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        text
    </text>
    <line x1="330" y1="270" x2="380" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="375" y="80" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="445" y="105" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        fileDesc
    </text>
    <line x1="510" y1="100" x2="555" y2="30" stroke="darkblue" stroke-width="2"></line>
    <line x1="510" y1="100" x2="555" y2="100" stroke="darkblue" stroke-width="2"></line>
    <line x1="510" y1="100" x2="555" y2="170" stroke="darkblue" stroke-width="2"></line>
    <rect x="375" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="445" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        body
    </text>
    <line x1="510" y1="270" x2="560" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="10" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="35" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        titleStmt
    </text>
    <line x1="690" y1="30" x2="740" y2="30" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="80" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="105" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        publicationStmt
    </text>
    <line x1="690" y1="100" x2="740" y2="100" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="150" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="175" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        sourceDesc
    </text>
    <line x1="690" y1="170" x2="740" y2="170" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        p
    </text>
    <rect x="735" y="10" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="805" y="35" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        title
    </text>
    <rect x="735" y="80" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="805" y="105" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        p
    </text>
    <rect x="735" y="150" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="805" y="175" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        p
    </text>
</svg>

Die Baumstruktur ergibt sich daraus, dass jedes Element genau ein Elternelement hat. Ausgenommen ist nur das Wurzelelement, welches wie ein Stamm den ganzen Baum trägt.

>**Hinweis:** In diesem Kurs wird davon ausgegangen, dass Sie XML-Dialekte nutzen aber nicht (weiter-) entwickeln wollen. In dem Fall wird der Prolog zusammen mit den DTD-, Schema- und Style-Dateien in der Regel einmal zusammengestellt und dann verwendet. Zum Prolog und zu den Schemasprachen zwei Seiten weiter wird es im Abschlussquiz keine Fragen geben.

[^4]: Gemeint ist hier die **Formatierungssprache**[^5] XSL (das "eigentliche" XSL, auch XSL-FO genannt), die Layout-Regeln vorgibt. Der Begriff **Extensible Stylesheet Language (XSL)** wird aber manchmal auch mit einer weiter gefassten Bedeutung verwendet. Dann fallen auch (a) die Extensible Stylesheet Language Transformation (XSLT), eine Skriptsprache für die Umwandlung eines XML-Baums in einen anderen und (b) XPath für die Adressierung von Zweigen im XML-Baum darunter.

[^5]: Computersprache, in der Stylesheets[^6]: geschrieben werden können

[^6]: Ein **Stylesheet** legt fest, wie ein elektronisches Dokument dargestellt werden soll. Beispiele für Stylesheet-Sprachen sind CSS (Cascading Style Sheets) und XSL (Extensible Stylesheet Language).



### Wohlgeformtheit und Gültigkeit

Wie schon angedeutet, besitzt XML mehrere Regelsätze, die sich ergänzen. Es gibt zwei Stufen der Konformität mit den XML-Standards des World Wide Web Consortiums (W3C)[^7]:

- **Wohlgeformtheit:**

    Die Wohlgeformtheitsregeln gelten unabhängig vom Vorhandensein eines Dokumentenschemas (Dokumenttyp-Deklaration o.ä.). Diese Regeln sind sozusagen übergeordnet. Sind sie erfüllt, ist das XML-Dokument **wohlgeformt**. Zur Wohlgeformtheit gehört beispielsweise, dass

  + die Elemente — wie auch immer sie aussehen — eine Baumstruktur besitzen, d. h. das Dokument besitzt genau ein Wurzelelement und jedes andere Element hat genau ein Elternelement
  + alle Elemente ein Start- und ein End-Tag besitzen
  + ein Element nicht mehrere Attribute mit demselben Namen besitzen darf
  + Attribut-Werte in Anführungszeichen oder Hochkommata stehen (Durch Klammerung in Hochkommata kann das Anführungszeichen als Zeichen verwendet werden und umgekehrt. So wird beispielsweise die Verwendung der Längeneinheit Zoll in Attributen möglich: `width='3.5"'`<!-- style="font-family: Courier New, Courier, mono;" -->)

- **Gültigkeit (Validität):**

    Ein XML-Dokument ist **gültig**, wenn

  + es wohlgeformt ist
  + ein Verweis auf ein Dokumentenschema vorhanden ist
  + das Schema eingehalten wird

Um zu prüfen, ob ein XML-Dokument wohlgeformt ist, kann beispielsweise Code Beautify[^8] verwendet werden. Das kann von Nutzen sein, wenn Sie mit einem einfachen Texteditor arbeiten. XML-Editoren[^9] zeigen die Wohlgeformtheit bereits direkt im Editorfenster an.

[^7]: Das **World Wide Web Consortium (W3C)** ist die führende Organisation für die Standardisierung der Techniken des World Wide Web. Durch das W3C wurden beispielsweise HTML, XHTML, CSS und SVG standardisiert. Homepage: [https://www.w3.org/](https://www.w3.org/)

[^8]: **Code Beautify** ist ein Webdienst zur Prüfung auf Wohlgeformtheit von XML. Homepage: [https://codebeautify.org/xmlvalidator?/xmlvalidate](https://codebeautify.org/xmlvalidator?/xmlvalidate)

[^9]: Ein **XML-Editor** ist ein Software-Werkzeug zum Editieren von XML-Dokumenten. XML-Editoren können können nicht nur XML-Dokumente bearbeiten, sondern auch (a) die Wohlgeformtheit des Dokuments prüfen, (b) XML-Elemente durch Ergänzen des End-Tags automatisch vervollständigen, (c) XML-Strukturen (z.B. Tags) erkennen und farblich hervorheben sowie (d) DTDs und Schemadateien lesen und nutzen, um das XML-Dokument auf Gültigkeit zu überprüfen und beim Editieren Kindelemente und Attribute vorzuschlagen. [Liste gängiger XML-Editoren](https://curlie.org/Computers/Data_Formats/Markup_Languages/XML/Tools/Editors/)



### Schemasprachen

Die Dokumenttyp-Deklaration (DTD) ist die älteste Form, Grammatikregeln für eine XML-Auszeichnungssprache festzulegen, aber nicht die einzige. Die neueren XML-Schemasprachen[^10] XML Schema, Schematron und RELAX NG helfen vor allem Entwicklern. Aber auch wenn keine Neuentwickung oder Erweiterung der Sprache stattfindet, bieten sie Vorteile, da sie hierarchische XML-Namensräume[^11] unterstützen.

Das Beispiel oben enthält nur Text. Wie aber können wir Texte in XML codieren, die beispielsweise mathematische Formeln und Vektorgrafiken enthalten? Dafür müssten wir TEI, MathML und SVG im selben XML-Dokument verwenden können. Das ist mit hierarchischen Namensräumen möglich. Deren Einzelräume werden mit dem XML-Namespace-Attribut `xmlns`<!-- style="font-family: Courier New, Courier, mono;" --> deklariert. Beispiel für ein TEI-Wurzelelement, in dem auch SVG genutzt werden soll:

<!-- style="font-family: Courier New, Courier, mono; text-indent: 2em each-line;" -->
    <TEI xmlns="http://www.tei-c.org/ns/1.0" <br>
    xmlns:tei="http://www.tei-c.org/ns/1.0" <br>
    xmlns:svg="http://www.w3.org/2000/svg" <br>
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" <br>
    xsi:schemaLocation="...">

Das Attribut `xsi:schemaLocation`<!-- style="font-family: Courier New, Courier, mono;" --> erwartet zwei Einträge, getrennt durch ein Leerzeichen: Namenraum-URL und Schemadatei als URL[^12]. In der Folge können beide Namensräume genutzt werden, indem der Name des Namensraums als Präfix verwendet wird. Das ist selbst dann möglich, wenn es übereinstimmende Elementnamen in den Einzelräumen gibt.

Beispiel: TEI und SVG haben beide ein Element `text`<!-- style="font-family: Courier New, Courier, mono;" -->. Mit

<!-- style="font-family: Courier New, Courier, mono; text-indent: 2em;" -->
    <tei:text> ... </tei:text>

und

<lia-keep>
<p style="font-family: Courier New, Courier, mono; text-indent: 2em;">&lt;svg:text&gt; ... &lt;/svg:text&gt;</p>
</lia-keep>

können beide zuverlässig auseinander gehalten werden. Der Doppelpunkt ist das Trennsymbol zwischen Namensraumname und Elementname und für diesen Zweck reserviert. Im Beispiel-Wurzelelement ist TEI zudem als Default festgelegt (über das `xmlns`<!-- style="font-family: Courier New, Courier, mono;" -->-Attribut ohne Namensraumkürzel).

>**Info!** Die URL im `xmlns`-Attribut muss nicht existieren. Entscheidend sind viel mehr zwei Voraussetzungen:
>
>- Die URLs in den `xmlns`<!-- style="font-family: Courier New, Courier, mono;" -->-Attributen unterscheiden sich
>- XML Schema, Schematron oder RELAX NG wird verwendet

[^10]: Eine **XML-Schemasprache** gibt einer Auszeichnungssprache auf Basis von XML eine Grammatik vor. Die Schemasprache regelt <br> • welche Elemente die Auszeichnungssprache besitzt <br> • welche Kindelemente ein Element haben kann <br> • welche Kindelemente ein Element haben muss <br> • welche Attribute ein Element haben kann <br> • welche Attribute ein Element haben muss <br> • welche Werte ein Attribut annehmen kann und <br>definiert Entitäten (u.a. Sonderzeichen) für diese Sprache.

[^11]: Bezogen auf XML enthält ein **Namensraum** alle zulässigen Element- oder Attributnamen. 

[^12]: Ein **URL (Uniform Resource Locator)** ist eine Zeichenkette zur Lokalisierung von Ressourcen im World Wide Web (WWW) und dient als Adressierung in der Serverkommunikation. Eine typische URL setzt sich aus dem Protokoll (das den Verbindungstyp definiert), dem Domain-Namen (der den Server referenziert) und einem Pfad (der den genauen Speicherort auf dem Server angibt) zusammen. <svg viewBox="0 0 800 80"><symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2"><path d="M 0,0 L -2,1 L -2,-1 z"></path></symbol><text x="20" y="20">http://www.w3.org/2000/svg</text><line x1="40" y1="25" x2="40" y2="55" stroke="black" stroke-width="1"></line><use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(40,25) rotate(-90)"></use><text x="20" y="70" style="font-size: small;">Protokoll</text><path stroke="black" stroke-width="1" fill="transparent" d="M 62,25 L 63,28 L 100,28 L 100,31 L 100,28 L 137,28 L 138,25"></path><text x="60" y="46" style="font-size: small;">Domain-Name</text><path stroke="black" stroke-width="1" fill="transparent" d="M 140,25 L 141,28 L 170,28 L 171,31 L 172,28 L 201,28 L 202,25"></path><text x="160" y="46" style="font-size: small;">Pfad</text></svg>




## TEI

TEI (Text Encoding Initiative) hat sich als Organisation 1987 gegründet und arbeitet fortwährend an einem Standard für die Repräsentation von Texten. Wichtigstes Ergebnis ist das Dokumentenformat gleichen Namens. Seit Version P4 ist TEI XML-Dialekt. Die allgemeinen Aspekte von TEI lassen sich wie folgt zusammenfassen:[^d]

- TEI ist ein **Dokumentenformat** mit Fokus auf linearem Text. In vielen Geisteswissenschaften ist TEI sogar Standardformat für Texte
- Strukturen im Text können gekennzeichnet werden, denn TEI ist eine Auszeichnungssprache. Zu diesem Zweck stehen zahlreiche Elemente zur Verfügung, darunter auch spezielle für Grammatik, Linguistik, Aufführungstexte und Lyrik. Dadurch eignet sich TEI besonders gut für die Beforschung von Texten, insbesondere in den Geisteswissenschaften. Die naturgetreue Darstellung ist dagegen nicht das Ziel von TEI. Für diesen Zweck eignen sich Bildformate oder PDF besser
- Im Header[^13] können Hunderte von Elementen beschreibende Daten zum Text aufnehmen. TEI wird dadurch auch zum **Metadatenstandard**
- Als Auszeichnungssprache auf Basis von XML ist TEI **Software-unabhängig**
- Wie alle XML-Dateien ist TEI UTF-8-kodiert[^15]. Das ist zumindest die Voreinstellung. Da TEI nicht gepackt wird, ist es mit einem einfachen Texteditor, wie z.B. Notepad unter Windows, lesbar

**TEI-Grundaufbau: TEI-Header + Text.**

<svg viewBox="0 50 800 400">
    <title>Innerhalb des TEI-Headers befindet sich das File-Description-Element und darunter die drei Pflichtelemente Title Statement, Publication Statement und Source Description. Das Title Statement enthält das Pflichtelement title.</title>
    <line id="senkrecht1" x1="50" y1="323" x2="50" y2="123"></line>
    <line id="senkrecht2" x1="120" y1="273" x2="120" y2="173"></line>

    <rect x="10" y="123" width="129" height="200"></rect>
    <text fill="white" style="text-anchor: middle; font-size: middle;">
        <textPath xlink:href="#senkrecht1" startOffset="50%">Header</textPath>
    </text>
    <rect x="80" y="138" width="100" height="170" stroke="white" stroke-width="1"></rect>
    <text fill="white" style="text-anchor: middle; font-size: small;">
        <textPath xlink:href="#senkrecht2" startOffset="50%">Pflichtelemente</textPath>
    </text>
    <rect x="10" y="324" width="129" height="77"></rect>
    <text x="75" y="370" fill="white" style="text-anchor: middle; font-size: middle;">Text</text>
    <rect x="140" y="50" width="650" height="380" style="fill: #bbbbbb"></rect>
    <rect x="271" y="168" width="421" height="15" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="236" y="153" width="468" height="45" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="271" y="215" width="421" height="15" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="236" y="200" width="468" height="45" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="271" y="262" width="421" height="15" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="236" y="247" width="468" height="45" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="201" y="138" width="515" height="168" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="236" y="356" width="300" height="15" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <rect x="201" y="341" width="348" height="45" fill="transparent" stroke="white" stroke-width="1"> </rect>
    <text x="0" y="70" style="font-family: Courier New, Courier, mono; font-size:small;">
        <tspan x="150" dy="0" fill="white">&lt;?xml version="1.0"?&gt;</tspan>
        <tspan x="150" dy="1.2em" fill="white">&lt;!DOCTYPE tei SYSTEM "file:///D:/tei/tei_all.dtd"&gt;</tspan>
        <tspan x="150" dy="1.2em" fill="white">&lt;?xml-stylesheet type="text/xsl" href="file:///D:/tei/html/html.xsl"?&gt;</tspan>
        <tspan x="150" dy="1.2em" fill="red">&lt;TEI&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;teiHeader&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;fileDesc&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;titleStmt&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;XML/TEI-Beispiel minimaler Komplexität&lt;/title&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/titleStmt&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;publicationStmt&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Open Educational Resources, 2023&lt;/p&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/publicationStmt&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;sourceDesc&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Born digital&lt;/p&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/sourceDesc&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/fileDesc&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/teiHeader&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;text&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Dies ist nicht zu viel Text.&lt;/p&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;</tspan>
        <tspan x="150" dy="1.2em">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/text&gt;</tspan>
        <tspan x="150" dy="1.2em" fill="red">&lt;/TEI&gt;</tspan>
    </text>
</svg>

Der Header sollte Metadaten[^14] zum Text enthalten. Jedes TEI-Dokument muss einen Header besitzen. Im Beispiel sind nur die Pflichtelemente vorhanden. Alle Pflichtelemente sind Kindelemente von `fileDesc`<!-- style="font-family: Courier New, Courier, mono;" -->:

**Die drei Pflichtelemente des Headers**

| Elementname     | Inhalt                                                                                                         |
|:----------------|:---------------------------------------------------------------------------------------------------------------|
| titleStmt       | Title Statement mit Kindelement `title`<!-- style="font-family: Courier New, Courier, mono;" --> für den Titel |
| publicationStmt | für die Nennung des Verlags oder Distributors und für Informationen über die Art und Weise der Bereitstellung, wie z.B. Lizenzbedingungen, Identifikationsnummern usw. |
|sourceDesc       | für die Beschreibung der Quellen, aus denen der Text abgeleitet ist, häufig eine bibliografische Beschreibung. Im Beispiel wurde die Standardfloskel "Born digital" benutzt, die ausdrücken soll, dass es keine Vorlage gibt und der Text bereits digital entstanden ist. |

TEI stellt zahlreiche weitere Header-Elemente zur Verfügung, die folgendermaßen gegliedert sind:

**Die 5 übergeordneten Header-Elemente**

| Elementname    | Inhalt                                                                                                           |
|:---------------|:-----------------------------------------------------------------------------------------------------------------|
| fileDesc       | Dateibeschreibung, die eine komplette **bibliografische Beschreibung** des Files selbst enthält                  |
| encodingDesc   | Kodierungsbeschreibung, die **Methoden** und **redaktionelle Grundsätze** beschreibt                             |
| profileDesc    | **Nicht-bibliographische Aspekte** des Texts, z.B. Sprache, Teilnehmende, Umstände der Entstehung                |
| xenoData       | Container-Element, das die Einbindung von **Metadaten aus Nicht-TEI-Schemata** ermöglicht                        |
| revisionedDesc | **Versionsinformation**, die es dem Kodierer ermöglicht, eine Historie der vorgenommenen Änderungen zu erstellen |

Auch für die Auszeichnung von Text stehen eine Fülle von Elementen zur Verfügung. Schon die TEI-Dokumentation[^d] ist über 2000 Seiten lang.

[^d]: TEI P5: *Guidelines for Electronic Text Encoding and Interchange*, by the TEI Consortium, originally edited by C.M. Sperberg-McQueen and Lou Burnard for the ACH-ALLC-ACL Text Encoding Initiative, Version 4.6.0, last updated on 4th April 2023, revision f18deffba, [https://tei-c.org/release/doc/tei-p5-doc/en/Guidelines.pdf](https://tei-c.org/release/doc/tei-p5-doc/en/Guidelines.pdf) [24.07.2023]

[^13]: Teil vor dem Datenteil einer Datei, der Metadaten[^14] oder Angaben zum Aufbau des Datenteils der Datei enthält

[^14]: **Metadaten** sind strukturierte Daten, die verwendet werden, um Objekte, Konzepte und Daten systematisch zu beschreiben. Sie dienen dazu, umfassende Information über die Merkmale anderer Daten oder Datensätze zu vermitteln. Sie sind sozusagen "Daten über Daten".

[^15]: **UTF-8** steht für **U**CS **T**ransformation **F**ormat, wobei UCS die Abkürzung für **Universal Code Character Set** ist. UTF-8 ist die am weitesten verbreitete Zeichenkodierung für Text (genauer: Unicode-Zeichen). Die "8" steht für eine maximale Länge von 8 Byte pro Zeichen. Dabei wird aber nur die tatsächlich benötigte Länge verwendet. Die ersten 128 Zeichen stimmen mit dem ASCII-Zeichensatz[^16] überein, d.h. für die lateinische Schrift kommt UTF-8 mit nur einem Byte pro Zeichen aus. <br> UTF-8 enthält neben der lateinischen Schrift auch fast alle anderen heute noch verwendeten Schriftarten, wie z. B.  griechisch, kyrillisch, arabisch, chinesisch, Braille und mehrere indische und japanische Schriftarten. Auch etliche alte Schriftarten, wie z.B. ägyptische Hieroglyphen, und eine Vielzahl von Sonderzeichen sind enthalten.

[^16]: Der **American Standard Code for Information Interchange (ASCII)** ist eine 7-Bit-Zeichenkodierung für englischen Text. Beispielsweise wird A stets als 1000001 kodiert. 7-Bit-ASCII enthält die 94 druckbaren Zeichen<br><br>`!` `"` `#` `$` `%` `&` `'` `(` `)` `*` `+` `,` `-` `.` `/`<br>`0` `1` `2` `3` `4` `5` `6` `7` `8` `9` `:` `;` `<` `=` `>` `?`<br>`@` `A` `B` `C` `D` `E` `F` `G` `H` `I` `J` `K` `L` `M` `N` `O`<br>`P` `Q` `R` `S` `T` `U` `V` `W` `X` `Y` `Z` `[` `_` `]` `^` `\ `<br>`\`` `a` `b` `c` `d` `e` `f` `g` `h` `i` `j` `k` `k` `m` `n` `o`<br>`p` `q` `r` `s` `t` `u` `v` `w` `x` `y` `z` `{` `|` `}` `~`<br><br>sowie das Leerzeichen und weitere nicht druckbare Druckersteuerzeichen. Der erweiterte ASCII-Zeichensatz (8 Bit) enthält z.B. auch die deutschen Umlaute. UTF-8, der der-facto-Standard für die Zeichenkodierung im Web, ist eine Erweiterungen des druckbaren Teils von ASCII.



### ToDo: Fehlersuche

Fehler in Forschungsdaten zu suchen ist Forschungsalltag und Teil des Forschungsdatenmanagements. Unterschieden werden wissenschaftliche und technische Qualitätssicherung. Die Überprüfung der wissenschaftlichen Korrektheit gehört zur **wissenschaftlichen Qualitätssicherung**. Bei der **technischen Qualitätssicherung** sollte mindestens auf

- Gültigkeit (Einhaltung) des Daten- und Metadatenformats
- Nicht erlaubte Werte bei Zahlen
- Vollständigkeit der Daten und Metadaten

geprüft werden.

>**Info!** Ein händische Prüfung ist oft mühsam, vielleicht sogar schon in der kleinen Übung unten. Für die **Formatvalidierung** wird daher üblicherweise Software eingesetzt. Das dürfen Sie hier und im Abschlussquiz auch tun. Es gibt mehrere Möglichkeiten:
>
>- XML-Editoren:[^17] Für die meisten muss eine Lizenz kostenpflichtig erworben werden. Installation oder Anmeldung erforderlich. Teils gewöhnungsbedürftig. 
>- TextGrid[^18]: Virtuelle Forschungsumgebung[^19] optimiert für XML/TEI mit Repositorium und zahlreichen Tools. Für Forschende der Geisteswissenschaften ist TextGrid daher weit mehr als "nur" ein XML-Editor. Anmeldung erforderlich. Client muss installiert werden. Bevor mit der Arbeit begonnen werden kann, muss ein "Projekt" erzeugt werden. Entgeltfrei. Ohne Werbung
>- [Code Beautify](https://codebeautify.org/xmlvalidator?/xmlvalidate) arbeitet im Browser-Fenster. Keine Anmeldung und Installation erforderlich. Findet nicht jeden Fehler. Entgeltfrei. Werbung
>- Web-Browser: Einfach XML-Datei ins Browser-Fenster ziehen. Manche müssen auf Quellcode-Anzeige umgeschaltet werden. Finden nicht jeden Fehler
>
>Für das professionelle Forschungsdatenmanagement sind die beiden letzten Produkte zwar nicht ausreichend, im Rahmen dieses Kurses können sie aber wertvolle Hinweise auf Fehler in der Wohlgeformtheit liefern. Einfach ausprobieren!

>**Hinweis:** Bevor Sie das fehlerhafte Dokument untersuchen, sollten Sie sich einmal anschauen, wie das Werkzeug Ihrer Wahl gültiges XML anzeigt, denn alle genannten Werkzeuge können Tags "highlighten", d.h. farblich hervorheben. Nicht hervorgehobene Tags helfen sehr bei der Lokalisierung bzw. Eingrenzung von Fehlern. In diesem Kurs kann die Formatvalidierung aber auch ganz ohne Software durch aufmerksames Lesen erfolgen.

<br>In der grauen Box befindet sich ein XML/TEI-Dokument mit zwei Fehlern, die das XML nicht wohlgeformt bzw. ungültig werden lassen.

<lia-keep>
<pre dir="ltr" style="text-align: left; font-family: Courier New, Courier, mono; background-color: lightgrey;">&lt;?xml version="1.0"?&gt;
&lt;!DOCTYPE tei SYSTEM "https://tei-c.org/release/xml/tei/custom/schema/dtd/tei_all.dtd"&gt;
&lt;?xml-stylesheet type="text/xsl" href="file:///D:/tei/html/html.xsl?&gt;
&lt;TEI&gt;
    &lt;teiHeader&gt;
        &lt;fileDesc&gt;
            &lt;titleStmt&gt;
                &lt;title&gt;Einfaches XML/TEI-Beispiel&lt;/title&gt;
                &lt;author&gt;
                    &lt;surname&gt;Rathmann&lt;/surname&gt;
                    &lt;forename&gt;Torsten&lt;/forename&gt;
                &lt;/author&gt;
            &lt;/titleStmt&gt;
            &lt;sourceDesc&gt;
                &lt;p&gt;Born digital&lt;/p&gt;
            &lt;/sourceDesc&gt;
        &lt;/fileDesc&gt;
    &lt;/teiHeader&gt;
    &lt;text&gt;
        &lt;body&gt;
            &lt;p&gt;Als Auszeichnungssprache auf Basis von XML ist TEI Software- und 
            Hardware-unabhängig.&lt;/p&gt;
            &lt;p&gt;Da TEI nicht gepackt ist, ist es mit einem einfachen Texteditor, wie z. B. 
            Notepad unter Windows, lesbar.&lt;/p&gt;
        &lt;/body&gt;
    &lt;/text&gt;
&lt;/TEI&gt;
</pre>
</lia-keep>

<!-- style="color: red;" -->
H5P-Lernkarte: Finden Sie die beiden Fehler! (Lösung auf der Rückseite)

<div class="h5p-placeholder" contenteditable="false">https://moodle.uni-wuppertal.de/draftfile.php/30352/user/draft/870858923/ToDo_Fehlersuche_in_TEI.h5p?time=1707929411109</div>

[^17]: Ein **XML-Editor** ist ein Software-Werkzeug zum Editieren von Dokumenten, die in der Extensible Markup Language (XML) verfasst sind. XML-Editoren können nicht nur XML-Dokumente bearbeiten, sondern auch <br> • die Wohlgeformtheit des Dokuments prüfen <br> • XML-Elemente durch Ergänzen des End-Tags automatisch vervollständigen <br> • XML-Strukturen (z.B. Tags) erkennen und farblich hervorheben <br> • DTDs und Schemadateien lesen und nutzen, um das XML-Dokument auf Gültigkeit zu überprüfen und beim Editieren Kindelemente und Attribute vorzuschlagen <br> Eine Liste gängiger XML-Editoren kann bei [Curlie.org](https://curlie.org/Computers/Data_Formats/Markup_Languages/XML/Tools/Editors/) gefunden werden.

[^18]: **TextGrid** ist eine virtuelle Forschungsumgebung[^19] für die Geisteswissenschaften. Dateien, z.B. TEI- oder Bilddateien, können ins **TextGrid Laboratory** hochgeladen und dort — in "Projekten" organisiert — gespeichert und bearbeitet werden. Das TextGrid Laboratory bietet einen XML-Editor[^17] und weitere Open-Source-Werkzeuge. Um das TextGrid Laboratory nutzen zu können, muss die TextGrid-Client-Software heruntergeladen und installiert werden. Das TextGrid Laboratory ist für die Entwicklung mit XML/TEI optimiert. TextGrid eignet sich besonders gut für die Arbeit mit digitalen Editionen. <br> Im **TextGrid Repository**, einem Repositorium für textwissenschaftliche Forschungsdaten, können eigene Forschungsdaten archiviert und publiziert werden. Außerdem kann nach Daten anderer Forschender gesucht werden. <br> **TextGrid-Homepage:** [https://textgrid.de/](https://textgrid.de/)

[^19]: Eine **virtuelle Forschungsumgebung** ist eine "Arbeitsplattform, die eine kooperative Forschungstätigkeit durch mehrere Wissenschaftler an unterschiedlichen Orten zu gleicher Zeit ohne Einschränkungen ermöglicht. Inhaltlich unterstützt sie potentiell den gesamten Forschungsprozess — von der Erhebung, der Diskussion und weiteren Bearbeitung der Daten bis zur Publikation der Ergebnisse — während sie technologisch vor allem auf Softwarediensten und Kommunikationsnetzwerken basiert." (Allianz der deutschen Wissenschaftsorganisationen, 2011, Original nicht mehr online, [Archivdatei](https://web.archive.org/web/20160129095942/http://www.allianzinitiative.de/fileadmin/user_upload/redakteur/Leitfaden_VRE_de.pdf))




## .docx, OOXML, .odt und ODF

Alle wichtigen **Textverarbeitungsprogramme** können Dokumente als **.docx** (Word-Datei) und als **.odt** (OpenDocument Text) einlesen und abspeichern. Auch die basieren auf XML. Vermutlich haben Sie sich bei der Arbeit mit Textverarbeitungsprogrammen aber noch nie mit der Auswahl von XML-Elementen und der Gültigkeit Ihrer Dokumente auseinandersetzen müssen, denn das nimmt Ihnen das Textverarbeitungsprogramm vollständig ab.

>**Merke!** .docx und .odt sind nur eine Seite zweier umfassender Büroanwendungsformate, in denen u.a. auch Tabellendokumente (Spreadsheets) und Präsentationen gespeichert werden können. Diese umfassenden Büroanwendungsformate heißen OOXML und ODF und sind in der folgenden Tabelle gegenübergestellt.

|                                         | OOXML (Office Open XML oder OASIS Open XML) | ODF (OpenData Format)         |
|:----------------------------------------|:--------------------------------------------|:------------------------------|
| Dateiendung für Text                    |.docx                                        | .odt                          |
| Dateiendung für Tabellen (Spreadsheets) | .xlsx                                       | .ods                          |
| Dateiendung für Präsentationen          | .pptx                                       | .odp                          |
| Spezifikation                           | offen                                       | offen                         |
| Zur internationalen Norm erhoben durch  | ISO (Internationale Organisation für Normung),<br>OASIS (Organisation for the Advancements of Structured Information Standards),<br>ecma (Industry association for standardizing information and communication systems) | ISO, OASIS |
| Aufbau                                  | Unterdateien in zip-Container               | Unterdateien in zip-Container |
| Kodierung                               | nicht standardtextkodiert                   | nicht standardtextkodiert     |
| Entwickelt durch                        | Microsoft                                   | Sun Microsystems              |

Sowohl OOXML als auch ODF sind **Containerformate[^20] auf Basis von zip**, liegen also komprimiert vor. In dem Container befinden sich Unterdateien (in der Microsoft-Welt "Parts" genannt), aus denen das Dokument, die Tabelle oder die Präsentation zusammengesetzt ist. Neben XML-Dateien für Text, Tabellen, Präsentationen, mathematische Formeln und Vektorgrafiken können das beispielsweise Pixelgrafiken sein. Pixelgrafikformate sind zwar keine XML-Auszeichnungssprachen, können aber dank der Containertechnik einfach mit eingepackt werden. Dass aus vielen solcher Unterdateien durch das Packen nur eine Datei wird, fördert die Übersicht bei der Arbeit und verringert zudem noch das Datenvolumen[^21] durch Kompression.

Die Kompression von XML im .docx oder .odt hat die skurrile Folge, dass diese — obwohl Textformate — nicht zeichenkodiert[^22] sind. Das liegt daran, dass bei der Kompression häufig vorkommende Zeichenfolgen zusammengefasst als abgekürzte Bitfolge gespeichert werden. Ein Wörterbuch dieser Bitfolgen wird mitgespeichert, aber welche Bitfolge für was verwendet wird, hängt vom gesamten Text ab. Bei Zeichenkodierung ist hingegen jedes Zeichen einzeln und einheitlich kodiert, unabhängig davon, was im Text sonst noch vorkommt.

>**Merke!** Aufgrund der weiten Verbreitung haben sich OOXML und ODF zu wichtigen **Austauschformaten für Textdokumente** entwickelt. Für die **Langzeitarchivierung** wird dennoch **PDF/A** bevorzugt, da nicht gesichert ist, dass die als .docx und .odt gespeicherten Texte mit jedem Textverarbeitungsprogramm und in aller Zukunft immer gleich angezeigt werden. Schlimmer noch: Es gab Fälle, in denen sich ältere Dateien nicht mehr lesen ließen. Das kann daran liegen, dass im Container auch Komponenten gespeichert werden können, die proprietär[^23] sind und sich dann mit späteren Versionen von Textverarbeitungsprogrammen nicht immer lesen lassen.

Wenn mit der Datenveröffentlichung das Ziel verbunden ist, Texte in **leicht editierbarer Form** zur Verfügung zu stellen, sollten .docx- oder .odt-Dateien zusätzlich zu PDF/A beigelegt werden.

>**Merke!** Bilddaten, die selbst wichtige Forschungsdaten sind, sollten darüber hinaus auch als Grafikdatei im Originalformat bereitgestellt werden, denn bei der Speicherung im OOXML, ODF oder PDF kommt es möglicherweise zu Qualitätseinbußen und Informationsverlust. Beispielsweise können Bilddaten textuelle Zusatzinformationen (Metadaten im Datei-Header) enthalten, die dann oft verlorengehen.

Auslaufende Dokumentenformate, wie z. B. der .docx-Vorläufer .doc, sind für die Archivierung nicht geeignet.

[^20]: Ein **Containerformat** ist in der Lage mehrere Datenströme (beispielsweise Dateien) zu vereinen. Mit im Container befinden sich Informationen, auf was wo zugegriffen werden kann. Archivdateien wie zip und tar, die im Wesentlichen dem Ein- und Auspacken und der Datenkompression dienen, sind einfache Containerformate. <br> Dank der mitgespeicherten internen Links müssen die Container nicht unbedingt ausgepackt, sondern können direkt verarbeitet werden. Beispiele hierfür sind PDF, die Büroanwendungsformate OOXML (.docx, .xlsx, .pptx) und ODF (Open Data Format), sowie alle gängigen Videoformate (Quicktime, MPEG-2, MPEG-4, AVI, DV). Beispielsweise muss ein Videoformat Video- und Tonspur in einer Datei vereinen können.

[^21]: Das **Datenvolumen** ist der Platz, den die Daten auf einem Datenträger belegen, gemessen in Byte bzw. einem Vielfachen davon (kB, MB, GB, TB, PB).

[^22]: Eine **Zeichenkodierung** ist eine eindeutige Zuordnung von Schriftzeichen und Symbolen zu einer Bitfolge. Im Teil "Daten im Forschungsprozess / Modul: Was sind Daten?" können Sie selbst Texte als ASCII[^16] kodieren. Der de-Facto-Standard für die Zeichenkodierung im Web ist UTF-8,[^15] das ASCII mit enthält.

[^23]: Eine Software oder ein Datenformat wird als **proprietär** bezeichnet, wenn mindestens einer der folgenden Punkte zutrifft: <br> • Die Nutzungsrechte sind durch das Vorhandensein urheber- oder patentrechtlich geschützter Teile eingeschränkt <br> • Der Quellcode ist unter Verschluss (Closed Source) <br> • Teile der Dokumentation sind unter Verschluss oder fehlen




## PDF

Die größte Stärke der Seitenbeschreibungssprache PDF (Portable Document Format) ist die **originalgetreue Dokumentenausgabe**. Die Ausgabe ist betriebssystem- und geräteunabhängig, gleich ob auf einem Bildschirm oder einem Drucker. Das "Portable" im Namen weist auf diese Portierbarkeit der PDF-Dateien von einem System zum anderen hin.

Wie alle ausgabeorientierten Dokumentenformate ist PDF tief gegliedert in Boxen (Rechtecke). Die **Komplexität des Aufbaus erschwert das Editieren** erheblich. Veränderungen in PDF-Dateien sind daher umständlich und erfordern zusätzliche Software wie Adobe Acrobat. Aber leichte Editierbarkeit ist auch nicht die Intention von PDF, sondern die betriebssystem- und geräteunabhängige Dokumentenausgabe. Position und Größe der Boxen hängen nur vom auszugebenden Dokument ab. Voreinstellungen am Drucker und im Browser werden bei der Ausgabe hingegen ignoriert. Lediglich die Gesamtgröße der Seite wird angepasst, z.B. an das Papierformat oder die Fenstergröße. Bei einer solchen Größenanpassung werden alle Boxen gleichmäßig ("proportional") skaliert. Die Darstellung bleibt dadurch so originalgetreu wie nur möglich.

Auch PDF ist ein **Containerformat**. Grafiken und Multimedia-Elemente können wahlweise in der PDF-Datei gespeichert oder aus einer externen Datei geladen werden. Ebenso können die im Dokument verwendeten Schriftarten eingebunden oder von extern geholt werden. Für Dokumente, die originalgetreu sein sollen, sollten alle Schriftarten eingebunden sein, denn wenn eine Schrift weder eingebunden ist noch extern geladen werden kann, wird eine **Ersatzschrift** verwendet und das Aussehen des Dokuments ist dann doch verändert.

Auf Basis von PDF sind zwei wichtige spezifische Formate definiert:

| Format                      | Hauptzweck           |
|:----------------------------|:---------------------|
| **PDF/A (PDF for Archive)** | Langzeitarchivierung |
| **PDF/X (Xchange)**         | Druckvorstufen       |

Von beiden gibt es mehrere Versionen bzw. Unterformate. PDF/A folgt der internationalen Norm ISO 19005, von der es vier Versionen gibt:

| Format  | Norm        | Jahr der Verabschiedung |
|:--------|:------------|:------------------------|
| PDF/A-2 | ISO 19005-1 | 2005                    |
| PDF/A-2 | ISO 19005-2 | 2011                    |
| PDF/A-3 | ISO 19005-3 | 2012                    |
| PDF/A-4 | ISO 19005-4 | 2020                    |

Die älteren Versionen sind nicht etwa obsolet, sondern im Gegenteil, PDF/A-1 ist mit seinen Qualitätsstufen PDF/A-1a ("a" für "accessible") und PDF/A-1b ("b" für "basic") die wohl bekannteste Version. PDF/A-1a ist verglichen mit 1b zusätzlich UTF-8-codiert[^15] und auch barrierefrei in dem Sinne, dass das Dokument von einem Screenreader vorgelesen werden kann und die dafür erforderliche Struktur besitzt.

>**Merke!** Allen PDF/A-Versionen ist gemeinsam, dass
>
>- alle **Schriftarten und Abbildungen**, die im Dokument verwendet werden, **eingebunden** sind
>- **Animationen, Videos und andere Elemente, die auf externe Software zugreifen, nicht eingebunden** sind
>- Farben im Farbraum des Ausgabegeräts so gewählt werden, dass sie der Farbe im Dokument möglichst nahekommen
>- die Verwendung von **Kryptofunktionen** (Verschlüsselungen) **nicht erlaubt** ist. Mit Krypofunktionen kann der Druck oder der Zugang zu Teilen des Dokuments unterbunden werden. Bei einer Archivierung ist dies jedoch unerwünscht.

PDF/A-2 bis 4 erlauben zusätzliche Techniken wie JPEG2000-Kompression und die Einbindung zusätzlicher Datenformate ins PDF/A. Insofern ist PDF/A-1 die strengste Version und eine Konvertierung in eine der neueren nicht erforderlich.

Die meisten Institutionen fordern als Dokumentenformat PDF ohne Verschlüsselungen und empfehlen PDF/A für die Langzeitarchivierung. Für die Empfehlung gibt es gute Gründe. Tatsächlich sind aus externen Dateien eingelesene Schriftarten ein echtes Problem, wenn die externe Datei fehlt. Schriftarten sollten immer eingebunden werden. Teilverschlüsselte Dokumente sind für die Archivierung unbrauchbar.

Neben dem Klassiker Adobe Acrobat Pro sind inzwischen viele Software-Produkte in der Lage PDF-Dokumente zu erzeugen. Da die Qualität — sogar von bereits archivierten PDF-Dateien — leider sehr unterschiedlich ist, sollten PDF-Dateien immer einer sorgfältigen **Qualitätskontrolle** vor der Speicherung im Repositorium unterzogen werden. Häufige Fehler sind:[^e]

- Die Qualitätsstufe ist falsch angegeben und wird nicht erreicht
- PDF/A ist zwar für die Langzeitarchivierung geeignet, aber die **Eignung der mitgespeicherten Dateien**, wie z.B. Abbildungen, für die Langzeitarchivierung müssen die Erzeuger der PDF/A-Datei schon noch **selbst prüfen**. Die Software übernimmt das nicht und ISO 19005 schließt z.B. verlustbehaftet gespeicherte Grafiken nicht aus. Und überhaupt sollten **Grafiken** — sofern sie selbst zu den primären Forschungsdaten gehören — als Rohdaten[^24] auch noch einmal **separat** gespeichert werden
- Immer mal wieder werden Teile der Datei nicht angezeigt. Prüfen Sie auch innerhalb der PDF-Datei die **Vollständigkeit** der Daten
- Auch die Maschinenlesbarkeit ist leider nicht immer gegeben. Leicht zu überprüfen ist in dem Zusammenhang, ob **Copy-and-Paste** gelingt. Werden Sonderzeichen und die als Worttrennsymbole so wichtigen Leerzeichen alle mitkopiert? Wenn nicht, sollte die Software gewechselt werden

[^24]: Ausgangsdaten, d. h. Daten, die noch unbearbeitet sind. Rohdaten müssen nicht unbedingt digital, sondern können auch auf Papier oder einem anderen Träger vorliegen.

[^e]: Dennis Müller, Art und Verteilung von PDF-Formaten auf wissenschaftlichen deutschen Repositorien mit Hinblick auf Langzeitarchivierung, Bachelorarbeit im Studiengang Bibliotheks- und Informationsmanagement, 2015, [https://madoc.bib.uni-mannheim.de/38775/1/Mueller_Thesis_PDF_Formate.pdf](https://madoc.bib.uni-mannheim.de/38775/1/Mueller_Thesis_PDF_Formate.pdf)




## HTML

Wikipedia definiert HTML (HyperText Markup Language) als...

...*eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und werden von Webbrowsern dargestellt.*[^f]

HTML hat im Forschungsdatenmanagement an zwei Stellen Bedeutung: Zum einen sind Web-Seiten Forschungsgegenstand und damit auch Forschungsdaten, vor allem in den Kultur- und Sozialwissenschaften. Zum anderen sind fast alle Forschungsdatenrepositorien Web-Dienste, die nicht nur nackte Daten, sondern auch HTML-Seiten ausgeben. Häufig haben Forschende die Möglichkeit, eine Beschreibung des Forschungsprojektes bzw. der Sammlung zu ergänzen. Dies geschieht nicht selten über Online-Formulare, die HTML akzeptieren. Beides sind gute Gründe, sich zumindest oberflächlich mit HTML zu befassen.

HTML folgt zwar nicht den strengen XML-Regeln, besitzt als Auszeichnungssprache aber doch Elemente, die durch **Tags** eingeleitet werden. Beispielsweise wird ein neuer **Absatz** durch `<p>`<!-- style="font-family: Courier New, Courier, mono;" --> eingeleitet. `p`<!-- style="font-family: Courier New, Courier, mono;" --> steht dabei für *paragraph*. Gutes HTML sollte aber möglichst auch ein End-Tag enthalten.

HTML ist zeichenkodiert, kein Containerformat. Nur einige wenige andere Formate können direkt in einer HTML-Datei mit enthalten sein, z.B. das Vektorgrafikformat SVG und MathML für mathematische Formeln. Für Rastergrafiken und andere nicht zeichenkodierte Objekte trifft das aber nicht zu. Solche Objekte müssen separat als Datei oder URL zugreifbar sein. Im HTML sind sie nur verlinkt. Über Dateinamen und eine sinnvolle Verzeichnisstruktur sollte man sich rechtzeitig Gedanken machen.

[^f]: Wikipedia, o.J., Suchbegriff Hypertext Markup Language. Zugriff: 11.08.2023. Unter Lizenz [CC BY-SA 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.en), [https://de.wikipedia.org/wiki/Hypertext_Markup_Language](https://de.wikipedia.org/wiki/Hypertext_Markup_Language)



### Hyperlink und URL

Auch der Namensgeber von HTML, der Hyperlink (Web-Link), wird durch ein Tag eingeleitet:

<lia-keep>
<p><span style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;a href="..." target="_blank"&gt;blau hervorgehobener und anklickbarer Linktext&lt;/a&gt;</span></p>
</lia-keep>

Das Attribut `href`<!-- style="font-family: Courier New, Courier, mono;"--> enthält die **Zieladresse** des Links. Das optionale Attribut `target="_blank"`<!-- style="font-family: Courier New, Courier, mono;" --> bewirkt, dass die verlinkte Web-Seite in einem **neuen Tab** des Browsers geöffnet wird. Falls es weggelassen wird, wird die Zielseite des Links im selben Tab geöffnet.

Ins Hyperlink-Tag wird die Zieladresse als **URL (Uniform Resource Locator)** eingetragen. Beispiel:

<lia-keep>
<p style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;p&gt;HTML-Grundlagen und -Nachschlagewerk: <br>&nbsp;&nbsp;&nbsp;&nbsp; &lt;a href="https://wiki.selfhtml.org" target="_blank"&gt;selfhtml&lt;/a&gt;<br>&nbsp;&nbsp; &lt;/p&gt;</p>
</lia-keep>

Dies wird im Browser dargestellt als

<!-- style="padding: 3em; border: thin solid black; width: 100%" -->
HTML-Grundlagen und -Nachschlagewerk: <a href="https://wiki.selfhtml.org" target="_blank">selfhtml</a><br><br><br><br><br><br><br>

Der Link führt übrigens zu selfhtml, einem deutschsprachigen Wiki, das sich sowohl an HTML-Anfänger als auch an Fortgeschrittene richtet und so ziemlich alles zum Thema enthält.

Und so sehen URLs aus, die beliebige Seiten aus dem Verzeichnisbaum anfordern, Zeichenketten suchen und ein Seitenfragment ausgeben:

<svg viewBox="0 0 1200 400" width="1200">
    <title>Eine URL beginnt allgemein mit einem Protokoll, an das sich Logon-Parameter, Maschinenname, Port-Nummer, Verzeichniskette, Name der angeforderten Datei, Abfragen und ein Anker anschließen können</title>
    <symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2">
        <path d="M 0,0 L -2,1 L -2,-1 z"></path>
    </symbol>

    <text x="0" y="20" style="font-family: Courier New, Courier, mono;">
        <tspan dx="0" dy="0" fill="darkblue">https://username:passwort@www.example.com:443/verzeichnis1/.../verzeichnis_n/filename.html?fragestring1=A&amp;fragestring2=B#fragment</tspan>
    </text>
    <line x1="20" y1="25" x2="20" y2="330" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(20,25) rotate(-90)"></use>
    <rect x="5" y="330" height="48" width="450" fill="transparent" stroke="black" stroke-width="1"></rect>
    <text x="15" y="335" style="font-size: small;">
        <tspan x="15" dy="1.2em">
            <tspan style="font-weight: bold;">http:</tspan> (Hypertext Transfer Protocol, ohne Transportverschlüsselung) oder
        </tspan>
        <tspan x="15" dy="1.2em">
            <tspan style="font-weight: bold;">https:</tspan> (Hypertext Transfer Protocol Secure, mit Transportverschlüsselung)
        </tspan>
    </text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 70,25 L 71,28 L 150,28 L 151,31 L 152,28 L 231,28 L 232,25"></path>
    <text x="112" y="35" style="font-size: small;">
        <tspan x="75" dy="1.2em">
            <tspan style="font-weight: bold;">Login-Parameter</tspan> für zu-
        </tspan>
        <tspan x="75" dy="1.2em">gangsbeschränkte Seiten.</tspan>
        <tspan x="75" dy="1.2em">Werden aber auch inter-</tspan>
        <tspan x="75" dy="1.2em">aktiv abgefragt, falls</tspan>
        <tspan x="75" dy="1.2em">überhaupt erforderlich.</tspan>
        <tspan x="75" dy="2em">
            <tspan style="font-weight: bold;">Vorsicht:</tspan> Wenn das Pass-
        </tspan>
        <tspan x="75" dy="1.2em">wort mit in der URL steht,</tspan>
        <tspan x="75" dy="1.2em">wird es unverschlüsselt</tspan>
        <tspan x="75" dy="1.2em">übertragen!</tspan>
    </text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 234,25 L 235,28 L 301,28 L 302,31 L 303,28 L 369,28 L 370,25"></path>
    <text x="244" y="35" style="font-size: small;">
        <tspan x="244" dy="1.2em">
            <tspan style="font-weight: bold;">Host:</tspan> Name oder
        </tspan>
        <tspan x="244" dy="1.2em">IP-Adresse</tspan>
    </text>
    <line x1="390" y1="25" x2="390" y2="230" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(390,25) rotate(-90)"></use>
    <rect x="290" y="230" height="65" width="805" fill="transparent" stroke="black" stroke-width="1"></rect>
    <text x="300" y="235" style="font-size: small;">
        <tspan x="300" dy="1.2em">
            <tspan style="font-weight: bold;">Port:</tspan> Falls ein Web-Server mehrere Sites unter einem Host-Namen versorgt, wird durch Zuweisung einer Port-Nummer eine bestimmte
        </tspan>
        <tspan x="300" dy="1.2em"> Site angefordert. Die Voreinstellung ist 80 für http und 443 für https. Falls diese Voreinstellung verwendet wird, braucht der Port samt
        </tspan>
        <tspan x="300" dy="1.2em">Doppelpunkt nicht angegeben zu werden. Das ist fast immer der Fall.</tspan>
    </text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 406,25 L 407,28 L 548,28 L 549,31 L 550,28 L 691,28 L 692,25"></path>
    <text x="244" y="35" style="font-size: small;">
        <tspan x="416" dy="1.2em">Lage der angeforderten Datei im</tspan>
        <tspan x="416" dy="1.2em">
            <tspan style="font-weight: bold;">Verzeichnisbaum</tspan> bezogen auf das Wurzel-
        </tspan>
        <tspan x="416" dy="1.2em">verzeichnis (Web-Root &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) des Web-Dienstes</tspan>
    </text>
    <text x="537" y="77" style="font-size: x-small;">[25]</text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 694,25 L 695,28 L 750,28 L 751,31 L 752,28 L 807,28 L 808,25"></path>
    <text x="704" y="35" style="font-size: small;">
        <tspan x="704" dy="1.2em">Name der ange-
        </tspan>
        <tspan x="704" dy="1.2em">forderten <tspan style="font-weight: bold;">Datei</tspan>
        </tspan>
    </text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 810,25 L 811,28 L 944,28 L 945,31 L 946,28 L 1079,28 L 1080,25"></path>
    <text x="704" y="35" style="font-size: small;">
        <tspan x="820" dy="1.2em">
            <tspan style="font-weight: bold;">Abfragen</tspan> der Form Name=Wert werden
        </tspan>
        <tspan x="820" dy="1.2em">an die Suchfunktion der Seite übergeben. </tspan>
        <tspan x="820" dy="1.2em">Leerzeichen durch „+“ ersetzen! Mehrere </tspan>
        <tspan x="820" dy="1.2em">Frage-Strings können durch „<tspan style="font-family: Courier New, Courier, mono;">&amp;</tspan>“ verknüpft </tspan>
        <tspan x="820" dy="1.2em">werden.</tspan>
    </text>
    <line x1="1120" y1="25" x2="1120" y2="150" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(1120,25) rotate(-90)"></use>
    <rect x="890" y="150" height="48" width="265" fill="transparent" stroke="black" stroke-width="1"></rect>
    <text x="900" y="155" style="font-size: small;">
        <tspan x="900" dy="1.2em">Falls ein <tspan style="font-weight: bold;">Anker</tspan> dieses Namens gesetzt ist, </tspan>
        <tspan x="900" dy="1.2em">wird die Seite ab dem Anker ausgegeben.</tspan>
    </text>
</svg> 

**Beispiele:**

[https://wiki.selfhtml.org/wiki/HTML](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/)<br>
URL mit Angabe eines Verzeichnisses

[https://publicdata.fdm.uni-wuppertal.de/search?query=Industrial+Printing](https://publicdata.fdm.uni-wuppertal.de/search?query=Industrial+Printing)<br>
Suche nach "Industrial Printing" in den Metadaten des Forschungsdatenrepositoriums der Universität Wuppertal. Leerzeichen sind nicht erlaubt. Stattdessen wird das Pluszeichen benutzt.

[https://de.wikipedia.org/wiki/Hypertext_Markup_Language#Syntax](https://de.wikipedia.org/wiki/Hypertext_Markup_Language#Syntax)<br>
Anforderung des Seitenfragments ab dem Anker "Syntax"

**Neben der URL für Web-Seiten gibt es noch weitere URL-Formen. Hier ist eine kleine Auswahl:**

<lia-keep><a href="mailto:support@example.com">mailto:support@example.com</a></lia-keep><br>
öffnet den Standard-Mailclient zum Verfassen einer E-Mail, wobei support@example.com als Empfängeradresse schon eingetragen ist

[file:///D:/verzeichnis/filename.abc](file:///D:/verzeichnis/filename.abc)<br>
versucht die Datei filename.abc auf dem lokalen Rechner von Laufwerk D: und dem angegebenen Verzeichnis zu holen und im Browser zu öffnen. Die Laufwerksangabe ist Windows-spezifisch und wird unter Linux fortgelassen.

[^25]: Nicht der gesamte Verzeichnisbaum eines Computers sollte einfach so durch einen Web-Dienst öffentlich gemacht werden. Durch die Konfiguration des Web-Dienstes kann eingeschränkt werden, was durch den Web-Dienst abrufbar ist. Das **Web-Root** ist das oberste Verzeichnis, welches über den Web-Dienst zugänglich ist. Auch die Unterverzeichnise des Web-Root sind in der Regel zugänglich. Das Web-Root wird durch den Web-Administrator in der Konfiguration des Web-Dienstes festgelegt.



### Sonderzeichen

<, >, " und & sind reservierte Zeichen im HTML. Sie erscheinen nur im Text, wenn sie mit ihrem Zeichennamen aufgerufen werden (eingeleitet durch "&" und abgeschlossen durch ";"). Quelltext-Beispiel mit einem Ja in Anführungszeichen:

<lia-keep>
    <p style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; Seine Antwort war &amp;quot;Ja&amp;quot;.</p>
</lia-keep>

**HTML-eigene Zeichen**

| Zeichen | Bedeutung                      | Name in HTML |
|:--------|:-------------------------------|:-------------|
| <       | kleiner als (less than)        | &lt;         |
| >       | größer als (greater than)      | &gt;         |
| "       | Anführungszeiche               | &quot;       |
| &       | kaufmännisches Und (ampersand) | &amp;        | 

Alle anderen Sonderzeichen können direkt verwendet werden. Falls der Zeichensatz einmal nicht auf UTF-8[^15] eingestellt sein sollte, hier eine kleine Auswahl weiterer benannter Zeichen:

| Zeichen | Bedeutung                              | Name in HTML |
|:--------|:---------------------------------------|:-------------|
|         | festes Leerzeichen                     | &nbsp;       |
| ä       | a-Umlaut                               | &auml;       |
| ö       | o-Umlaut                               | &ouml;       |
| ü       | u-Umlaut                               | &uuml;       |
| Ä       | a-Umlaut                               | &Auml;       |
| Ö       | o-Umlaut                               | &Ouml;       |
| Ü       | u-Umlaut                               | &Uuml;       |
| ß       | scharfes s (sz-Ligatur[^26])           | &szlig;      |
| —       | Gedankenstrich der Breite m            | &mdash;      |
| ·       | multipliziert mit (Punkt in der Mitte) | &sdot;       |
| ©       | Copyright                              | &copy;       |
| ®       | eingetragene Marke                     | &reg;        |

[^26]: Eine **Ligatur** ist ein Zeichen, das durch Verschmelzung mehrerer Buchstaben entstanden ist. Beispiele: sz → ß, ae → æ, oe → œ



### Listen

Nummerierte Listen werden mit dem Tag `<ol>`<!-- style="font-family: Courier New, Courier, mono;" --> eingeleitet (für "ordered list"). Ein Listeneintrag ist mit `<li>`<!-- style="font-family: Courier New, Courier, mono;" --> gekennzeichnet. Beispiel:

<lia-keep>
    <p style="font-family: Courier New, Courier, mono;">
        &nbsp;&nbsp; &lt;ol&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 2&lt;/li&gt;<br>&nbsp;&nbsp; &lt;/ol&gt;
    </p>
</lia-keep>

Dargestellt wird das in Ihrem Web-Browser so:

<lia-keep>
    <ol style="padding: 2em; border: thin solid black; width: 100%">
        <li>Listeneintrag 1</li>
        <li>Listeneintrag 2</li>
    </ol>
</lia-keep>

Unnummerierte Listen werden mit `<ul>`<!-- style="font-family: Courier New, Courier, mono;" --> eingeleitet. Beispiel:

<lia-keep>
    <p style="font-family: Courier New, Courier, mono;">
        &nbsp;&nbsp; &lt;ul&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 2&lt;/li&gt;<br>&nbsp;&nbsp; &lt;/ul&gt;
    </p>
</lia-keep>

Voreingestellt ist hierfür eine Darstellung mit Bullet Points:

<lia-keep>
    <ul style="padding: 2em; border: thin solid black; width: 100%">
        <li>Listeneintrag 1</li>
        <li>Listeneintrag 2</li>
    </ul>
</lia-keep>

Unterlisten sind möglich, d.h. Listen können verschachtelt werden. Beispiel:

<lia-keep>
    <p style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;ul&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 1&lt;/li&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;Listeneintrag 2
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;ul&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;2a&lt;/li&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;li&gt;2b&lt;/li&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/ul&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/li&gt;
        <br>&nbsp;&nbsp; &lt;/ul&gt;
    </p>
</lia-keep>

Das wird in Ihrem Web-Browser dargestellt als

<lia-keep>
    <ul style="padding: 2em; border: thin solid black; width: 100%";>
        <li>Listeneintrag 1</li>
        <li>Listeneintrag 2
            <ul>
                <li>2a</li>
                <li>2b</li>
            </ul>
        </li>
    </ul>
</lia-keep>



### Tabellen

HTML-Tabellen werden durch das Tag `<table>`<!-- style="font-family: Courier New, Courier, mono;" --> eingeleitet. Struktur und Inhalte befinden sich innerhalb dieses Tabellenelementes.

**HTML-Tabelle als Baumstruktur**

<svg viewBox="0 70 1000 310">
    <title>Das table-Element kann ein caption-Element für die Tabellenüberschrift, das Element thead mit dem Tabellenkopf und das tbody-Element mit allen weiteren Tabellenzeilen enthalten. Im Tabellenkopf stehen die Tabellenspalten, jede in ein th-Element gehüllt. Das h im th steht für header. Das tbody-Element enthält für jede Zeile ein tr-Element, das wiederum für jede Tabellenzelle ein Element td enthält.</title>
    <rect x="5" y="165" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="75" y="190" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        table
    </text>
    <line x1="140" y1="185" x2="195" y2="100" stroke="darkblue" stroke-width="2"></line>
    <line x1="140" y1="185" x2="195" y2="185" stroke="darkblue" stroke-width="2"></line>
    <line x1="140" y1="185" x2="195" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="195" y="80" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="265" y="105" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        caption
    </text>
    <rect x="195" y="165" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="265" y="190" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        thead
    </text>
    <line x1="330" y1="185" x2="555" y2="185" stroke="darkblue" stroke-width="2"></line>
    <rect x="195" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="265" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        tbody
    </text>
    <line x1="330" y1="270" x2="375" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="165" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="190" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        th
    </text>
    <rect x="375" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="445" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        tr
    </text>
    <line x1="510" y1="270" x2="560" y2="270" stroke="darkblue" stroke-width="2"></line>
    <rect x="555" y="250" rx="5" ry="5" width="140" height="40" fill="darkblue"></rect>
    <text x="625" y="275" fill="white" style="text-anchor: middle; font-size: middle; font-weight: bold;">
        td
    </text>
    <text x="720" y="105" style="font-size: middle;">Tabellenüberschrift</text>
    <text x="720" y="190" style="font-size: middle;">Tabellenkopf (oberste Tabellenzeile)</text>
    <text x="720" y="275" style="font-size: middle;">Tabellenkörper</text>
    <text x="445" y="330" style="text-anchor: middle; font-size: middle;">
        Zeile
    </text>
    <text x="625" y="330" style="text-anchor: middle; font-size: middle">
        Zelle</text>
</svg>

Der Tabellenkopf wird in Fettschrift ausgegeben, wenn nichts anderes eingestellt ist. Die Zeilen- und Zellenelemente können selbstverständlich mehrfach vorhanden sein. Beispiel:

<lia-keep>
    <p style="font-family: Courier New, Courier, mono;">
        &nbsp;&nbsp; &lt;table&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;caption&gt;Tabellenüberschrift&lt;/caption&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;thead&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;11&lt;/th&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;12&lt;/th&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;13&lt;/th&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/thead&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tbody&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;21&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;22&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;23&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;31&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;32&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td rowspan="2"&gt;33 und 43 verbunden&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td colspan="2"&gt;41 und 42 verbunden&lt;/td&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tbody&gt;
        <br>&nbsp;&nbsp; &lt;/table&gt;
    </p>
</lia-keep>

Das Attribut `rowspan`<!-- style="font-family: Courier New, Courier, mono;" --> verbindet untereinander stehende Zellen miteinander, `colspan`<!-- style="font-family: Courier New, Courier, mono;" --> nebeneinander stehende. Der Wert dieser Attribute gibt an, wie viele Zellen verbunden werden sollen; im Beispiel sind das jeweils zwei. Das wird wie folgt dargestellt:

<lia-keep>
    <table style="border: thin solid black; width: 100%">
        <tbody>
            <tr>
                <td style="padding: 1em;">
                    <table>
                        <caption>Tabellenüberschrift</caption>
                        <thead>
                            <tr>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td>32</td>
                                <td rowspan="2">33 und 43 verbunden</td>
                            </tr>
                            <tr>
                                <td colspan="2">41 und 42 verbunden</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table><br>
</lia-keep>

Wie Design und Lesbarkeit verbessert werden können, erfahren Sie auf der nächsten Seite.



## CSS

Frühe HTML-Versionen haben Inhalt und Design zusammengefasst. Das hat den Nachteil, dass jede einzelne Web-Seite angefasst werden muss, wenn das Design einmal angepasst werden muss. Auch bei den von Forschungsdatenrepositorien erzeugten Web-Seiten ist die Trennung von Inhalt und Design die Regel. Beispielsweise werden für die Landungsseite (landing page)[^27] eines Datensatzes Metadaten und vielleicht Previews der Daten oder ein Logo aus einer Datenbank geholt und von der Repositoriums-Software zu einer Web-Seite zusammengesetzt und verschickt. Die Seite ist in der Regel also nicht fertig zusammengesetzt irgendwo gespeichert, sondern dynamisch, d.h. wird zur Laufzeit erzeugt. Wäre das Design nicht als Stylesheet-Datei verfügbar, müsste es mit in die Software integriert werden mit der Folge, dass bei jeder kleinen Design-Änderung die Software überarbeitet werden müsste. Das wäre grotesk umständlich.

Stattdessen wird die Design-Information in einer Stylesheet-Datei für alle Seiten zusammengefasst. Bei einer Design-Änderung muss dann im Idealfall nur diese eine Datei angepasst werden.

Eine Sprache, die mit HTML, TEI und dem Vektorgrafikformat SVG kombinierbar ist, ist **CSS (Cascading Style Sheets)**. Das "Cascading" im Namen hat seinen Ursprung darin, dass nacheinander

- eine externe Stylesheet-Datei
- Style-Element im Head
- Style-Attribute der Elemente des Textteils

eingelesen werden. Dabei besitzt die zuletzt eingelesene Regel Vorrang.

Angenommen wir wollen die HTML-Tabelle von oben folgendermaßen darstellen:

<lia-keep>
<table style="padding: 3em; border: thin solid black; width: 100%">
    <tbody>
        <tr>
            <td style="padding: 1em;">
                <table style="border-collapse: collapse;">
                    <caption style="font-size: medium;">Tabellenüberschrift</caption>
                    <thead>
                        <tr>
                            <th style="background-color: lightgrey; padding: 0.3em; border: thin solid black; text-align: center">11</th>
                            <th style="padding: 0.3em; border: thin solid black; background-color: lightgrey; text-align: center">12</th>
                            <th style="padding: 0.3em; border: thin solid black; background-color: lightgrey; text-align: center">13</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 0.3em; border: thin solid black; text-align: center">21</td>
                            <td style="padding: 0.3em; border: thin solid black; text-align: center">22</td>
                            <td style="padding: 0.3em; border: thin solid black; text-align: center">23</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.3em; border: thin solid black; text-align: center">31</td>
                            <td style="padding: 0.3em; border: thin solid black; text-align: center">32</td>
                            <td rowspan="2" style="padding: 0.3em; border: thin solid black;">33 und 43 verbunden</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding: 0.3em; border: thin solid black;">41 und 42 verbunden</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<br>
</lia-keep>

Wenn das Design im Head stehen soll, erweitern wir die HTML-Datei um einen Header mit Style-Element und schreiben die Style-Regeln dort hinein:

<lia-keep>
<table>
    <caption style="font-size: medium;">CSS im Header</caption>
    <tbody>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&lt;html&gt;</td>
            <td>HTML-Kennung</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;head&gt;</td>
            <td>Beginn Head</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;title&gt;Seitentitel&lt;/title&gt;</td>
            <td>wird nicht dargestellt</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;style type="text/css"&gt;</td>
            <td>Beginn Style-Element</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; caption { font-size: medium; }</td>
            <td>Tabellenüberschrift in normal großer Schrift</td>
        </tr>
        <tr>
            <td><span class="" style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; th {background-color: lightgrey; }</span><br></td>
            <td>unterlegt die Zellen des Tabellenkopfes hellgrau<br></td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; td, th { padding: 0.3em;</td>
            <td>erzeugt einen Rand der Breite 0.3 em</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; border: thin solid black;</td>
            <td>umrandet die Zelle mit einer dünnen, durchgezogenen, schwarzen Linie</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; text-align: center; }</td>
            <td>Text zentriert</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; table { border-collapse: collapse; }</td>
            <td>verschmilzt die separaten Kästen um die Zellen zu einer Begrenzungslinie</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/style&gt;</td>
            <td>Ende Style-Element</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;/head&gt;</td>
            <td>Ende Head</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;body&gt;</td>
            <td>Beginn Textteil</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;table&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;caption&gt;Tabellenüberschrift&lt;/caption&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;thead&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;11&lt;/th&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;12&lt;/th&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;th&gt;13&lt;/th&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/thead&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tbody&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;21&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;22&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;23&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;31&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td&gt;32&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td rowspan="2"&gt;33 und 43 verbunden&lt;/td&gt;&nbsp;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;td colspan="2"&gt;41 und 42 verbunden&lt;/td&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tr&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/tbody&gt;
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/table&gt;
            </td>
            <td style="border: thin solid black; text-align: center">Tabelleninhalte von einer Seite zurück</td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;/body&gt;</td>
            <td></td>
        </tr>
        <tr>
            <td style="font-family: Courier New, Courier, mono;">&lt;/html&gt;</td>
            <td></td>
        </tr>
    </tbody>
</table>
</lia-keep>

Eine Style-Regel nennt mindestens einen **Selektor** oder eine Liste von Selektoren, auf die sich die Regel auswirken soll, gefolgt von mindestens einer **Deklaration** in geschweiften Klammern. Beispiel:<br><br>

<svg width="400" viewBox="0 0 400 100">
    <title>Caption, geschweifte Klammer auf, font-size, Doppelpunkt, medium, Semikolon, geschweifte Klammer zu</title>
    <text x="20" y="10" style="font-family: Courier New, Courier, mono; font-size: medium;">
        <tspan fill="red">Caption</tspan> { <tspan fill="blue">font-size:</tspan>
        <tspan fill="green">medium</tspan>; }
    </text>
    <text x="30" y="40" fill="red" style="font-size: small;">Selektor</text>
    <text x="125" y="40" fill="blue" style="font-size: small;">Eigenschaft</text>
    <text x="235" y="40" fill="green" style="font-size: small;">Wert</text>
    <path stroke="black" stroke-width="1" fill="transparent" d="M 115,50 L 116,53 L 196,53 L 197,56 L 198,53 L 278,53 L 279,50"></path>
    <text x="197" y="75" style="text-anchor: middle; font-size: small;">Deklaration</text>
</svg>

Zwischen Eigenschaft und Wert muss immer ein Doppelpunkt stehen. Innerhalb der geschweiften Klammern können mehrere Deklarationen stehen, die durch Semikolons getrennt sind.

In einer Liste von Selektoren sind die einzelnen Selektoren durch Kommas getrennt. Selektoren sind meist Elementnamen. Es gibt aber auch spezielle Selektoren, die standardmäßig mehrere Elemente umfassen oder aktionsbezogen sind. Ein Beispiel ist `:hoover`<!-- style="font-family: Courier New, Courier, mono;" -->, das Element, über dem gerade der Mauszeiger steht.

Style-Regeln können — wie schon erwähnt — auch aus einer **externen Datei** gelesen werden. Im Head der HTML-Datei steht dann der Link zur CSS-Datei:

<lia-keep>
<p><span style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;html&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;head&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;link rel="stylesheet" href="stylesheet.css"&gt;
        <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>...
</p>
</lia-keep>

Mit `rel="stylesheet"`<!-- style="font-family: Courier New, Courier, mono;" --> wird angezeigt, dass ein Stylesheet importiert werden soll. `href`<!-- style="font-family: Courier New, Courier, mono;" --> enthält die URL.

Wenn Sie selbst im Repositorium Einträge in HTML zu Ihren Daten vornehmen, werden Sie vermutlich nicht die Möglichkeit haben, die Stylesheet-Datei anzupassen. Und zum HTML-Head werden Sie in der Regel ebenso keinen Zugang haben. Was in dem Fall bleibt, sind **Style-Attribute in den Elementen**. Beispiel:

<lia-keep>
<p><span class="" style="font-family: Courier New, Courier, mono;">&nbsp;&nbsp; &lt;caption style="<span style="color: rgb(125, 159, 211);"><strong>font-size</strong></span>: <span style="color: rgb(152, 202, 62);"><strong>medium</strong></span>;"&gt;Tabellenüberschrift&lt;/caption&gt;</span><br><br><br></p>
</lia-keep>

**Tutorium und Nachschlagewerk zu CSS:** unter [selfhtml](https://wiki.selfhtml.org/wiki/CSS)

[^27]: In der Web-Oberfläche der meisten Repositorien sind Forschungsdaten nicht über nur einen Mausklick abrufbar, sondern es befindet sich noch eine Seite dazwischen, die **Landungsseite** oder **landing page**. Die Landungsseite enthält üblicherweise Informationen zum Forschungsdatensatz, meist einen Teil der Metadaten und eine Liste der verfügbaren Dateien.



### ToDo

Die folgende Tabelle ist zwar inhaltlich korrekt, verwendet aber für die Rahmen um die Tabellenzellen ein veraltetes HTML-Attribut. Damit sind Inhalt und Design nicht sauber getrennt. Lassen Sie sich in Ihrem Browser den HTML-Code anzeigen und ersetzen Sie das veraltete HTML-Attribut durch CSS.

<lia-keep>
<table border="">
    <caption><span style="font-size: medium; font-weight: bold;">Welche Datentypen können sich im Innern der Dokumentendateien befinden?</span></caption>
    <thead>
        <tr style="background-color: lightgrey;">
            <th style="width: 14%; padding: 0.3em;"></th>
            <th style="width: 14%; padding: 0.3em;">OOXML</th>
            <th style="width: 14%; padding: 0.3em;">ODF</th>
            <th style="width: 14%; padding: 0.3em;">PDF</th>
            <th style="width: 14%; padding: 0.3em;"><span class="nolink">PDF/A</span></th>
            <th style="width: 14%; padding: 0.3em;">HTML</th>
            <th style="width: 14%; padding: 0.3em;">TEI</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th style="background-color: lightgrey; padding: 0.3em;">Text</th>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
        </tr>
        <tr>
            <th style="background-color: lightgrey; padding: 0.3em;">Vektorgrafik</th>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
        </tr>
        <tr>
            <th style="background-color: lightgrey; padding: 0.3em;">Rastergrafik</th>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">❌</td>
            <td style="padding: 0.3em;">❌</td>
        </tr>
        <tr>
            <th style="background-color: lightgrey; padding: 0.3em;">Video</th>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">✔️</td>
            <td style="padding: 0.3em;">❌</td>
            <td style="padding: 0.3em;">❌</td>
            <td style="padding: 0.3em;">❌</td>
        </tr>
    </tbody>
</table><br><br>
</lia-keep>

<div class="h5p-placeholder" contenteditable="false">https://moodle.uni-wuppertal.de/draftfile.php/30352/user/draft/938778642/Vervollst_CSS-Attribut_im_HTML-Element_td.h5p?time=1707930609795</div>

Im Prinzip sollte einer eigenständigen CSS-Datei oder passenden Style-Elementen im HTML-Head der Vorzug gegeben werden, aber nicht immer ist das möglich. Repositorien erlauben das meist nicht, ebenso wenig wie die E-Learning-Plattform Moodle, mit der dieser Kurs erstellt wurde. Also bleiben in diesem Fall nur Style-Attribute im `body`<!-- style="font-family: Courier New, Courier, mono;" --> des HTML.




## Tabellendokumente

Neben Grafik und Text sind Tabellen, die mit **Tabellenkalkulationsprogrammen** wie z.B. Microsoft Excel erzeugt werden, wichtige Datenarten. Solche Tabellen werden in der Forschung häufig verwendet. Sie gehören in der Regel zu den Forschungsdaten, die **im Rahmen der guten wissenschaftlichen Praxis mindestens 10 Jahre aufgehoben** werden müssen. Das Video oder der nachfolgende Text geben Informationen zu Tabellendaten.

!?[Video: Archivierung von Tabellendokumenten, Tabellenformat CSV](Tabellen/CSV_kurz.mp4)

Unter den Tabellenkalkulationsprogrammen ist Microsoft Excel am verbreitetsten. Excel speichert Tabellen standardmäßig als **.xlsx**, das die tabellenkalkulationsspezifische Seite des **Büroanwendungsformats OOXML** ist. Ein Nachteil dabei ist, dass OOXML als Container-Format nicht zeichenkodiert[^22] und deshalb nur mit **Software-Hilfe** lesbar ist, sodass eine geeignete Software erhalten bleiben muss. Im Kern handelt es sich um das gleiche OOXML-Problem wie bei .docx auch: Der Container ist in der Lage, außer Tabellen auch andere Bestandteile wie Rastergrafiken aufzunehmen, deren Formate veralten können und dann nicht mehr lesbar sind.

Außerdem wurde .xlsx von Microsoft auf die **spezielle Arbeitsweise von Excel zugeschnitten**. Zwar können andere Tabellenkalkulationsprogramme .xlsx in der Regel auch lesen und schreiben, aber in der Interpretation der Details kann es Unterschiede geben. Daher bewertet die Informationsplattform „forschungsdaten.info“ .xlsx zwar als geeignet für die Speicherung im Rahmen der guten wissenschaftlichen Praxis, aber nicht für die Langzeitspeicherung über mehr als zehn Jahre hinaus.

Jedoch gibt es noch andere Formate, in denen Tabellen gespeichert werden können. Das Format **Comma Separated Value**, abgekürzt **CSV**, ist ein reines Textformat und als solches mit jedem Texteditor lesbar. Da es zudem weit verbreitet und langzeitstabil ist, ist es für die Langzeitarchivierung besonders gut geeignet.[^g]

Zum Aufbau:

- Eine **Zeile** in der Tabelle ist eine Zeile in CSV.
- Die **Spalten innerhalb einer Zeile** sind durch **Separatoren** (Trennsymbole) voneinander getrennt. Anders als der Name „Comma Separated Value“ suggeriert, muss das nicht zwangsläufig ein Komma sein. Voreinstellung ist meist ein Semikolon. Praxistipp: Wird stattdessen ein Tabulatorzeichen verwendet, stehen die Spalteneinträge geordnet untereinander, sofern die Einträge nicht sehr lang sind.

<svg viewBox="0 0 800 200">
    <title>Die Grafik stellt die Ansicht in der grafischen Oberfläche des Tabellenkalkulationsprogramms dem Dateiformat CSV gegenüber</title>
    <symbol id="arrowhead10" x="-5" y="-5" height="2" width="2" viewBox="-1 -1 2 2">
        <path d="M 0,0 L -2,1 L -2,-1 z"></path>
    </symbol>

    <text x="209" y="10" style="text-anchor: middle; font-size: small;">Grafische Oberfläche des Tabellenkalkulationsprogramms</text>
    <rect x="10" y="20" width="35" height="30" style="fill: lightgrey"></rect>
    <rect x="46" y="20" width="120" height="30" style="fill: lightgrey"></rect>
    <text x="106" y="40" style="text-anchor: middle; font-weight: bold;">A</text>
    <rect x="167" y="20" width="120" height="30" style="fill: lightgrey"></rect>
    <text x="227" y="40" style="text-anchor: middle; font-weight: bold;">B</text>
    <rect x="288" y="20" width="120" height="30" style="fill: lightgrey"></rect>
    <text x="348" y="40" style="text-anchor: middle; font-weight: bold;">C</text>
    <rect x="10" y="52" width="35" height="30" style="fill: lightgrey"></rect>
    <text x="20" y="72">1</text>
    <rect x="46" y="52" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="56" y="72">x</text>
    <rect x="167" y="52" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="177" y="72">y</text> --
    <rect x="288" y="52" width="120" height="30" style="fill: #eeeeee"></rect>
    <rect x="10" y="83" width="35" height="30" style="fill: lightgrey"></rect>
    <text x="20" y="103">2</text>
    <rect x="46" y="83" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="56" y="103">1</text>
    <rect x="167" y="83" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="177" y="103">3</text>
    <rect x="288" y="83" width="120" height="30" style="fill: #eeeeee"></rect>
    <rect x="10" y="114" width="35" height="30" style="fill: lightgrey"></rect>
    <text x="20" y="134">3</text>
    <rect x="46" y="114" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="56" y="134">1,5</text>
    <rect x="167" y="114" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="177" y="134">3,5</text>
    <rect x="288" y="114" width="120" height="30" style="fill: #eeeeee"></rect>
    <rect x="10" y="145" width="35" height="30" style="fill: lightgrey"></rect>
    <text x="20" y="165">4</text>
    <rect x="46" y="145" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="56" y="165" fill="red">1</text>
    <rect x="167" y="145" width="120" height="30" style="fill: #eeeeee"></rect>
    <text x="177" y="165" fill="red">4</text>
    <rect x="288" y="145" width="120" height="30" style="fill: #eeeeee"></rect>
    <line x1="430" y1="110" x2="570" y2="110" stroke="black" stroke-width="1"></line>
    <use href="#arrowhead10" x="0" y="0" height="10" width="10" transform="translate(570,110) rotate(0)"> </use>
    <text x="495" y="125" style="text-anchor: middle; font-size: small;">Export nach CSV</text>
    <text x="655" y="35" style="text-anchor: middle; font-size: small;">Comma Separated Value (CSV)</text>
    <rect x="590" y="45" width="130" height="130" fill="#eeeeee" stroke="black" stroke-width="1"></rect>
    <text x="610" y="72" style="font-family: Courier New, Courier, mono;">x;y</text>
    <text x="610" y="103" style="font-family: Courier New, Courier, mono;">1;3</text>
    <text x="610" y="134" style="font-family: Courier New, Courier, mono;">1,5;3,5</text>
    <text x="610" y="165" style="font-family: Courier New, Courier, mono;">1;4</text>
</svg>

**Hervorhebungen** durch Farbe, Font, Kursivdruck, etc. gehen beim Export verloren. Wenn die Hervorhebungen mitgespeichert werden sollen, müssen sie in eine **zusätzliche Spalte** geschrieben und die so erweiterte Tabelle gespeichert werden. Im Video ist ein Beispiel gezeigt. Ebenfalls nicht mitkonvertiert werden **Grafiken** und **Diagramme**, die ebenfalls in XLSX enthalten sein können. Diese müssten gesondert als Grafiken gespeichert werden. Ansonsten schadet es nicht, zur CSV-Datei und den Grafiken die .xlsx-Datei einfach mit dazuzulegen.

[^g]: Universität Konstanz, o.J., *Formate erhalten*, [https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/), aufgerufen am 21.03.2024



### ToDo

Die folgende Tabelle soll als CSV exportiert werden.


<lia-keep>
    <table style="background-color: #eeeeee;">
        <caption></caption>
        <thead>
            <tr>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; width: 1%; text-align: center;"></th>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; width: 33%; text-align: center;">A</th>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; width: 33%; text-align: center;">B</th>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; width: 33%; text-align: center;">C</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; text-align: left;">1</th>
                <td scope="col" style="padding: 0.3em; border: thin solid white;"></td>
                <th scope="col" style="padding: 0.3em; border: thin solid white; text-align: left;">PDF</th>
                <th scope="col" style="padding: 0.3em; border: thin solid white; text-align: left;">PDF/A</th>
            </tr>
            <tr style="text-align: center;">
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; text-align: left;">2</th>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">Schriftarten</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">sind eingebunden oder können aus einer anderen Quelle geladen werden</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">sind stets eingebunden</td>
            </tr>
            <tr>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; text-align: left;">3</th>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">Abbildungen</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">sind eingebunden oder können aus einer anderen Quelle geladen werden</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">sind stets eingebunden</td>
            </tr>
            <tr>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; text-align: left;">4</th>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">Animationen, Videos und andere Elemente, die auf externe Software zugreifen</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">können eingebunden sein; sie können aber auch aus einer anderen Quelle geladen werden</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">können nur aus einer anderen Quelle geladen werden</td>
            </tr>
            <tr>
                <th scope="col" style="background-color: lightgrey; padding: 0.3em; border: thin solid white; text-align: left;">5</th>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">Verwendung von Kryptofunktionen</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">erlaubt, sodass Teile des Dokuments verschlüsselt sein können</td>
                <td style="padding: 0.3em; border: thin solid white; vertical-align: top; text-align: left;">nicht erlaubt</td>
            </tr>
        </tbody>
    </table><br><br>
</lia-keep>

<div class="h5p-placeholder" contenteditable="false">https://moodle.uni-wuppertal.de/draftfile.php/30352/user/draft/492301546/%C3%9Cbung_CSV.h5p</div>
