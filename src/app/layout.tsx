import { Lexend } from "next/font/google"
import { ChildrenProps } from "@/lib/@types/props"
import "@/ui/globals.css"

const lexend = Lexend({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-lexend",
})

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body className={`${lexend.className} antialiased bg-grey-1100`}>{children}</body>
        </html>
    )
}
