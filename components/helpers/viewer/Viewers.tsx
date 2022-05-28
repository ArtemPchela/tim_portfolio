import { FC, useEffect, useState } from 'react'
import axios from 'axios'

const Viewers: FC = () => {
  const [viewers, setViewers] = useState(0)

  const getViewers = async () => {
    try {
      const counter = await axios.get(`https://api.countapi.xyz/update/artempchelenkov.xyz/b1c9d061-aae6-4537-8dbd-560a8265765d/?amount=1`)
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
