import React from "react";
import {
  Box,
  Text,
  Button,
} from "native-base";

export default function TotalWalletBalanceCard({  }) {
  return (
    <>
      <Box
        roundedBottom="15px"
        variant="totalWalletBalanceCard"
        >
        <Text
          size="small"
          color="white"
          >
          Total Wallet Balance
        </Text>
        <Box
          alignItems="center"
        >
        <Text
          fontSize="46px"
          fontWeight={600}
          color="white"
          >
          $382.75
        </Text>
        <Text
          size="small"
          width="90%"
          textAlign="center"
          color="white"
          >
          Your native fiat currency is set to Australian Dollars.
        </Text>
        </Box>
        <Button
          variant="walletExchange"
          _text={{
            fontSize: "12px"
          }}
          >
          Exchange
        </Button>
      </Box>
    </>
  )
}
const mode = "fiat"