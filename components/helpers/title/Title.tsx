import { FC } from 'react'
import styles from './Title.module.scss'

type SectionHeaderProps = {
  title: string
}

const Title: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className={styles.sectionHeader}>{title}</div>
  )
}

export default Title
