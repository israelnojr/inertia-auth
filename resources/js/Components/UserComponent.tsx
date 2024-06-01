import { User2 } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Link } from '@inertiajs/react'

const UserComponent = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button
        variant="outline"
        size="icon"
        className="overflow-hidden rounded-full"
        >
        {/* <img
            src="/placeholder-user.jpg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
        /> */}
        <User2  />
        </Button>
    </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link href={route('profile.edit')} as="button">Setting</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
                <Link href={route('logout')} method="post" as="button">Logout</Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserComponent