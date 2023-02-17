import { useState } from "react"
import { Card, InputField, RangeField, TotalAmount } from "../components"
import data from "../data"

function HomePage() {
    const [fontSize, setFontSize] = useState(18)
    const [title, setTitle] = useState("")

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeFontSize = (e) => {
        setFontSize(e.target.value)
    }
    return (
        <div className="max-w-screen-lg py-20 mx-auto inset-x-0 flex flex-col gap-6 px-5 lg:px-0">
            <h1 className="text-4xl font-semibold text-orange-600 text-center">Test for Dango Digital</h1>
            <div className="p-5 border rounded-xl border-gray-200">
                <h3 className="text-xl text-gray-300 font-light">Controls:</h3>
                <div className="flex gap-4 flex-wrap justify-center gap-12">
                    <InputField
                        label="Title"
                        value={title}
                        onChange={handleChangeTitle}
                        helperText={"Here you can edit the card titles"} />
                    <RangeField
                        label="Font size"
                        value={fontSize}
                        min="10"
                        max="34"
                        onChange={handleChangeFontSize}
                        helperText={"Here you can edit font size of titles"} />
                    <TotalAmount
                        value={data.length} />
                </div>
            </div>
            <div className="grid gap-4 grid-cols-auto-fit ">
                {data.map((item, idx) => (
                    <Card key={idx} title={title || item} fontSize={fontSize} />
                ))}
            </div>
        </div>

    )

}

export default HomePage