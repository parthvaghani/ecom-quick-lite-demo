"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DBSubscriptionPlan, SubscriptionInterval, SubscriptionLookupKey, SubscriptionPlan } from "@/types/subscription";
import { LoadingSpinner } from "@/components";

interface PricingCardProps {
    interval: SubscriptionInterval
    plan: SubscriptionPlan
    loading: boolean
    onClick: () => void
    currentSubscription: DBSubscriptionPlan | null
}

export function PricingCard({ interval, plan, loading, onClick, currentSubscription }: PricingCardProps) {
    const { name, description, price, features, cta, highlighted } = plan
    const featuresList = features[interval];

    const getButtonState = (): { content: string, disabled: boolean } => {
        if (currentSubscription?.plan_lookup === plan.lookup_key[interval]) {
            return currentSubscription?.plan_lookup === SubscriptionLookupKey.FREE ? { content: "Free trial activated", disabled: true } : { content: "Current plan", disabled: true };
        }
        return { content: cta, disabled: false };
    }

    return (
        <Card
            className={`relative flex flex-col ${highlighted ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-card text-card-foreground"
                }`}
        >
            {highlighted && (
                <Badge variant="secondary" className="text-white bg-white/30 absolute top-3 right-3 backdrop-blur-sm hover:bg-white/30 hover:backdrop-blur-sm">
                    <Star className="mr-1 h-4 w-4 text-yellow-400" />
                    Most Popular
                </Badge>
            )}
            <CardHeader>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-sm opacity-80">{description}</p>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="mb-6">
                    <span className="text-4xl font-bold">${price[interval]}</span>
                    <span className="ml-1 text-sm opacity-80">/{interval}</span>
                </div>
                <ul className="space-y-2">
                    {featuresList.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                            <Check className={`h-5 w-5 ${highlighted ? "text-blue-100" : "text-green-500 dark:text-green-400"}`} />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    className={`w-full flex items-center justify-center gap-2 ${highlighted
                        ? "bg-white text-blue-600 hover:bg-white/90 dark:bg-white dark:text-primary-foreground dark:hover:bg-white/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                        }`}
                    onClick={onClick}
                    disabled={loading || getButtonState().disabled}
                >
                    {loading && <LoadingSpinner size="sm" />}
                    {getButtonState().content}
                </Button>
            </CardFooter>
        </Card>
    )
}
