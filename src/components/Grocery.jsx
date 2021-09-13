import React, { useState } from "react";

function Grocery(){
    const [text,setText] = useState("")
    const [WishList,setWishList] = useState([]);
    const [FinalList,setFinalList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleFinalListClick = (e) => {
        const payload = {status:false,title:text}
        setFinalList([...FinalList,payload])
        setText("");
    }

    const handleWishListClick = (e) => {
        const payload = {title:text}
        setWishList([...WishList,payload])
        setText("");
    }

    const wishlistItems = WishList.map((item1) =>
  <li>{item1.title}</li>
    );

    const finallistItems = FinalList.map((item2) =>
    <li>{item2.title}</li>
      );

return <div>
    <input value={text} onChange={handleChange} type="text" placeholder="Add grocery items" />
    <button onClick={handleWishListClick}>WishList</button>
    <button onClick={handleFinalListClick}>FinalList</button>
    <h3>Wish List</h3>
    <ol>{wishlistItems}</ol>
    <hr />
    <h3>Final List</h3>
    <ol>{finallistItems}</ol>
</div>
}

export default Grocery;