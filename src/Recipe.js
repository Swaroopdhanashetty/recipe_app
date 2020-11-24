import React,{useState} from 'react'
import RecipeDetails from './RecipeDetails'



function Recipe(props) {
    const [show, setShow] = useState(false);
    return (
        <div className='recipe'>
           <h2 className='h' >{props.title}</h2> 
           <p >Calories:{props.calories}</p>
            <img  src = {props.image} alt=''/>    
           <a href = {props.url}></a>
           <button onClick={() => setShow(!show)}>Ingredients</button>
           {show && <RecipeDetails ingredients={props.ingredients} />}
         </div>
        
    )
}

export default Recipe
