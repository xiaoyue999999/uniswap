import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export const SelectToken = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            {/* 按钮选择 */}
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>选择代币</DialogTitle>
                </DialogHeader>

                <div className='h-150'>
                    <Input placeholder="请输入代币名称或地址" />
                </div>

            </DialogContent>
        </Dialog>
    );
};

