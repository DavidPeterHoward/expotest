const defaultProps = {

}

const baseStyle = {

}

const evrPoints = {
  fontWeight: 600,
  color: "white",
}

const businessCardDescription = {
  fontWeight: 400,
  noOfLines: 3,
  lineHeight: "12px",
  color: "brand.lightGray",
}

const businessCardNameLarge = {
  fontWeight: 400,
  noOfLines: 1,
  lineHeight: "16px",
  color: "black"
}

const carouselTitle = {
  fontWeight: 600,
  noOfLines: 2,
  // lineHeight: "16px",
  color: "black",
  maxWidth: "70%",
}

const variants = {
  businessCardDescription,
  businessCardNameLarge,
  carouselTitle,
  evrPoints
}

const sizes = {
  tiny: { fontSize: "8px" },
  small: { 
    fontSize: "11px", 
    lineHeight: "12px",
    fontWeight: 400
  },
  big: { fontSize: "15px" },
};

 export default { baseStyle, defaultProps, variants, sizes };



