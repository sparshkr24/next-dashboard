import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

const Login = () => {
  const { data: session } = useSession();

    if(session){
        return (
            <div>
              <h1>Hello, {session.user.email}</h1>
              <button onClick={()=> signOut()}>Sign Out</button>
            </div>
          )
    } else {
        return (
            <div>
              <h3>You are not signed in</h3>
              <button onClick={()=> signIn()}>Sign In</button>
            </div>
          )
    }
}

export default Login
