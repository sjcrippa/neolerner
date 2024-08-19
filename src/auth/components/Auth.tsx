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
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View className='flex'>
        <Pressable className='p-2 mx-10 mb-3 rounded-lg bg-blue-500' disabled={loading} onPress={() => signInWithEmail()}>
          <Text>Sign in</Text>
        </Pressable>

        <Pressable className='p-2 mx-10 rounded-lg bg-blue-500' disabled={loading} onPress={() => signUpWithEmail()}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}