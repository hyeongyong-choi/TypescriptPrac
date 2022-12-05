import React ,{useRef} from "react";

interface ShoppingListFormProps {
    onAddItem:(item:string, quantity:number) => void
}

function ShoppingListForm(props : ShoppingListFormProps): JSX.Element{
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        const newProduct = productInputRef.current!.value
        const quantity = parseInt(quantityInputRef.current!.value)
        props.onAddItem(newProduct,quantity);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Produvt Name" ref={productInputRef}/>
            <input type="number"  ref={quantityInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm