import './NewProduct.css';
import ProductForm from './ProductForm';
// import ProductDate from './ProductDate';
export default function NewProduct(props)
{

    function saveProduct(product)
    {
        console.log("I am inside new product");
        console.log(product);
        // calling parent function 
        props.pranaya(product);
    }
    return(<div className = 'new-product'>

        <ProductForm onSaveProduct = {saveProduct} />

    </div>)

}
