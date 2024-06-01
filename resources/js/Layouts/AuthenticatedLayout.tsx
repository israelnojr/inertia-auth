import { useState, PropsWithChildren, ReactNode } from 'react';
import { Head, Link } from '@inertiajs/react';
import { User } from '@/types';
import {
  Home,
  LineChart,
  Package,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Button } from "@/Components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip"
import SearchComponent from '@/Components/SearchComponent';
import UserComponent from '@/Components/UserComponent';
import BreadcrumbComponent from '@/Components/BreadcrumbComponent';
import UserName from '@/Components/UserName';
import { sidebarItems } from '@/constatnts';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <UserName auth={{
                user: user
              }} />
              <TooltipProvider>
              {sidebarItems.map((item, index) => (
                <Tooltip>
                    <TooltipTrigger asChild>
                    <Link
                         href={route(item.url)}
                        className={`flex h-9 w-9 items-center justify-center 
                            rounded-lg text-muted-foreground transition-colors 
                            hover:text-foreground md:h-8 md:w-8 `}
                    >
                        <item.icon className="h-5 w-5 transition-all group-hover:scale-110" />
                        <span className="sr-only">{item.name}</span>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.name}</TooltipContent>
                </Tooltip>
               ))}
              </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href={route('profile.edit')}
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
              
            </nav>
          </aside>
         
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <UserName auth={{
                  user: user
                }} />
                 {sidebarItems.map((item, index) => (
                  <Link
                    href={route(item.url)}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
            </Sheet>
            <BreadcrumbComponent title="Dahsboard" url='dashboard' />
            <SearchComponent />
            <UserComponent />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-1">
          {children}
        </main>
      </div>
    </div>
)}
