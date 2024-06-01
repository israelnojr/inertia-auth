import { IconType } from 'react-icons';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface BreadcrumProps{
    title: string;
    url: string
}

export interface SidebarItem {
    name: string;
    icon: IconType
    url: string;
}