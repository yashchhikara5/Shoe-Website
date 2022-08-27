export const calculateSellingPrice = (price, offPercentage) => {
  if (!price || typeof price !== "number") {
    return 0
  }
  return parseInt(price - (price * offPercentage) / 100)
}
