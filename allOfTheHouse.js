const products = ['eggs', 'jam', 'juice']
const prices = [1.99, 2.13, 3.55]
const soldProducts = ['eggs', 'eggs', 'jam', 'juice']
const soldPrices = [1.99, 1.80, 2.15, 3.55]

function findDifferentPrices(products, prices, soldProducts, soldPrices) {
let count = 0

  for(let i = 0; i <= soldProducts.length; i++){
    const productIndex = products.findIndex( p => p === soldProducts[i])
    const realPrice = prices[productIndex]
    if(realPrice !== soldPrices[i]) {
      count++
    }
  }
  return count;
}

findDifferentPrices(products, prices, soldProducts, soldPrices)

