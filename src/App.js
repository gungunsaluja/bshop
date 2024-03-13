import logo from './logo.svg';
import './App.css';
import Products from './components1/Products'

const App=()=> {
const products = [{
  id:'p1',
  title:'Nirma',
  amount:100,
  date:new Date(2021,8,10),
},
{
  id:'p2',
  title:'Sird Excel',
  amount:200,
  date:new Date(2021,2,2),
},
{
  id:'p3',
  title:'Tide',
  amount:130,
  date:new Date(2021,12,28),
},
{
  id:'p3',
  title:'Arial',
  amount:150,
  date:new Date(2021,11,2),
}
]
  return (
    <div>
      <Products items = {products}/>
    </div>
  );
}

export default App;
