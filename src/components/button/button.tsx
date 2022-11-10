
import classNames from 'classnames';
import Icon from '../icons/icon';
import IconType from '../icons/icons.types';

const styles = {
	ContainedBtn: 'py-2 px-3 text-sm rounded-lg bg-white text-black',
    TextBtn: 'py-1 px-2 text-sm',
	Outlined: 'py-1 px-2 text-sm border rounded-lg'
} as const;

type ButtonProps = {
	variant: keyof typeof styles;
	icon?: IconType;
	className?: string;
	iconclassName?: string;
	iconSize?: number;
	children?: React.ReactNode;
	onClick?: (params: any) => any;
};


const Button: React.FC<ButtonProps> = (props) => {
	const {variant, icon, className, children, iconclassName, iconSize, onClick} = props;
	const c = classNames(styles[variant],
		{[className || '']: Boolean(className)},
	);
	return (
		<button className={c} onClick={onClick}>
			{children}
			<Icon icon={icon as IconType} className={iconclassName} size={iconSize}/>
		</button>
	);
};

export default Button;