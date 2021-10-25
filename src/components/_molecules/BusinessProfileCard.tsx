import React from "react";
import {
  Box,
  Text

} from "native-base";
import BrandLogo from "./BrandLogo";
import BrandEvr from "./BrandEvr";
import KudosPointsEarned from "./KudosPointsEarned";

export default function BusinessProfileCard({ businessDetails }) {
  const handleShopNowPress = () => {
    Linking
  }
  return (
    <>
    <Box variant="businessProfileCard" >
      <BrandEvr evr={ businessDetails.evr } kudos={ businessDetails.bonusKudos } />
      <BrandLogo logoHeight="40px" logoDetails={ businessDetails.logo } />
        <Box alignItems="center">
          <Text size="big">
            { businessDetails.name }
          </Text>
          <Text 
            variant="businessCardDescription"
            size="small"
            textAlign="center"
            marginTop="10px"
            >
              { businessDetails.description }
          </Text>
      </Box>
      <KudosPointsEarned kudosPoints={ businessDetails.kudosEarned } />
    </Box>
    </>
  )
}