import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap'

import Steps from '../components/Steps'
import Message from '../components/Message'
import {GlobalContext} from '../context/GlobalState'
import {isEmpty, costPerGB} from '../utils/helpers'

function Summary() {
  const {
    dur,
    amount,
    upfrontPayment,
    email,
    cardNum,
    cardDate,
    cardCode,
    price,
  } = useContext(GlobalContext)

  let data = [
    dur,
    amount,
    upfrontPayment,
    email,
    cardNum,
    cardDate,
    cardCode,
    price,
  ]

  const sendData = (data) => {
    alert('Posting data to [`https://httpbin.org/post`]..')
    fetch('https://httpbin.org/post', {
      method: 'post',
      body: data,
    })
      .then((response) => {
        return response.json()
      })
      .then((resData) => {
        console.log('Data sent successfully:', resData)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Steps stp3 />
      <Jumbotron>
        <h3>Your Subscription Summary:</h3>
        <Row className='verticaly-centered'>
          <Col md={6} className='d-flex justify-content-center m-5'>
            <Card style={{width: '25rem'}}>
              <Card.Body>
                <Card.Text>
                  Check out your subscription details and your info and press
                  back button if you need to change.
                </Card.Text>
              </Card.Body>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  Subscription Duration: <strong>{dur} Months</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Subscription Amount: <strong>{amount} GigaBytes</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Upfront Payment: <strong>{upfrontPayment}</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Email Adress: <strong>{email}</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Your Card Number: <strong>{cardNum}</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Card Expiration Date: <strong>{cardDate}</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Card Code: <strong>{cardCode}</strong>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='my-2'>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>
                  Total Price: <strong>{price}$ (USD)</strong>
                </ListGroupItem>
                <ListGroupItem>
                  Cost per 1 GB: <strong>{costPerGB(dur)}$</strong>
                </ListGroupItem>
              </ListGroup>
            </Card>
            {!isEmpty(email, cardNum, cardDate, cardCode) ? (
              <Message
                txt='Some fields are empty!'
                variant='danger'
                style={{verticaAlign: 'middle'}}
              />
            ) : (
              <Message txt='All good.' variant='success' />
            )}
          </Col>
        </Row>
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
              onClick={sendData}
              disabled={!isEmpty(email, cardNum, cardDate, cardCode)}
            >
              Checkout
            </Button>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Jumbotron>
    </>
  )
}

export default Summary
