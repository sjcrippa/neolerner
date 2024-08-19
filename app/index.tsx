import 'react-native-url-polyfill/auto'
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/src/shared/lib/supabase";
import Auth from "@/src/auth/components/Auth";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View className="flex-1 justify-center items-center bg-black ">
      <View>
        <Auth />
        {session && session.user && <Text>{session.user.id}</Text>}
      </View>
    </View>
  )
}