import general from '../../data/infocentres/general.json';
import tourist from '../../data/infocentres/tourist.json';
import community from '../../data/infocentres/community.json';
import InfoSection from '../../components/InfoSection';

const InfoCommunity = () => {

    return (
        <> 
            <InfoSection
                general={general}
                second={tourist}
                third={community}
                contentThird />
        </>
    )
}

export default InfoCommunity;
