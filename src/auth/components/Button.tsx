import { View, Pressable, Text } from 'react-native'

export default function Button() {
  return (
    <View className=''>
      <Pressable onPress={() => alert('hola')} className='p-4 bg-red-500'>
        <Text>Button</Text>
      </Pressable>
    </View>
  )
}