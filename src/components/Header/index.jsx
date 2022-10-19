import LogoWhite from './assets/LogoWhite.png'
import { HeaderDropDown } from '../DropDownMenu'
import { css } from '@stitches/react';
import { button } from './style';

const body = css({padding: 40,})

export function Header () {

    return(
        <div className={body()}>
                <div className="logo">
                    <img src={LogoWhite} alt="" />
                </div>
            <div className="links">
                <HeaderDropDown />
                <button className={button()} >Suporte</button>
            </div>
        </div>
    );
}