import {
    Grid,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import SideNav from './SideNav';
import Heading from './Heading';
import Text from './Text';
import PropTypes from 'prop-types';

const PlaceSection = (props) => {

    const { place, firstLink, secondLink, general, second, img, contentGeneral, contentSecond } = props;

    return (
        <>
        { props ?
                <Grid.Column className="page">
                    <Sidebar.Pushable className="place" as={Segment}>
                        {general && second ?
                            <SideNav
                                title={place}
                                link_title1={general.title.charAt(0).toUpperCase() + general.title.slice(1)}
                                link_route1={`/places/${place.toLowerCase()}/${firstLink.toLowerCase()}`}
                                link_title2={second.title.charAt(0).toUpperCase() + second.title.slice(1)}
                                link_route2={`/places/${place.toLowerCase()}/${secondLink.toLowerCase()}`} />
                            :
                            ''}
                        <Sidebar.Pusher>
                            {contentGeneral ?
                                <Segment className="place__content" basic>
                                    <Heading nomarg big title={place.charAt(0).toUpperCase() + place.slice(1)} bold />
                                    <Heading nomarg title={general.title} bold />
                                    <div className="place__hero flex">
                                        <img className="place__hero-img" src={img} alt={place}></img>
                                        <Text nomarg padding text={general.hero} />
                                    </div>
                                    <Text small bold text={general.bold} />
                                    <Text small text={general.main} />
                                </Segment>
                                : contentSecond ?
                                    <Segment className="place__content" basic>
                                        <Heading nomarg big title={place.charAt(0).toUpperCase() + place.slice(1)} bold />
                                        <Heading nomarg title={second.title} bold />
                                        <div className="place__hero flex">
                                            <img className="place__hero-img" src={img} alt={place}></img>
                                            <Text nomarg padding text={second.hero} />
                                        </div>
                                        <Text small bold text={second.bold} />
                                        <Text small text={second.main} />
                                    </Segment>
                                    : ''}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
                : ''
        }
        </>
    )
}

export default PlaceSection;

PlaceSection.propTypes = {
    general: PropTypes.object,
    second: PropTypes.object,
    place: PropTypes.string,
    firstLink: PropTypes.string,
    secondLink: PropTypes.string,
    img: PropTypes.any,
};

//place, firstLink, secondLink, general, second, img, contentGeneral, contentSecond