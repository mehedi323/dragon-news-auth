 import logo from '.././../assets/logo.png'
 import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center my-4'> 
            <img className='mx-auto' src={logo} alt="" />
            <h2 className="text">Journalism Without Fear or Favour</h2>
            <h2 className="text">{moment().format("dddd, MMMM D , YYYY")}</h2>
        </div>
    );
};

export default Header;