import "./Item.css";
import { useCart } from "../context/CartContext";
export default function Item(props) {
    const {id, name, price, image, quantity} = props;
    const { formatMoney, removeItem, addItem, decreaseItem } = useCart();
    return(
        <div className="card">
            <img src={image} alt={id} />
            <div className="product">
                <p>Product name : {name}</p>
                <p className="price">Price : {formatMoney(price)} Baht</p>
            </div>
            <div className="quantity">
                <button onClick={()=>addItem(id)}>+</button>
                <input type="text" value={quantity} disabled />
                <button onClick={()=>decreaseItem(id)}>-</button>
            </div>
            <div className="total-price">{formatMoney(quantity * price)}</div>
            <button onClick={()=>removeItem(id)} >Delete</button>
        </div>
    )
}