

import type {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from './button';



export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonStory: ComponentStory<typeof Button> = () => {
	return(
        <div className='bg-silverSand min-h-screen p-4 space-x-10'>
            <Button variant={'ContainedBtn'}>Add item</Button>
            <Button variant={'ContainedBtn'} className='py-4 px-6 text-sm bg-laughingOrange text-white font-medium'>Add to list</Button>
            <Button variant={'TextBtn'}>cancel</Button>
            <Button variant={'Outlined'} className='text-Malibu'>completed</Button>
            <Button variant={'ContainedBtn'} icon={'arrow-long-left'}></Button>
            <Button variant={'ContainedBtn'} icon={'plus'} className='flex justify-center gap-x-8' iconclassName='text-silverSand'>Banana</Button>
        </div>
)
	
};