<template>
    <UPageSection
        id="how-it-works"
        headline="3 easy steps"
        title="How it works"
        description="Get funded to trade — prove your skills, earn capital, and keep the profits."
        :ui="{ headline: 'text-secondary' }"
    >
        <UPageGrid>
            <UPageCard
                v-for="(card, index) in cards"
                :key="index"
                v-bind="card"
                :reverse="true"
            >
                <template #leading>
                    <UBadge :label="index+1" variant="soft"/>
                </template>
                <Placeholder class="h-50"/>
            </UPageCard>
        </UPageGrid>
    </UPageSection>
</template>

<script lang="ts" setup>
    const cards = ref([
        {
            title: "Buy a trading challenge",
            description: "You can choose from variety of challenges we offer."
        },
        {
            title: "Pass the evaluation",
            description: "Follow the rules and reach the profit target to pass the challenge."
        },
        {
            title: "Become a funded trader",
            description: "With a funded account you can recieve payouts from your profits."
        },
    ]);
</script>