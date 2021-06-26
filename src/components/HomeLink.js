import React from 'react'

import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

function HomeLink({txt}) {
  return (
    <>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Link
            to='/parameters'
            className='btn btn-success btn-lg d-flex justify-content-center align-items-center'
          >
            Proceed to steps
          </Link>
        </Col>
        <Col md={4}></Col>
      </Row>
    </>
  )
}

export default HomeLink
