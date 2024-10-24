import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading () {
    return (
        <div className="min-h-screen w-full dark:bg-gray-dark-500 bg-white flex justify-center items-center">
            <div className="overflow-hidden">
              <AiOutlineLoading3Quarters className="animate-spin text-5xl lg:text-4xl  text-red-light-200 dark:text-red-dark-100"/>
            </div>
        </div>
    )
}

