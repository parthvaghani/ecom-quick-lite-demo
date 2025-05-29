export enum SubscriptionTier {
    STARTER = 'starter',
    PRO = 'pro',
    ENTERPRISE = 'enterprise'
}
export enum CreditAction {
    ADD = "ADD",
    SUBTRACT = "SUBTRACT"
}
export enum SubscriptionLookupKey {
    FREE = 'FREE',
    PRO_MONTH = 'PRO_MONTH',
    PRO_YEAR = 'PRO_YEAR',
    ENTERPRISE_MONTH = 'ENTERPRISE_MONTH',
    ENTERPRISE_YEAR = 'ENTERPRISE_YEAR'
}

export interface SubscriptionPlan {
    tier: SubscriptionTier;
    name: string;
    plan_id: {
        month: string;
        year: string;
    };
    description: string;
    features: {
        month: string[];
        year: string[];
    };
    lookup_key: {
        month: SubscriptionLookupKey;
        year: SubscriptionLookupKey;
    };
    price: {
        month: number;
        year: number;
    };
    monthlyRequestLimit: number;
    cta: string;
    highlighted: boolean;
}

export type SubscriptionInterval = "month" | "year";

export interface SubscriptionConfig {
    visible: boolean;
    currency: string;
    intervals: Array<SubscriptionInterval>;
    plans: SubscriptionPlan[];
}
export interface CustomerResponse {
    customerId: string;
    isNew: boolean;
}
export interface DBSubscriptionPlan {
    created_at: Date;
    credits: number;
    current_period_end: string;
    plan_lookup: SubscriptionLookupKey;
    plan_common_name: string;
    price_id: string;
    stripe_customer_id: string;
    stripe_subscription_id: string;
    updated_at: Date;
    remaining_credits: number;
    consumed_credits: number;

    is_expired: boolean;
}
