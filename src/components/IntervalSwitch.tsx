import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SubscriptionInterval } from "@/types/subscription";

export function IntervalSwitch({ setInterval }: { setInterval: (value: SubscriptionInterval) => void }) {
    return (
        <Tabs defaultValue="month" onValueChange={(value) => setInterval(value as SubscriptionInterval)} className="flex justify-center">
            <TabsList className="grid w-[150px] grid-cols-2 bg-slate-100 dark:bg-slate-800">
                <TabsTrigger value="month" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-50">Monthly</TabsTrigger>
                <TabsTrigger value="year" className="data-[state=active]:bg-white data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-50">Yearly</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
