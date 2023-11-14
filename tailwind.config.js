const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fbad: "#fbad17",
        mainSpaColor: "#669666",
        boxtimeSpaColor: "#014f2a",
        titlemainSpaColor: "#008037",
        textTitle: "#c7b16a"
      },
      maxWidth: {
        1440: "1440px",
        1300: "1300px",
      },
      width: {
        1100: "1100px",
        1300: "1300px",
        409: "409px",
        400: "400px",
        734: "734px",
        1040: "1040px",
      },
      height: {
        1100: "1100px",
      },
      margin: {
        cus: "10px",
        552 : "552px",
      },
      borderColor: {
        titleListMb: "#ff6400",
        borderMenuMb: "hsla(0,0%,100%,.2)",
      },
      backgroundImage: {
        gradientCosmetic: 'linear-gradient(141.82deg,#03b15f -66.97%,#014f2a 42.57%) ',
        gradientText: 'linear-gradient(180deg,#FBAD17 0%,#FF6400 100%)'
      },
    },
  },
  plugins: [],
});
