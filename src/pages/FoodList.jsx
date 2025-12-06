import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard.jsx'

export default function FoodList({ foods }) {
  return (
    <div className='p-6'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
       {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
      </div>
    </div>
  )
}