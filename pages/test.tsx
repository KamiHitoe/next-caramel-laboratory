import * as React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Test.module.scss'
import Button from '@mui/material/Button'

const Foo: NextPage = () => {
  return (
    <div className={styles.title}>
      <h1>test</h1>
      <Button variant="contained">Contained</Button>
    </div>
  )
}

export default Foo
