import SearchComponent from '@/Components/SearchComponent'
import { Button } from '@/Components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/Components/ui/sheet'
import UserComponent from '@/Components/UserComponent'
import UserName from '@/Components/UserName'
import { sidebarItems } from '@/constatnts'
import { User } from '@/types'
import { Link } from '@inertiajs/react'
import { Menu, Package2, PanelLeft } from 'lucide-react'
import React, { PropsWithChildren, ReactNode } from 'react'

export const SettingWrapper = ({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <UserName auth={{
                user: user
            }} />
            {sidebarItems.map((item, index) => (
            <Link
                href={route(item.url)}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                {item.name}
            </Link>
            ))}
           
            </nav>
            <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
                >
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                <UserName auth={{
                    user: user
                }} />
                {sidebarItems.map((item, index) => (
                    <Link
                        href={route(item.url)}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        {item.name}
                    </Link>
                ))}
                
                </nav>
            </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <SearchComponent />
            <UserComponent />
            </div>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            {children}
        </main>
    </div>
  )
}
