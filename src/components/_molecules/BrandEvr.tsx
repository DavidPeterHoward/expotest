import React from "react";
import {
  Box,
  Text
} from "native-base";

export default function BrandEvr({ evr, kudos }) {
  return(
    <>
      <Box variant="evrCard" bg="brand.evrPurple">
        <Text
          variant="evrPoints"
          size="tiny"
          >
          EVR { evr } • +{ kudos } % BK
        </Text>
      </Box>
    </>
  )
}

