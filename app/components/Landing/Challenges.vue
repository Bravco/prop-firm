<template>
    <UPageSection id="challenges" title="Trading Challenges">
        <UPricingTable :tiers="tiers" :sections="sections">
            <template #feature-profit-target-value="{ tier, feature }">
                {{ feature.tiers ? feature.tiers[tier.id] : 0 }}%
            </template>

            <template #feature-max-drawdown-value="{ tier, feature }">
                {{ feature.tiers ? feature.tiers[tier.id] : 0 }}%
            </template>

            <template #feature-daily-drawdown-value="{ tier, feature }">
                {{ feature.tiers ? feature.tiers[tier.id] : 0 }}%
            </template>

            <template #feature-profit-split-value="{ tier, feature }">
                {{ feature.tiers ? feature.tiers[tier.id] : 0 }}%
            </template>
        </UPricingTable>
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
                label: "Buy now"
            },
        },
        {
            id: "sm",
            title: "$15k",
            description: "Account Size",
            price: "$99",
            button: {
                label: "Buy now"
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
                        xs: 9,
                        sm: 9,
                        md: 9,
                        lg: 9,
                        xl: 9
                    }
                },
                {
                    id: "max-drawdown",
                    title: "Max Drawdown",
                    tiers: {
                        xs: 6,
                        sm: 6,
                        md: 6,
                        lg: 6,
                        xl: 6
                    }
                },
                {
                    id: "daily-drawdown",
                    title: "Daily Drawdown",
                    tiers: {
                        xs: 3,
                        sm: 3,
                        md: 3,
                        lg: 3,
                        xl: 3
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
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 80
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