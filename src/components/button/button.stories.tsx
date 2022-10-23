

import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from './button';



export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonStory: ComponentStory<typeof Button> = () => {
	return(
        <div className='bg-silverSand min-h-screen p-4 space-x-10'>
            <Button variant={'ContainedBtn'} classname='py-2 px-6 text-sm bg-white'>Add item</Button>
            <Button variant={'ContainedBtn'} classname='py-4 px-6 text-sm bg-laughingOrange text-white font-medium'>Add to list</Button>
            <Button variant={'TextBtn'} classname='text-sm'>cancel</Button>
            <Button variant={'Outlined'} classname='text-sm text-Malibu'>completed</Button>
        </div>
)
	
};