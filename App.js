import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Offers from "./OfferForYou/index";
import OfferDetail from "./OfferForYou/offerDetail/offerDetail";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Offers}
          options={{ title: "Restseptid" }}
        />
        <Stack.Screen
          name="OfferDetail"
          component={OfferDetail}
          options={{ title: "Retsept" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <MyStack>
      <Offers />;
    </MyStack>
  );
}
