import { Link } from 'react-router-dom';
import { useState } from 'react';

const SubNavMobile = (props) => {
    const { onChildClick } = props;
    const [active, setActive] = useState(null)

    return (
        <>
            <nav className="subnav">
                <div className="f f--j-space f--a-center">
                        <div className="subnav__mobile f f--col f--j-start">
                            <div className="subnav__nav ">
                                <Link
                                    onClick={() => {
                                        setActive('tavistock');
                                        onChildClick();
                                    }}
                                    className={`subnav__link ${active === 'tavistock' ? 'subnav__link--active' : ''}`}
                                    to='/places/tavistock/general'>
                                    Tavistock
                                </Link>
                                <Link
                                    onClick={() => {
                                        setActive('postbridge');
                                        onChildClick();
                                    }}
                                    className={`subnav__link ${active === 'postbridge' ? 'subnav__link--active' : ''}`}
                                    to='/places/postbridge'>
                                    Post Bridge
                                </Link>
                                <Link
                                    onClick={() => {
                                        setActive('okehampton');
                                        onChildClick();
                                    }}
                                    className={`subnav__link ${active === 'okehampton' ? 'subnav__link--active' : ''}`}
                                    to='/places/okehampton'>
                                    Okehampton
                                </Link>
                                <Link
                                    onClick={() => {
                                        setActive('widecombe');
                                        onChildClick();
                                    }}
                                    className={`subnav__link ${active === 'widecombe' ? 'subnav__link--active' : ''}`}
                                    to='/places/widecombe'>
                                    Widecombe
                                </Link>
                                <Link
                                    onClick={() => {
                                        setActive('buckfastleigh');
                                        onChildClick();
                                    }}
                                    className={`subnav__link p--none ${active === 'buckfastleigh' ? 'subnav__link--active' : ''}`}
                                    to='/places/buckfastleigh'>
                                    Buckfastleigh
                                </Link>
                            </div>
                        </div>
                </div>
            </nav>

        </>
    )


}

export default SubNavMobile;