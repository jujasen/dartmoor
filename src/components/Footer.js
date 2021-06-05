import { Link } from 'react-router-dom';
import Logo from '../img/logo-white.svg'

const Footer = () => {


    return (
        <footer className="footer padded">
            <div className="flex flex--j-space flex--a-center">
                <img className="footer__logo" src={Logo} alt="Dartmoor" />
                <nav className="f f--j-center">
                    <div className="m--r">
                        <Link className="footer__link footer__link--main" to='/'>
                            Home
                </Link>
                        <Link className="footer__link footer__link--main" to='/info/general'>
                            Information centres
                </Link>
                    </div>
                    <div>
                        <p className="footer__link footer__link--main">Places</p>
                        <Link className="footer__link" to='/places/tavistock/general'>
                            Tavistock
                    </Link>
                        <Link className="footer__link" to='/places/postbridge/general'>
                            Post Bridge
                    </Link>
                        <Link className="footer__link" to='/places/okehampton/general'>
                            Okehampton
                    </Link>
                        <Link className="footer__link" to='/places/widecombe/general'>
                            Widecombe
                    </Link>
                        <Link className="footer__link" to='/places/buckfastleigh/general'>
                            Buckfastleigh
                    </Link>
                    </div>
                </nav>
            </div>
            <p className="footer__info">All images from <a href="https://pixabay.com/">Pixabay</a></p>

        </footer>
    )
}

export default Footer;
