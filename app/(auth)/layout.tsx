import { createPrerenderSearchParamsForClientPage } from 'next/dist/server/request/search-params';
import { FC, ReactNode } from 'react';
import { SiteHeader } from "@/components/site-header"

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    <SiteHeader />
    return <div className='bg-slate-200 p-10 rounded-md'>{children}</div>;
};

export default AuthLayout;