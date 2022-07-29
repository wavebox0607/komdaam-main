import { MinusIcon, PlusIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { bangla } from "../../../../constant/language"
import { addToCartList, decrementQty } from "../../../../redux/slice/cart"
import { Product } from "../../../../services"

const AddToCart = ({ product, unit, already }) => {
    const dispatch = useDispatch()

    const [alreadyCart, setAlreadyCart] = useState(null)

    useEffect(() => {
        const inCart = already.find(i => i.variantId === unit?.id)

        setAlreadyCart(inCart)

    }, [already, unit?.id])


    const data = {
        cartId: Product.makeid(100),
        variantId: unit?.id,
        productId: product?.id,
        qty: 1,
        name: product?.name,
        slug: product?.slug,
        images: product?.images,
        price: unit ? parseFloat(product?.regular_price) + parseFloat(unit?.additional_price) : parseFloat(product?.regular_price).toFixed(2)
    }


    // New Added or Already added item increment quantity 
    const handleAddToCart = () => {

        if (product?.variant && unit) {
            dispatch(addToCartList(data))
        }
        if (product?.variant && !unit) {
            alert('please select variant')
        }

        if (!product?.variant) {
            dispatch(addToCartList(data))
        }

    }

    // Already added item in cart Decrement Quantity
    const handleDecrementCartItem = () => {
        const inCart = already.find(i => i.variantId === unit?.id)
        if (product?.variant && unit) {
            dispatch(decrementQty(inCart?.cartId))
        }
        if (product?.variant && !unit) {
            alert('please select variant')
        }

        if (!product?.variant) {
            dispatch(decrementQty(inCart?.cartId))
        }
    }

    return (<div className="flex mt-6">
        <div className="rounded-full flex items-center border border-black  hover:stroke-white  divide-x divide-black h-[36px] overflow-hidden">
            <div onClick={() => handleDecrementCartItem()} className="h-full flex items-center hover:bg-[#000] px-2 hover:stroke-[#fff]  stroke-[#50c878] text-[#50c878] hover:text-white transition-all duration-300 ease-linear">
                <MinusIcon className='h-4 w-4' />
            </div>
            <div className="flex items-center gap-2 h-full px-4">
                <p>{alreadyCart?.qty ? alreadyCart?.qty : 0}</p>
                <p>{bangla ? "কার্টে" : 'in cart'}</p>
            </div>
            <div onClick={() => handleAddToCart()} className="hover:bg-[#000] px-2 hover:stroke-[#fff] stroke-[#50c878] text-[#50c878] hover:text-white h-full flex items-center transition-all duration-300 ease-linear">
                <PlusIcon className='h-4 w-4' />
            </div>
        </div>
    </div>
    )
}

export default AddToCart