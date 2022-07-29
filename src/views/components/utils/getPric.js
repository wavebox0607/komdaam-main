/* eslint-disable no-cond-assign */
export const getPrice = (regular_price, discount_price, discount_type) => {
	if (discount_type === 'no_discount') {

		const price = parseFloat(regular_price).toFixed(2)
		return price
	}
	if (discount_type === 'percent') {

		const price = regular_price - ((parseFloat(discount_price).toFixed(2) / 100) * parseFloat(regular_price).toFixed(2))
		return price
	}
	if (discount_type === 'fixed') {

		const price = parseFloat(regular_price).toFixed(2) - parseFloat(discount_price).toFixed(2)
		return price
	}
}