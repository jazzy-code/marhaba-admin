"use client"

import { SignedIn, UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <header className="h-16 flex-shrink-0 border-b border-stone-200 dark:border-stone-800 bg-background-light dark:bg-stone-900 flex items-center justify-between px-8">
      <button className="lg:hidden p-2 text-stone-500">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="hidden md:flex items-center max-w-md w-full gap-3"></div>
      <div className="flex items-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <div className="h-8 w-px bg-stone-200 dark:bg-stone-700 mx-2"></div>
        <button className="text-sm font-medium text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200">
          Help Center
        </button> */}
      </div>
    </header>
  )
}

export default Header
