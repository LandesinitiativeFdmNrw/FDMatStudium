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
   logo: '/logos/UDE_FDM_Logos_FDM@Studium.nrw.svg',

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
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
      '/guide/': [
        {
          text: 'FDM@Studium.nrw',
          //collapsed: true,
          items: [
            { text: 'Über FDM@Studium.nrw', link: '/guide/intro' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ Lernbausteine □■□■□■□■□■□■□■□■□
      '/bricks/': [
        {
          text: 'Lernbausteine (FDM@Studium.nrw)',
          //collapsed: true,
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
          //collapsed: true,
          items: [
            { text: 'Einführungstext Datenmanagement', link: 'link: /buw/index' },
            { text: 'Kurs Moodle', link: 'link: /buw/moodle.md' },
            { text: 'Kurs LiaScript', link: 'link: /buw/liaScript.md' }
          ]
        }
      ],
      // □■□■□■□■□■□■□■□■□ TH Koeln □■□■□■□■□■□■□■□■□
      '/thk/': [
        {
          text: 'Forschungsdatenmanagement (TH Köln)',
          //collapsed: true,
          items: [
            { text: 'Einführungstext Forschungsdatenmanagement', link: 'link: /thk/index' },
            { text: 'Lehreinheiten für Dozierende', link: 'link: /thk/konzepte/01_LE-Doz_Forschungsdaten' },
            { text: 'Lerneinheiten für Studierende', link: 'link: /thk/texte/01_LE_Forschungsdaten' }
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