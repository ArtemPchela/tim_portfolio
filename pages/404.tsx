import { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/404.module.scss'

const Error = () => {
  let targetTime = 5
  const [seconds, setSeconds] = useState(targetTime)
  const router = useRouter()

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  }, [seconds])

  useEffect(() => {


    setTimeout(() => {
      router.push('./').then(r => r)
    }, 5000)
  }, [router])

  return (
    <div className={styles.wrapper}>
      <div>Something is going wrong</div>
      <div>`After ${seconds < 10 ? `0${seconds}` : seconds} seconds you will be resigned to the Home page`</div>
    </div>
  )
}

export default Error
