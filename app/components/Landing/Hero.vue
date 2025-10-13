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
            A sea of <span class="text-primary">opportunities</span>
        </template>
        <template #description>
            <p>
                Empowering brands and influencers to collaborate smarter, not harder.<br>
                Find your perfect match, launch impactful campaigns, and make every partnership count.
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
            label: "Get started - for free",
            to: "/",
            trailingIcon: "i-lucide-arrow-right",
            size: "lg"
        }
    ]);
</script>