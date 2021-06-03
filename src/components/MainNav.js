import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react'
import Logo from '../img/logo-green.svg'
import SubNavDesktop from './SubNavDesktop';
import SubNavMobile from './SubNavMobile';

const MainNav = () => {

    //Method for listening to breakpoint: https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/

    const [menuClosed, setMenu] = useState(true);
    const [subMenu, setSubMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const breakpoint = 700;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);


    const handleToggle = () => {
        setMenu(!menuClosed);
    };

    return (
        <>
            <nav className="mainnav">
                <div className="f f--j-space f--a-center">
                    <Link to="/">
                        <img className="mainnav__logo" src={Logo} alt="Dartmoor"></img>
                    </Link>
                    {width < breakpoint ?
                        <div >
                            {menuClosed ?
                                <Icon size="big" className="mainnav__icon block" name="bars" onClick={handleToggle} />
                                :
                                <Icon size="big" className="mainnav__icon block" name="close" onClick={handleToggle} />
                            }
                        </div>
                        :
                        <div className="mainnav__desktop">
                            <div className="mainnav__nav f f--a--center f--j-start">
                                <Link className="mainnav__link mainnav__link--desktop" to='/'>
                                    Home
                                </Link>
                                <div 
                                onClick={() => {
                                    setSubMenu(!subMenu)
                                }}
                                className="mainnav__link mainnav__link--desktop" >
                                    Places
                                </div>

                                <Link className="mainnav__link mainnav__link--desktop p--none" to='/info/general'>
                                    Information centres
                                </Link>
                            </div>
                        </div>
                    }
                </div>
                {(width > breakpoint) && menuClosed && subMenu ? <SubNavDesktop/> : ''}

                {!menuClosed && (width < breakpoint) ?
                    <div className="mainnav__mobile f f--col f--j-start">
                        <div className="mainnav__nav ">
                            <Link onClick={handleToggle} className="mainnav__link" to='/'>
                                Home
                        </Link>
                            <div>
                                <p
                                onClick={() => {
                                    setSubMenu(!subMenu)
                                }}
                                className="mainnav__link"
                                >Places</p>
                                {subMenu ? <SubNavMobile 
                                onChildClick={handleToggle}/> : ''}
                        </div>
                            <Link onClick={handleToggle} className="mainnav__link" to='/info/general'>
                                Information centres
                        </Link>
                        </div>
                    </div>
                : ''}
                

            </nav>

        </>
    )


}

export default MainNav;