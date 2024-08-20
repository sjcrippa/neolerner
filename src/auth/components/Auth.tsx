import { useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import { Button, Input } from '@rneui/themed'

import { supabase } from '@/src/shared/lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View className='flex-1 px-4 justify-center'>
      <View>
        <Input
          style={{ color: 'gray' }}
          label="Email"
          labelStyle={{
            color: 'gray'
          }}
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'gray' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View>
        <Input
          style={{ color: 'gray' }}
          label="Password"
          labelStyle={{
            color: 'gray'
          }}
          leftIcon={{ type: 'font-awesome', name: 'lock', color: 'gray' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View>
        <Pressable className='w-full bg-gray-400 p-2 rounded-lg flex items-center' disabled={loading} onPress={() => signInWithEmail()}>
          <Text className='text-white font-bold'>Sign in</Text>
        </Pressable>
      </View>
      <View className='mt-2'>
        <Pressable className='w-full bg-emerald-500 p-2 rounded-lg flex items-center' disabled={loading} onPress={() => signUpWithEmail()}>
          <Text className='text-white font-bold'>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}