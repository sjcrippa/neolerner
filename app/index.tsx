import { Text, View } from "react-native";
import Button from "../src/auth/components/Button";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-black ">
      <Text className="text-2xl text-white">Welcome</Text>
      <Button />
    </View>
  )
}