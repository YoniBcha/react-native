import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="w-full text-center py-20 bg-green-300">
        Details Page Of{" "}
        <Text className="uppercase text-green-700 font-extrabold">{id}</Text>
      </Text>
      <Link
        href={"/(tabs)/(home)"}
        className="bg-orange-500 p-2 rounded-md mt-6 text-white"
      >
        Go to home page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
