import PlaceSection from '../../components/PlaceSection';
import Image from '../../img/postbridge.jpg';
import general from '../../data/postbridge/general.json';
import second from '../../data/postbridge/clapperbridge.json';


const PostbridgeBridge = () => {

    return (
        <>
            <PlaceSection
                place="postbridge"
                firstLink="general"
                secondLink="clapperbridge"
                general={general}
                second={second}
                img={Image}
                contentSecond />
        </>
    )
}

export default PostbridgeBridge;
