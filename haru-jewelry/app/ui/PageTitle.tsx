export default function PageTitle(
    {destination} : {destination : string}){

    return(
        <div className="page-title-bg flex justify-center items-center h-[120px]">
            Home / {destination}
        </div>
    )
}