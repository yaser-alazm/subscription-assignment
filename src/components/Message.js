import React from 'react'

import {Alert} from 'react-bootstrap'

function Message({txt, variant}) {
  return (
    <Alert variant={variant} className='text-center'>
      {txt}
    </Alert>
  )
}

export default Message
