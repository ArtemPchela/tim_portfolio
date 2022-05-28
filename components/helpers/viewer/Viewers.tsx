import { FC, useEffect, useState } from 'react'
import axios from 'axios'

const Viewers: FC = () => {
  const [viewers, setViewers] = useState(0)

  const getViewers = async () => {
    try {
      const counter = await axios.get(`https://api.countapi.xyz/update/artempchelenkov.xyz/${process.env.NEXT_PUBLIC_VIEWERS_COUNTER}/?amount=1`)
      setViewers(counter.data.value)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getViewers().then(r => r)
  }, [])

  return (
    <div>
      This website was visited <span style={{color: "var(--color-primary)"}}>{viewers}</span> times
    </div>
  )
}

export default Viewers
