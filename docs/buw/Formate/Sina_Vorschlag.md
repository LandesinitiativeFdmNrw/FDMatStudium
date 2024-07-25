# Tabelle

- **Wohlgeformtheit:**

    Die Wohlgeformtheitsregeln gelten unabhängig vom Vorhandensein eines Dokumentenschemas (Dokumenttyp-Deklaration o.ä.). Diese Regeln sind sozusagen übergeordnet. Sind sie erfüllt, ist das XML-Dokument **wohlgeformt**. Zur Wohlgeformtheit gehört beispielsweise, dass

  + die Elemente — wie auch immer sie aussehen — eine Baumstruktur besitzen, d. h. das Dokument besitzt genau ein Wurzelelement und jedes andere Element hat genau ein Elternelement
  + alle Elemente ein Start- und ein End-Tag besitzen
  + ein Element nicht mehrere Attribute mit demselben Namen besitzen darf
  + Attribut-Werte in Anführungszeichen oder Hochkommata stehen (Durch Klammerung in Hochkommata kann das Anführungszeichen als Zeichen verwendet werden und umgekehrt. So wird beispielsweise die Verwendung der Längeneinheit Zoll in Attributen möglich: `width='3.5'` <!-- style="font-family: Courier New, Courier, mono;" -->

- **Gültigkeit (Validität):**

     Ein XML-Dokument ist **gültig**, wenn

  + es wohlgeformt ist
  + ein Verweis auf ein Dokumentenschema vorhanden ist
  + das Schema eingehalten wird


# TEI

<!--
data-showGutter="true"
data-theme="eclipse"
data-readOnly="true"
data-tabSize="2"
data-fontSize="12pt" -->
```
<?xml version="1.0"?>
<!DOCTYPE tei SYSTEM "https://tei-c.org/release/xml/tei/custom/schema/dtd/tei_all.dtd">
<?xml-stylesheet type="text/xsl" href="file:///D:/tei/html/html.xsl?>
<TEI>
	<teiHeader>
		<fileDesc>
			<titleStmt>
				<title>Einfaches XML/TEI-Beispiel</title>
				<author>
					<surname>Rathmann</surname>
					<forename>Torsten</forename>
				</author>
			</titleStmt>
			<sourceDesc>
				<p>Born digital</p>
			</sourceDesc>
		</fileDesc>
	</teiHeader>
	<text>
		<body>
			<p>Als Auszeichnungssprache auf Basis von XML ist TEI Software- und Hardware-unabhängig.</p>
			<p>Da TEI nicht gepackt ist, ist es mit einem einfachen Texteditor, wie z. B. Notepad unter Windows, lesbar.</p>
		</body>
	</text>
</TEI>
```

# Fußnoten

In LiaScript[^01] a "section", which is defined by a header and a body, resembles a page. Thus, the body might contain a couple of footnote-marks, while the actual footnotes[^03] have to be defined at the end of the body. Other Markdown interpreters might define a more "wide-spread" usage of footnotes, but in LiaScript this is not possible at the moment. We parse/interpret only one section at a time[^10] and not the entire document. So keep this in mind when using footnotes.

[^01]: <section>Fußnote 
über mehrere Zeilen  und mit einer .svg-Datei ![42](https://www.svgrepo.com/show/530200/whale.svg)<!--
style = "width: 50px; heigth: 50px;"--> 
</section>

[^03]: Fußnote
[^10]: Fußnote