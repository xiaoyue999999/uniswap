// 'use client';

// import { Button } from "@/components/ui/button";
import { MainPage } from "./main";

// import { useDisplay, useValues } from '@/context/layout-context';

export default function SwapPage() {
    console.log('你好');

    // const values = useValues();
    // const dispatch = useDisplay();

    return (
        <div className="h-full flex justify-center">
            {/* <h1>SwapPage</h1> */}
            <MainPage />
            {/* <Button className="ml-2" onClick={() => console.log('点击了Swap按钮')}>Swap</Button> */}
        </div>
    );
}
