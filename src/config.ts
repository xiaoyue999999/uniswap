import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, bsc } from 'wagmi/chains';

export const config = createConfig({
    chains: [bsc, mainnet, sepolia],
    transports: {
        [bsc.id]: http(),
        [mainnet.id]: http(),
        [sepolia.id]: http(),
    },
});
