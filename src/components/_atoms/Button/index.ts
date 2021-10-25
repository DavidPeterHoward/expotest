// NativeBase - Button Atom Variants

import { borderRadius, justifyContent } from "styled-system";

const defaultProps = {
  colorScheme: "red",
};

const baseStyle = {
  // rounded: "md",
};

const sizes = {
  xl: { _text: { fontSize: "64px" } },
  lg: { _text: { fontSize: "32px" } },
  md: { _text: { fontSize: "16px" } },
  sm: { _text: { fontSize: "12px" } },
  xs: { _text: { fontSize: "11px" } }
};

// Custom Variants
const solid = {
  borderWidth: "2px",
  borderColor: "black",
  backgroundColor: "#333",
};

const outline = {
  borderWidth: "2px",
  borderColor: "black",
  backgroundColor: "transparent",
};

const themeTester = {
  borderWidth: "5px",
  borderColor: "#abcdef",
  _text: {
    color: "#E33f",
  },
  backgroundColor: "transparent",
};

const carouselSeeMore = {
  bg: "transparent",
  _text: {
    fontWeight: 400,
    color: "black",
  },
}

const couponButton = {
  width: "120px",
  height: "30px",
  bg: "black",
  paddingTop: "0px",
  paddingBottom: "0px",
  paddingLeft: "0px",
  paddingRight: "0px",
  _text: { 
    color: "white",
    fontSize: "11px",
    fontWeight: 400,
   },
}

const shopOnline = {
  width: "90%",
  height: "55px",
  borderRadius: "4px",
  justifyContent: "center",
  bg: "white",
  marginTop: "15px",
  marginBottom: "25px",
  _text: {
    color: "black",
    fontWeight: 400,
  }
}

const walletExchange = {
  width: "160px",
  height: "40px",
  bg: "white",
  borderRadius: "4px",
  marginTop: "30px"
}

const variants = {
  solid,
  outline,
  themeTester,
  carouselSeeMore,
  couponButton,
  shopOnline,
  walletExchange,
};

export default { baseStyle, defaultProps, variants, sizes };
