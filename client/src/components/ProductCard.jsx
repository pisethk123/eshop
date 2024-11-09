import { ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useUserStore } from "../store/useUserStore";
import { useCartStore } from "../store/useCartStore";

const ProductCard = ({product}) => {
    const {user} = useUserStore()
    const {addToCart} = useCartStore()

    const handleAddToCart = async () => {
        if(!user) {
            return toast.error("please login to add products to cart")
        }else{
            addToCart(product)
            toast.success("cart added successfully")
        }
    }

  return <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg">
    <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img src={product.image} alt="product image" className="object-cover w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>

    <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">{product.name}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
                <span className="text-3xl font-bold text-bold text-emerald-400">$ {product.price}</span>
            </p>
        </div>

        <button 
            className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2 5 text-center text-sm font-mediun"
            onClick={handleAddToCart}>
            <ShoppingCart size={22} className="mr-2"/>
            Add to cart
        </button>
    </div>
  </div>;
};

export default ProductCard;
