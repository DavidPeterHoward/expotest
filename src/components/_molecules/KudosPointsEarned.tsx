import React from "react";
import {  
  Box,
  Text
} from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function KudosPointsEarned({ kudosPoints }) {
  return (
    <>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        >
        <FontAwesomeIcon icon={ faDollarSign } color="#F1DE33" size={19} />
        <Text size="small" fontWeight={ 600 }> { kudosPoints } Kudos Earned</Text>
      </Box>
    </>
  )
}
