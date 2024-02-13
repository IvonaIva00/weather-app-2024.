import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function Home() {
  const [data, setData] = useState();
  const apiKey = process.env.NEXT_PUBLIC_API;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}}`
useEffect(() => {
  const getData = async() => {
    const response = await axios.get(url);
    console.log(response.data)
  }
  getData()
  .catch(console.error)
})
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
    <button >Check The Weather</button>
    </main>
  )
}
