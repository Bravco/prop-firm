<template>
    <UPageSection id="waitlist">
        <UPageCTA
            description="Be the first to know about new updates, features and exclusive discounts!"
            variant="subtle"
        >
            <template #title>
                <div class="mb-3 text-base text-secondary font-semibold">January 1st 2026</div>
                Join the waitlist
            </template>
            <template #links>
                <UFormField name="email" size="lg">
                    <UInput type="email" placeholder="your@email.com"/>
                </UFormField>
                <UButton type="submit" label="Submit" class="cursor-pointer"/>
            </template>
        </UPageCTA>
    </UPageSection>
</template>