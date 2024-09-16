import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Siste varslinger",
          headerStyle: {
            backgroundColor: '#3D6DCC',
            paddingVertical: 20,
            alignItems: 'left',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 4,
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
          },
          tabBarLabel: "Varslinger",
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: "Hjelp",
          headerStyle: {
            backgroundColor: '#3D6DCC',
            paddingVertical: 20,
            alignItems: 'right',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            elevation: 4,
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
          },
          tabBarLabel: "Hjelp",
        }}
      />
    </Tabs>
  );
}
