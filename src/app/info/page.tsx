'use client'

import { useConnections } from "wagmi";

export default function InfoPage() {
    const info = useConnections()
    console.log(info);

    return (
        <div>
            {/* <ConnectButton /> */}
        </div>
    );
}