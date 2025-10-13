<template>
    <UPageSection
        id="faq"
        headline="FAQ"
        title="Frequently Asked Questions"
        :ui="{ headline: 'text-secondary' }"
    >
        <UAccordion
            :items="items"
            :ui="{
                leadingIcon: 'text-muted',
                label: 'text-lg text-muted',
                body: 'text-base'
            }"
        />
    </UPageSection>
</template>

<script lang="ts" setup>
    const items = ref([
        {
            icon: "i-lucide-circle-question-mark",
            label: "What trading instruments can I trade?",
            content: "You can trade forex, indices, metals and energies as CFD contracts."
        },
        {
            icon: "i-lucide-circle-question-mark",
            label: "What trading platforms can I use?",
            content: "Currently, trading is available exclusively through the TradeLocker platform."
        },
        {
            icon: "i-lucide-circle-question-mark",
            label: "How are payouts handled?",
            content: "All payouts are processed via crypto transfers."
        },
        {
            icon: "i-lucide-circle-question-mark",
            label: "Can I refund a trading challenge purchase?",
            content: "Sadly, we are not offering refunds after you purchase a trading challenge."
        }
    ]);
</script>