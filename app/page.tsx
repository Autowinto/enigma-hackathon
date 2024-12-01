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
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="h-screen flex gap-8 snow">
      <h1 className="absolute ml-12 mt-20 text-3xl builder-title">ASCII Christmas Card Builder</h1>
      <div id="card-preview" className="border-2 border-green-500 bg-gray-300 h-3/5 w-3/5 m-10 my-auto ">
        <div className="flex w-max justify-center h-5">
          <span className="text-lg">
            {title}
          </span>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <ASCIISlot id="a" />
          <ASCIISlot id="b" />
          <ASCIISlot id="c" />
          <ASCIISlot id="d" />
        </div>
      </div>
      <div id="card-input" className="w-1/4 bg-gray-500 m-10 rounded-lg">
        <form className="flex flex-col pl-5 pr-5 pt-2 santa-form">
          <h1 className="self-center text-lg">Customize Your Card Below!</h1>
          <label>Title:</label>
          <input id="3" onInput={v => setTitle(v.currentTarget.value)} type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />
          {' '}
          <label>Message:</label>
          <input id="3" type="text" onInput={v => setMessage(v.currentTarget.value)} className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />
          {' '}
          <label>Placement:</label>
          <select
            style={{
              color: 'black',
            }}
            value={value}
            onChange={e => setValue(e.target.value)}
          >
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
