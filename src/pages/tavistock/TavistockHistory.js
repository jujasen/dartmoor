import {
    Grid,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import SideNav from '../../components/SideNav';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Image from '../../img/tavistock.jpg';
import general from '../../data/tavistock/general.json';
import second from '../../data/tavistock/history.json';


const TavistockHistory = () => {

    const place = 'Tavistock';
    const firstLink = 'general';
    const secondLink = 'history';

    // const mainText = general.main.match(/.{1,.}/g);
    // console.log(general, mainText)

    return (
        <Grid.Column className="page">
            <Sidebar.Pushable className="place" as={Segment}>
                {general && second ?
                    <SideNav 
                    title={place} 
                    link_title1={general.title} 
                    link_route1={`/places/${place.toLowerCase()}/${firstLink}`}
                    link_title2={second.title}
                    link_route2={`/places/${place.toLowerCase()}/${secondLink}`} />
                    :
                    ''}
                <Sidebar.Pusher>
                    <Segment basic>
                        <Heading nomarg big title={place} bold/>
                        <Heading nomarg title={second.title} bold />
                        <div className="place__hero f f--a-center m--b">
                            <Text nomarg padding text={second.hero}/>
                            <img className="place__hero-img" src={Image} alt={place}></img>
                        </div>
                        <Text small bold text={second.bold}/>
                        {}
                        <Text small text={second.main} />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>
    )
}

export default TavistockHistory;
