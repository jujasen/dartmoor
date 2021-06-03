import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/widecombe.jpg';
import general from '../../data/widecombe/general.json';
import second from '../../data/widecombe/fair.json';


const WidecombeFair = () => {

    return (
        <>
            <PlaceSection 
            place="widecombe" 
            firstLink="general" 
            secondLink="fair" 
            general={general} 
            second={second} 
            img={Image} 
            contentSecond/>
        </>
    )
}

export default WidecombeFair;
