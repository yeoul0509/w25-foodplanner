import { Link } from "react-router-dom";

// 메뉴의 데이터와 일정 기준을 비교하고 뱃지 태그 부여 
function getNutritionBadges(food) {
  const badges = [];

  if (food.protein >= 31) {
    badges.push({ label: "고단백", style: "bg-red-500/10 text-red-700" });
  }

  if (food.fat >= 23) {
    badges.push({ label: "고지방", style: "bg-green-500/10 text-green-700" });
  }

  return badges;
}

export default function FoodCard({ food }) {
  const nutritionBadges = getNutritionBadges(food);

  return (
    <Link 
      to={`/food/${food.id}`} 
      className="block bg-white rounded-2xl overflow-hidden shadow-xl 
                 hover:shadow-2xl hover:scale-[1.02] transition duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.imageURL} 
          alt={`${food.title} 음식 이미지`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* 고단백 / 저지방 뱃지 태그 (이미지 위) */}
        {nutritionBadges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {nutritionBadges.map((badge) => (
              <span
                key={badge.label}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.style}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 truncate">
          {food.title}
        </h3>
        
        {/* 칼로리 배지 태그 */}
        <div className="flex flex-wrap gap-2 text-sm mt-3">
          <div className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 font-medium">
            {food.calorie} kcal
          </div>
        </div>
      </div>
    </Link>
  );
}
