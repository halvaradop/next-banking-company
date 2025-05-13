import { ProductProps, TransactionProps } from "@/lib/@types/props"
import usa from "@/assets/usa.svg"
import plus from "@/assets/plus.svg"
import euro from "@/assets/euro.svg"
import check from "@/assets/check.svg"
import dollar from "@/assets/dollar.svg"
import indian from "@/assets/indian.svg"
import bitcoin from "@/assets/bitcoin.svg"
import ethereum from "@/assets/ethereum.svg"
import bag from "@/assets/bag.svg"
import saving from "@/assets/saving-cash.svg"
import loans from "@/assets/cash-flow.svg"

export const images = {
    usa,
    plus,
    euro,
    check,
    dollar,
    indian,
    bitcoin,
    ethereum,
}

export const transactions: TransactionProps[] = [
    {
        user: "Joel Kenley",
        amount: "-$68.00",
    },
    {
        user: "Mark Smith",
        amount: "-$68.00",
    },
    {
        user: "Lenen Ray",
        amount: "-$68.00",
    },
]

export const productLists: ProductProps[] = [
    {
        title: "Checking Accounts",
        description:
            "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
        image: {
            src: bag,
            alt: "Bag of Money",
        },
    },
    {
        title: "Savings Accounts",
        description:
            "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
        image: {
            src: saving,
            alt: "Saving Cash",
        },
    },
    {
        title: "Loans and Mortgages",
        description:
            "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
        image: {
            src: loans,
            alt: "Cash Flow",
        },
    },
]
