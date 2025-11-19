import { useState } from "react";

export const ComponChange = () => {
  const [name, setName] = useState("Name");
  const [quantity, setQuantity] = useState(0);
  const [payment, SetPayment] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const ChangePayment = (e) => {
    SetPayment(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changeName} />
      <h2>Name:{name}</h2>

      <input type="number" onChange={changeQuantity} />
      <h2>Quantity: {quantity}</h2>

      <p>Payment method: {payment}</p>

      <select value={payment} onChange={ChangePayment}>
        <option value="">Select Payment Method</option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
        <option value="NetBanking">NetBanking</option>
      </select>
    </div>
  );
};
