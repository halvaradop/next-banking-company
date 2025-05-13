import { Lexend } from "next/font/google"
import { ChildrenProps } from "@/lib/@types/props"
import { Header } from "@/ui/header"
import { Footer } from "@/ui/footer"
import "@/ui/globals.css"

const lexend = Lexend({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-lexend",
})

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body className={`${lexend.className} antialiased bg-grey-1000`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
