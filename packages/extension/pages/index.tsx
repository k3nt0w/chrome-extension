import React, { useState } from 'react'

export default function CustomWallet() {
  const [value, setValue] = useState<'ON' | 'OFF'>('ON')
  const handleClick = () => setValue(value === 'ON' ? 'OFF' : 'ON')
  return (
    <div>
      <h1>CustomWallet</h1>
      <button
        style={{
          fontSize: 64
        }}
        onClick={handleClick}
      >
        ●
      </button>
      <div>{value}</div>
    </div>
  )
}
