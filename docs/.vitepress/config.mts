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
  base: '//landesinitiativefdmnrw',

  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    //logo: '/logo_TH_Koeln.png',
    // ︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Navigation
    nav: [
      {
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
  
    //︶꒷꒦꒷︶꒷꒦꒷︶꒷︶꒷꒦꒷︶ Sidebar
    sidebar: [
      {
    text: 'Lehrkonzepte für Dozierende',
    collapsed: true,
    items: [
      { text: '1. Forschungsdaten', link: '/lz/VL_01_Forschungsdaten_LZ.md' },
      ]
    },
    {
      text: 'Lerneinheiten für Studierende',
      collapsed: true,
      items: [
        { text: '1. Forschungsdaten', link: '/texte/VL_01_Forschungsdaten.md' },
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
