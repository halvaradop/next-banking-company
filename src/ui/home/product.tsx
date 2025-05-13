import Image from "next/image"
import { ProductProps } from "@/lib/@types/props"

export const Product = ({ title, description, image: { src, alt } }: ProductProps) => {
    return (
        <article>
            <Image src={src} alt={alt} priority />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}
