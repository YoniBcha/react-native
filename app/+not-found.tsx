import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <View style={styles.container}>
        <Text className="text-red-500 font-bold text-xl">
          page is not found
        </Text>
        <Link href={"/(tabs)/(home)"}>Go to home screen</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
