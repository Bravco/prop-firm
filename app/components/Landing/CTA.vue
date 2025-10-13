<template>
    <UPageSection id="waitlist">
        <UPageCTA
            description="Get latest updates on pakt and be the first one to try it out!"
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