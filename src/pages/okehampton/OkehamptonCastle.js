import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/okehampton.jpg';
import general from '../../data/okehampton/general.json';
import second from '../../data/okehampton/castle.json';


const OkehamptonCastle = () => {

    return (
        <>
            <PlaceSection
                place="okehampton"
                firstLink="general"
                secondLink="castle"
                general={general}
                second={second}
                img={Image}
                contentSecond />
        </>
    )
}

export default OkehamptonCastle;
