import styles from"./List.module.css";

export const List=()=>{
    const fruits=[
        {id:1, name:"apple", calories:90},
        {id:2, name:"banana", calories:100},
        {id:3, name:"pineapple", calories:170},
        {id:4,name:"mango",calories:100},
        {id:5,name:"papaya",calories:167}
    ];
    const fs=fruits.map((fruit)=>{
        return(
            <div key={fruit.id}>
                
                <h3 className={styles.fruitName}>{fruit.name} calories:{fruit.calories}</h3>
            </div>
        )
    })
    return(
        <div className={styles.fruitBox}>
            {fs}
        </div>


    )
}