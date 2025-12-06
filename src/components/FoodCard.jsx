import { Link } from 'react-router-dom'

export default function FoodCard({ food }) {
  return (
    <Link to={`/food/${food.id}`} >
      <img 
        src={`https://picsum.photos/100/100?random=${food.id}`} 
        alt={`${food.title} 음식 이미지`}
      />
      <div>{food.title}</div>
    </Link>
  )
}