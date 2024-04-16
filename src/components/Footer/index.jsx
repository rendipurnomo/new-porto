import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='text-center py-10'>
      <p>Copyright © {date}. All rights reserved | Rendi Code</p>
    </footer>
  )
}

export default Footer