import { HiOutlineShoppingBag } from "react-icons/hi";
import { useGlobalStore } from "../../store/global.store";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CartItem } from "./CartItem";
import { useCartStore } from "../../store/cart.store";

export const Cart = () => {

    const closeSheet = useGlobalStore(state => state.closeSheet);

    const cartItems = useCartStore(state => state.items);
    const clearCart = useCartStore(state => state.cleanCart);
    const totalItemsCart = useCartStore(state => state.totalItemsInCart);

    return (
        <div className="flex flex-col h-full">
            <div className="px-5 py-7 flex justify-between items-center border-b border-slate-200">
                <span className="flex gap-3 items-center font-semibold">
                    <HiOutlineShoppingBag size={20} />{totalItemsCart} artículos
                </span>
                <button onClick={closeSheet}>
                    <IoMdClose size={22} className="text-black" />
                </button>
            </div>

            {totalItemsCart > 0 ? (
                <>
                <div className="p-7 overflow-auto flex-1">
                    <ul className="space-y-9">
                        {cartItems.map(item => (
                            <CartItem 
                                item={item}
                                key={item.variantId}
                            />
                        ))}
                    </ul>
                </div>

                <div className="mt-4 p-7">
                    <Link
                        to='/checkout'
                        className="w-full bg-black text-white py-3.5 rounded-full flex items-center justify-center gap-3"
                    >
                        <RiSecurePaymentLine size={24} />
                        Continuar con la compra
                    </Link>

                    <button
                        className="mt-3 w-full text-black border border-black rounded-full py-3"
                        onClick={clearCart}
                    >
                        Limpiar carrito
                    </button>
                </div>
            </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full gap-7">
                    <p className="text-sm font-medium tracking-tight">
                        Su carro está vacio
                    </p>

                    <Link 
                        to="/celulares" 
                        className="py-4 bg-black rounded-full text-white px-7 text-xs uppercase tracking-widest font-semibold"
                        onClick={closeSheet}
                    >
                        Empezar a comprar
                    </Link>
                </div>
            )
        }

        </div>
    );
};