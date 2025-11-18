export const ProductList=()=>{
    const product = [
        {
            id:1,
            name:"Laptop",
            price:999
        },
        {
            id:2,
            name:"Phone",
            price:699
        },
        {
            id:3,
            name:"Tablet",
            price:499,
        },
    ];
    const product_elements=product.map((p)=>{
                    return (
                        <div>
                            <h3>{p.name}</h3>
                            <p>{p.price}$</p>
                        </div>
                    )
                })
    return(
        <div>
            <h3>
                Products lsit
            </h3>
            {product_elements}
            
        </div>
    );
}