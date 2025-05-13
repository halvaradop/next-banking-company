import { ListProps } from "@/lib/@types/props"

export const List = <T extends object>({ className, classNameItem, items, render }: ListProps<T>) => {
    return (
        <ul className={className}>
            {items.map((item, i) => (
                <li className={classNameItem} key={i}>
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}
