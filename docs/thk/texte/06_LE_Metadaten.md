---
title: 06 Lernheinheit – Metadaten
lang: de-DE
output: 
    html_document: 
        toc: true
        toc_float: true
aside: true
---

# Metadaten

:::info Zitation:
Blümm, M., Fritsch, K., Bock, S., Arning, U., & Förstner, K. U. (2024). 06_LE_Metadaten. FDM@Studium.nrw Blended-Learning-Basiskurs „Forschungsdatenmanagement“ (Version 1.0). <https://landesinitiativefdmnrw.github.io/FDMatStudium/thk/texte/06_LE_Metadaten.html>
:::

[[toc]]

## Lernziele

::: info Lernziele
In diesem Themenblock lernen Sie, was Metadaten sind, was deren Nutzen ist und was es für
fächerübergreifende und fachspezifische Metadaten gibt. Außerdem werden Ihnen die gängigsten
Metadatenstandards vorgestellt, die Sie zukünftig verwenden können.
:::

<!--Screenshot-->

<iframe src=https://landesinitiativefdmnrw.github.io/FDMatStudium/medien/videos/Kapitel_6_Metadaten_klein.mp4 width="600" height="600" frameborder="0"></iframe>

<!-- 
[![Video Metadaten:]](/medien/videos/Kapitel_6_Metadaten_klein.mp4)
hier noch Video von Medienagentur und irgendwo im Skript eventuell noch Video I:[Metadatenformate](https://th-koeln.sciebo.de/s/IQkjPl7c7gxfzPk) (mp4, 5:34,[https://th-koeln.sciebo.de/s/IQkjPl7c7gxfzPk/download](https://th-koeln.sciebo.de/s/IQkjPl7c7gxfzPk/download)) ergänzen -->

## Was sind Metadaten und warum sind diese wichtig?

Daten sprechen meist nicht für sich selbst, denn es steckt viel mehr hinter ihnen und dem Kontext ihrer Erhebung und Verarbeitung. Damit Daten nicht zusammenhangslos und unverständlich vorliegen, benötigen sie sogenannte Metadaten. Metadaten sind zusätzliche Informationen zu den
Daten, die mit diesen hinterlegt werden – sozusagen Daten über Daten. Metadaten beschreiben
Daten, indem sie Kontext und Zusatzinformationen über die Eigenschaften, den Inhalt, die Herkunft,
die Struktur und die Bedeutung von Daten bieten. Auf diese Weise können die Daten wiedergefunden,
verstanden, interpretiert und nachgenutzt werden.

Dies ist nicht nur für den Fall, dass Dritte mit den Daten weiterarbeiten möchten, von Vorteil. Auch
man selbst profitiert davon, da die Daten für einen selbst noch nach Jahren einfacher
wiedergefunden und interpretiert werden können.

Je mehr Daten anfallen und je komplexer diese sind, umso nötiger wird auch eine entsprechende
Dokumentation. Dafür ist es wichtig, im besten Fall bereits bei der Erstellung von Daten einige
Aspekte rund um die Daten festzuhalten. Je länger man die Metadaten-Erstellung hinauszögert, umso
eher läuft man Gefahr, dass einige Informationen nicht mehr rekonstruiert werden können (bspw. die
Herkunft einzelner Daten).

<img src="/medien/icons/0005_THK_Metadaten.svg?autoSizes=true"
     alt="Icon_Metadaten"
     style="float: left; margin-right: 20px; width: 10%;" />

## Wozu dienen Metadaten?

<img src="/medien/icons/0005_THK_Metadaten.svg?autoSizes=true"
     alt="Icon_Metadaten"
     style="float: left; margin-right: 20px; width: 10%;" />

(Wieder-)Auffindbarkeit: Metadaten ermöglichen es, Forschungsdaten effizient zu finden. Wenn
nach Daten zu einem bestimmten Thema gesucht wird, helfen Metadaten die relevanten Datensätze
zu identifizieren.

Nachvollziehbarkeit: Metadaten dokumentieren den Prozess, wie Daten erhoben, verarbeitet und
analysiert wurden. Dies ist von entscheidender Bedeutung für die Nachvollziehbarkeit und
Reproduzierbarkeit von Forschungsergebnissen. Andere können mithilfe der Metadaten die Methodik
verstehen und Ergebnisse validieren.

Qualitätsbewertung: Gute Metadaten helfen bei der Beurteilung der Qualität von Forschungsdaten.
Sie liefern Informationen über die Zuverlässigkeit der Quelle, den Erfassungszeitpunkt, die
Genauigkeit der Messungen und andere relevante Aspekte. Somit können Dritte über die Eignung und
Vertrauenswürdigkeit der Daten urteilen.

Interoperabilität: Durch klare Strukturierung von Metadaten können unterschiedliche Datensätze aus
verschiedenen Quellen miteinander verknüpft werden. Dies fördert die Zusammenarbeit und
Integration von Daten.

Wiederverwendbarkeit: Gut dokumentierte Metadaten erleichtern es Anderen, die Daten für eigene
Studien und Analysen zu nutzen. Sie verstehen den Kontext, die Qualität und die Einschränkungen
der Daten.

Langzeitarchivierung: Metadaten unterstützen die Langzeitarchivierung von Forschungsdaten. Sie
gewährleisten, dass die Bedeutung und der Kontext der Daten auch Jahre nach ihrer Erstellung
verstanden werden können, selbst wenn die ursprünglichen Forscher nicht mehr verfügbar sind.

Interdisziplinäre Zusammenarbeit: Metadaten erleichtern die Zusammenarbeit zwischen
verschiedenen Fachrichtungen. Wenn Daten aus unterschiedlichen Disziplinen in ähnlicher Weise
beschrieben werden, wird die Integration und Nutzung in interdisziplinären Forschungsprojekten
erleichtert.

Rechtliche und ethische Aspekte: Metadaten können auch Informationen über die rechtlichen und
ethischen Aspekte der Datennutzung enthalten. Zum Beispiel können sie die Einwilligung der
Teilnehmer oder Datenschutzrichtlinien dokumentieren.

Verwaltung und Organisation: Metadaten helfen dabei, große Mengen an Forschungsdaten zu
organisieren und zu verwalten. Sie erleichtern die Identifizierung, Gruppierung und Kategorisierung
von Daten.

## Arten von Metadaten

<img src="/medien/icons/0005_THK_Metadaten.svg?autoSizes=true"
     alt="Icon_Metadaten"
     style="float: left; margin-right: 20px; width: 10%;" />

### Fächerübergreifende Metadaten[^1]

**Bibliografische Metadaten** dienen der Zitation von Daten und somit der Auffindbarkeit.
Durch die Beschreibung können die Daten zudem thematisch eingeordnet werden.  

::: tip bibliografisch

- Titel
- Autor:innen
- Beschreibung/Abstract
- Stichwörter/Keywords
  - Autorin: Dr. Anna Müller
  - Titel: „Untersuchung der Auswirkungen von Klimawandel auf Artenvielfalt in tropischen Regenwäldern“
  - Beschreibung/Abstract: Kurze Beschreibung des Forschungsziels und der Methoden.
  - Stichwörter/Keywords: „Klimawandel“, „Artenvielfalt“, „Regenwald“, „Ökologie“.
:::

**Administrative Metadaten** sind für die Verwaltung und langfristige Aufbewahrung der Daten notwendig.

::: tip administrativ

- Erstellungsdatum
- Standort
- Nutzungsbedingungen
- Lizenzen
- Zugriffsrecht
  - Erstellungsdatum: 15. Juni 2023
  - Standort: TH Köln
  - Rechte: CC BY SA NC, Urheberrecht bei Dr. Anna Müller, Datenzugriff nur für autorisierte Forscher.
:::

### Fachspezifische Metadaten

**Prozessmetadaten/Kontextuelle Metadaten**

umfassen die einzelnen Schritte der Enstehung und Verarbeitung der Daten, inklusive der verwendeten Methoden und Hilfsmitteln.

::: tip kontextuell

- Projekt
- Methodik
- Arbeitsschritte

  - Projekt: Langzeitstudie zur Artenvielfalt in tropischen Regenwäldern (Projektcode:RAINBIO)

  - Methodik: Systematische Stichprobenentnahme und Artenidentifikation

  - Arbeitsschritte: Erhebung von Daten während der Regenzeit, in verschiedenen Höhenlagen.
:::

**Strukturelle Metadaten**: stellen Informationen zur Datenstruktur dar.

::: tip strukturell

- Dateiformat
- Felder
- Relationen

  - Dateiformat: CSV (Comma-Separated Values)

  - Felder: „Artname“, „Lebensraum“, „Anzahl der beobachteten Individuen“

  - Relationen: Verknüpfung von Artbeobachtungen mit geografischen Koordinaten.
:::

**Technische Metadaten** umfassen Informationen zur technischen Infrastruktur. Die technischen
Metadaten werden in vielen Fällen automatisch generiert.

::: tip technisch

- Dateigröße
- Dateiformat
- (Auflösung)
- Hardware/Software

  - Dateigröße: 2.5 MB

  - Dateiformat: JPG (Bilddatei)

  - Auflösung: 1920x1080 Pixel

  - Aufnahmegerät: Canon EOS 5D Mark IV
:::

„**Inhaltsbeschreibende bzw. deskriptive Metadaten** variieren je nach Fachdisziplin und Methode. Sie bieten weitere Informationen zum Inhalt und der Datenerhebung.“

---
[^1]: Aufzählungen und Beispiele nach: Forschungsdaten.info 2024b

## Metadatenstandards

Fächerübergreifende und fachspezifische Metadaten werden nach einem einheitlichen Schema, d. h.
standardisiert, dokumentiert. Sogenannte Metadatenstandards bedeuten also eine einheitliche,
standardisierte Art und Weise der Dokumentation. Ähnliche Datensätze werden dadurch inhaltlich und
strukturell gleichförmig beschrieben. Außerdem dienen sie dazu, dass Forschergruppen auch untereinander Daten austauschen und verstehen können (Biernacka, Buchholz, Danker et al. 2021).

Nachfolgend sind exemplarisch einige Metadatenstandards aus unterschiedlichen Disziplinen aufgelistet:

| Wissenschaftsdisziplin| Name des/der Standards |
| -------- | ------ |
| fachübergreifende Standards | DataCite Schema, Dublin Core, MARC21, RADAR |
| Geisteswissenschaften | EAD, TEI P5, TEI Lex |
| Geowissenschaften | AgMES, CSDGM, ISO 19115 |
| Klimawissenschaften | CF Conventions|
| Kunst- & Kulturwissenschaften | CDWA, MIDAS-Heritage |
| Naturwissenschaften | CIF, CSMD, Darwin Core, EML, ICAT Schema Röntgenstrahlen-, Neutronen- und Myonenforschung |
|Sozial- und Wirtschaftswissenschaften | DDI |

(Quelle: Krähwinkel, Langner, Lipp et al. 2022)
<!-- hier noch Beispiele von Metadaten einfügen (s. Beispielsammlung), Quiz einfügen -->

## Leitfragen und Aufgaben

### Leitfragen

<img src="/medien/icons/0025_THK_Fragezeichen.svg?autoSizes=true"
     alt="Icon_Fragezeichen"
     style="float: left; margin-right: 10px; width: 15%;" />

1. Welche Rolle spielen Metadaten im Forschungsdatenmanagement?
2. Welche Herausforderungen können bei der Sammlung von Metadaten auftreten?
3. Warum ist es wichtig, Metadaten langfristig aufzubewahren?

### Aufgabe

<img src="/medien/icons/0034_THK_Aufgabe.svg?autoSizes=true"
     alt="Icon_Aufgabe"
     style="float: left; margin-right: 10px; width: 15%;" />

Arbeiten Sie die Materialien durch und beantworten Sie für sich die Fragen. Dokumentieren und
reflektieren Sie Ihre Ergebnisse in Ihrem Lernportfolio.

## Weiterführende Materialen und Quellen

<img src="/medien/icons/G-0044_BUW_Icon_Findability.svg?autoSizes=true"
     alt="Icon_Findability"
     style="float: left; margin-right: 20px; width: 10%;" />

### Literatur

Digital Curation Centre (DCC). (o. D.). List of Metadata Standards. Zugriff am 18.10.2023, von [https://www.dcc.ac.uk/guidance/standards/metadata/list](https://www.dcc.ac.uk/guidance/standards/metadata/list)

Forschungsdaten.info. (2024a, 25. April). Datendokumentation. Zugriff am 11.06.2024, von [https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/datendokumentation/](https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/datendokumentation/)

Forschungsdaten.info. (2023, 5. Mai). Metadaten im Forschungsalltag. Zugriff am 18.10.2023, von [https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/metadaten-im-forschungsalltag/](https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/metadaten-im-forschungsalltag/)

VerbundFDB. (2022, 09. Juni). Daten dokumentieren. Zugriff am 18.10.2023, von [https://www.forschungsdaten-bildung.de/daten-dokumentieren](https://www.forschungsdaten-bildung.de/daten-dokumentieren)

Wikipedia. (2021, 10. Juli). Liste von Metadatenformaten. Zugriff am 18.10.2023, von [https://de.wikipedia.org/wiki/Liste_von_Metadatenformaten](https://de.wikipedia.org/wiki/Liste_von_Metadatenformaten)

### Quellen

Biernacka, K., Buchholz, P., Danker, S. A. et al. (2021). Train-the-Trainer-Konzept zum Thema
Forschungsdatenmanagement (Version 4). Zenodo. [https://doi.org/10.5281/zenodo.5773203](https://doi.org/10.5281/zenodo.5773203)

Forschungsdaten.info. (2024b, 25. April). Metadaten und Metadatenstandards. Zugriff
am 11.06.2024, von [https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/metadaten-und-metadatenstandards/](https://forschungsdaten.info/themen/beschreiben-und-dokumentieren/metadaten-und-metadatenstandards/)

Krähwinkel, E., Langner, P., Lipp, R., et al. (2022). HeFDI Data Learning Materials:
Forschungsdatenmanagement _–_ eine Online-Einführung (Version 1.0). Zenodo.
[https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ](https://zenodo.org/records/6373596#.Y9Jfo4fMJPZ)
