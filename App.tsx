import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Welcome from './components/hero/welcome';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-black '>
      <Text className='text-white'>Funciona?</Text>
      <View className='border border-red-500'>
        <Welcome />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}