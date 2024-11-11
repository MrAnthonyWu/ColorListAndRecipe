import React from 'react'
import IngredientList from './IngredientList'
import Instructions from './Instructions'

export default function Recipe({name, ingredients, steps}) {
  return (
    <section id={name.toLowerCase()}>
        <h1>{name}</h1>
        <IngredientList list={ingredients}></IngredientList>
        <Instructions title="Cooking Instructions" steps={steps}></Instructions>
    </section>
  )
}
