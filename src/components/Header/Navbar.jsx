import { NavLink } from "react-router-dom";

const Navbar = () => {
   
    return (
        <div className="p-5 w-[1000px] mx-auto grid grid-cols-3 gap-5">
            <NavLink className="bg-blue-600 py-3 px-5 rounded text-white font-bold hover:bg-blue-500" to='/foods'>Foods</NavLink>
            <NavLink className="bg-blue-600 py-3 px-5 rounded text-white font-bold hover:bg-blue-500" to='/meals'>Meals</NavLink>
        </div>
    );
};

export default Navbar;