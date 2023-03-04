import './cartScreen.css'

//Components
import CartItem from '../components/cartItem'

const CartScreen = () => {
    return(
        <div className="cartScreen" >
            <div className="cartScreen_left" > 
            <h2>Shopping Cart</h2>

            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            </div>

            <div className="cartScreen_right" > 
            <div className="cartScreen_info" > 
            <p>Subtotal (0) items</p>
            <p>$499.99</p>
            </div>
            <div>
                <button>Proceed to Checkout </button>
            </div>
            </div>
        </div>
    )
}

export default CartScreen;