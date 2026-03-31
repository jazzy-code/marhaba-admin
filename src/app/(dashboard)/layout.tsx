import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import Header from "./_components/Header"
import SideMenu from "./_components/SideMenu"

export default async function LayoutDashboard({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  const publicMetadata = user?.publicMetadata

  // If user is ADMIN, redirect
  if (!publicMetadata?.userType || (publicMetadata?.userType && publicMetadata?.userType !== "ADMIN")) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen w-full">
      <SideMenu />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-stone-50/50 dark:bg-background-dark relative">
        <Header />
        {children}
      </main>
    </div>
  )
}
