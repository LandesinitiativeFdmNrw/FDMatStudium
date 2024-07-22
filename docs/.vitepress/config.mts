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
    // https://vitepress.dev/reference/default-theme-config

    // □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□ Logo □■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□■□
    // logo: '/logos/fdm-nrw_Eichhörnchen_web.png',

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
        text: 'Über das Projekt',
        items: [
        { text: 'Landesinitiative_NRW', link: 'https://fdm-nrw.coscine.de/#/?id=landesinitiative-für-forschungsdatenmanagement-fdmnrw' },
        { text: 'UDE', link: "https://www.uni-due.de/rds/fdm-curriculum.php" },
        { text: 'BUW', link: "https://fdm.uni-wuppertal.de/de/" },
        { text: 'TH Koeln', link: "https://www.th-koeln.de/informatik-und-ingenieurwissenschaften/fdmstudiumnrw_98785.php" }
        ]
      }],
  
    // □■□■□■□■□■□■□■□■□ Sidebar □■□■□■□■□■□■□■□■□
    sidebar: [
      {
    text: 'Über FDM@Studium.nrw',
    collapsed: true,
    // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
    items: [
      { text: 'Einführungstext FDM@Studium.nrw', link: '/guide/intro' },
      ]
    },
    {
      text: 'Lernbausteine (FDM@Studium.nrw)',
      collapsed: true,
      // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
      items: [
        { text: 'Lernbausteine (FDM@Studium.nrw)', link: 'link: /bricks/index.md' },
        { text: 'Baustein 1', link: 'link: /bricks/lernbaustein_1.md' },
        { text: 'Baustein 2', link: 'link: /bricks/lernbaustein_2.md' },
        { text: 'Baustein 3', link: 'link: /bricks/lernbaustein_3.md' },
        { text: 'Baustein 4', link: 'link: /bricks/lernbaustein_4.md' }
        ]
      },
      {
        text: 'Datenmanagement in Studium & wissenschaftlicher Praxis (BUW)',
        collapsed: true,
        // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
        items: [
          { text: 'Einführungstext Datenmanagement', link: 'link: /buw/index' },
          { text: 'Kurs Moodle', link: 'link: /buw/lernbaustein_1.md' },
          { text: 'Kurs LiaScript', link: 'link: /buw/lernbaustein_2.md' }
          ]
        },
        {
          text: 'Forschungsdatenmanagement (TH Köln)',
          collapsed: true,
          // □■□■□■□■□■□■□■□■□ Einführungstext □■□■□■□■□■□■□■□■□
          items: [
            { text: 'Einführungstext Forschungsdatenmanagement', link: 'link: /thk/index' },
            { text: 'Lehreinheiten für Dozierende', link: 'link: /thk/konzepte/01_LE-Doz_Forschungsdaten.md' },
            { text: 'Lerneinheiten für Studierende', link: 'link: /thk/texte/01_LE_Forschungsdaten.md' }
            ]
          }
    ],
    
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Aside

    socialLinks: [
      { icon: 'github',
        link: 'https://github.com/mbluemm/modul-fdII-thkoeln' },
    ],

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Footer 
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 <a href="https://www.dh.nrw/kooperationen/FDM@Studium.nrw-97" target="_blank">FDM@Studium.NRW</a>'
    },

    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Timestamp
    lastUpdated: {
      text: 'Zuletzt aktualisiert am:',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
  }
}
)
