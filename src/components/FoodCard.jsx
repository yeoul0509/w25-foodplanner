import { Link } from 'react-router-dom'

export default function FoodCard({ food }) {
  const nutritionBadges = [
    { label: '칼로리', value: `${food.calorie} kcal`, color: 'bg-yellow-500/10 text-yellow-700' },
    { label: '단백질', value: `${food.protein} g`, color: 'bg-red-500/10 text-red-700' },
    { label: '지방', value: `${food.fat} g`, color: 'bg-green-500/10 text-green-700' },
  ];

  return (
    <Link 
      to={`/food/${food.id}`} 
      className="block bg-white rounded-2xl overflow-hidden shadow-xl 
                 hover:shadow-2xl hover:scale-[1.02] transition duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`https://picsum.photos/300/200?random=${food.id}`} 
          alt={`${food.title} 음식 이미지`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">
          {food.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 text-sm mt-3">
          <div className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 font-medium">
            칼로리: {food.calorie} kcal
          </div>
        </div>
      </div>
    </Link>
  )
}