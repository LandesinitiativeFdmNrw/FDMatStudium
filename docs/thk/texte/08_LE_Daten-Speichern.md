---
title: 08 Lernheinheit – Daten speichern
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
---

# Speichern von Daten

:::info Zitation:
Blümm, M., Fritsch, K., Bock, S., Prof. Dr. Arning, U., & Prof. Dr. Förstner, K. U. (2024). 08_LE_Daten-Speichern. Blended-Learning-Basiskurs „Forschungsdatenmanagement“ (Version 1.0). https://mbluemm.github.io/OER_FDM/texte/08_LE_Daten-Speichern.html
:::

[[toc]]

## Lernziele

<!-- G-0038_BUW_Icon_Diskette einfügen -->

::: info Lernziele
In diesem Themenblock lernen Sie die Speicherung von Daten und Dateien kennen, welche Aspekte 
dabei im Forschungsprozess zu beachten sind und welchen Empfehlungen zu befolgen ist. 
Außerdem lernen Sie über Vor- und Nachteile verschiedener Speichermedien sowie unterschiedlicher
Datenformate.
:::

(forschungsdaten.info 2023e; forschungsdaten.info 2023f).

<!-- Video von Medienagentur einfügen -->

## Daten speichern und das Datenverlustrisiko minimieren

Im FDM ist eine sinnvolle Speicherung von Daten eine Voraussetzung für die Gute wissenschaftliche
Praxis (GWP) und gewährleistet die Möglichkeit einer langfristigen Nachnutzbarkeit der Daten. Um
möglichst zu verhindern, dass Daten beschädigt werden, verloren gehen oder veralten, ist es sinnvoll,
bei der Speicherung von Daten und Dateien einige Aspekte zu beachten. So kann vorgebeugt
werden, dass Daten bspw. aufgrund technischer Fehler etwa durch einen Schaden an der Festplatte
oder aufgrund veralteter Software nicht mehr lesbar sind oder versehentlich gelöscht werden.

<!-- 0008_THK_GWP und G-0020_BUW_Icon_Nachnutzung neben oberen Absatz ergänzen -->

Backup- und Datensicherungsmaßnahmen sind unerlässlich: Forschungsdaten müssen vor
unbefugtem Zugriff (z. B. Cyber/Hackerangriffe) und Datenverlust (z. B. technische Fehler/Brand)
geschützt werden. Insbesondere sensible, personenbezogene Daten müssen durch
Pseudonymisierung oder Anonymisierung besonders geschützt werden (Weiner et al. 2020).

Vor- und Nachteile von Speichermedien finden Sie unter (forschungsdaten.info 2023f). <!-- verlinken? -->

<!-- hier Datenspeicherlösungen wie G-0035_BUW_Icon_USB_Stick , G-0037_BUW_Icon_CD , G-0039_BUW_Icon_SD-Karte , 0011_THK_Speicher_Cloud , 0012_THK_Speicher_PC , 0013_THK_Speicher_Festplatte einfügen -->

## Wichtige Aspekte bei der Speicherung von Daten

<!-- Abbildung 0046_THK_Speichern einfügen -->

Um das Risiko des Datenverlustes bestmöglich zu reduzieren, sollte bei der Sicherung der Daten und
Dateien insbesondere darauf geachtet werden, dass diese:

- regelmäßig,
- in mehreren Kopien,
- in weit verbreiteten Datenformaten,
- von den Rohdaten getrennt,
- strukturiert (zu einem festgelegten Zeitpunkt) und einheitlich erfolgt.
  
Darüber hinaus ist es wichtig, die 3 - 2 - 1 - Regel zu beachten. Gleichermaßen sollte die Sicherung der Daten mit einer guten Ordner- und Dateistruktur, inklusive einer geeigneten Dateibenennung, einhergehen.

<!-- 0027_THK_Ordnerstruktur , 0006_THK_Organisieren , 0029_THK_Dateibenennung -->

