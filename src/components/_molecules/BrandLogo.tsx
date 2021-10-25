import React from "react";
import {
  Image,
  AspectRatio
} from "native-base";

export default function BrandLogo({ logoDetails, logoHeight }) {
  return(
    <>  
      <AspectRatio height={ logoHeight } ratio={ logoDetails.width / logoDetails.height } >
        <Image 
          source={{
            uri: logoDetails.source
          }}
          alt="Brand Logo"
          resizeMode={ logoDetails.resizeMode }
        />
      </AspectRatio>
    </>
  )
}