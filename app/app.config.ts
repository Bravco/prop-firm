export default defineAppConfig({
    ui: {
        colors: {
            primary: "fuchsia",
            secondary: "yellow",
            neutral: "gray"
        },
        button: {
            compoundVariants: [
                {
                    variant: "solid",
                    class: "hover:bg-secondary active:bg-secondary focus-visible:bg-secondary"
                }
            ]
        }
    }
});