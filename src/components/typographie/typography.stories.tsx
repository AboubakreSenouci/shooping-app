import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./typography";

export default {
    title: "typography",
    component: Typography
}as ComponentMeta<typeof Typography>;

export const TypographyStory: ComponentStory<typeof Typography> = () => {
    return(
        <div className="bg-Malibu min-h-screen">
            <Typography variant={"title"}>Shooping history</Typography>
            <Typography variant={"subTitle"}>Fruit and vegitables</Typography>
            <Typography variant={"cardText"}>Didnt find what you need</Typography>
        </div>
    )
}