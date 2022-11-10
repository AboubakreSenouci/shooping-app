import IcoMoon, { IconProps as IcomoonProps } from "react-icomoon";
import iconSet from '../../assets/icons/selection.json'
import IconType from "./icons.types";


interface IconProps extends Omit<IcomoonProps, 'icon'> {
    icon: IconType;
    className?: string;
}

const Icon : React.FC<IconProps> = (props) => {
    const defaultSize = props.size ?? 18 ;
    return <IcoMoon iconSet={iconSet} size={defaultSize} {...props}/>
}
export default Icon;