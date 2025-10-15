<template>
    <UPageHero :links="links">
        <template #headline>
            <UBadge
                label="New"
                variant="soft"
                color="secondary"
            />
            <UButton
                label="Announcing on January 1st 2026"
                trailing-icon="i-lucide-arrow-right"
                size="md"
                variant="link"
                color="neutral"
                class="underline underline-offset-2 cursor-pointer"
                :to="{ path: '/', hash: '#waitlist' }"
            />
        </template>
        <template #title>
            We make <span class="text-primary">funded</span> traders
        </template>
        <template #description>
            <p>
                Get evaluated, get funded, and start earning.<br>
                Transparent rules, instant payouts, and scalable funding for serious traders.
            </p>
        </template>
        <template #default>
            <Placeholder class="h-150"/>
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
    import type { ButtonProps } from "@nuxt/ui";

    const links = ref<ButtonProps[]>([
        {
            label: "Get started",
            to: "#challenges",
            icon: "i-lucide-rocket",
            size: "lg"
        },
        {
            label: "How it works",
            to: "#how-it-works",
            icon: "i-lucide-circle-question-mark",
            size: "lg",
            color: "neutral",
            variant: "outline"
        }
    ]);
</script>