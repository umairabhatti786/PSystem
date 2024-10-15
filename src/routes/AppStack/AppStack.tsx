import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";
import NotificationsScreen from "../../screens/main/Notifications";
import PrivacyPolicyScreen from "../../screens/main/PrivacyPolicy";
import TermsAndCondirtionsScreen from "../../screens/main/TermsAndCondirtions";
import AboutScreen from "../../screens/main/About";
import LoginScreen from "../../screens/auth/Login";
import SignupScreen from "../../screens/auth/Signup";
import ForgotPasswordScreen from "../../screens/auth/ForgotPassword";
import PaymentInfoScreen from "../../screens/auth/PaymentInfo";
import PersonalInfoScreen from "../../screens/auth/PersonalInfo";
import BookRequestScreen from "../../screens/main/BookRequest";
import SendGiftScreen from "../../screens/main/SendGift";
import FilterScreen from "../../screens/main/Filter";
import BusinessScreen from "../../screens/main/Business";
import AllSubCategoriesScreen from "../../screens/main/AllSubCategories";
import DiscountsScreen from "../../screens/main/Discounts";
import BookDetail from "../../screens/main/BookDetail";
import ChangePasswordScreen from "../../screens/main/ChangePassword";
import EditProfileScreen from "../../screens/main/EditProfile";
import ProfileScreen from "../../screens/main/Profile";
import CheckoutScreen from "../../screens/main/Checkout";
import AddPaymentScreen from "../../screens/main/AddPayment";
import AddAddressScreen from "../../screens/main/AddAddress";
import BookReviewScreen from "../../screens/main/BookReview";
import SearchResultScreen from "../../screens/main/SearchResult";
import TrackingScreen from "../../screens/main/Tracking";
import OrderDetailScreen from "../../screens/main/OrderDetail";
import RecommendedScreen from "../../screens/main/Recommended";
import HelpAndSupportScreen from "../../screens/main/HelpAndSupport";
import ChooseAddressScreen from "../../screens/main/ChooseAddress";
import ChoosePaymentScreen from "../../screens/main/ChoosePayment";

const AppStack = () => {
  const Stack = createStackNavigator();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     SplashScreen.hide(); // Hide splash screen after two seconds
  //   }, 2000);

  //   return () => clearTimeout(timer); // Clear the timer if the component unmounts
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
           
      <Stack.Screen name={"BottomTab"} component={BottomTab} />
      <Stack.Screen name={"Notifications"} component={NotificationsScreen} />
      <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicyScreen} />
      <Stack.Screen name={"TermsAndCondirtions"} component={TermsAndCondirtionsScreen} />
      <Stack.Screen name={"About"} component={AboutScreen} />
      <Stack.Screen name={"Login"} component={LoginScreen} />
      <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
      <Stack.Screen name={"ForgotPasswordScreen"} component={ForgotPasswordScreen} />
      <Stack.Screen name={"PaymentInfoScreen"} component={PaymentInfoScreen} />
      <Stack.Screen name={"PersonalInfoScreen"} component={PersonalInfoScreen} />
      <Stack.Screen name={"BookRequestScreen"} component={BookRequestScreen} />
      <Stack.Screen name={"SendGiftScreen"} component={SendGiftScreen} />
      <Stack.Screen name={"FilterScreen"} component={FilterScreen} />
      <Stack.Screen name={"BusinessScreen"} component={BusinessScreen} />
      <Stack.Screen name={"AllSubCategoriesScreen"} component={AllSubCategoriesScreen} />
      <Stack.Screen name={"DiscountsScreen"} component={DiscountsScreen} />
      <Stack.Screen name={"BookDetailScreen"} component={BookDetail} />
      <Stack.Screen name={"ChangePasswordScreen"} component={ChangePasswordScreen} />
      <Stack.Screen name={"EditProfileScreen"} component={EditProfileScreen} />
      <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Stack.Screen name={"CheckoutScreen"} component={CheckoutScreen} />
      <Stack.Screen name={"AddPaymentScreen"} component={AddPaymentScreen} />
      <Stack.Screen name={"AddAddressScreen"} component={AddAddressScreen} />
      <Stack.Screen name={"BookReviewScreen"} component={BookReviewScreen} />
      <Stack.Screen name={"SearchResultScreen"} component={SearchResultScreen} />
      <Stack.Screen name={"TrackingScreen"} component={TrackingScreen} />
      <Stack.Screen name={"OrderDetailScreen"} component={OrderDetailScreen} />
      <Stack.Screen name={"RecommendedScreen"} component={RecommendedScreen} />
      <Stack.Screen name={"HelpAndSupportScreen"} component={HelpAndSupportScreen} />
      <Stack.Screen name={"ChooseAddressScreen"} component={ChooseAddressScreen} />
      <Stack.Screen name={"ChoosePaymentScreen"} component={ChoosePaymentScreen} />

      {/* <Stack.Screen name={"BookDetailScreen"} component={BookDetail} /> */}

    </Stack.Navigator>
  );
};
export default AppStack;
