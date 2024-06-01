import { SidebarItem } from '@/types';
import {
    Home,
    LineChart,
    Package,
    Users2,
  } from "lucide-react"

export const sidebarItems: SidebarItem[] = [
    {
        name: 'Dashboard',
        icon: Home,
        url: 'dashboard',
    },
    {
        name: 'Products',
        icon: Package,
        url: 'dashboard',
    },
    {
        name: 'Customers',
        icon: Users2,
        url: 'dashboard',
    },
    {
        name: "Analytics",
        icon: LineChart,
        url: "dashboard"
    },
];
