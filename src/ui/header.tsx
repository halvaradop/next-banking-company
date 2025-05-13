import Image from "next/image"
import logoIcon from "@/assets/logo.svg"

export const Header = () => {
    return (
        <header className="h-28 flex items-center">
            <nav className="w-11/12 h-16 px-4 mx-auto flex items-center justify-between rounded-full border border-grey-800 bg-grey-900">
                <figure className="flex items-center gap-x-5 text-white">
                    <Image src={logoIcon} alt="YourBank Icon" priority />
                    <figcaption>YourBank</figcaption>
                </figure>
                <div className="py-2.5 px-4 flex items-center justify-center flex-col space-y-2 rounded-full bg-green-700 hover:cursor-pointer">
                    <span className="w-8 h-0.5 block rounded bg-black" />
                    <span className="w-8 h-0.5 block rounded bg-black" />
                    <span className="w-6 h-0.5 ml-auto block rounded bg-black" />
                </div>
            </nav>
        </header>
    )
}
