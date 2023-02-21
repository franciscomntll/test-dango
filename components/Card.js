import { useState, memo } from "react"
import loremIpsum from "../loremIpsum"

export const Card = ({ title, fontSize }) => {
    const [amount, setAmount] = useState(1)
    const [price] = useState(12)
    const [currency] = useState("$")

    const handleChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    return (
        <>
            <div className="w-full border p-5 mx-auto text-center border-gray-200 shadow-md rounded-xl gap-4 flex flex-col">
                <img className="w-full h-40 rounded-xl bg-gray-300 object-cover object-center" src="/photo.webp" />
                <h2 className={`hola font-bold text-gray-900`} >
                    {title}
                </h2>
                <div className="flex items-center justify-center gap-2">
                    <p className="font-semibold text-lg text-gray-900">{price?.toFixed(2)}{currency}</p>
                    <input value={amount} min="1" max="99" type="number" onChange={handleChangeAmount} className="border border-gray-500 appearance-none	 rounded text-center w-12 text-lg" />
                </div>
                <p className="text-justify text-xs">
                    {loremIpsum.slice(0, 150)}
                </p>
                <button className="bg-orange-600 py-2 px-4 mx-auto text-sm w-max text-white rounded-xl hover:bg-orange-700 transition">
                    Add to cart
                </button>
                <button className="hover:text-gray-900 px-4 text-xs w-max text-gray-600 rounded-xl mx-auto">
                    Learn more
                </button>
            </div>
            <style jsx>
                {`
            h2 {
                font-size: ${fontSize}px
            }
            `}
            </style>
        </>
    )
}
