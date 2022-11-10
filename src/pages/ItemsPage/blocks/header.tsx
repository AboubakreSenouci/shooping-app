import Button from "../../../components/button/button";


const Header = () => {
    return(
        <div className="flex justify-between py-8 mx-12">
           <div className="text-black text-[26px] font-Quicksand max-w-md"><span className="text-laughingOrange">Shoppingify </span>allows you take your shopping list wherever you go</div>
           <div className="bg-white rounded-xl h-14 shadow-sm">
           <Button variant={"ContainedBtn"} icon={'search'} iconSize={20} iconclassName={'mx-3'}/>
           <input type="text" placeholder="search item" className="py-4 rounded-xl outline-none"/>
           </div>
        </div>
    )
}
export default Header;