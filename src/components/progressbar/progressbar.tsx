import classNames from "classnames";

const styles = {
    topCategories: 'h-1.5 rounded bg-laughingOrange',
    topItems: 'h-1.5 rounded bg-Malibu',
}

type ProgressBarProps = {
    title: string;
    variant: keyof typeof styles;
    progress: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    const {title, progress, className,variant} = props; 

    const progressBarClassName = classNames(styles[variant],
        {[className || '']: Boolean(className)},
     );
    return(
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <p>{title}</p>
                <p>{progress}%</p>
            </div>
        <div className="bg-silverSand w-full rounded">
			<div style= {{"width": `${progress}%`}} className={progressBarClassName}></div>
		</div>
        </div>
    )
}
export default ProgressBar;
