import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews"; 
import CardNews from "./cardNews/CardNews";


const Home = () => {
     const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="md:col-span-2 ">
                    <h2 className="text-xl font-semibold"> Dragon News Home</h2>
                    {
                        news.map(aNews=> <CardNews 
                            key={aNews._id}
                            news={aNews}
                        ></CardNews>)
                    }

                     
                </div>
                <div  >
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;