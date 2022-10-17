
import classNames from 'classnames';

const styles = {
	ContainedBtn: 'py-1 px-2 rounded-lg',
    TextBtn: 'py-1 px-2',
	Outlined: 'py-1 px-2 border rounded-lg'
} as const;

type ButtonProps = {
	variant: keyof typeof styles;
	icon?: string;
	classname?: string;
	children: React.ReactNode;
};


const Button: React.FC<ButtonProps> = (props) => {
	const {variant, icon, classname, children} = props;
	const c = classNames(styles[variant],
		{[classname || '']: Boolean(classname)},
	);
	return (
		<button className={c}>
            {icon}
			{children}
		</button>
	);
};

export default Button;