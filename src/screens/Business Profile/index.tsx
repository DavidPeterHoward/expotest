import React from "react";
import {
  Text,
  ScrollView,
  Box,
  Image,
  Button
} from "native-base";
import {
  Linking
} from "react-native";
import BusinessProfileCard from "../../components/_molecules/BusinessProfileCard";
import BusinessProfileHeaderImage from "../../components/_molecules/BusinessProfileHeaderImage";

export default function BusinessProfile({ route }) {
  return (
    <>
      <ScrollView>
        <Box
          flex={1}
          alignItems="center"  
          justifyContent="flex-start"
          >
          {/* <BusinessProfileHeaderImage /> */}
          <Box
            width="100%"
            height="410px"
            >
            <Image
              borderRadius="0px"
              variant="businessCarouselCardMarketing" 
              source={{
                uri: route.params.marketingImage}}
              />
            </Box>
          <BusinessProfileCard businessDetails={ route.params }/>
          <Button
            variant="shopOnline"
            _text={{fontSize: "12px"}}
            onPress={ ()=>{ Linking.openURL( route.params.website )} }
            >
            Shop Online
          </Button>
        </Box>
      </ScrollView>
    </>
  )
}