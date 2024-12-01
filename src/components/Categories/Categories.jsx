import { useLoaderData } from "react-router";
import Category from "../Category/Category";

const Categories = () => {
    const categories = useLoaderData();
    
    return (
        <div className="lg:grid grid-cols-3 gap-3 lg:w-[1200px] mx-auto">
            {
                categories.categories.map((category,idx) => <Category key={idx} category={category}/>)
            }
        </div>
    );
};

export default Categories;