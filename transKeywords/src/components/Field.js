import React from 'react'

const Field = ({ label, text, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input value={text} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

export default Field
