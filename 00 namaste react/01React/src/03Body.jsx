import React from 'react'
import RestrauntCard from "./05RestrauntCard";


const Body = () => {
  return (
    <div style={{display: "flex", border:'1px solid black '}}>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
      <RestrauntCard/>
    </div>
  )
}

export default Body