import React, {useState, useContext, useEffect} from 'react'
import Steps from '../components/Steps'

import {Link} from 'react-router-dom'
import {Form, Row, Col, FormGroup} from 'react-bootstrap'

import {GlobalContext} from '../context/GlobalState'

function Parameters() {
  const {
    updateDuration,
    dur,
    amount,
    price,
    updateAmount,
    updateUpfrontPayment,
    upfrontPayment,
    updatePrice,
  } = useContext(GlobalContext)

  useEffect(() => {
    updatePrice(dur, amount, upfrontPayment)
  }, [dur, amount, upfrontPayment])

  const onChangeDur = (e) => {
    updateDuration(e.target.value)
  }
  const onChangeAmount = (e) => {
    updateAmount(e.target.value)
  }
  const onChangePayment = (e) => {
    updateUpfrontPayment(e.target.value)
  }

  const onNext = (e) => {
    console.log('Proceed ..')
  }

  return (
    <>
      <Steps stp1 />

      <Row className='mb-3 justify-content-center'>
        <p>
          Please select your subscription parameters:{' '}
          <span className='text-muted'>
            {' '}
            {'->'} All fields are required {'<-'}{' '}
          </span>
        </p>

        <Col md={4}>
          <FormGroup onChange={onChangeDur}>
            <Form.Label>Duration (by months)</Form.Label>
            <Form.Check
              type='radio'
              id='dura1'
              name='duration'
              value='3'
              label='3'
            />
            <Form.Check
              type='radio'
              id='dura2'
              name='duration'
              value='6'
              label='6'
            />
            <Form.Check
              type='radio'
              id='dura3'
              name='duration'
              value='12'
              label='12'
              defaultChecked
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup onChange={onChangeAmount}>
            <Form.Label>Amount (by GB)</Form.Label>
            <Form.Check
              type='radio'
              id='amount1'
              name='amount'
              value='5'
              label='5'
              defaultChecked
            />
            <Form.Check
              type='radio'
              id='amount2'
              name='amount'
              value='10'
              label='10'
            />
            <Form.Check
              type='radio'
              id='amount3'
              name='amount'
              value='12'
              label='12'
            />
          </FormGroup>
        </Col>
        <Col md={4} className='justify-content-center'>
          <FormGroup onChange={onChangePayment}>
            <Form.Label>Upfront Payment</Form.Label>
            <Form.Check
              type='radio'
              id='upfront-payment-1'
              name='upfront-payment'
              value='YES'
              label='YES'
            />
            <Form.Check
              type='radio'
              id='upfront-payment-2'
              name='upfront-payment'
              value='NO'
              label='NO'
              defaultChecked
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Link
            variant='primary'
            className='justify-content-center btn btn-success'
            to='/payment'
            onClick={onNext}
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

export default Parameters
