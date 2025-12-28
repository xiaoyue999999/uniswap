'use client';

import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@/config'; // 假设你的 config 路径是对的

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

// 这里的 QueryClient 最好使用 useState 或者 lazy initialization
// 以避免在重渲染时重置，或者在 SSR 时数据泄露
export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
