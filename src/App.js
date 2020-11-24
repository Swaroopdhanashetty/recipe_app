import React,{useEffect,useState} from 'react'
import './App.css';
import Recipe from './Recipe'


function App() {
  const  API_key='895afe86a9725a0580642b2141b7e06d'	;
  const  API_ID='37f0c4c5';
  const [recipes, setRecipes] = useState([]);
 const [search , setSearch] = useState('');
 const [ query, setQuery] = useState('egg')

useEffect(() => {
  getRecipes()
},[query]);

const getRecipes = async () => {
  const respose = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_key}`);
  const data = await respose.json();
  console.log(data.hits);
  setRecipes(data.hits);
};
const UpdataSearch = e =>{
  setSearch(e.target.value);

  console.log(search);
}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
  setSearch('')
}
  return (
    <div className='App'>
    <h1>FOOD SEARCHING APP</h1>
    <from onSubmit={getSearch} className='search-form'>
    
    <input  type="text" className='search-bar' placeholder='Search your food' value={search} onChange={UpdataSearch}/>
        <input type="submit" value="Search" onClick={getSearch}  />
   
    </from>
    <div className='recipes'>
    {recipes.map(recipe => <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      url={recipe.recipe.url}
      ingredients={recipe.recipe.ingredients}/> )}
    </div>
    
    </div>
  );
}

export default App;
