import React from 'react'
import RecipeList from './RecipeList';
import '../css/app.css';
function App() {
  
  return (
    <RecipeList recipes={sampleRecipes}/>
    )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken \n2. Put chicken in oven\n3. Eat",
    ingredients:[
{
  id:1,
  name: 'Chicken',
  amount: '2 pounds'
},
{
  id: 2,
  name: 'Salt',
  amount: '1 Tbs'
}
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on chicken \n2. Put pork in oven\n3. Eat",
    ingredients:[
      {
        id:1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
          ]
  },
  {
    id: 3,
    name: 'Plain veal',
    servings: 3,
    cookTime: '3:45',
    instructions: "1. Put veal on tray \n2. Put veal in oven\n3. burn it. a lot.",
    ingredients:[
      {
        id:1,
        name: 'Veal',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '10 Tbs'
      }
          ]
  },
]

export default App;
