import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import SplashScreen from "../../screens/auth/Splash";
import WelcomeScreen from "../../screens/auth/Welcome";
import HomeScreen from "../../screens/main/Home";
import TermAndConditions from "../../screens/main/TermAndConditions";
import HowToUse from "../../screens/main/HowToUse";
import ProjectHome from "../../screens/main/ProjectHome";
import QuotationGeneration from "../../screens/main/QuotationGeneration";
import ReportScreen from "../../screens/main/Report";
import ARScreen from "../../screens/main/AR";

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
      <Stack.Screen name={"SplashScreen"} component={SplashScreen} />
      <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"TermAndConditions"} component={TermAndConditions} />
      <Stack.Screen name={"HowToUse"} component={HowToUse} />
      <Stack.Screen name={"ProjectHome"} component={ProjectHome} />
      <Stack.Screen name={"QuotationGeneration"} component={QuotationGeneration} />
      <Stack.Screen name={"ReportScreen"} component={ReportScreen} />
      <Stack.Screen name={"ARScreen"} component={ARScreen} />

      {/* <Stack.Screen name={"BookDetailScreen"} component={BookDetail} /> */}
    </Stack.Navigator>
  );
};
export default AppStack;
