import { LuPackageCheck } from "react-icons/lu";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Banner(){
    return(
        <div className="flex flex-col md:flex-row gap-5 items-center max-w-[90%] mx-auto bg-custom-gray p-5">
            <div className="flex gap-2 flex-1 ">
                <LuPackageCheck className="text-fs-800" />
                <div>
                    <p className="font-semibold">Free Shipping</p>
                    <p className="text-fs-300">Free shipping for order above $180</p>
                </div>
            </div>

            <div className="flex  gap-2 flex-1">
                <RiCustomerService2Line className="text-fs-800" />
                <div>
                    <p className="font-semibold">24x7 Support</p>
                    <p className="text-fs-300">We support online all days, all week.</p>
                </div>
            </div>

            <div className="flex gap-2 flex-1">
                <MdPayment  className="text-fs-800"/>
                <div>
                    <p className="font-semibold">Flexible Payment</p>
                    <p className="text-fs-300">Multiple secure payment options</p>
                </div>
            </div>
        </div>
    )
}