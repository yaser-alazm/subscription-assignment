import React, {useContext} from 'react'

import Steps from '../components/Steps'
import {GlobalContext} from '../context/GlobalState'

function Summary() {
  const {dur, amount, upfrontPayment, cardNum, cardDate, cardCode} =
    useContext(GlobalContext)
  return (
    <>
      <Steps stp3 />
      <h1>Summary Screen</h1>
    </>
  )
}

export default Summary
