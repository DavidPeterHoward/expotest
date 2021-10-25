// vscode-fold=#
import React, {
  ReactElement,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { 
  StyleSheet,
  Platform, 
  TouchableOpacity, 
} from "react-native";
import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Row,
  Stack,
  VStack,
  Column,
  ZStack,
  Button,
  Input,
  TextArea,
  Text,
  Image,
  ScrollView,
} from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import BusinessCarouselCard from "../../components/_molecules/BusinessCarouselCard"
import BusinessCarousel from "../../components/_organisms/BusinessCarousel";
import BusinessReferralCard from "../../components/_molecules/BusinessReferralCard";
import NavigationNavigator from "../../navigation";

export default function BusinessesContainer({ children, navigation }: any): ReactElement { 
  return (
    <ScrollView>
      <Box alignItems="center" bg="white" >
        {/* Below is for testing / mocking purposes only */}
        <BusinessCarousel seeMoreLink="/shoppingretail" carouselTitle="Shopping and Retail">
          { businessDetails.map( business => {
            return(
              <TouchableOpacity key={ business.name } onPress={ () => navigation.navigate("BusinessProfile", business)} >
                <BusinessCarouselCard businessDetails={ business } type="carousel"/>
              </TouchableOpacity>
            )
          }) }
        </BusinessCarousel>
        <BusinessReferralCard />
        <BusinessCarouselCard businessDetails={ businessDetails[0] } type="featured"/>
      </Box>
    </ScrollView>
  );
}

const businessDetails = [
  {
  logo: {
    source: "https://logos-download.com/wp-content/uploads/2019/11/Myer_Logo.png",
    width: 120,
    height: 50,
    resizeMode: "contain"
  },
  marketingImage: "https://image.shutterstock.com/shutterstock/photos/1555656749/display_1500/stock-photo-riga-latvia-girl-drinks-coffe-with-her-friend-1555656749.jpg",
  evr: 50,
  bonusKudos: 25,
  name: "Myer Chermside",
  description: "Shop the latest women's fashion, kids' clothing, babywear, entertainment, toys, homewares and much more at Target's Online Store.",
  kudosEarned: "1,243,562",
  website: "https://www.myer.com.au/",
  },
  {
    logo: {
      source: "https://www.logolynx.com/images/logolynx/b2/b254d23e6d17aefab8bfd4f13f060fcd.jpeg",
      width: 474,
      height: 247,
      resizeMode: "contain"
    },
    marketingImage: "https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1706/vadymvdrobot170602899/80502398-portrait-of-a-man-tying-shoelaces-on-sports-shoe-while-running-on-the-beach-in-the-morning.jpg",
    evr: 80,
    bonusKudos: 15,
    name: "Rebel Sports Chermside",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed dignissim massa. Duis cursus dolor nulla, ac aliquam tortor suscipit lobortis. Nulla ullamcorper pretium diam sit amet pulvinar.",
    kudosEarned: "200,232",
    website: "https://www.rebelsport.com.au/",
  },
  {
    logo: {
      source: "https://www.pikpng.com/pngl/b/147-1471003_samsung-logo-png-transparent-svg-vector-freebie-supply.png",
      width: 2201,
      height: 731,
      resizeMode: "contain"
    },
    marketingImage: "https://i.dailymail.co.uk/i/pix/2016/07/15/10/364CE6AA00000578-3691519-image-a-8_1468574081255.jpg",
    evr: 15,
    bonusKudos: 45,
    name: "Samsung Beds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed dignissim massa. Duis cursus dolor nulla, ac aliquam tortor suscipit lobortis. Nulla ullamcorper pretium diam sit amet pulvinar.",
    kudosEarned: "145,230",
    website: "https://www.samsung.com/au/",
  },
]