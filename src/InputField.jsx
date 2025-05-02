import { useState } from "react";
export default function InputField() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]
  const[ingredient,setIngredient] = useState(ingredients);
  const ingredientsListItems = ingredient.map(ingredient => (
      <li key={ingredient}>{ingredient}</li>
  ))

  function handleSubmit(event) {
      
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const newIngredient = formData.get("ingredient")
      
      setIngredient(prevIngredient=>[...prevIngredient,newIngredient]);
      
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input type="text" aria-label="Add ingredient" 
        placeholder="e.g. oregano"
        name="ingredient"
        />
        <button type="submit" >Add ingredient</button>
      </form>
      {ingredientsListItems}
    </main>
  )
}
