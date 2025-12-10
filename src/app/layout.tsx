import type { Metadata } from 'next';
import '@rainbow-me/rainbowkit/styles.css';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { HeaderPage } from '@/components/Header';
import { config } from '@/createConfig';
import { Providers } from '@/components/Providers';
import { LayoutProvider } from '@/context/layout-context';

// import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const queryClient = new QueryClient();

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Uiniswap',
    description: 'Uiniswap App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <LayoutProvider>
                    <Providers>
                        <HeaderPage />
                        {children}
                    </Providers>
                </LayoutProvider>
            </body>
        </html>
    );
}
