import type { Metadata } from 'next';
import '@rainbow-me/rainbowkit/styles.css';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { HeaderPage } from '@/components/Header';
import { Providers } from '@/components/Providers';
import { LayoutProvider } from '@/context/layout-context';

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
