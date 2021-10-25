import React from "react";
import {
  Box,
  Button,
  Text
} from "native-base"

export default function CarouselTitleBar({ seeMoreLink, carouselTitle }) {
  return (
    <>
    <Box variant="carouselTitleContainer">
      <Text variant="carouselTitle" size="big">
          { carouselTitle }
      </Text>
      <Button variant="carouselSeeMore" size="xs" onPress={ () => {} }
        >
          See more
      </Button>
    </Box>
    </>
  )
}