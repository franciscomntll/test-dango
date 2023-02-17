export const TotalAmount = ({ value }) => {
    if (value) {
        return (
            <div className="flex items-center gap-2">
                <label className='text-gray-800 text-sm'>Total products:</label>
                <h3 className='font-bold text-gray-600 text-2xl'>{value}</h3>

            </div>
        )
    }

    return
}
