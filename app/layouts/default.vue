<template>
    <div>
        <UHeader :ui="{ body: 'h-full' }">
            <template #title>
                <h1>prop firm</h1>
            </template>
            
            <UNavigationMenu :items="items" variant="link"/>

            <template #right>
                <UButton label="Sign in" to="/"/>
            </template>

            <template #body>
                <div class="h-full flex flex-col justify-between">
                    <UNavigationMenu :items="items" orientation="vertical" variant="link" class="-mx-2.5"/>
                    <div class="flex gap-x-1.5 -ml-1.5">
                        <UButton icon="i-lucide-instagram" variant="ghost" color="neutral" target="_blank" to="https://instagram.com"/>
                        <UButton icon="i-lucide-twitter" variant="ghost" color="neutral" target="_blank" to="https://x.com"/>
                        <UColorModeButton class="cursor-pointer"/>
                    </div>
                </div>
            </template>
        </UHeader>

        <UMain>
            <slot/>
        </UMain>

        <USeparator/>

        <UFooter>
            <template #top>
                <UContainer>
                    <UFooterColumns :columns="columns">
                        <template #right>
                            <UFormField name="email" label="Subscribe to our newsletter" description="Stay updated on new releases, features and discounts." size="lg">
                                <UInput type="email" placeholder="your@email.com" class="w-full">
                                    <template #trailing>
                                        <UButton type="submit" size="xs" color="neutral" label="Subscribe" class="cursor-pointer"/>
                                    </template>
                                </UInput>
                            </UFormField>
                        </template>
                    </UFooterColumns>
                </UContainer>
            </template>

            <template #left>
                <p class="text-muted text-sm">Copyright © 2025</p>
            </template>

            <template #right>
                <UButton icon="i-lucide-instagram" variant="ghost" color="neutral" target="_blank" to="https://instagram.com"/>
                <UButton icon="i-lucide-twitter" variant="ghost" color="neutral" target="_blank" to="https://x.com"/>
                <UColorModeButton class="cursor-pointer"/>
            </template>
        </UFooter>
    </div>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";
    import type { FooterColumn } from "@nuxt/ui";

    const items = ref<NavigationMenuItem[]>([
        {
            label: "How it works",
            to: "#how-it-works"
        },
        {
            label: "Challenges",
            to: "#challenges"
        },
        {
            label: "Features",
            to: "#features",
        },
        {
            label: "FAQ",
            to: "#faq"
        }
    ]);

    const columns: FooterColumn[] = [
        {
            label: "About",
            children: [
                {
                    label: "How it works",
                    to: "#how-it-works"
                },
                {
                    label: "Features",
                    to: "#features"
                },
                {
                    label: "FAQ",
                    to: "#faq"
                }
            ]
        },
        {
            label: "Trading",
            children: [
                {
                    label: "Purchase Challenge",
                    to: "#challenges"
                },
                {
                    label: "Log In",
                    to: ""
                }
            ]
        },
        {
            label: "Legal",
            children: [
                {
                    label: "Terms of Service",
                    to: ""
                },
                {
                    label: "Privacy Policy",
                    to: ""
                }
            ]
        },
        {
            label: "Socials",
            children: [
                {
                    label: "Instagram",
                    to: "https://instagram.com",
                    target: "_blank"
                },
                {
                    label: "Twitter",
                    to: "https://x.com",
                    target: "_blank"
                }
            ]
        }
    ];
</script>