![](https://)
Abbildung: forschungsdaten.info 2023e
<!-- gegen 0064_THK_3-2-1-Regel eintauschen --> 

## Empfehlungen zur Datensicherung

<!-- 0020_THK_Idee , G-0038_BUW_Icon_Diskette einfügen -->

Es ist hilfreich (VerbundFDB 2018):

- alle fünf Jahre die alten externen Speichermedien mit neueren auszutauschen.
- notwendige Softwareanwendungen in die Backup-Strategie einzubeziehen.
- eine regelmäßige Kontrolle der Daten und Dateien durchzuführen (z. B. einmal jährlich,
    stichprobenartig).
- einen geeigneten Ablageort für Daten und Dateien zu wählen, der
    o über ausreichend Speicherkapazität verfügt,
    o allen beteiligten und berechtigten Personen Zugriff ermöglicht und
    o Zugriff durch Unbefugte verhindert.
- offene W-LAN-Verbindungen zu vermeiden.
- gute Virus- und Malwarescanner zu verwenden.
- DSGVO-konforme Clouddienste, wie etwa die Cloud-Speicherlösung sciebo, zu wählen
    (https://hochschulcloud.nrw/).[^1]

::: tip
Kostenlose Clouddienste (bspw. Google Drive, Dropbox, OneDrive) sollten nicht verwendet
werden, da deren Serverstandorte nicht in Deutschland, sondern in Amerika liegen. In Amerika sind aufgrund des USA PATRIOT Acts (2001) die eigenen Daten vor einem Zugriff Dritter nicht geschützt.
:::

(Krähwinkel, Langner, Lipp et al. 2022)

[^1]: Hier empfiehlt es sich zu prüfen, wie lange auf die Hochschuldienste zugegriffen werden kann.

## Sicherer Passwortschutz
<!-- sollte das nicht rausgelöscht werden? Und wenn nicht, wie einbinden? -->
### Was ist ein gutes Passwort?

Die Daten (Dateien und Ordner) sollten wo es möglich ist, beispielsweise bei sensiblen Daten, mit
einem Passwort geschützt sein.
Für einen Überblick von sicheren Passwörtern kann Passwortmanagement-Software helfen.

### Beispiele für Passwortregel

Universitäten und Hochschulen haben interne Leitlinien zum Umgang mit Forschungsdaten erstellt,
wie beispielsweise die Leitlinie der Technischen Hochschule Köln (Sauther-Patrascu und Dmitrieva
2021 ), in der zum Thema Sicherung von Daten folgendes zusammengefasst ist:

Die Sicherung von Daten wird meistens als ein Backup oder eine Sicherungskopie bezeichnet und
dient der Wiederherstellung der ursprünglichen Daten im Falle eines Datenverlusts.

- Bei einem Backup oder einer Datensicherung werden alle für ein Projekt relevanten Daten
    gespeichert.
Die Archivierung von Daten bedeutet sowohl die systematische Sicherung ausgewählter Daten für
einen unbegrenzten Zeitraum als auch der Erhalt und die Betreuung dieser Daten über geeignete
Verfahren.

Die Langzeitarchivierung (LZA) ist ein Verfahren, das Forschungsdaten für einen unbestimmten
Zeitraum (i.d.R. > 10 Jahre ab Projektende), über technologische und soziokulturelle Veränderungen
hinaus, verfügbar und interpretierbar hält.

Frage: Glauben Sie es wäre für künftige Studierende hilfreich an dieser Stelle noch Informationen zum
Erstellen von sicheren Passwörtern sowie zur Verwaltung von Passwörtern zu erhalten?
[https://forschungsdaten.info/themen/speichern-und-rechnen/passworthilfen/](https://forschungsdaten.info/themen/speichern-und-rechnen/passworthilfen/)


## Datenformate

<!-- G-0097_BUW_ff_Icon_Dateiformate anpassen und neben den Abschnitt einsetzen -->

Damit Daten langfristig nachnutzbar sind und einfacher geteilt werden können, sollte darauf geachtet
werden, dass zum einen so wenig unterschiedliche Datenformate wie möglich verwendet werden, zum
anderen die Daten in:

- offenen, d.h. nicht herstellerspezifisch,
- standardisierten,
- langlebigen,
- weit verbreiteten,
- von Maschinen und Menschen lesbaren,
- mit Metadaten versehenen

Formaten vorliegen und gespeichert werden. Dies erhöht die Wahrscheinlichkeit, dass es auch in
einigen Jahren noch Software und Hardware gibt, die die Daten lesen können. Auch sollten die
Formate möglichst verlustfrei konvertiert werden können.

Unter den oben genannten Aspekten eignen sich folgende Formate:

|  Dateityp | Empfohlenes Format[^2]  |
|---|---|
| Text  | .pdf/a .txt .xml |
| Tabelle | .xml .csv (mit Einschränkungen)  |
| Foto  | .tiff .tif (.jpg ist nicht verlusfrei) |
| Grafik  | .png, .svg |
| Audio | .wav .flac (mit Einschränkungen) (mp3 ist nicht verlustfrei) |
 
<a title="Jørgen Stamp
, CC BY 2.5 DK &lt;https://creativecommons.org/licenses/by/2.5/dk/deed.en&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Kassetteb%C3%A5nd_Digitalisering.png"><img width="512" alt="Kassettebånd Digitalisering" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kassetteb%C3%A5nd_Digitalisering.png/512px-Kassetteb%C3%A5nd_Digitalisering.png"></a>
Quelle: Digitalbevaringdk Kassettebånd_Digitalisering

Dateiformate können folgendermaßen konvertiert werden:

- verlustfrei → bevorzugt
- verlustbehaftet → für geringere Dateigrößen
- sinnhaft → wesentliche Inhalte bleiben bestehen. 
<!-- SB: ??-->
Mehr zu empfohlenen Textformaten (u.A.) und Konvertierungen unter Formatinformation (pdf).
Mehr zu geeigneten und ungeeigneten Datenformaten unter (Böker 2023b).

<a title="Jørgen Stamp
, CC BY 2.5 DK &lt;https://creativecommons.org/licenses/by/2.5/dk/deed.en&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Lyd_Digitalisering.png"><img width="512" alt="Lyd Digitalisering" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lyd_Digitalisering.png/512px-Lyd_Digitalisering.png"></a>
Quelle: Digitalbevaringdk Lyd_Digitalisering

---
[^2]: Praxishandbuch Forschungsdatenmanagement (Putnings, Neuroth, und Neumann 2021).

## Leitfragen und Aufgaben

### Leitfragen

<!-- 0025_THK_Fragezeichen -->

- Was ist die Relevanz von Daten/Dateispeicherung und Backup im FDM?
- Wissensübertragung: Welche Rolle spielt die Dateispeicherung im Studium? Worauf ist hier zu achten? Welche Probleme können entstehen?

### Aufgabe

<!-- 0034_THK_Aufgabe -->

Arbeiten Sie die angegebenen Materialien durch und beantworten Sie für sich die Fragen.
Dokumentieren und reflektieren Sie Ihre Ergebnisse in Ihrem Lernportfolio.

## Weiterführende Materialen und Quellen

### Literatur
<!-- hier noch 09_Leitfragen_Speicher_V4 und 09_Auflösung_Speicherug_Backup_V4 aus sciebo-Ordner einfügen -->
<!-- G-0044_BUW_Icon_Findability -->
Forschungsdaten.info (2023a, 5. Mai). Datenübertragung. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenuebertragung/](https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenuebertragung/)

Forschungsdaten.info. (2023b, 5. Mai). Passworthilfen. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/speichern-und-rechnen/passworthilfen/](https://forschungsdaten.info/themen/speichern-und-rechnen/passworthilfen/)

Forschungsdaten.info (2023c, 24. Juli). Formate erhalten. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/)

Forschungsdaten.info. (2023d, 11. August). Speichern und Übertragen großer Datenmengen. Zugriff
am 18.10.2023, von [https://forschungsdaten.info/themen/speichern-und-rechnen/speichern-und-uebertragen-grosser-datenmengen/](https://forschungsdaten.info/themen/speichern-und-rechnen/speichern-und-uebertragen-grosser-datenmengen/)

Putnings, M., Neuroth, H., & Neumann, J. (2021, 19. Dezember). Praxishandbuch
Forschungsdatenmanagement. De Gruyter Saur. [https://doi.org/10.1515/9783110657807](https://doi.org/10.1515/9783110657807)

Weber, A. & Piesche, C. (2021). 4.2 Datenspeicherung, -kuration und Langzeitverfügbarkeit. In M.
Putnings, H. Neuroth & J. Neumann (Ed.), Praxishandbuch Forschungsdatenmanagement (pp. 327-
356). Berlin, Boston: De Gruyter Saur. [https://doi.org/10.1515/9783110657807-019](https://doi.org/10.1515/9783110657807-019)

Weiner, B., Wünsche, S., Kühne, S. et al. (2020, 30. April). Crashkurs Forschungsdatenmanagement.
Zenodo. [https://doi.org/10.5281/zenodo.3778431](https://doi.org/10.5281/zenodo.3778431)


### Quellen:

Forschungsdaten.info. (2023e, 5. Mai). Datensicherheit und Backup. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/speichern-und-rechnen/datensicherheit-und-backup/](https://forschungsdaten.info/themen/speichern-und-rechnen/datensicherheit-und-backup/)

Forschungsdaten.info. (2023f, 5. Mai). Datenspeicherung und die Lebensdauer von Datenträgern.
Zugriff am 18.10.2023, von [https://forschungsdaten.info/themen/speichern-und-rechnen/datenspeicherung-und-die-lebensdauer-von-datentraegern/](https://forschungsdaten.info/themen/speichern-und-rechnen/datenspeicherung-und-die-lebensdauer-von-datentraegern/)

Krähwinkel, E., Langner, P., Lipp, R., et al. (2022). HeFDI Data Learning Materials:
Forschungsdatenmanagement _–_ eine Online-Einführung (Version 1.0). Zenodo.
[https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ](https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ)

Präsidium der TH Köln. (2021). Leitlinie zum Umgang mit Forschungsdaten. Zugriff am 20. Oktober 2023, von [https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf](https://www.th-koeln.de/mam/downloads/deutsch/forschung/leitlinie_zum_umgang_mit_forschungsdaten.pdf)

VerbundFDB. (2018, 20. Juli). Daten benennen und organisieren. Zugriff am 18.10.2023, von
[https://www.forschungsdaten-bildung.de/dateien-benennen](https://www.forschungsdaten-bildung.de/dateien-benennen)
