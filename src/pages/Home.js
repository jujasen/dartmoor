import { Icon } from 'semantic-ui-react';
import Heading from '../components/Heading';
import ImageLink from '../components/ImageLink';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Buckfastleigh from '../img/buckfastleigh.jpg';
import Tavistock from '../img/tavistock.jpg';
import Postbridge from '../img/postbridge.jpg';
import Okehampton from '../img/okehampton.jpg';
import Widecombe from '../img/widecombe.jpg';

const Home = () => {
    

    return (
        <>
            <div className="page">
                <section className="padded p--b p--t m--b landing f f--col f--j-space">
                    <h1 className="landing__title">Nature at it's best</h1>
                    <div className="f f--j-center f--a-center">
                        <p className="landing__info m--r-s">scroll</p>
                        <Icon size="large" className="block landing__icon" name="hand point down outline" />
                    </div>
                </section>
                <section className="padded">
                    <Heading title="Places in Dartmoor" bold dark center/>
                    <ImageLink title="Tavistock" link="places/tavistock/general" img={Tavistock} />
                    <ImageLink title="Post Bridge" link="places/postbridge/general" img={Postbridge} />
                    <ImageLink title="Okehampton" link="places/okehampton/general" img={Okehampton} />
                    <ImageLink title="Widecombe" link="places/widecombe/general" img={Widecombe} />
                    <ImageLink title="Buckfastleigh" link="places/buckfastleigh/general" img={Buckfastleigh} />
                </section>
                <section className="padded">
                    <Heading title="Where to learn more" bold dark center />
                    <Link to="/info/general">
                        <Button center title="Information centers" />
                    </Link>
                </section>
            </div>
        </>
    )
}

export default Home;
