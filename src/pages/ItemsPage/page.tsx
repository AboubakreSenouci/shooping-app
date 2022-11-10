import { Category } from './blocks/category';
import Header from './blocks/header';
import SideBar from './blocks/side_bar';
import RightSideBar from './blocks/rigth_side_bar';


const Items = () => {
   return( 
        <div className='flex gap-x-8'>
            <SideBar/>
            <div>
                <Header/>
                <Category/>
            </div>
            <RightSideBar/>
        </div>
   )
}
export default Items;