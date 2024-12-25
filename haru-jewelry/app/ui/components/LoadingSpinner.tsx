import clsx from "clsx"

export default function LoadingSpinner(){

    const loadingSpinner = clsx('flex justify-center items-center min-h-screen')
    return(
        <div className={loadingSpinner}>
            <img 
            src="/assets/images/loading-spinner.svg" 
            className="w-[100px]"
            />
        </div>
    )
}