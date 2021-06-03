import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/tavistock.jpg';
import general from '../../data/tavistock/general.json';
import second from '../../data/tavistock/history.json';


const TavistockHistory = () => {

    return (
        <>
            <PlaceSection
                place="tavistock"
                firstLink="general"
                secondLink="history"
                general={general}
                second={second}
                img={Image}
                contentSecond />
        </>
    )
}

export default TavistockHistory;
