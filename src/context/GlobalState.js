import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//InitialState

const initialState = {
  dur: 12,
  amount: '5',
  upfrontPayment: 'NO',
  email: '',
  cardNum: '',
  cardDate: '',
  cardCode: '',
  price: '',
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions
  const updateDuration = (duration) => {
    dispatch({
      type: 'UPDATE_DURATION',
      payload: duration,
    })
  }

  const updateAmount = (amount) => {
    dispatch({
      type: 'UPDATE_AMOUNT',
      payload: amount,
    })
  }

  const updateUpfrontPayment = (upfrontPayment) => {
    dispatch({
      type: 'UPDATE_UPFRONT',
      payload: upfrontPayment,
    })
  }

  const updateEmail = (email) => {
    dispatch({
      type: 'UPDATE_EMAIL',
      payload: email,
    })
  }
  const updateCardNum = (cardNum) => {
    dispatch({
      type: 'UPDATE_CARD_NUM',
      payload: cardNum,
    })
  }

  const updateCardDate = (cardDate) => {
    dispatch({
      type: 'UPDATE_CARD_DATE',
      payload: cardDate,
    })
  }
  const updateCardCode = (cardCode) => {
    dispatch({
      type: 'UPDATE_CARD_CODE',
      payload: cardCode,
    })
  }

  const updatePrice = (dur, amount, upfrontPayment) => {
    let total = 0
    if (upfrontPayment === 'NO') {
      if (dur === '3') total = 3 * Number(amount)
      else if (dur === '6') total = 2.5 * Number(amount)
      else if (dur === '12') total = 2 * Number(amount)
    } else {
      if (dur === '3') total = 3 * Number(amount) * 0.9
      else if (dur === '6') total = 2.5 * Number(amount) * 0.9
      else if (dur === '12') total = 2 * Number(amount) * 0.9
    }

    dispatch({
      type: 'UPDATE_PRICE',
      payload: total,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        dur: state.dur,
        amount: state.amount,
        upfrontPayment: state.upfrontPayment,
        email: state.email,
        cardNum: state.cardNum,
        cardDate: state.cardDate,
        cardCode: state.cardCode,
        price: state.price,
        updateDuration,
        updateAmount,
        updateUpfrontPayment,
        updateEmail,
        updateCardNum,
        updateCardDate,
        updateCardCode,
        updatePrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
