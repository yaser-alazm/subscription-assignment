import React, {useContext} from 'react'

import {Col, Row, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Steps from '../components/Steps'

import {GlobalContext} from '../context/GlobalState'

function Payment() {
  const {
    email,
    updateEmail,
    cardNum,
    updateCardNum,
    cardDate,
    updateCardDate,
    cardCode,
    updateCardCode,
    dur,
    amount,
    upfrontPayment,
    price,
  } = useContext(GlobalContext)

  const emailOnChange = (e) => {
    updateEmail(e.target.value)
  }
  const cardNumOnChange = (e) => {
    updateCardNum(e.target.value)
  }
  const cardDateOnChange = (e) => {
    updateCardDate(e.target.value)
  }
  const cardCodeOnChange = (e) => {
    updateCardCode(e.target.value)
  }

  return (
    <>
      <Steps stp2 />
      <Row className='mb-3 justify-content-center'>
        <p>
          Please provide your payment data:{' '}
          <span className='text-muted'>
            {' '}
            {'->'} All fields are required {'<-'}{' '}
          </span>
        </p>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Form.Group
              onChange={emailOnChange}
              className='mb-3'
              controlId='formEmail'
            >
              <Form.Label>Your Email*</Form.Label>
              <Form.Control
                defaultValue={email}
                required
                type='email'
                placeholder='Enter email'
              />
            </Form.Group>
          </Col>
          <Col md={4}></Col>
        </Row>
        <Row>
          <Col md={4} className='justify-content-center'>
            <Form.Group
              onChange={cardNumOnChange}
              className='mb-3'
              controlId='formCardNum'
            >
              <Form.Label>Credit Card Number*</Form.Label>
              <Form.Control
                defaultValue={cardNum}
                required
                type='text'
                placeholder='Enter number'
              />
              <Form.Text className='text-muted'>
                We'll never share your card info with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col md={4} className='justify-content-center'>
            <Form.Group
              onChange={cardDateOnChange}
              className='mb-3'
              controlId='formCardDate'
            >
              <Form.Label>Card Expiration Date*</Form.Label>
              <Form.Control defaultValue={cardDate} required type='date' />
              <Form.Text className='text-muted'>
                Put in your card expiration date.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col className='mb-3 justify-content-center'>
            <Form.Group
              onChange={cardCodeOnChange}
              className='mb-3'
              controlId='formCardCode'
            >
              <Form.Label>Credit Card Security Code*</Form.Label>
              <Form.Control
                defaultValue={cardCode}
                required
                type='password'
                placeholder='Code'
              />
              <Form.Text className='text-muted'>
                All your information are confidential.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col md={6}>
          <Link
            variant='primary'
            className='justify-content-center btn btn-success'
            to='/parameters'
          >
            Back
          </Link>
          <Link
            variant='primary'
            className='justify-content-center btn mx-2 btn-success'
            to='/summary'
          >
            Next
          </Link>
        </Col>
        <Col md={6}>
          [Duration: <strong>{dur} Months </strong>- Amount:{' '}
          <strong>{amount}GB</strong> - Upfront Payment ?{' '}
          <strong>{upfrontPayment}</strong>]
          <br />
          <span>Total Price:</span> <strong>{price} $</strong>
        </Col>
      </Row>
    </>
  )
}

export default Payment
