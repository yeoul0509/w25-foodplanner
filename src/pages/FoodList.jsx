import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard.jsx'

export default function FoodList({ foods }) {
  return (
    <>
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </>
  )
}