import React from 'react'

const Child = ({resetCount}) => {
    console.log("child component")
  return (
    <div>
        <h1>Child</h1>
        <button onClick={() => resetCount()} >Reset Counter</button>
    </div>
  )
}

export default React.memo(Child)