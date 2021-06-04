import { Link } from 'react-router-dom';
import { useState } from 'react';

const SubNavDesktop = () => {

    const [active, setActive] = useState(null)

    return (
        <>
            <nav className="subnav subnav--desktop">
                <div className="f f--j-end f--a-center">
                    <div className="subnav__desktop">
                        <div className="subnav__nav f f--a-center f--j-space">
                            <Link
                                onClick={() => {
                                    setActive('tavistock');
                                }}
                                className={`subnav__link subnav__link--desktop ${active === 'tavistock' ? 'subnav__link--active' : ''}`}
                                to='/places/tavistock/general'>
                                Tavistock
                                </Link>
                            <Link
                                onClick={() => {
                                    setActive('postbridge');
                                }}
                                className={`subnav__link subnav__link--desktop ${active === 'postbridge' ? 'subnav__link--active' : ''}`}
                                to='/places/postbridge/general'>
                                Post Bridge
                                </Link>
                            <Link
                                onClick={() => {
                                    setActive('okehampton');
                                }}
                                className={`subnav__link subnav__link--desktop ${active === 'okehampton' ? 'subnav__link--active' : ''}`}
                                to='/places/okehampton/general'>
                                Okehampton
                                </Link>
                            <Link
                                onClick={() => {
                                    setActive('widecombe');
                                }}
                                className={`subnav__link subnav__link--desktop ${active === 'widecombe' ? 'subnav__link--active' : ''}`}
                                to='/places/widecombe/general'>
                                Widecombe
                                </Link>
                            <Link
                                onClick={() => {
                                    setActive('buckfastleigh');
                                }}
                                className={`subnav__link subnav__link--desktop ${active === 'buckfastleigh' ? 'subnav__link--active' : ''}`}
                                to='/places/buckfastleigh/general'>
                                Buckfastleigh
                                </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SubNavDesktop;