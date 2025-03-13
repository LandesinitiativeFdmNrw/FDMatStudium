import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

/* ■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■
    Konfigurationsdatei by Sina Bock, Janiça Hackenbuchner 2024
  □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■ */

export default defineConfig({
  title: "FDMatStudium.nrw",
  description: "FDMatStudium.nrw",
  lang: 'de-DE',
  base: '/FDMatStudium/',

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  themeConfig: {

    // □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□ Logo □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
    logo: '/logos/FDM_Logos_FDM@Studium.nrw.svg',
    
    // □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□ Logo □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
    search: {
      provider: 'local'
    },

    // □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□ Navigation □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
    nav: [
      {
        // □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□ Drop-Down □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
        text: 'FDM@Studium.nrw',
        items: [
          { text: 'FDM@Studium.nrw', link: 'https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97' },
          { text: 'Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen', link: 'https://www.mkw.nrw/hochschule-und-forschung/digitalisierung-hochschule-und-wissenschaft/forschungsdatenmanagement-fdm' }
        ]
      },
      {
        text: 'Kooperationspartner:innen',
        items: [
          { text: 'Landesinitiative_NRW', link: 'https://fdm-nrw.coscine.de/#/?id=landesinitiative-für-forschungsdatenmanagement-fdmnrw' },
          { text: 'UDE', link: "https://www.uni-due.de/ub/datacampus/" },
          { text: 'BUW', link: "https://fdm.uni-wuppertal.de/de/" },
          { text: 'TH Koeln', link: "https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/fdmstudiumnrw_98785.php" }
        ]
      }],

    // □■□■□■□■□■□■□■□■□ Seitennavigation □■□■□■□■□■□■□■□■□
    sidebar: {
      // □■□■□■□■□■□■□■□■□ UDE  □■□■□■□■□■□■□■□■□
      '/ude/': [
        {
          text: 'UDE',
          items: [
            { text: 'Data Wrangling', link: '/ude/index' },
            { text: 'Kursinhalte', link: '/ude/Kursinhalte' }
           ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
      '/guide/': [
        {
          text: 'FDM@Studium.nrw',
          items: [
            { text: 'Über FDM@Studium.nrw', link: '/guide/intro' },
            { text: 'Kontakt', link: '/guide/kontakt' },
            { text: 'Publikationen', link: '/guide/publikationen' },
            { text: 'Impressum', link: '/guide/impressum' },
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Lernbausteine □■□■□■□■□■□■□■□■□
      '/bricks/': [
        {
          text: 'Lernbausteine',
          items: [
            { text: 'Die Idee der Lernbausteine', link: '/bricks/index' },
            { text: 'Schluss mit dem Datenchaos - Wie Forschungsdatenmanagement für Ordnung sorgt', link: '/bricks/fdmNRW_datenchaos' },
            { text: 'Von der Idee zur Wissenschaft - Die Entstehung von Forschungsdaten', link: '/bricks/fdmNRW_idee-wissenschaft' },
            { text: 'Datenrecycling - Wie Forschungsdaten nachgenutzt werden können' , link: '/bricks/fdmNRW_datenrecycling' },
            { text: 'FAIR Play - Warum Forschungsdaten Management brauchen', link: '/bricks/fdmNRW_fair-play' },
            { text: 'Hinweise zur Nachnutzung des Kurses: Schluss mit dem Datenchaos - Wie Forschungsdatenmanagement für Ordnung sorgt', link: '/bricks/fdmNRW_hinweise-zur-nachnutzung-datenchaos' },
            { text: 'Hinweise zur Nachnutzung des Kurses: Von der Idee zur Wissenschaft - Die Entstehung von Forschungsdaten', link: '/bricks/fdmNRW_hinweise-zur-nachnutzung-idee-wissenschaft' },
            { text: 'Hinweise zur Nachnutzung des Kurses: Datenrecycling - Wie Forschungsdaten nachgenutzt werden können', link: '/bricks/fdmNRW_hinweise-zur-nachnutzung-datenrecycling' },
            { text: 'Hinweise zur Nachnutzung des Kurses: FAIR Play - Warum Forschungsdaten Management brauchen', link: '/bricks/fdmNRW_hinweise-zur-nachnutzung-fair-play' },
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ BUW □■□■□■□■□■□■□■□■□
      '/buw/': [
        {
          text: 'Datenmanagement in Studium & wissenschaftlicher Praxis (BUW)',
          items: [
            { text: 'Einführungstext Datenmanagement', link: '/buw/index' },
            { text: 'Kurs Moodle', link: '/buw/moodle' },
            { text: 'Kurs LiaScript', link: '/buw/liaScript' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ TH Koeln □■□■□■□■□■□■□■□■□
      '/thk/': [
        {
          text: 'Forschungsdatenmanagement (TH Köln)',
          items: [
            { text: 'Infotext', link: '/thk/index' },
            { text: 'Lehreinheiten für Dozierende', 
              collapsed: true,
                items: [
                { text: 'Didaktisches Konzept', link: '/thk/konzepte/00_Didaktisches-Konzept.md' },
                { text: '1. Was sind Forschungsdaten?', link: '/thk/konzepte/01_LE-Doz_Forschungsdaten' },
                { text: '2. Was ist Forschungsdatenmanagement?', link: '/thk/konzepte/02_LE-Doz_Forschungsdatenmanagement' },
                { text: '3. Datenlebenszyklus', link: '/thk/konzepte/03_LE-Doz_Datenlebenszyklus' },
                { text: '4. FAIR-Prinzipien', link: '/thk/konzepte/04_LE-Doz_FAIR-Prinzipien' },
                { text: '5. Datendokumentation', link: '/thk/konzepte/05_LE-Doz_Datendokumentation' },
                { text: '6. Metadaten', link: '/thk/konzepte/06_LE-Doz_Metadaten' },
                { text: '7. Dateistruktur', link: '/thk/konzepte/07_LE-Doz_Dateistruktur' },
                { text: '8. Daten speichern', link: '/thk/konzepte/08_LE-Doz_Daten-Speichern' },
                { text: '9. Daten finden', link: '/thk/konzepte/09_LE-Doz_Daten-Finden' },
                { text: '10. Rechtliche Aspekte', link: '/thk/konzepte/10_LE-Doz_Rechtliche-Aspekte' },
                { text: '11. Ethische Aspekte', link: '/thk/konzepte/11_LE-Doz_Ethische-Aspekte' },
                { text: '12. Arbeiten im Team', link: '/thk/konzepte/12_LE-Doz_Arbeiten-im-Team' }
          ]
            },
            { text: 'Lerneinheiten für Studierende',
              collapsed: true,
              items: [
                { text: '1. Was sind Forschungsdaten?', link: '/thk/texte/01_LE_Forschungsdaten' },
                { text: '2. Was ist Forschungsdatenmanagement?', link: '/thk/texte/02_LE_Forschungsdatenmanagement' },
                { text: '3. Datenlebenszyklus', link: '/thk/texte/03_LE_Datenlebenszyklus' },
                { text: '4. FAIR-Prinzipien', link: '/thk/texte/04_LE_FAIR-Prinzipien' },
                { text: '5. Datendokumentation', link: '/thk/texte/05_LE_Datendokumentation' },
                { text: '6. Metadaten', link: '/thk/texte/06_LE_Metadaten' },
                { text: '7. Dateistruktur', link: '/thk/texte/07_LE_Dateistruktur' },
                { text: '8. Daten speichern', link: '/thk/texte/08_LE_Daten-Speichern' },
                { text: '9. Daten finden', link: '/thk/texte/09_LE_Daten-Finden' },
                { text: '10. Rechtliche Aspekte', link: '/thk/texte/10_LE_Rechtliche-Aspekte' },
                { text: '11. Ethische Aspekte', link: '/thk/texte/11_LE_Ethische-Aspekte' },
                { text: '12. Arbeiten im Team', link: '/thk/texte/12_LE_Arbeiten-im-Team' }
          ]
             },
            { text: 'Hinweise zur Nachnutzung', link: '/thk/nachnutzung' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Startseite □■□■□■□■□■□■□■□■□
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]

    }

  }
}
)
