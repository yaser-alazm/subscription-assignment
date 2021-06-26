const AppReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DURATION':
      return {
        ...state,
        dur: action.payload,
      }
    case 'UPDATE_AMOUNT':
      return {
        ...state,
        amount: action.payload,
      }
    case 'UPDATE_UPFRONT':
      return {
        ...state,
        upfrontPayment: action.payload,
      }
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.payload,
      }
    case 'UPDATE_CARD_NUM':
      return {
        ...state,
        cardNum: action.payload,
      }
    case 'UPDATE_CARD_DATE':
      return {
        ...state,
        cardDate: action.payload,
      }
    case 'UPDATE_CARD_CODE':
      return {
        ...state,
        cardCode: action.payload,
      }
    case 'UPDATE_PRICE':
      return {
        ...state,
        price: action.payload,
      }
    default:
      return state
  }
}

export default AppReducer
