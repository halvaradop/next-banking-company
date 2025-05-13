import Image from "next/image"
import { Button } from "@halvaradop/ui-button"
import { Transaction } from "@/ui/home/transaction"
import { images, productLists, transactions } from "@/lib/content/home"
import { List } from "@/ui/common/list"
import { Product } from "@/ui/home/product"

const Index = () => {
    return (
        <main className="w-11/12 mx-auto mt-10">
            <figure className="w-fit mx-auto p-2 flex items-center justify-center gap-x-1 rounded-full bg-grey-800">
                <Image src={images.check} alt="Check Icon" />
                <figcaption className="text-white text-sm font-light">No LLC Required, No Credit Check.</figcaption>
            </figure>
            <section>
                <div className="text-center">
                    <h1 className="mt-4 text-white text-3xl font-medium leading-relaxed">
                        Welcome to YourBank Empowering Your
                        <span className="text-green-700">Financial Journey</span>
                    </h1>
                    <p className="mt-6 mb-8 text-white-400 text-sm font-light">
                        At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and
                        businesses to achieve their financial goals. We are committed to delivering personalized and innovative
                        services that prioritize our customers' needs.
                    </p>
                    <Button className="mx-auto text-black font-normal border-green-700 bg-green-700" fullRounded>
                        Open Account
                    </Button>
                </div>
            </section>
            <section className="mt-16 py-7 px-4 relative rounded-lg border border-grey-800">
                <div>
                    <h3 className="mb-2 text-white font-medium">Your Transactions</h3>
                    <List
                        className="-space-y-2"
                        classNameItem="nth-2:px-3 nth-2:opacity-50 nth-3:px-6 nth-3:opacity-20"
                        items={transactions}
                        render={({ user, amount }) => <Transaction user={user} amount={amount} />}
                    />
                </div>
                <div className="mt-6">
                    <h3 className="mb-2 text-white font-medium">Money Exchange</h3>
                    <ul className="grid grid-cols-2 text-white rounded-md border border-grey-800 bg-grey-900 li:p-3">
                        <li className="border-b border-r border-grey-800">
                            <article>
                                <figure className="flex items-center gap-x-2">
                                    <Image src={images.indian} alt="Indian Money Cash" />
                                    <figcaption className="text-xs">INR</figcaption>
                                </figure>
                                <span className="text-2xs">Indian Rupees</span>
                            </article>
                        </li>
                        <li>
                            <article>
                                <figure className="flex items-center gap-x-2">
                                    <Image src={images.usa} alt="USA Money Cash" />
                                    <figcaption className="text-xs">USD</figcaption>
                                </figure>
                                <span className="text-2xs">United States Dollar</span>
                            </article>
                        </li>
                        <li>
                            <span className="text-xs">5,0000</span>
                        </li>
                        <li className="border-t border-l border-grey-800">
                            <span className="text-xs">12.00</span>
                        </li>
                    </ul>
                </div>
                <Button className="mt-4 text-green-600 font-normal border-[#22251B] bg-[#22251B]" fullWidth fullRounded>
                    Exchange
                </Button>
                <figure className="py-2 px-3 flex items-center text-white-400 font-light rounded-md absolute -top-7 -left-2 bg-[#22251B]">
                    <Image className="size-6 p-1 rounded-full bg-green-700" src={images.plus} alt="Plus Icon" />
                    <figcaption className="flex items-start flex-col gap-y-1">
                        <span className="text-xs">+ $50000.00</span>
                        <span className="text-2xs">Monthly Income</span>
                    </figcaption>
                </figure>
            </section>
            <figure className="w-fit mt-4 ml-auto p-2 flex items-center gap-x-3 rounded-full bg-[#22251B]">
                <figure className="p-1 flex items-center gap-x-1 border border-grey-800 rounded-full bg-[#1A1A1A]">
                    <Image width={28} src={images.dollar} alt="Dollar Icon" />
                    <Image width={28} src={images.euro} alt="Euro Icon" />
                    <Image width={28} src={images.bitcoin} alt="Bitcoin Icon" />
                    <Image width={28} src={images.ethereum} alt="Ethereum Icon" />
                </figure>
                <figcaption className="text-white text-xs -order-1">Supported Currency</figcaption>
            </figure>
            <div className="mt-16 text-center">
                <h2 className="text-white text-3xl font-medium">
                    Our <span className="text-green-700">Products</span>
                </h2>
                <p className="mt-4 text-grey-200 text-sm font-light">
                    Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique
                    financial needs and aspirations
                </p>
                <div className="w-fit mx-auto p-3 flex items-center gap-x-2 border border-grey-800 rounded-full bg-grey-900">
                    <Button className="text-black font-normal border-green-700 bg-green-700" fullRounded>
                        For Individuals
                    </Button>
                    <Button
                        className="font-normal border-transparent hover:text-black hover:bg-green-700"
                        variant="ghost"
                        fullRounded
                    >
                        For Businesses
                    </Button>
                </div>
            </div>
            <List
                items={productLists}
                render={({ title, description, image }) => <Product title={title} description={description} image={image} />}
            />
            <div>
                <h2>Use Cases</h2>
                <p>
                    At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of
                    financial solutions
                </p>
            </div>
        </main>
    )
}

export default Index
