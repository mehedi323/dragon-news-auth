import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '.././../assets/qZone1.png'
import qzone2 from '.././../assets/qZone2.png'
import qzone3 from '.././../assets/qZone3.png'


const RightSideNavbar = () => {
    return (
        <div>
            <div className="p-4 mb-4">
                <h3 className="text-2xl font-bold">Login With</h3>
                <button className="btn w-full btn-outline mt-3 ">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn w-full btn-outline mt-3 ">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-4">
                <h3 className="text-2xl font-medium">Find Us On</h3>
                <a className="flex p-4 items-center border rounded-t-lg " href="">
                    <FaFacebook className="mr-2 text-lg"></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center border-x " href="">
                    <FaTwitter className="mr-2 text-lg"></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 items-center border rounded-b-lg " href="">
                    <FaInstagram className="mr-2 text-lg"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="p-4 mb-4">
                <h3 className="text-2xl font-medium">Q-Zone</h3>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;