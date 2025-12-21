import { SelectToken } from '@/components/SelectToken';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import './index.css';

export const SwapPage = () => {
    return (
        <div>
            <Card className="px-2 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <span>出售</span>
                        <Input
                            className="pl-0 shadow-none !text-[28px] w-full border-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 selection:bg-primary selection:text-primary-foreground"
                            type="number"
                            placeholder="请输入"
                        />
                        <span className="text-[12px]">USD 0</span>
                    </div>

                    <SelectToken>
                        <div className="flex items-center gap-2 border p-2 rounded-3xl cursor-pointer">
                            <img
                                src="https://coin-images.coingecko.com/coins/images/9956/large/Badge_Dai.png?1696509996"
                                alt={'ETH'}
                                width={24}
                                height={24}
                            />
                            ETH
                        </div>
                    </SelectToken>
                </div>
            </Card>
            <Card>{/* <SelectToken /> */}</Card>
        </div>
    );
};
