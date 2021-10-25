import React from "react";
import {
  Box,
  Image,
  Text,
  ScrollView
} from "native-base";
import CarouselTitleBar from "../_molecules/CarouselTitleBar";

export default function BusinessCarousel({ children, seeMoreLink, carouselTitle}) {
  return (
    <>
    <Box variant="businessCarousel">
      {/* <Box variant="carouselTitleContainer">
        <Text variant="carouselTitle" size="big">
          Carousel Title
        </Text>
      </Box> */}
      <CarouselTitleBar seeMoreLink={ seeMoreLink } carouselTitle={ carouselTitle }  />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        { children }
      </ScrollView>
    </Box>
    </>
  )
}