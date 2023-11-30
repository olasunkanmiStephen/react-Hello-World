import React from 'react'

interface Props {
    children: string;
    color?: 'danger' | 'secondary' | 'success';
    onClick : () => void;
}

const Button = ({children, onClick, color = 'danger'} : Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>{children}</div>
  )
}

export default Button