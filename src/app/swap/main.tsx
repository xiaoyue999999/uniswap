import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SwapPage } from './components/swap';

export function MainPage() {
    const tabsList = [
        {
            value: 'Swap',
            label: '交换',
            children: () => (
                <SwapPage />
            ),
        },
        {
            value: 'Limit',
            label: '限额',
            children: () => (
                <Card>
                    <h1>限额</h1>
                </Card>
            ),
        },
        {
            value: 'Buy',
            label: '购买',
        },
        {
            value: 'Sell',
            label: '出售',
        },
    ];

    return (
        <div className="w-150">
            <Tabs defaultValue="Swap">
                <TabsList>
                    {tabsList.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabsList.map(
                    (tab) =>
                        !!tab?.children && (
                            <TabsContent key={tab.value} value={tab.value}>
                                {tab?.children?.()}
                            </TabsContent>
                        )
                )}
            </Tabs>
        </div>
    );
}
