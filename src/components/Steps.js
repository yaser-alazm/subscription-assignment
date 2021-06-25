import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import React from 'react'

function Steps({stp1, stp2, stp3}) {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {stp1 ? (
          <LinkContainer to='/parameters'>
            <Nav.Link>Parameters</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Parameters</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stp2 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stp3 ? (
          <LinkContainer to='/summary'>
            <Nav.Link>Summary</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Summary</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default Steps
