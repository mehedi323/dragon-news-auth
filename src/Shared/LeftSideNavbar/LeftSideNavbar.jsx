import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import { FaCalendar } from "react-icons/fa";
import leftSideNewsPicture1 from '.././../assets/1.png'
import leftSideNewsPicture2 from '.././../assets/2.png'
import leftSideNewsPicture3 from '.././../assets/3.png'


const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl mt-3 font-semibold">All Categories</h2>
            {
                categories.map(categorie => <Link
                    className="block ml-4 text-xl font-medium"
                    key={categorie.id}>{categorie.name}
                </Link>)
            }
            <div>
                <div className="mb-6">
                    <img className="mx-auto" src={leftSideNewsPicture1} alt="" />
                    <h1 className=" text-xl mx-3 text-justify font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center font-medium justify-center mt-2">
                        <p className="font-medium">Sports</p>
                        <FaCalendar  className="mx-2 text-2xl"></FaCalendar>
                        <span className="text-[#9F9F9F]">{moment().format(" MMMM Do, YYYY ")}</span>
                    </div> 
                </div>
                <div className="mb-6">
                    <img className="mx-auto" src={leftSideNewsPicture2} alt="" />
                    <h1 className=" text-xl mx-3 text-justify font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center font-medium justify-center mt-2">
                        <p className="font-medium">Sports</p>
                        <FaCalendar  className="mx-2 text-2xl"></FaCalendar>
                        <span className="text-[#9F9F9F]">{moment().format(" MMMM Do, YYYY ")}</span>
                    </div> 
                </div>
                <div className="mb-6">
                    <img className="mx-auto" src={leftSideNewsPicture3} alt="" />
                    <h1 className=" text-xl mx-3 text-justify font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className="flex items-center font-medium justify-center mt-2">
                        <p className="font-medium">Sports</p>
                        <FaCalendar  className="mx-2 text-2xl"></FaCalendar>
                        <span className="text-[#9F9F9F]">{moment().format(" MMMM Do, YYYY ")}</span>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default LeftSideNavbar;