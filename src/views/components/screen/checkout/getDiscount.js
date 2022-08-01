export const getDiscount = (total, discount_amount) => {
	const price = total - ((parseFloat(discount_amount).toFixed(2) / 100) * total)
	return price

}

export const getTaka = (total, discount) => { 
	const price =  (parseFloat(discount).toFixed(2) / 100) * parseFloat(total).toFixed(2)
	return price
 }