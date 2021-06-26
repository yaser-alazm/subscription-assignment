import React, {useContext} from 'react'

import {Jumbotron, Button} from 'react-bootstrap'

import Steps from '../components/Steps'
import {GlobalContext} from '../context/GlobalState'

function Summary() {
  const {dur, amount, upfrontPayment, cardNum, cardDate, cardCode} =
    useContext(GlobalContext)
  return (
    <>
      <Steps stp3 />
      <Jumbotron>
        <h1>Summary</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </Jumbotron>
    </>
  )
}

export default Summary
