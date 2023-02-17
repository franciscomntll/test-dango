import React, { useState } from 'react'

export const InputField = ({ label, value, onChange, helperText }) => {
    return (
        <div className='flex flex-col items-start gap-1 py-2'>
            <label className='text-gray-800 text-sm'>{label}</label>
            <input value={value} onChange={onChange} className='px-4 border border-gray-300 rounded-lg focus:outline-none h-8' />
            {helperText && <small className='text-[11px] font-light text-gray-400'>{helperText}</small>}
        </div>
    )
}
