import Item from "./Item";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const {products, total, formatMoney} = useCart()
    return(
        <div className="cart">
            <h1 style={{textAlign: "center" }}>
                { products.length > 0 ? `Sum price : ${formatMoney(total)} Baht`: "No item in cart" }
            </h1>
            {products.map((data)=>{
                return <Item key={data.id} {...data}/>
            })}
        </div>
    );
}