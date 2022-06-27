import React, { useState } from 'react'
import MapContainer from '../Map/MapContainer'

function LandingPage() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input style={{ marginTop: '50px', }} placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button style={{
          border: 'none',
          borderRadius: '3px',
          background: 'black',
          width: '50px',
          height: '30px',
          marginLeft: '10px',
          color: 'white',
        }} type="submit">검색</button>

      </form>
      <MapContainer searchPlace={Place} />
    </>
  )
}

export default LandingPage