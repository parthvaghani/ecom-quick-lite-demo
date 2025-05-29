"use client"

import { appConfig } from "@/appConfig";
import { useState } from "react";
import { toast } from "sonner"
import { DBSubscriptionPlan, SubscriptionInterval, SubscriptionLookupKey, SubscriptionPlan } from "@/types/subscription";
import { PricingCard } from "@/components";
const { pricing } = appConfig;

export function PricingInnerSection({ interval }: { interval: SubscriptionInterval }) {
    const [loading, ] = useState<{ [key: string]: boolean }>({});
    const dummySubscriptionPlan: DBSubscriptionPlan = {
        created_at: new Date('2024-01-15T10:00:00Z'),
        credits: 1000,
        current_period_end: '2025-01-15T23:59:59Z',
        plan_lookup: SubscriptionLookupKey.ENTERPRISE_YEAR,
        plan_common_name: 'Premium Plan',
        price_id: 'price_123abc',
        stripe_customer_id: 'cus_123456789',
        stripe_subscription_id: 'sub_987654321',
        updated_at: new Date('2024-02-01T12:00:00Z'),
        remaining_credits: 800,
        consumed_credits: 200,
        is_expired: false
    };


    // const handlePlanSelect = async (plan: SubscriptionPlan) => {
    //     const price_id = plan.plan_id[interval];
    //     const stripe_customer_id = subscription?.stripe_customer_id;
    //     const isCurrentSubscription = subscription?.plan_lookup === plan.lookup_key[interval];
    //     setLoading(prev => ({ ...prev, [plan.name]: true }));
    //     if (!price_id) {
    //         toast.error("Invalid plan selection");
    //         return;
    //     }

    //     if (!user && plan.lookup_key[interval] !== SubscriptionLookupKey.FREE) {
    //         router.push("/signup");
    //         return;
    //     }

    //     try {
    //         setLoading(prev => ({ ...prev, [plan.name]: true }));

    //         if (plan.tier === SubscriptionTier.ENTERPRISE) {
    //             window.open(`mailto:${appConfig.company.email}`, '_blank');
    //             return;
    //         }

    //         if (plan.tier === SubscriptionTier.STARTER) {
    //             await activateFreeTrial(user?.uid || "");
    //             handleSuccess("Free trial activated successfully");
    //             return;
    //         }

    //         // Determine the endpoint based on the current subscription
    //         const endpoint = isCurrentSubscription
    //             ? '/api/create-portal-session'
    //             : '/api/create-checkout-session';

    //         const response = await fetch(endpoint, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${await user?.getIdToken()}`
    //             },
    //             body: JSON.stringify({ price_id, stripe_customer_id, redirect_path: ROUTES.DASHBOARD })
    //         });

    //         const { session_url, sessionId, error } = await response.json();

    //         if (error) {
    //             toast.error(error || 'Failed to create checkout session');
    //             return;
    //         }

    //         if (isCurrentSubscription) {
    //             window.location.href = session_url;
    //         } else {
    //             const stripe = await getStripe();
    //             if (!stripe) {
    //                 toast.error('Failed to load payment system');
    //                 return;
    //             }

    //             const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
    //             if (stripeError) {
    //                 toast.error(stripeError.message);
    //             }
    //         }
    //     } catch (error: any) {
    //         console.error('[handlePlanSelect] Error :', error);
    //         handleError(error, error.message);
    //     } finally {
    //         setLoading(prev => ({ ...prev, [plan.name]: false }));
    //     };
    // };
    const handlePlanSelect = async (plan: SubscriptionPlan) => {
        toast.success(plan.name)
    }

    return (
        <>
            {pricing.plans.map((plan) => (
                <PricingCard
                    key={plan.name}
                    plan={plan}
                    interval={interval}
                    loading={loading[plan.name]}
                    currentSubscription={dummySubscriptionPlan}
                    onClick={() => handlePlanSelect(plan)}
                />
            ))}
        </>
    );
}