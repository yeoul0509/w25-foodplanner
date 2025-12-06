import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFoodDetail } from '../api/foodApi.js'

const RDI_MAX = {
    carbohydrate: 275,
    protein: 75,
    fat: 67,
};

const NutritionBar = ({ label, value, max, unit }) => {
    const percentage = Math.min(100, (value / max) * 100);
    
    let barColor = 'bg-emerald-500';
    if (percentage > 120) {
        barColor = 'bg-red-500';
    } else if (percentage < 70) {
        barColor = 'bg-blue-400';
    }

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-700">{label} ({value}{unit})</span>
                <span className="text-sm font-medium text-gray-500">RDI 대비: {percentage.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                    className={`${barColor} h-3 rounded-full transition-all duration-700 ease-out`} 
                    style={{ width: `${percentage}%` }}
                    title={`${label}: ${value}${unit} (RDI 기준 ${max}${unit})`}
                ></div>
            </div>
        </div>
    );
};

const FoodDetail = () => {
    const { id } = useParams();
    
    const { data: food, isLoading, isError, error } = useQuery({
        queryKey: ['food', id],
        queryFn: () => getFoodDetail(id),
        enabled: !!id,
    });

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (isError) {
        return <p className="text-center mt-10">오류 발생: {error.message}</p>;
    }

    if (!food) {
        return <p className="text-center mt-10">음식 정보를 찾을 수 없습니다.</p>;
    }
    
    const nutritionData = [
        { label: '칼로리', value: `${food.calorie} kcal`, key: 'calorie' },
        { label: '탄수화물', value: `${food.carbohydrate} g`, key: 'carbohydrate' },
        { label: '단백질', value: `${food.protein} g`, key: 'protein' },
        { label: '지방', value: `${food.fat} g`, key: 'fat' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-3xl w-full">

                <div className="flex justify-center mb-6">
                    <img 
                        src={`https://picsum.photos/192/192?random=${food.id}`} 
                        alt={`${food.title} 이미지`}
                        className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-emerald-100 transform hover:scale-105 transition duration-300"
                    />
                </div>

                <div className="text-center mb-8 border-b pb-4 border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {food.title}
                    </h1>
                    <p className="text-xl font-medium text-emerald-600">
                        총 칼로리: {food.calorie} kcal
                    </p>
                    
                    <a
                        href={`https://www.youtube.com/results?search_query=레시피 ${food.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-5 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition duration-150"
                    >
                        Youtube 리뷰 검색
                    </a>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">RDI 대비 영양 성분 비율 (성인 남성 기준)</h2>
                <div className="mb-8 p-4 border border-indigo-100 rounded-lg bg-indigo-50">
                    <NutritionBar 
                        label="탄수화물" 
                        value={food.carbohydrate} 
                        max={RDI_MAX.carbohydrate} 
                        unit="g" 
                    />
                    <NutritionBar 
                        label="단백질" 
                        value={food.protein} 
                        max={RDI_MAX.protein} 
                        unit="g" 
                    />
                    <NutritionBar 
                        label="지방" 
                        value={food.fat} 
                        max={RDI_MAX.fat} 
                        unit="g" 
                    />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">영양 성분 정보 (상세)</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {nutritionData.map(item => (
                        <div key={item.key} className="bg-emerald-50 p-4 rounded-lg shadow-inner">
                            <span className="font-semibold text-gray-700">{item.label}:</span>
                            <span className="ml-2 font-bold text-emerald-800">{item.value}</span>
                        </div>
                    ))}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">음식 설명</h2>
                <div className="mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                            {food.manual}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <Link 
                        to="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                    >
                        음식 리스트로 돌아가기
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default FoodDetail;