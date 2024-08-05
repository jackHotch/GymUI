import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant: string
  children: string
  onClick?: () => void
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
