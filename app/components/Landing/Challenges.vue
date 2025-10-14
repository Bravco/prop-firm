<template>
    <UPageSection
        id="challenges"
        headline="$$$"
        title="Trading Challenges"
        description="Every trader is different — choose the challenge that suits you and your trading style."
        :ui="{ headline: 'text-secondary' }"
    >
        <UCard variant="subtle">
            <UPricingTable :tiers="tiers" :sections="sections">
                <template #feature-value="{ tier, feature }">
                    <span class="text-highlighted text-base font-medium">
                        {{ feature.tiers ? feature.tiers[tier.id] : 0 }}
                    </span>
                </template>
            </UPricingTable>
            <template #footer>
                <div class="flex flex-wrap gap-4 justify-between">
                    <UPageFeature
                        title="Minimum Profitable Days"
                        description="3"
                        icon="i-lucide-calendar-days"
                        :ui="{
                            title: 'text-muted text-sm font-normal',
                            description: 'text-highlighted text-base font-medium'
                        }"
                    />
                    <UPageFeature
                        title="Consistency Rule"
                        description="50%"
                        icon="i-lucide-star"
                        :ui="{
                            title: 'text-muted text-sm font-normal',
                            description: 'text-highlighted text-base font-medium'
                        }"
                    />
                    <UPageFeature
                        title="Hold Positions Over Weekend"
                        description="Yes"
                        icon="i-lucide-cloud-sun"
                        :ui="{
                            title: 'text-muted text-sm font-normal',
                            description: 'text-highlighted text-base font-medium'
                        }"
                    />
                    <UPageFeature
                        title="Trade During News"
                        description="No"
                        icon="i-lucide-newspaper"
                        :ui="{
                            title: 'text-muted text-sm font-normal',
                            description: 'text-highlighted text-base font-medium'
                        }"
                    />
                </div>
            </template>
        </UCard>
    </UPageSection>
</template>


<script setup lang="ts">
    import type { PricingTableTier, PricingTableSection } from "@nuxt/ui";

    const tiers = ref<PricingTableTier[]>([
        {
            id: "xs",
            title: "$6k",
            description: "Account Size",
            price: "$49",
            button: {
                label: "Buy Now"
            }
        },
        {
            id: "sm",
            title: "$15k",
            description: "Account Size",
            price: "$99",
            badge: {
                label: "Most popular",
                color: "secondary"
            },
            button: {
                label: "Buy Now"
            }
        },
        {
            id: "md",
            title: "$25k",
            description: "Account Size",
            price: "$179",
            button: {
                label: "Buy Now"
            }
        },
        {
            id: "lg",
            title: "$50k",
            description: "Account Size",
            price: "$249",
            button: {
                label: "Buy Now"
            }
        },
        {
            id: "xl",
            title: "$100k",
            description: "Account Size",
            price: "$469",
            button: {
                label: "Buy Now"
            }
        }
    ]);

    const sections = ref<PricingTableSection[]>([
        {
            title: "Trading Rules",
            features: [
                {
                    id: "profit-target",
                    title: "Profit Target",
                    tiers: {
                        xs: "9%",
                        sm: "9%",
                        md: "9%",
                        lg: "9%",
                        xl: "9%"
                    }
                },
                {
                    id: "max-drawdown",
                    title: "Max Drawdown",
                    tiers: {
                        xs: "6%",
                        sm: "6%",
                        md: "6%",
                        lg: "6%",
                        xl: "6%"
                    }
                },
                {
                    id: "daily-drawdown",
                    title: "Daily Drawdown",
                    tiers: {
                        xs: "3%",
                        sm: "3%",
                        md: "3%",
                        lg: "3%",
                        xl: "3%"
                    }
                }
            ]
        },
        {
            title: "Payouts",
            features: [
                {
                    id: "profit-split",
                    title: "Profit Split",
                    tiers: {
                        xs: "80%",
                        sm: "80%",
                        md: "80%",
                        lg: "80%",
                        xl: "80%"
                    }
                },
                {
                    id: "payout-period",
                    title: "Payout Period",
                    tiers: {
                        xs: "Bi-Weekly",
                        sm: "Bi-Weekly",
                        md: "Bi-Weekly",
                        lg: "Bi-Weekly",
                        xl: "Bi-Weekly"
                    }
                }
            ]
        }
    ]);
</script>