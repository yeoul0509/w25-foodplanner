import { Link } from 'react-router-dom'

export default function FoodCard({ food }) {
  return (
    <Link to={`/food/${food.id}`} className="flex p-3 rounded-xl hover:bg-gray-200 transition duration-150 shadow-sm hover:shadow-md bg-white w-full">
      <div className="flex-shrink-0 mr-4">
        <img 
            src={`https://picsum.photos/100/100?random=${food.id}`} 
            alt={`${food.title} 음식 이미지`}
            className="w-32 h-32 mb-2"
        />
        </div>
      
      <div className="flex-grow min-w-0">
        <div className="text-lg font-semibold text-gray-800 truncate">
          {food.title}
        </div>
        <div className="text-sm text-gray-500 truncate">
          {food.calorie} kal
        </div>
      </div>
      
    </Link>
  )
}