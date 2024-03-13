import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';
const ProductItem = (props) =>{
    const [title, setTitle] = useState(props.title);
    //useState output me do value return karta hai
   
    function clickHandler()
    {
        setTitle("popcorn");
        console.log("button clicked");
    }
    return (
        <Card className = 'product-item'>
            <ProductDate date = {props.date}/>
            <div className = 'product-item__description'>
            <h2>{title}
            </h2>
            <button onClick = {clickHandler}>Add TO Cart</button>
            </div>
        </Card>);

}

export default ProductItem;
//in above state class the execution or program will follow these steps first it will const [title,setTitle] first it will store the  initial value of title the which it will get from props.title  setTitle will be used to change the value of title there is a button when we click that button click event will fire and click event is mapped with onclick prop and onclick prop is mapped with handleclick function and handleclick function has setTitle event in its body ans setTitle is handling to change the title and settitle  ui par render b kar ra 