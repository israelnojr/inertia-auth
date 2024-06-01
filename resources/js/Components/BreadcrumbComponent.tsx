import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb'
import { Head, Link } from '@inertiajs/react'
import { BreadcrumProps } from '@/types'

const BreadcrumbComponent = ({title, url}: BreadcrumProps) => {
  return (
    <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                <Link href={route(url)}>{title}</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbComponent