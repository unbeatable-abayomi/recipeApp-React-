import React, {useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';




// const App =()=>{
//   const APP_ID = "ca0de5ec";
//   const APP_KEY = "b8385036c3aa2f5ed464c36331d62dc5";
// const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

// const [recipes,setRecipes] = useState([]);
// useEffect ( ()=>{
//   getRecipes() 
// },[])
// const getRecipes = async () => {
//   const response = await fetch (exampleReq)
//   const data = await response.json()
//   setRecipes(data.hits)
//   console.log(data.hits)
 
//   // fetch(exampleReq)
//   // .then(response=>{
//   //   response.json()
//   // })

// } 
// return (
// <div className="App">
//      <h1>Hello Man </h1>
//      <form className="search-form">
//      <input className="search-bar" type="text" />
//      <button className="search-button" type="submit"> search</button>

//    </form>
//    {recipes.map(recipe =>(
//      <Recipe 
     
//      title={recipe.recipe.label} 
//      calories={recipe.recipe.calories} 
//      image={recipe.recipe.image}
     
//      />
//    ))}
//    </div>  
// )

// }
// export default App;
//

 const  App =()=> {
  const APP_ID = "ca0de5ec";
  const APP_KEY = "b8385036c3aa2f5ed464c36331d62dc5";
  const [recipes, setRecipes] = useState([]);
  const [counting, setCounting] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pizza');
 
  useEffect(()=>{
     getRecipes ();
    // console.log('Effect has been run')
  },[query])
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
 const getRecipes = async () =>{
   const response = await fetch (exampleReq);
   const data = await response.json();
   console.log(data.hits)
   setRecipes(data.hits)
 }
 const updateSearch = (e) =>{
   setSearch(e.target.value);
   console.log(search)
 }
 const getSearch = (e) =>{
   e.preventDefault();
   setQuery(search)
   setSearch('');
 }
  return (
    <div className="App color-change-3x">
     <h1 className="meal-ingridio-text">Meal-Ingridio</h1>
     <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
     <button className="search-button" type="submit"> search</button>
 
     </form>
     <div className="recipes">
     {recipes.map(recipe => ( 
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients} 
      />
      ))}
      </div>
      <p>You clicked {counting} times</p>
     <button onClick={() => setCounting(counting + 1)}>
       Click me plus
     </button>
     <button onClick={() => setCounting(counting - 1)}>
     Click me minus
   </button>
    </div>
  );
}

export default App;
