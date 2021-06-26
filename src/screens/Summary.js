import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Row, Col, Jumbotron, Button} from 'react-bootstrap'

import Steps from '../components/Steps'
import Message from '../components/Message'
import {GlobalContext} from '../context/GlobalState'
import {isEmpty} from '../utils/helpers'

function Summary() {
  const {dur, amount, upfrontPayment, cardNum, cardDate, cardCode, price} =
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
        <Row>
          <Col md={3}>
            <Link
              variant='primary'
              className='justify-content-center btn btn-success mx-1'
              to='/payment'
            >
              Back
            </Link>
            <Button
              variant='primary'
              disabled={!isEmpty(cardNum, cardDate, cardCode)}
            >
              Checkout
            </Button>
          </Col>
          <Col md={3}>
            {!isEmpty(cardNum, cardDate, cardCode) ? (
              <Message txt='Some fields are empty!' variant='danger' />
            ) : (
              <Message txt='All good.' variant='success' />
            )}
          </Col>
        </Row>
      </Jumbotron>
    </>
  )
}

export default Summary
