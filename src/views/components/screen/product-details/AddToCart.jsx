import { ShoppingBagIcon } from "@heroicons/react/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { bangla } from "../../../../constant/language";
import {
  addToCartList,
  decrementQty,
  incrementQty,
  toggleCart,
} from "../../../../redux/slice/cart";
import { Product } from "../../../../services";

const AddToCart = ({ product, unit, already }) => {
  // console.log(product?.slug,"product");
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const [alreadyCart, setAlreadyCart] = useState(null);
  const [qty,setQty]=useState(1)
  useEffect(() => {
    const inCart = already.find((i) => i.variantId === unit?.id);

    setAlreadyCart(inCart);
  }, [already, unit?.id]);

  const data = {
    cartId: Product.makeid(100),
    variantId: unit?.id,
    productId: product?.id,
    qty: 1,
    size:unit?.size,
    color:unit?.color,
    name: product?.name,
    slug: product?.slug,
    images: product?.images,
    volume:unit?.unit,
    additional_price:unit?.additional_price,
    unit:unit?.volume,
    price: unit
      ? product?.discount_price
        ? parseFloat(product?.discount_price) +
          parseFloat(unit?.additional_price)
        : parseFloat(product?.regular_price) +
          parseFloat(unit?.additional_price)
      : parseFloat(product?.regular_price).toFixed(2),
  };

  // New Added or Already added item increment quantity
  const handleAddToCart = () => {
    // console.log(data, "data");
 
    if (product?.variant && unit) {
      dispatch(addToCartList(data));
    }
    if (product?.variant && !unit) {
      alert("please select variant");
    }

    if (!product?.variant) {
      console.log("data2", data);
      dispatch(addToCartList(data));
    }
  };

const  handleIncrementToCart=()=>{
  setQty(qty+1)
  let test={
     ...data
  }
  test.sameVariantId=data.variantId
  test.qty=qty
 

 
 const update=cartList.find(data=>data.variantId===data?.variantId)
 console.log(cartList[0],'cartList',data,update);
 const inCart = already.find((i) => i.variantId === unit?.id);
 if (product?.variant && unit) {
   dispatch(incrementQty(inCart?.cartId));
 }
 if (product?.variant && !unit) {
   alert("please select variant");
 }

 if (!product?.variant) {
   dispatch(incrementQty(inCart?.cartId));
 }
  
}
  // Already added item in cart Decrement Quantity
  const handleDecrementCartItem = () => {

    if(qty>1){
      setQty(qty-1)
    }
    const inCart = already.find((i) => i.variantId === unit?.id);
    if (product?.variant && unit) {
      dispatch(decrementQty(inCart?.cartId));
    }
    if (product?.variant && !unit) {
      alert("please select variant");
    }

    if (!product?.variant) {
      dispatch(decrementQty(inCart?.cartId));
    }
  };

  return (
    <div className="flex mt-6 space-x-2">
      <div className="rounded-full flex items-center border border-black  hover:stroke-white  divide-x divide-black h-[36px] overflow-hidden">
        <div
          onClick={() => handleDecrementCartItem()}
          className="h-full flex items-center hover:bg-[#000] px-2 hover:stroke-[#fff]  stroke-[#4c9a2a] text-[#4c9a2a] hover:text-white transition-all duration-300 ease-linear"
        >
          <MinusIcon className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 h-full px-1.5 md:px-4">
        <p>{alreadyCart?.qty ? alreadyCart?.qty : 0}</p>
          <p>{bangla ? "??????????????????" : "in cart"}</p>
        </div>
        <div
          onClick={() => handleIncrementToCart()}
          className="hover:bg-[#000] px-2 hover:stroke-[#fff] stroke-[#4c9a2a] text-[#4c9a2a] hover:text-white h-full flex items-center transition-all duration-300 ease-linear"
        >
          <PlusIcon className="h-4 w-4" />
        </div>
      </div>

      {alreadyCart?.cartId ? (
        <div
          onClick={() => dispatch(toggleCart())}
          className="rounded-full flex items-center border border-[#4c9a2a] text-[#4c9a2a] hover:text-white hover:bg-[#4c9a2a] h-[36px] overflow-hidden transition-all duration-300 ease-linear cursor-pointer"
        >
          <h4 className="px-6  font-semibold">
            {" "}
            {bangla ? "????????? ???????????????" : "Buy Now"}
          </h4>
        </div>
      ) : (
        <div className="rounded-full flex items-center border border-[#4c9a2a]  hover:stroke-white h-[36px] overflow-hidden ">
          <div
            onClick={() => handleAddToCart()}
            className="hover:bg-[#4c9a2a]  hover:stroke-[#fff] stroke-[#4c9a2a] text-[#4c9a2a] hover:text-white h-full flex items-center transition-all duration-300 ease-linear space-x-2 px-4 cursor-pointer"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <p className="font-bold text-[12px] md:text-[14px] ">
              {bangla ? "?????????????????? ????????? ????????????" : "Add To Cart"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
