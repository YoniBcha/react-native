import { Link } from "expo-router";
import { View, Text } from "react-native";
import "../../../global.css";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-50-400">
      <Text className="text-xl text-green-500 font-bold">Home</Text>
      {/* <Link href="/details" className="text-white mt-4 text-center">
        View details
      </Link> */}

      <Link href="/details/1">View first user details</Link>
      <Link href="/details/2">View second user details</Link>

      <Link
        href={{
          pathname: "/details/[id]",
          params: { id: "bacon" },
        }}
      >
        View user details
      </Link>
    </View>
  );
}
