import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/buckfastleigh.jpg';
import general from '../../data/buckfastleigh/general.json';
import second from '../../data/buckfastleigh/abbey.json';


const BuckfastleighAbbey = () => {

    return (
        <>
            <PlaceSection
                place="buckfastleigh"
                firstLink="general"
                secondLink="abbey"
                general={general}
                second={second}
                img={Image}
                contentSecond />
        </>
    )
}

export default BuckfastleighAbbey;
