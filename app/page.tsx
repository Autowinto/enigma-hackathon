'use client'
import Image from 'next/image'
import { useState } from 'react'

export function ASCIISlot({ id }) {
  const first = ''
  const second = ''

  switch (id) {
    case 'a':
      return (
        <div className="relative">
          <pre className="absolute text-black">TESTSLOT</pre>
        </div>
      )
    case 'b':
      return (
        <div className="relative">
          <pre className="absolute right-0 text-black">TESTSLOT</pre>
        </div>
      )
    case 'c':
      return (
        <div className="relative">
          <pre className="absolute bottom-0 text-black">TESTSLOT</pre>
        </div>
      )
    case 'd':
      return (
        <div className="relative">
          <pre className="absolute bottom-0 right-0 text-black">TESTSLOT</pre>
        </div>
      )
  }
}

export default function Home() {
  const [value, setValue] = useState('a')

  return (
    <div className="h-screen flex gap-4 snow">
      <h1 className="absolute ml-12 mt-20 text-3xl builder-title">ASCII Christmas Card Builder</h1>
      <div id="card-preview" className="border-2 border-green-500 bg-gray-300 h-3/5 w-3/5 m-10 my-auto ">
        <div>
          TITLE
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <ASCIISlot id="a" />
          <ASCIISlot id="b" />
          <ASCIISlot id="c" />
          <ASCIISlot id="d" />
        </div>
      </div>
      <div id="card-input" className="w-1/4 bg-gray-500 m-10">
        <h1>Card Options:</h1>
        <form>
          <label>Title:</label>
          <input type="text" />
          <label>Message:</label>
          <input type="text" />
          <label>Placement:</label>
          <select value={value} onChange={e => setValue(e.target.value)}>
            <option value="a">Top-Left</option>
            <option value="b">Top-Right</option>
            <option value="c">Bottom-Left</option>
            <option value="d">Bottom-Right</option>
          </select>
        </form>
      </div>
    </div>
  )
}
