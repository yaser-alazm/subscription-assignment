export const isEmpty = (cardNum, cardDate, cardCode) => {
  if (cardNum.length === 0 || cardDate.Length === 0 || cardCode.length === 0) {
    return false
  }
  return true
}
