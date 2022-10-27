import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from "./progressbar";

export default {
    title: 'ProgressBar',
    component: ProgressBar
}as ComponentMeta<typeof ProgressBar>;

export const ProgressBarStory: ComponentStory<typeof ProgressBar> = () => {
    return(
        <div>
            <ProgressBar title={"Test1"} variant={"topCategories"} progress={55}/>
            <ProgressBar title={"Test2"} variant={"topItems"} progress={60}/>
            <ProgressBar title={"Test3"} variant={"topCategories"} progress={35} className="bg-valentineRed"/>
        </div>
    )
}