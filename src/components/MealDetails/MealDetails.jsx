import { useLoaderData } from "react-router";

const MealDetails = () => {
    const mealsDetails = useLoaderData();
    console.log(mealsDetails.meals);
    return (
        <div>
            
        </div>
    );
};

export default MealDetails;