import {Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import React from 'react'

function Steps({stp1, stp2, stp3}) {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {stp1 ? (
          <Nav.Link disabled>Parameters</Nav.Link>
        ) : (
          <LinkContainer to='/parameters'>
            <Nav.Link>Parameters</Nav.Link>
          </LinkContainer>
        )}
      </Nav.Item>
      <Nav.Item>
        {stp2 ? (
          <Nav.Link disabled>Payment</Nav.Link>
        ) : (
          <LinkContainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        )}
      </Nav.Item>
      <Nav.Item>
        {stp3 ? (
          <Nav.Link disabled>Summary</Nav.Link>
        ) : (
          <LinkContainer to='/summary'>
            <Nav.Link>Summary</Nav.Link>
          </LinkContainer>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default Steps
