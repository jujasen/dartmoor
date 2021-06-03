import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/okehampton.jpg';
import general from '../../data/okehampton/general.json';
import second from '../../data/okehampton/castle.json';


const OkehamptonGeneral = () => {

    return (
        <>
            <PlaceSection
                place="okehampton"
                firstLink="general"
                secondLink="castle"
                general={general}
                second={second}
                img={Image}
                contentGeneral />
        </>
    )
}

export default OkehamptonGeneral;
