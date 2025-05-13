import { ImageAttributes } from "@/lib/@types/types"

export interface ChildrenProps {
    children: React.ReactNode
}

export interface ClassNameProps {
    className?: string
}

export interface ListProps<T extends object> extends ClassNameProps {
    classNameItem?: string
    items: T[]
    render: (item: T) => React.ReactNode
}

export interface TransactionProps extends ClassNameProps {
    user: string
    amount: string
}

export interface ProductProps {
    title: string
    description: string
    image: ImageAttributes
}
