'use client'
import { sendCard } from '@/app/services/sendCard.service'
import { useEffect, useState } from 'react'
import { twj } from 'tw-to-css'
import getAsciiArray from './services/getAscii.service'

export function ASCIISlot({ id, slot }) {
  const first = ''
  const second = ''

  switch (id) {
    case 'a':
      return (
        <div className="relative">
          <pre className="absolute text-black">{slot}</pre>
        </div>
      )
    case 'b':
      return (
        <div className="relative">
          <pre className="absolute right-0 text-black">{slot}</pre>
        </div>
      )
    case 'c':
      return (
        <div className="relative">
          <pre className="absolute bottom-0 text-black">{slot}</pre>
        </div>
      )
    case 'd':
      return (
        <div className="relative">
          <pre className="absolute bottom-0 right-0 text-black">{slot}</pre>
        </div>
      )
  }
}

export default function Home() {
  const [value, setValue] = useState('a')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const [testSlot1, setTestSlot1] = useState('')
  const [testSlot2, setTestSlot2] = useState('')
  const [testSlot3, setTestSlot3] = useState('')
  const [testSlot4, setTestSlot4] = useState('')
  const [asciiArray, setAsciiArray] = useState<string[]>([])

  useEffect(() => {
    getAsciiArray().then((asciiArray) => {
      setAsciiArray(asciiArray)
    })
  }, [])

  function handleCardSubmit(event) {
    event.preventDefault()
    const html = document.getElementById('card-preview')?.outerHTML
    sendCard(email, html as string, title)
  }

  return (
    <div className="h-screen flex gap-4 snow ">
      <h1 className="absolute ml-12 mt-20 text-3xl builder-title">ASCII Christmas Card Builder</h1>
      <div style={twj('border-2 border-green-500 bg-gray-300 h-3/5 w-3/5 m-10 my-auto grid grid-rows-[auto_1fr] relative')} id="card-preview" className="">
        <div className="text-center text-black">
          { title}
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black w-full text-center">
          {message}
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <ASCIISlot id="a" slot={testSlot1} />
          <ASCIISlot id="b" slot={testSlot2} />
          <ASCIISlot id="c" slot={testSlot3} />
          <ASCIISlot id="d" slot={testSlot4} />
        </div>
      </div>
      <div id="card-input" className="w-1/4 bg-slate-400 m-10 rounded-lg">
        <form onSubmit={handleCardSubmit} className="flex flex-col pl-5 pr-5 pt-2 santa-form">
          <h1 className="self-center text-lg">Customize Your Card Below!</h1>
          <label>Title:</label>
          <input id="3" onInput={v => setTitle(v.currentTarget.value)} type="text" className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />

          <label>Message:</label>
          <input id="3" type="text" onInput={v => setMessage(v.currentTarget.value)} className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />

          <label>Recipient E-Mail:</label>
          <input id="3" type="email" onInput={v => setEmail(v.currentTarget.value)} className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />

          <label>Placement:</label>
          <select
            className="rounded-md h-10 text-black px-4 "
            value={value}
            onChange={e => setValue(e.target.value)}
          >
            <option value="a">Top-Left</option>
            <option value="b">Top-Right</option>
            <option value="c">Bottom-Left</option>
            <option value="d">Bottom-Right</option>
          </select>
          <label>ASCII:</label>
          <select className="rounded-md h-10 text-black px-4">
            {asciiArray.map((ascii, index) => (
              <option key={index} value={ascii}>
                {ascii}
              </option>
            ))}
          </select>

          <div
            className="flex text-center overflow-y-scroll flex-col p-5"
            style={{
              height: '500px',
            }}
          >
            { asciiArray.map((ascii, index) => (

              <div
                key={index}
                style={{
                  fontSize: '8px',
                  marginBottom: '3rem',
                }}
              >
                <pre
                  onClick={() => {
                    switch (value) {
                      case 'a':
                        setTestSlot1(ascii)
                        break
                      case 'b':
                        setTestSlot2(ascii)
                        break
                      case 'c':
                        setTestSlot3(ascii)
                        break
                      case 'd':
                        setTestSlot4(ascii)
                        break
                    }
                  }}
                  className="text-black"
                >
                  {ascii}
                </pre>

              </div>
            ))}
          </div>
          <button className="rounded bg-white text-black mt-4 text-2xl p-3" type="submit">Send Christmas Card!</button>
        </form>
      </div>
    </div>
  )
}
