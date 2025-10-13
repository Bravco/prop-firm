<template>
    <UPageSection
        id="features"
        headline="Features"
        title="Everything you need"
        description="Stop searching for brand deals. Focus on the product while pakt finds brand deals for you."
        :ui="{ headline: 'text-secondary' }"
    >
        <UPageGrid>
            <UPageCard
                v-for="(card, index) in cards"
                :key="index"
                v-bind="card"
                variant="subtle"
                :spotlight="true"
            />
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const cards = ref([
        {
            icon: "i-lucide-star",
            title: "Reviews & Ratings",
            description: "Build trust with transparent feedback from verified users."
        },
        {
            icon: "i-lucide-badge-check",
            title: "Verified Profiles",
            description: "Ensure authenticity with identity-checked user profiles."
        },
        {
            icon: "i-lucide-message-circle-more",
            title: "Built-in Messaging",
            description: "Communicate easily and securely without leaving the platform."
        },
        {
            icon: "i-lucide-handshake",
            title: "Deal Management Dashboard",
            description: "Track offers, negotiations, and agreements all in one place."
        },
        {
            icon: "i-lucide-bar-chart-3",
            title: "Analytics for Engagement & Reach",
            description: "Gain insights into your activity, visibility, and performance."
        },
        {
            icon: "i-lucide-bot",
            title: "Smart Matching Algorithm",
            description: "Get personalized connections that fit your goals and preferences."
        }
    ]);
</script>