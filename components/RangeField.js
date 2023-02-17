
export const RangeField = ({ label, value, onChange, helperText, min, max }) => {
    return (
        <div className='flex flex-col items-start gap-1 py-2'>
            <label className='text-gray-800 text-sm'>{label} <span className="text-xs font-semibold">({value} pixeles)</span></label>
            <span className="h-8 w-full">
                <input value={value} onChange={onChange} type="range" min={min} max={max} step="2" className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  range accent-orange-600' />

            </span>
            {helperText && <small className='text-[11px] font-light text-gray-400'>{helperText}</small>}
        </div>
    )
}
