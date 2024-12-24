import clsx from "clsx";

export default function Button(
    {children, className = ''} : 
    { children : string; className: string}){

    const buttonClass = clsx(
        'py-2 px-4 font-semibold capitalize rounded-sm', className
    )

    return(
        <button className={buttonClass}>{children}</button>
    )
}