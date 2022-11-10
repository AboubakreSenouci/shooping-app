import logo from '../../../assets/icons/logo.svg'
import Button from '../../../components/button/button';



const SideBar = () => {
    return(
        <div className='flex flex-col bg-white max-w-max justify-between h-screen py-4 px-2'>
            <div className='flex justify-center'> <img src={logo} alt='logo'/> </div>
            <div className='flex flex-col gap-y-4 text-left'>
                <Button className='text-start' variant={'ContainedBtn'} icon='format_list_bulleted'iconSize={20}/>
                <Button className='text-start' variant={'ContainedBtn'} icon='replay' iconSize={20}/>
                <Button className='text-start' variant={'ContainedBtn'} icon='insert_chart_outlined'iconSize={20}/>
            </div>
            <div> 
                <div className='absolute left-10 text-white bg-valentineRed rounded-full w-5 h-5 text-center text-sm'>3</div>
                <Button variant={'ContainedBtn'} icon='shopping-cart' iconclassName='text-white bg-laughingOrange rounded-full p-2' iconSize={34}/>
            </div>
        </div>
    )
}
export default SideBar;