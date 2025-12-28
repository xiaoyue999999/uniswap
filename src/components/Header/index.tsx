import { ConnectButton } from '@rainbow-me/rainbowkit';

export const HeaderPage = () => {
    return (
        <div className="h-15 border border-solid border-black flex justify-between items-center rounded-lg">
            <h1>Header</h1>

            {/* 链接钱包按钮 */}
            <ConnectButton
                showBalance={{
                    smallScreen: false,
                    largeScreen: true,
                }}
            />
        </div>
    );
};
