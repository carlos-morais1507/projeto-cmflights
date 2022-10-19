import LogoWhite from './assets/LogoWhite.svg'
import { HeaderDropDown } from '../DropDownMenu'
import { header } from '../../styles/Theme';

export function Header () {

    return(
        <div className={header()} >
            <div className="logo">
                <img src={LogoWhite} alt="" />
            </div>
            <div className="links">
                <HeaderDropDown />
                <button>Suporte</button>
            </div>
        </div>
    );
}