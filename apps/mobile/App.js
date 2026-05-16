import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ScreenPlaceholder({ title }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0B1220' }}>
      <Text style={{ color: '#e5e7eb', fontSize: 20, fontWeight: '600' }}>{title}</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0B1220' }}>
      <MapView style={{ flex: 1 }} initialRegion={{ latitude: 24.8607, longitude: 67.0011, latitudeDelta: 0.08, longitudeDelta: 0.08 }}>
        <UrlTile urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maximumZ={19} flipY={false} />
      </MapView>
    </View>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" children={() => <ScreenPlaceholder title="Login" />} />
      <AuthStack.Screen name="Signup" children={() => <ScreenPlaceholder title="Signup" />} />
    </AuthStack.Navigator>
  );
}

function CustomerTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" children={() => <ScreenPlaceholder title="Customer Home" />} />
      <Tabs.Screen name="Bookings" children={() => <ScreenPlaceholder title="Customer Bookings" />} />
      <Tabs.Screen name="Profile" children={() => <ScreenPlaceholder title="Customer Profile" />} />
      <Tabs.Screen name="Map" component={MapScreen} />
    </Tabs.Navigator>
  );
}

function ProviderTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Requests" children={() => <ScreenPlaceholder title="Provider Requests" />} />
      <Tabs.Screen name="Active Job" children={() => <ScreenPlaceholder title="Active Job" />} />
      <Tabs.Screen name="Earnings/Profile" children={() => <ScreenPlaceholder title="Earnings & Profile" />} />
      <Tabs.Screen name="Map" component={MapScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <RootStack.Navigator>
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Customer" component={CustomerTabs} />
        <RootStack.Screen name="Provider" component={ProviderTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
