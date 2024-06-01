import { getFirstLetters } from '@/lib/utils'
import { PageProps, User } from '@/types'
import { Link } from '@inertiajs/react'

const UserName = (user: PageProps) => {
  return (
    <Link
        href={route('profile.edit')}
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 
        rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
        <span>{getFirstLetters(user.auth.user.name)}</span>
    </Link>
  )
}

export default UserName