import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Ionicons } from "@expo/vector-icons";
import TodoApp from "../screens/todo_app/todo_app";
import TodoOffline from "../screens/todo_offline/todo_offine";

const Tab = createBottomTabNavigator();

// create a component
const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          }
          if (route.name === "Online") {
            iconName = focused ? "heart" : "heart-outline";
          }
          if (route.name === "Offline") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Online'
        component={TodoApp}
        options={{
          title: "Online",
          headerShown: true,
        }}
      />
      <Tab.Screen
        name='Offline'
        component={TodoOffline}
        options={{
          title: "Offline",
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabBottom;
