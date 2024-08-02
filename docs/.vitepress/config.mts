import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

/* ■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■
    Konfigurationsdatei
  □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■ */

// https://vitepress.dev/reference/site-config
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
          { text: 'UDE', link: "https://www.uni-due.de/rds/fdm-curriculum.php" },
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
            { text: 'Index', link: '/ude/index' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
      '/guide/': [
        {
          text: 'FDM@Studium.nrw',
          items: [
            { text: 'Über FDM@Studium.nrw', link: '/guide/intro' },
            { text: 'Nachnutzung', link: '/guide/nachnutzung' },
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Lernbausteine □■□■□■□■□■□■□■□■□
      '/bricks/': [
        {
          text: 'Lernbausteine (FDM@Studium.nrw)',
          items: [
            { text: 'Lernbausteine (FDM@Studium.nrw)', link: 'link: /bricks/index' },
            { text: 'Von Datenchaos zu Datenhelden: Wie Forschungsdatenmanagement für Ordnung sorgt', link: 'link: /bricks/fdmNRW_datenchaos_datenhelden' },
            { text: 'Datenrecycling - Wie Forschungsdaten nachgenutzt werden können', link: 'link: /bricks/fdmNRW_datenrecycling' },
            { text: 'FAIR Play: Warum Forschungsdaten Management brauchen', link: 'link: /bricks/fdmNRW_fair-play' },
            { text: 'Von der Idee zur Wissenschaft: Die Entstehung von Forschungsdaten', link: 'link: /bricks/fdmNRW_idee-wissenschaft' }
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
            { text: 'Einführungstext Forschungsdatenmanagement', link: '/thk/index' },
            { text: 'Lehreinheiten für Dozierende', 
              collapsed: true,
                items: [
                { text: 'Einführungstext Forschungsdatenmanagement', link: '/thk/index' },
                { text: 'Was sind Forschungsdaten?', link: '/thk/konzepte/01_LE-Doz_Forschungsdaten' },
                { text: 'Was ist Forschungsdatenmanagement?', link: '/thk/konzepte/02_LE-Doz_Forschungsdatenmanagement' },
                { text: 'Datenlebenszyklus', link: '/thk/konzepte/03_LE-Doz_Datenlebenszyklus' },
                { text: 'FAIR-Prinzipien', link: '/thk/konzepte/04_LE-Doz_FAIR-Prinzipien' },
                { text: 'Datendokumentation', link: '/thk/konzepte/05_LE-Doz_Datendokumentation' },
                { text: 'Metadaten', link: '/thk/konzepte/06_LE-Doz_Metadaten' },
                { text: 'Dateistruktur', link: '/thk/konzepte/07_LE-Doz_Dateistruktur' },
                { text: 'Daten speichern', link: '/thk/konzepte/08_LE-Doz_Daten-Speichern' },
                { text: 'Daten finden', link: '/thk/konzepte/09_LE-Doz_Daten-Finden' },
                { text: 'Rechtliche Aspekte', link: '/thk/konzepte/10_LE-Doz_Rechtliche-Aspekte' },
                { text: 'Ethische Aspekte', link: '/thk/konzepte/11_LE-Doz_Ethische-Aspekte' },
                { text: 'Arbeiten im Team', link: '/thk/konzepte/12_LE-Doz_Arbeiten-im-Team' }
          ]
            },
            { text: 'Lerneinheiten für Studierende',
              collapsed: true,
              items: [
                { text: 'Einführungstext Forschungsdatenmanagement', link: '/thk/index' },
                { text: 'Was sind Forschungsdaten?', link: '/thk/texte/01_LE_Forschungsdaten' },
                { text: 'Was ist Forschungsdatenmanagement?', link: '/thk/texte/02_LE_Forschungsdatenmanagement' },
                { text: 'Datenlebenszyklus', link: '/thk/texte/03_LE_Datenlebenszyklus' },
                { text: 'FAIR-Prinzipien', link: '/thk/texte/04_LE_FAIR-Prinzipien' },
                { text: 'Datendokumentation', link: '/thk/texte/05_LE_Datendokumentation' },
                { text: 'Metadaten', link: '/thk/texte/06_LE_Metadaten' },
                { text: 'Dateistruktur', link: '/thk/texte/07_LE_Dateistruktur' },
                { text: 'Daten speichern', link: '/thk/texte/08_LE_Daten-Speichern' },
                { text: 'Daten finden', link: '/thk/texte/09_LE_Daten-Finden' },
                { text: 'Rechtliche Aspekte', link: '/thk/texte/10_LE_Rechtliche-Aspekte' },
                { text: 'Ethische Aspekte', link: '/thk/texte/11_LE_Ethische-Aspekte' },
                { text: 'Arbeiten im Team', link: '/thk/texte/12_LE_Arbeiten-im-Team' }
          ]
             }
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