"use client"

import { useState } from "react";
import { PricingInnerSection, IntervalSwitch } from "@/components";

export function PricingSection() {
    const [interval, setInterval] = useState<"month" | "year">("month")

    return (
        <section className="relative overflow-hidden py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
                <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between max-sm:flex-col max-sm:items-center">
                    {/* Section Header */}
                    <div className="relative text-left mb-5">
                        <h2 className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            PRICING PLANS
                            <span className="ml-2 w-12 h-px bg-blue-600 dark:bg-blue-400"></span>
                        </h2>
                        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
                            Choose Your Perfect Plan
                        </h3>
                    </div>
                    <IntervalSwitch setInterval={setInterval} />
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    <PricingInnerSection interval={interval} />
                </div>
            </div>
        </section>
    );
}