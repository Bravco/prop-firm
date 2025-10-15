<template>
    <UPageSection
        id="features"
        headline="Features"
        title="Everything you need"
        description="Designed to help traders maximize profits, manage risk, and scale their funded accounts with confidence."
        :ui="{ headline: 'text-secondary' }"
    >
        <UPageGrid>
            <UPageCard
                v-for="(card, index) in cards"
                :key="index"
                v-bind="card"
                variant="subtle"
                :spotlight="true"
            >
                <NuxtImg
                    v-if="card.image"
                    :src="card.image"
                    :alt="card.title"
                    loading="lazy"
                    class="w-full max-h-50 object-contain object-center"
                />
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const cards = ref([
        {
            icon: "i-lucide-bar-chart-3",
            title: "Advanced Trading Dashboard",
            description: "Track your performance, rules, and payouts in real time.",
            image: "/images/chart.webp",
            class: "lg:col-span-2",
            orientation: "horizontal"
        },
        {
            icon: "i-lucide-arrow-left-right",
            title: "Low-Latency Trade Execution",
            description: "Execute trades instantly with minimal slippage across all assets."
        },
        {
            icon: "i-lucide-zap",
            title: "Instant Funding Approval",
            description: "Get funded in minutes — no delays, just fast access to your trading capital."
        },
        {
            icon: "i-lucide-bitcoin",
            title: "Crypto Payouts",
            description: "Withdraw your profits in crypto, anytime, anywhere, with full transparency.",
            image: "/images/crypto.webp",
            class: "lg:col-span-2",
            orientation: "horizontal"
        }
    ]);
</script>