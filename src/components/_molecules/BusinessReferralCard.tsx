import React from "react";
import {
  Box,
  Text,
  Button,
  useClipboard,
  useToast,
} from "native-base";
import { fontSize } from "styled-system";

export default function BusinessReferralCard({  }) {
  const { value, onCopy } = useClipboard();
  const toast = useToast();
  const handleCouponPress = () => {
    onCopy( referralCode );
    //TODO style toast according to branding guidlines
    toast.show({
      description: "Coupon code copied",
      placement: "bottom"  
    });
  }
  return (
    <>
      <Box variant="businessReferralCard">
        <Text size="tiny">LIMITED TIME OFFER</Text>
        <Text fontSize="26px" fontWeight={600}>
          Double Your Kudos
        </Text>
        <Text
          textAlign="center"
          size="small"
          width="70%"
          >
          Refer a business to join our connectory using the code below and double your kudos points immediately.
        </Text>
        <Button variant="couponButton"
          onPress={ handleCouponPress }
          _text={{fontSize: "11px"}}
          >
          { referralCode }
        </Button>
        <Text size="tiny">LIMITED TIME OFFER</Text>
      </Box>
    </>
  )
}
const referralCode = "CASEYREF10"