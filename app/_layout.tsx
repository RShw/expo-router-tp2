import { TaskProvider } from "@/provider/taskProvider";
import { Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TaskProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="task"
            options={{
              href: null
            }}
          />
        </Tabs>
      </TaskProvider>
    </SafeAreaView>
  )

}
