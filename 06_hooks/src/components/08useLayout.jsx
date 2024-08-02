import React, {useEffect, useLayoutEffect} from 'react'

const UseLayout = () => {

    useEffect( ()=> [
        console.log("message rendered fro useEffect")
    ], [])

    useLayoutEffect( ()=> {
        console.log("message from useLayoutEffect");
    }, [])

    const randomPowers = Array(4000).fill('').map((item, index)=>(
        <li key={index}>{Math.pow(Math.random(), 2)}</li>
    ))

  return (
    <>
    <h2>UseLayout</h2>
    <ul>{randomPowers}</ul>
    </>
  )
}

export default UseLayout