export const Products = ({title,price,inStock,categories})=>{
    return (<div>
        <h3>{title}</h3>
        <p>Price:{price}$</p>
        <p>Instock:{inStock ? "Yes":"No"}</p>
        <p>categories:{categories.join(", ")}</p>
    </div>);
}