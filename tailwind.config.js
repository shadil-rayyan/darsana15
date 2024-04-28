/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        "www-equalopp-org-1349x593-default-nero": "#fff",
        black: "#000",
        "www-equalopp-org-1349x593-default-mine-shaft": "#292929",
        steelblue: {
          "100": "#1897dc",
          "200": "#3682b0",
          "300": "#1388ca",
          "400": "#1187c9",
          "500": "#1186c9",
          "600": "#0e5b8a",
        },
        deepskyblue: {
          "100": "#30b0f5",
          "300": "#2ba1e3",
          "400": "rgba(0, 161, 196, 0.09)",
        },
        lavenderblush: "#fff0f0",
        gray1: {
          "100": "#828282",
          "200": "#252a34",
          "300": "#242331",
          "400": "#252525",
          "500": "#202224",
          "600": "#251b1b",
          "700": "#1e1e1e",
          "800": "#0d1e2d",
          "900": "#111",
          "1000": "#0e0606",
          "1100": "rgba(255, 255, 255, 0.89)",
        },
        dimgray: {
          "100": "#666",
          "200": "#5a5a5a",
          "300": "#555",
          "400": "rgba(102, 102, 102, 0.8)",
          "500": "rgba(102, 102, 102, 0.5)",
        },
        "primary-text": "#1d2130",
        border: "#e5e5e5",
        darkorchid: "#9f5ffe",
        royalblue: "#0162e8",
        dodgerblue: "#2687ff",
        skyblue: "#08bbdd",
        darkgray: {
          "100": "#afb0b2",
          "200": "#a8a79d",
          "300": "#979797",
          "400": "rgba(158, 146, 146, 0.6)",
        },
        darkslategray: {
          "100": "#393232",
          "200": "#333",
          "300": "#2d2c3b",
        },
        slateblue: "#4539b4",
        gold: {
          "100": "#ffe047",
          "200": "#e6c72e",
        },
        silver: "#c7bfbf",
        "gray-600": "#505050",
        "dropdowns-borders-br-color-1": "#f0f2f5",
        "titles-paragraphs-text-neutral": "#666f8d",
        "base-color-gray-800": "#606060",
        gainsboro: {
          "100": "#e0e7e9",
          "200": "#d9d9d9",
        },
        "gray-200": "#eff2f4",
        "gray-300": "#dee2e7",
        "gray-500": "#8b96a5",
        dark: "#1c1c1c",
        "base-color-gray-200": "#e0e0e0",
        paleturquoise: "#c6f3f0",
        powderblue: "#add9d6",
        cadetblue: "rgba(77, 167, 167, 0.6)",
        "light-grey": "#f4f4f4",
        cornflowerblue: "#4889dd",
        lightgray: "#ccc",
        lightslategray: "#8484a0",
      },
      spacing: {
        "default-gaps-default-gaps-gap-tiny": "2px",
        "dropdowns-paddings-pd-regular": "8px",
        "default-gaps-default-gaps-gap-extra-small": "6px",
        "dropdowns-paddings-pd-regular1": "8px",
      },
      fontFamily: {
        h3: "Roboto",
        poppins: "Poppins",
        arial: "Arial",
        nunito: "Nunito",
        "open-sans": "'Open Sans'",
        montserrat: "Montserrat",
        manrope: "Manrope",
        "text-info": "Inter",
        avenir: "Avenir",
        raleway: "Raleway",
        "roboto-condensed": "'Roboto Condensed'",
        "red-rose": "'Red Rose'",
        inherit: "inherit",
      },
      borderRadius: {
        "8xs": "5px",
        "31xl": "50px",
        xl: "20px",
        mini: "15px",
        "11xl": "30px",
        "21xl": "40px",
        "3xs": "10px",
        "12xs-5": "0.5px",
        "51xl": "70px",
        "10xs": "3px",
        "45xl": "64px",
        "2xs": "11px",
        smi: "13px",
        "cards-small": "8px",
        "dropdowns-default": "16px",
      },
    },
    fontSize: {
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      lgi: "19px",
      "24xl": "43px",
      "6xl": "25px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lg: "18px",
      "35xl": "54px",
      "45xl": "64px",
      "32xl": "51px",
      sm: "14px",
      "4xl": "23px",
      "7xl": "26px",
      "2xl": "21px",
      "3xs": "10px",
      xs: "12px",
      mid: "17px",
      mini: "15px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
