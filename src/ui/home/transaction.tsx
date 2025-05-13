import Image from "next/image"
import { merge } from "@/lib/utils"
import { TransactionProps } from "@/lib/@types/props"
import transactionIcon from "@/assets/transaction.svg"

export const Transaction = ({ className, user, amount }: TransactionProps) => {
    return (
        <article
            className={merge(
                "py-3 px-4 flex items-center justify-between text-white rounded-md relative z-10 border border-grey-800 bg-grey-900",
                className,
            )}
        >
            <figure className="flex items-center gap-x-2">
                <Image className="size-6 p-1 rounded-full bg-green-700" src={transactionIcon} alt="Transaction Icon" />
                <figcaption className="flex items-start flex-col">
                    <span className="text-2xs font-light">Transaction</span>
                    <span className="text-xs">{user}</span>
                </figcaption>
            </figure>
            <span className="text-sm font-medium">{amount}</span>
        </article>
    )
}
