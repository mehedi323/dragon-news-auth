import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNavbar from "../../Shared/RightSideNavbar/RightSideNavbar";
import Navbar from "../../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <div>
                        <h2 className="text-5xl">News Details</h2>
                        <p>{id}</p>
                    </div>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;