import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Welcome from './components/hero/welcome';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className='flex-1 items-center justify-center bg-black '>
        <StatusBar style="light" />
        <Welcome />
      </View>
    </SafeAreaProvider>
  );
};
