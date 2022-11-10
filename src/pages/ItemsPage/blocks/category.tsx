import { useState } from "react";
import Button from "../../../components/button/button";
import data from "../../../data";



export const Category = () => {
    const [items, setItems] = useState(data);
    return(
        <div className="space-y-6 mx-12">
            {items.map((item) => <Item category={item.category} items={item.items}/>)}
        </div>
    )
}
type ItemProps = {
    category: string;
    items: string[];
}

const Item : React.FC<ItemProps> = (props) => {
    return(
        <div className="space-y-4">
            <span className="text-[18px] font-Quicksand mb-4">{props.category}</span>
            <div className="flex gap-x-4 gap-y-6 flex-wrap pb-8">
            {props.items.map((item) => {
                return(
                    <div className="flex justify-between gap-x-8 bg-white rounded-xl shadow-md w-48">
			            <Button variant={"ContainedBtn"} children={item} className="font-Quicksand text-[16px]"/>
			            <Button variant={"ContainedBtn"} icon={'plus'} iconSize={24} iconclassName={'text-silverSand hover:bg-laughingOrange'}/>
		            </div>
                )
            })}
            </div>
        </div>
    )
}