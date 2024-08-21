import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"

const Logo = () => {

    const navigate = useNavigate('/catalogo')

    const handleLogoClick = () => {
        navigate('/catalogo');
    }
    return(
        <div className='cursor-pointer' onClick={handleLogoClick}>
            <img src={logo} alt="" width={104} height={61} />
        </div>
    );
}

export default Logo;