<!--
author:   t. rathmann

email:    fdm@uni-wuppertal.de

version:  0.0.1

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

Kommentar Nachnutzung Modul: "Abschlussquiz: Daten im Forschungsprozess"
Von den 10 Fragen in Moodle wurden die wahr/falsch-Fragen 1-4 zu einer Multiple-Choice-Frage zusammengezogen und die Zuordnungsfragen 5 "Ordnen Sie die Dateiformate den Textlücken zu" und 8 "Ordnen Sie die Grafiken den passenden SVG-Quelltext-Abschnitten zu" nicht in diese Datei übernommen, da sie (noch) nicht oder nicht in brauchbarer Form in LiaScript realisiert werden können.

Zielgruppe: Studierende BA und MA

tags:      Forschungsdaten, Datenmanagement, Studium, Bachelor, Digital Literacy
-->

# Abschlussquiz: Dateiformate

**Frage: Die vier Aussagen sind entweder wahr oder falsch. Versehen Sie alle wahren Aussagen durch Mausklick mit einem Haken.**

- [[ ]] Behauptung: OOXML ist als XML-basiertes Format zeichenkodiert, d.h. lässt sich ohne weitere Hilfsmittel mit einem einfachen Texteditor lesen.
- [[X]] Behauptung: Vektorgrafiken sind grundsätzlich beliebig skalierbar.
- [[X]] Behauptung: JPEG eignet sich gut für Webseiten, weil es gut komprimiert ist und wegen des geringen Datenvolumens leicht über das Netz transportiert werden kann.
- [[X]] Behauptung: Im TIFF-Format lassen sich Rastergrafiken verlustfrei und unkomprimiert speichern.

<br>
**Frage: Füllen Sie die Lücken durch Auswahl oder Eintragen des richtigen Texts.**

[[ ( .odt ) | .docx | .xlsx | .tiff ]] ist Teil des Büroanwendungsformats OpenData Format.

Die Microsoft-Entwicklung Open Office XML ist ebenfalls ein vielseitig anwendbares Büroanwendungsformat. Die Dateiendung für Textdokumente lautet hier .docx, die für Tabellendokumente 
[[.xlsx]]

Für die Archivierung neu erstellter Textdokumente wird [[PDF/A]] empfohlen. Dabei ist [[PDF]] Abkürzung für "Portable Document Format", das angehängte [[/A]] steht für "for Archive". 

[[ ( ODF, OOXML und PDF ) | HTML, SVG und MathML | Alle XML-Dialekte | Alle zeichenkodierten Dateiformate ]] sind Containerformate. Bei Containerformaten muss nicht nur die Hülle — der Container — für die Langzeitarchivierung geeignet sein, sondern auch der Inhalt: Auf langzeitstabile Bestandteile, z.B. Rastergrafikformate, achten!

PDF und PDF/A eignen sich aber nicht für Scans von Papiervorlagen. Scans sind Rastergrafiken und müssen als solche in einem langzeitstabilen Rastergrafikformat verlustfrei archiviert werden, am besten [[ ( TIFF oder JPEG 2000 ) | PDF/A | SVG | JPEG ]] 

<br>
**Frage: Was trifft zu? In PDF/A-Dateien sind**

- [[X]] die verwendeten Schriftarten stets mitgespeichert
- [[ ]] Videos und andere Bestandteile mitgespeichert, die externe Software benötigen
- [[X]] verschlüsselte Bestandteile nicht erlaubt
- [[X]] Abbildungen (Rastergrafiken und Vektorgrafiken) mitgespeichert

<br>
**Frage: Was trifft zu? Nicht nur verlinkt, sondern direkt in einer HTML-Datei können mit enthalten sein:**

- [[ ]] JPEG
- [[X]] SVG
- [[X]] CSS
- [[ ]] TIFF

<br>
**Frage: Die CSV-Tabelle soll die wichtigsten Attribute der SVG-Elemente `rect`<!-- style="font-family: Courier New, Courier, mono;" --> und `circle`<!-- style="font-family: Courier New, Courier, mono;" --> zusammenzufassen. Die zugehörigen Attributnamen stehen dabei in den Spalten hinter dem Elementnamen. Leider hat sich dabei ein Fehler eingeschlichen. In welcher Zeile befindet sich der Fehler?**

Hier ist die CSV-Tabelle:

<!-- style="text-align: left; font-family: Courier New, Courier, mono;" -->
Objekt;Element;Ortskoordinaten;Form und Größe;Füllfarbe;Farbe des Randes;Randstärke<br>
Rechteck;rect;x, y;width, height; rx, ry;fill;stroke;stroke-width<br>
Kreis;circle;cx, cy;r;fill;stroke;stroke-width

Hinweise: Geben Sie hier die Zeilennummer an (1, 2 oder 3, eine Zeile mit der Nummer 0 gibt es nicht). Die Frage lässt sich leichter beantworten, wenn Sie sich erst einmal eine Übersicht verschaffen, indem Sie das CSV in ein Tabellenkalkulationsprogramm einlesen. 

[[2]]

<br>
**Frage: Die folgende XML/TEI-Datei ist wegen eines Syntaxfehlers nicht wohlgeformt. Finden Sie den Fehler und schreiben Sie das korrigierte TEI-Tag in das Textfeld.**

<lia-keep>
<pre dir="ltr" style="text-align: left; font-family: Courier New, Courier, mono;"><span class="nolink"><text x="0" y="70">&lt;?xml version="1.0"?&gt;<br>&lt;!DOCTYPE tei SYSTEM "file:///D:/tei/tei_all.dtd"&gt;<br>&lt;?xml-stylesheet type="text/xsl" href="file:///D:/tei/html/html.xsl"?&gt;<br>&lt;TEI&gt;<br>    &lt;teiHeader&gt;<br>        &lt;fileDesc&gt;<br>            &lt;titleStmt&gt;<br>                &lt;title&gt;Einsatzfelder von XML/TEI&lt;/title&gt;<br>            &lt;/titleStmt&gt;<br>            &lt;publicationStmt&gt;<br>                &lt;p&gt;Open Educational Resources, 2023&lt;/p&gt;<br>            &lt;/publicationStmt&gt;<br>            &lt;sourceDesc&gt;<br>                &lt;p&gt;Born digital&lt;/p&gt;<br>            &lt;/sourceDesc&gt;<br>        &lt;/fileDesc&gt;<br>    &lt;/teiHeader&gt;<br>    &lt;text&gt;<br>        &lt;body&gt;<br>            &lt;p&gt;TEI ist ein Dokumentenformat mit Fokus auf linearem Text. In vielen Geisteswissenschaften ist TEI sogar Standardformat für Texte.&lt;/p&gt;<br>            &lt;p&gt;Strukturen im Text können gekennzeichnet werden, denn TEI ist eine Auszeichnungssprache. Zu diesem Zweck stehen zahlreiche Elemente zur Verfügung, darunter spezielle für Grammatik, Linguistik, Aufführungstexte und Lyrik. Dadurch eignet sich TEI besonders gut für die Beforschung von Texten. Die naturgetreue Darstellung ist dagegen nicht das Ziel von TEI. Für diesen Zweck eignen sich Bildformate oder PDF besser.&lt;/p&gt;<br>            &lt;p&gt;In Hunderten von Header-Elementen können beschreibende Daten zum Text untergebracht werden. TEI wird dadurch auch zum Metadatenstandard.&lt;/p&gt;<br>        &lt;/body&gt;<br>    &lt;text/&gt;<br>&lt;/TEI&gt;<br></text></span></pre>
</lia-keep>

[[</text>]]
