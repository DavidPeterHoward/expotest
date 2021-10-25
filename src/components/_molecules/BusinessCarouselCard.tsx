import React from "react";
import {
  Box,
  Image,
  Text,
} from "native-base";
import BrandLogo from "./BrandLogo";
import BrandEvr from "./BrandEvr";

export default function BusinessCarouselCard( { type, businessDetails } ) {
  return (
    <>
      <Box
        variant={ type === "carousel"  ?"businessCarouselCard" 
        : 
        "featuredBusinessCard" }
        >
        <Image
          source={{ uri:businessDetails.marketingImage }}
          variant="businessCarouselCardMarketing" 
        />
        <Box
          variant={ type === "carousel" ? "businessCardDescription"
          :
          "featuredBusinessDescription" }
          >
          <Box 
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start"
            >
            <BrandEvr evr={ businessDetails.evr } kudos={ businessDetails.bonusKudos }/>
            <BrandLogo 
              logoDetails={ businessDetails.logo } 
              // logoHeight="20px" 
              logoHeight={ type === "carousel" ?
              "20px"
              :
              "30px"}
            />
          </Box>
          <Text 
            variant="businessCardNameLarge" 
            size="big"
            color="black"
            >
            { businessDetails.name }
          </Text>
          <Text 
            variant="businessCardDescription"
            size="small"
            >
              { businessDetails.description }
          </Text>
        </Box>
      </Box>
    </>
  )
}
