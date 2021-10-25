import React from "react";
import {
  Box,
  Text,
  Button,
} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons"

export default function WalletBalanceCard({  }) { 
  return (
    <>
      <Box
        variant="walletBalanceCard"
        >
        <FontAwesomeIcon icon={ faCcVisa } size={23} />
      </Box>

    </>
  )
}