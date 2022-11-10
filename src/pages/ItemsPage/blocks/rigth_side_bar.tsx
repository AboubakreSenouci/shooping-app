import { useState } from "react";
import source from "../../../assets/icons/source.svg";
import Button from "../../../components/button/button";
import Typography from "../../../components/typographie/typography";
import data from "../../../data";

const RightSideBar = () => {
  const [items, setItems] = useState(data);
  return (
    <div className="bg-sidebarbg p-8 relative">
      <div className=" flex bg-cardbg rounded-xl p-8">
        <img src={source} className="absolute top-2 right-72" />
        <div className="pl-20">
          <Typography
            variant={"cardText"}
            children={"Didn't find what you need?"}
            className="w-max"
          />
          <Button
            variant={"ContainedBtn"}
            children={"Add item"}
            className="px-8"
          />
        </div>
      </div>
      <div className="flex justify-between my-8">
        <Typography variant={"title"} children={"Shopping list"} />
        <Button variant={"TextBtn"} icon={"edit-pencil"} iconSize={20} />
      </div>
      <div>
        {items.map((item) => {
          return <Category item={item.category} items={item.items} />;
        })}
      </div>
    </div>
  );
};
export default RightSideBar;

type CategoryProps = {
  item: string;
  items: string[];
};
const Category: React.FC<CategoryProps> = (props) => {
  return (
    <div>
      <div className="text-subtitle text-[14px] my-4">{props.item}</div>
      <div className="space-y-4">
        {props.items.map((item) => (
          <ButtonClick title={item} />
        ))}
      </div>
    </div>
  );
};
type ButtonClickProps = {
  title: string;
};

const ButtonClick: React.FC<ButtonClickProps> = (props) => {
  const [counter, setCounter] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }
  const handleMinusButton = () => {
    setCounter(counter-1);
  }
  const handlePlusButton = () => {
    setCounter(counter+1);
  }
  
  return (
    <div className="flex justify-between">
      <span className="font-Quicksand text-[18px]">{props.title}</span>
      <div
        className={`bg-white rounded-2xl min-w-max p-1 ${
          !isOpen && "bg-sidebarbg"
        }`}
      >
        {isOpen && (
          <>
            <Button
              variant={"ContainedBtn"}
              icon={"delete_outline"}
              iconSize={20}
              iconclassName={"text-white bg-laughingOrange"}
              className="bg-laughingOrange"
            />
            <Button
              variant={"TextBtn"}
              icon={"plus"}
              iconSize={20}
              iconclassName={"text-laughingOrange"}
              onClick={handlePlusButton}
            />
          </>
        )}
        <Button
          variant={"ContainedBtn"}
          children={`${counter} pc`}
          className={`bg-white text-laughingOrange text-[15px] font-Quicksand border-2 rounded-full px-5 ${
            !isOpen && "bg-sidebarbg"
          }`}
          onClick={handleOnClick}
        />
        {isOpen && (
          <Button
            variant={"TextBtn"}
            icon={"minus"}
            iconSize={20}
            iconclassName={"text-laughingOrange"}
            onClick={handleMinusButton}
          />
        )}
      </div>
    </div>
  );
};
