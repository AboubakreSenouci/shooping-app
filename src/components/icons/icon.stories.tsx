
import { ComponentMeta, ComponentStory } from "@storybook/react";
import iconSet from '../../assets/icons/selection.json'
import Icon from "./icon";
import IconType from "./icons.types";

export default {
    title: 'Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const IconStory: ComponentStory<typeof Icon> = () => {
    const {icons} = iconSet;
    return(
        <div>
            {icons.map((icon) => {
                return(
                    <div key={icon.properties.id} className="flex flex-col gap-y-2">
                    <p>{icon.properties.name}</p>
                    <Icon icon={icon.properties.name as IconType} />
            </div>
                )
            })}
        </div>
    )
}