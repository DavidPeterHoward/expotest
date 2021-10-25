import React from "react";
import { 
  Box,
  Image
 } from "native-base";

export default function BusinessProfileHeaderImage({  }) {
  return (
    <>
    <Box
      width="100%"
      height="410px"
      >
      <Image
        variant="businessCarouselCardMarketing" 
        source={{
          uri:"https://image.shutterstock.com/shutterstock/photos/1555656749/display_1500/stock-photo-riga-latvia-girl-drinks-coffe-with-her-friend-1555656749.jpg"}}
        />

    </Box>
    </>
  )
}