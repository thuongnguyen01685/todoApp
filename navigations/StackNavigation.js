import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import TabBottom from "./TabBottom";
import DetailItemTodo from "../screens/todo_app/detail_itemtodo";

const Stack = createNativeStackNavigator();

// create a component
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='OnboardingScreen'
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='TabBottom'
          component={TabBottom}
          options={{
            title: "",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='DetailItemTodo'
          component={DetailItemTodo}
          options={{
            title: "Product detail",
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default StackNavigation;
