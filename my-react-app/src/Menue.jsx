import { MenuItem } from "./MenuItem"

export const Menue = ()=>{
    const handleOrder=(itName,itPrice)=>{
        alert(`You ordered ${itName}-${itPrice}`);

    }
    return(
        <div>
            <MenuItem name="Pizza" price={12} onOrder={handleOrder}></MenuItem>
            <MenuItem name="burger" price={8} onOrder={handleOrder}></MenuItem>
            <MenuItem name="Biryani" price={14} onOrder={handleOrder}></MenuItem>
        </div>
    )
}