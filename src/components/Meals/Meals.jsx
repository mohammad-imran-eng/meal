import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const Meals = () => {
    const meals = useLoaderData();
    return (
        <div className="lg:w-[1200px] mx-auto grid grid-cols-3 justify-between font-bold text-2xl gap-10 p-10">
            {
                meals.meals.map((meal,idx)=> <Link className="bg-orange-500 p-5 text-white hover:bg-orange-400" key={idx}>{meal.strCategory}</Link>)
            }
        </div>
    );
};

export default Meals;