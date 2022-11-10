import classNames from "classnames";

const styles = {
    title: 'text-black text-[26px] font-Quicksand',
    subTitle: 'text-black font-Quicksand text-[24px]',
    cardText: 'text-white text-[16px]',
}

type TypographyProps = {
    variant: keyof typeof styles;
    className?: string;
    children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = (props) => {
    const {variant, className, children} = props;
    const TypographyClassName = classNames(styles[variant],
        {[className || '']: !!className,}
    )
    return(
        <div className={TypographyClassName}>
            {children}
        </div>
    )
}
export default Typography;

