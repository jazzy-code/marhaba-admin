"use client"

import { useEffect } from "react"

import { SignIn, useUser, useClerk } from "@clerk/nextjs"

export default function LoginPage() {
  const { isSignedIn, isLoaded } = useUser()
  const { signOut } = useClerk()

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      signOut()
    }
  }, [isLoaded, isSignedIn, signOut])

  if (!isLoaded) {
    return null
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            elements: {
              card: "shadow-2xl rounded-2xl",
              headerTitle: "text-xl font-semibold"
            }
          }}
          signUpUrl=""
        />
      </div>
    </div>
  )
}
