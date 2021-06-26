export const isEmpty = (email, cardNum, cardDate, cardCode) => {
  if (
    email.length === 0 ||
    cardNum.length === 0 ||
    cardDate.Length === 0 ||
    cardCode.length === 0
  ) {
    return false
  }
  return true
}

export const costPerGB = (dur) => {
  if (dur === '3') return '3'
  else if (dur === '6') return '2.5'
  else if (dur === '12') return '2'
  else return 'Unknown'
}
