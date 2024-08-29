---
title: 07 Lernheinheit – Dateistruktur
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
---

# Ordnerstruktur und Dateibenennungen

:::info Zitation:
Blümm, M., Fritsch, K., Bock, S., Arning, U., & Förstner, K. U. (2024). 07_LE_Dateistruktur. FDM@Studium.nrw Blended-Learning-Basiskurs „Forschungsdatenmanagement“ (Version 1.0). <https://landesinitiativefdmnrw.github.io/FDMatStudium/thk/texte/07_LE_Dateistruktur.html>
:::

<img src="/medien/icons/0027_THK_Ordnerstruktur.svg?autoSizes=true"
     alt="Icon_Ordnerstruktur"
     style="float: left; margin-right: 20px; width: 10%;" />

<img src="/medien/icons/0029_THK_Dateibenennung.svg?autoSizes=true"
     alt="Icon_Dateibenennung"
     style="float: left; margin-right: 20px; width: 10%;" />

[[toc]]

## Lernziele

::: info Lernziele
In diesem Themenblock lernen Sie die Relevanz einer Ordnerstruktur, Dokumentation,
Speicherung und Benennung von Daten und Dateien im Forschungsprozess kennen und welche Aspekte
dabei zu beachten sind.
:::

<!--[![Video Dateibennenung:](/medien/videos/standbilder/Kapitel_7_Dateibennenung.svg)](medien/videos/Kapitel_7_Dateibennenung.mp4)-->
[![Video Metadaten:](/medien/videos/standbilder/Kapitel_7_Dateibennenung.svg)]

## Daten und Dateien bei der Speicherung strukturieren und ordnen

<img src="/medien/abbildungen/0051_THK_Datenchaos.svg?autoSizes=true"
     alt="Abbildung_Datenchaos"
     style="float: left; margin-right: 20px; width: 10%;" />

Bei jeglicher Arbeit mit Daten und Dateien ist bei der Speicherung (Ablage) der Daten/Dateien eine
gute Struktur und Benennung empfehlenswert.

<img src="/medien/icons/0006_THK_Organisieren.svg?autoSizes=true"
     alt="Icon_Organisieren"
     style="float: left; margin-right: 20px; width: 10%;" />

Als Erinnerung aus VL1, beschreibt das DWDS Daten
als „durch Aufzeichnungen, Beobachtungen, Messungen, statistische Verfahren o. Ä. gewonnene
Informationen“ und eine Datei als „unter einem gemeinsamen Namen auf einem Datenträger
gespeicherte und zugreifbare Menge von Daten“[^1]. <!-- das anders vom Layout her einbinden? -->

Auch im FDM sollte aus den folgenden Gründen darauf geachtet werden:

- Es ist eine Grundvoraussetzung der Guten wissenschaftlichen Praxis.
<img src="/medien/icons/0008_THK_GWP.svg?autoSizes=true"
     alt="Icon_GWP"
     style="float: right; margin-left: 20px; width: 10%;" />

- Je größer die Datenmenge ist, umso wichtiger ist ein gutes Datenmanagement.
- Der aktuellste Forschungsstand ist schnell identifizierbar.
- Die Nachnutzung der Daten und die Interpretierbarkeit der Daten wird vereinfacht und langfristig
    sichergestellt." Zitat von https://www.tu-chemnitz.de/ub/dokumente/open_access/fdm/2021_02_26_ZfwN_FDM.pdf

- Daten bleiben zugänglich und leicht auffindbar, was eine längere Suche vermeidet,
- Bei Änderungen besteht Klarheit und Struktur zwischen unterschiedlichen Versionen.
- Daten werden somit auch für Dritte nachvollziehbar.
  - Vereinfacht die Zusammenarbeit.
  - Ermöglicht die Reproduzierbarkeit der Forschungsergebnisse.  
- Das Risiko eines Datenverlusts wird minimiert. Die Daten sind sicher gespeichert und auffindbar.
  - Vorbeugungsmaßnahme von versehentlichem Löschen oder Überschreiben von
       Daten/Dateien.

