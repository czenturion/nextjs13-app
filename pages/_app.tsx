import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { useLoader } from "@/assets/hooks/useLoader";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {

    const getLayout = Component.getLayout ?? ((page) => page);

    useLoader();

    return getLayout(
        <Component {...pageProps} />
    );
};
