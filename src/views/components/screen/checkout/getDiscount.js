export const getDiscount = (total, discount_amount) => {
	const price = total - ((discount_amount / 100) * total)
	return price

}