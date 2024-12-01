import { Link } from "react-router-dom";

const Category = ({category}) => {
    
    const {idCategory,strCategory,strCategoryDescription,strCategoryThumb} = category;
    return (
        <div className="flex">
            <div className="border my-4 grow-1 p-5">
                <h1 className="font-bold text-[18px]">Id: {idCategory}</h1>
                <img className="mb-4" src={strCategoryThumb} alt="" />
                <h3 className="text-3xl font-bold text-orange-500">{strCategory}</h3>
                
            </div>
        </div>
    );
};

export default Category;