<img src="/medien/icons/G-0020_BUW_Icon_Nachnutzung.svg?autoSizes=true"
     alt="Icon_Nachnutzung"
     style="float: left; margin-right: 20px; width: 10%;" />

(Weiner et al. 2020; VerbundFDB 2018)

---
[^1] in: DWDS _–_ Digitales Wörterbuch der deutschen Sprache, hrsg. v. d. Berlin-Brandenburgischen Akademie der
Wissenschaften, [https://www.dwds.de/wb/Daten](https://www.dwds.de/wb/Daten) und [https://www.dwds.de/wb/Datei](https://www.dwds.de/wb/Datei), abgerufen am 23.10.2023.

## Gute Ordnerstruktur

<img src="/medien/icons/0027_THK_Ordnerstruktur.svg?autoSizes=true"
     alt="Icon_Ordnerstruktur"
     style="float: left; margin-right: 20px; width: 10%;" />

Für eine übersichtliche Ordnerstruktur bei der Speicherung von Daten und Dateien sollten folgende

Aspekte beachtet sein:

- Die Ordner sind nach Themen geordnet.
- Die Ordnernamen verweisen auf Ordnerinhalte.
- Rohdaten* sind in einem separaten Ordner abgelegt.
- Laufende und abgeschlossene Arbeiten sind getrennt voneinander, d.h. in unterschiedlichen
    Ordnern, abgelegt.
- Die Ordnerstruktur ist:
    - in einer Verzeichnisstruktur (auch Baumstruktur oder Verzeichnisbaum genannt),
     hierarchisch gegliedert und beinhaltet somit übergeordnete (allgemeinere) und eine
     überschaubare Anzahl an untergeordneten (konkretere) Elemente,
    - auf lokalen und externen Speichermedien identisch,
    - konsequent,
    - und klar ersichtlich und für Dritte nachvollziehbar.

> "Für eine gute Übersicht sollten Verzeichnisstrukturen auf Servern identisch zu denen auf den lokalen
Rechnern sein."
> -- Zitat von <https://edoc.hu-berlin.de/handle/18452/19967.2>

- unverarbeitete Originaldaten

::: tip
Eine Dokumentation der Ordnerstruktur und Dateibenennungen in einer separaten (.txt) Datei auf
oberster (Baum-)Ebene aufbewahren. Zur Nachvollziehbarkeit zu einem späteren Zeitpunkt oder von anderen.

<img src="/medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 10%;" />
:::

## Dateien benennen

[https://liascript.github.io/course/?https://github.com/BrittaP/LiaTestmodule_offen/blob/main/Ordnung_und_Stuktur/2022_OrdnungStruktur_de.md](https://liascript.github.io/course/?https://github.com/BrittaP/LiaTestmodule_offen/blob/main/Ordnung_und_Stuktur/2022_OrdnungStruktur_de.md)

Neben einer sinnvoll gegliederten und konsequenten Ordnerstruktur ist auch eine klare Benennung
von Dateien essentiell, denn diese führt zu

- einer strukturierten Speicherung,
- Übersichtlichkeit und einer logischen Sortierung,
- Nachvollziehbarkeit und Auffindbarkeit,
und ermöglicht die Unterscheidung einzelner Dateien.

### Aspekte für eine Dateibenennung

<img src="/medien/icons/0029_THK_Dateibenennung.svg?autoSizes=true"
     alt="Icon_Dateibenennung"
     style="float: left; margin-right: 20px; width: 10%;" />

Dateien können nach unterschiedlichen Konventionen benannt werden. Damit Dateien strukturiert,
übersichtlich, nachvollziehbar und auffindbar sind, sollten Dateibenennungen

- das jeweilige Erstellungsdatum enthalten*
    o Datumsformat: JJJJ-MM-TT[^2]
    o Datumsangabe: Am Anfang des Dateinamens; chronologische Sortierung
       z. B. „2023-05-17_Projekt_Erdnussbutter“
- Rückschlüsse auf den Inhalt der Dateien ermöglichen
    o deskriptive Informationen ordnen die Datei ihrem Kontext zu
- auch von Außenstehenden nachvollziehbar sein
    o wo Abkürzungen notwendig sind, sollte ein Abkürzungsverzeichnis in einer
       separaten Datei angelegt werden
- möglichst einheitlich/konsistent gewählt werden

::: tip Konventionen

Exemplarische Konventionen bei Dateibenennungen

- Großbuchstabe markiert den Anfang eines neuen Wortes: „projektErdnussbutter“
- Unterstrich markiert den Anfang eines neuen Wortes „Projekt_Erdnussbutter“
- Unterscheidung zwischen Groß- und Kleinbuchstaben (case-sensitiv) „projekt_erdnussbutter“ vs. „_projekt_Erdnussbutter“

---
[^2]: Das Format MM/TT/JJ ist für US-Amerikaner eindeutig. In Europa wird hauptsächlich das Format TT/MM/JJ verwendet. Japan verwendet JJ/MM/TT. Als Separatoren können Slashs, Striche oder Punkte verwendet werden. In einigen Ländern werden kleine Zahlen mit einer vorstehenden Null ergänzt, andere lassen diese weg. (vgl. World Wide Web Consortium (W3C), 2007)

- so kurz wie möglich, so lang wie nötig sein (Empfehlung:wenn möglich setzen sich
    Dateibenennungen maximal aus 255 Zeichen zusammen <!-- mit Mouse-over einbinden --> )
- auf Umlaute (ä, ö, ü) verzichten bzw. diese auflösen (ae, ue, oe)
- Keine Leerzeichen, Punkte und Sonderzeichen enthalten. (Leer- und Sonderzeichen haben eine besondere Bedeutung innerhalb eines Betriebssystems. Slash / (Linux) und Backslash \ (Windows) werden beispielsweise bei Pfadangaben verwendet <!-- Mouse-over--> ) Lediglich Unterstrich und Bindestrich sind erlaubt.
- eine Versionierung beinhalten (v01 etc.), die nach jeder Dateiänderung aktualisiert wird**
    2023 - 05 - 17_Projekt_Erdnussbutter_v01 statt "2023- 05 - 17_Projekt_Erdnussbutter_neu"
    2023 - 05 - 17_Projekt_Erdnussbutter_v10 statt_2023- 05 - 17_Projekt_Erdnussbutter_final
    2023 - 05 - 17_Projekt_Erdnussbutter_v01 wird nach einer (umfangreichen) Änderung zu
    2023 - 05 - 17_Projekt_Erdnussbutter_v02

::: warning Hinweis: Das Erstellungs- und das Änderungsdatum können beim Kopieren auf externe Backupdatenträger überschrieben
werden.
:::

::: tip
<img src="/medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 10%;" />

Abkürzungen von Datei-Benennungen in einer separaten Datei festhalten
Auch eine generelle Dokumentation der Dateibenennungen aufbewahren (zur Nachvollziehbarkeit
zu einem späteren Zeitpunkt oder von anderen)
:::

::: tip
<img src="/medien/icons/0020_THK_Idee.svg?autoSizes=true"
     alt="Icon_Idee"
     style="float: left; margin-right: 20px; width: 10%;" />

Bei neuer Dateiversion oder Kopie einer bestehenden Datei wird im selben Schritt die vorherige Version in den
Archivordner („Archiv“) im Hauptordner verschoben. Das vermeidet das Duplizieren und Splitten von Dateiversionen mit
unterschiedlichen Bearbeitungsständen.
:::

```
\
{ }
< >
( )
*
%
#
‚‘
„ “
?
!
@
&
```

## Beispiel: Dateibenennung

<img src="/medien/icons/0001_THK_Beispiel.svg?autoSizes=true"
     alt="Icon_Beispiel"
     style="float: left; margin-right: 20px; width: 10%;" />

```
Datum_[Status]-Dokumententyp-[Autor:in]-Inhalt[_Version]
```

```
Felder
```

- Datum: JJJJ-MM-TT
- Status: z.B. ENTWURF
- Dokumententyp: z.B. Anschreiben, Interviewleitfaden, Konzept, Liste, ...
- Autor:in: Urheber:in des Dokumentes
- Inhalt: Thema/Inhalt des Dokuments
- Version: Bei versionierten Dokumenten wird die Version bei jeder Änderung hochgezählt z.B.
    _v1,_v2, ...

Zur gleichzeitigen Umbenennung mehrerer Dateien, können unterschiedliche Softwaretools verwendet
werden.

(Krähwinkel, 2022)

<!-- Quiz von 07_Arbeitsblatt_Ordnung_Struktur von sciebo-Ordner einfügen -->

## Leitfragen und Aufgaben

### Leitfragen

<img src="/medien/icons/0025_THK_Fragezeichen.svg?autoSizes=true"
     alt="Icon_Fragezeichen"
     style="float: left; margin-right: 10px; width: 15%;" />

1. Welche Merkmale sind bei einer strukturierten und nachhaltigen Datenablage (Ordnerstruktur
    und Dateibenennung) im besten Fall zu beachten?
2. Was ist die Relevanz von einer nachhaltigen Datenablage (Ordnerstruktur und
    Dateibenennung) im FDM?
3. Wissensübertragung: Welche Rolle spielt eine nachhaltige Datenablage im Studium? Worauf
    ist hier zu achten? Welche Probleme können entstehen?

### Aufgabe

<img src="/medien/icons/0034_THK_Aufgabe.svg?autoSizes=true"
     alt="Icon_Aufgabe"
     style="float: left; margin-right: 10px; width: 15%;" />

Arbeiten Sie die angegebenen Materialien durch und beantworten Sie für sich die Fragen.
Dokumentieren und reflektieren Sie Ihre Ergebnisse in Ihrem Lernportfolio.

## Weiterführende Materialen und Quellen

### Literatur

 <img src="/medien/icons/G-0044_BUW_Icon_Findability.svg?autoSizes=true"
     alt="Icon_Findability"
     style="float: left; margin-right: 20px; width: 10%;" />

Forschungsdaten.info. (2023, 24. Juli). Formate erhalten. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/](https://forschungsdaten.info/themen/veroeffentlichen-und-archivieren/formate-erhalten/)

Forschungsdaten.info. (2023, 5. Mai). Datenorganisation. Zugriff am 18.10.2023, von
[https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenorganisation/](https://forschungsdaten.info/themen/organisieren-und-aufbereiten/datenorganisation/)

Weiner, B., Wünsche, S., Kühne, S. et al. (2020, April 30). Crashkurs Forschungsdatenmanagement.
Zenodo. [https://doi.org/10.5281/zenodo.3778431](https://doi.org/10.5281/zenodo.3778431)

### Quellen

Biernacka, K., Buchholz, P., Danker, S. A. et al. (2021). Train-the-Trainer-Konzept zum Thema Forschungsdatenmanagement (Version 4). Zenodo. [https://doi.org/10.5281/zenodo.5773203](https://doi.org/10.5281/zenodo.5773203)

Krähwinkel, E., Langner, P., Lipp, R., et al. (2022). HeFDI Data Learning Materials:
Forschungsdatenmanagement _–_ eine Online-Einführung (Version 1.0). Zenodo. [https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ](https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ)

VerbundFDB. (2018, 20. Juli). Daten benennen und organisieren. Zugriff am 18.10.2023, von
[https://www.forschungsdaten-bildung.de/dateien-benennen](https://www.forschungsdaten-bildung.de/dateien-benennen)

Weiner, Barbara, Wünsche, Stephan, Kühne, Stefan, Voigt, Pia, Frericks, Sebastian, Hoffmann,
Clemens, Elze, Romy, & Gey, Ronny. (2020, April 30). Crashkurs Forschungsdatenmanagement. Zenodo. [https://doi.org/10.5281/zenodo.3778431](https://doi.org/10.5281/zenodo.3778431)

World Wide Web Consortium (W3C). (2007, 4. Juli). Datumsformate (S. Herkert, Übers.). W3C.org. Abgerufen am 21. Oktober 2023, von [https://www.w3.org/International/questions/qa-date-format.de](https://www.w3.org/International/questions/qa-date-format.de)
