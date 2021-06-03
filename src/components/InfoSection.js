import PropTypes from 'prop-types';
import {
    Grid,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import SideNav from './SideNav';
import Heading from './Heading';
import Text from './Text';

const InfoSection = (props) => {

    const { general, second, third, contentGeneral, contentSecond, contentThird } = props;

    return (
        <>
            
                <Grid.Column className="page">
                    <Sidebar.Pushable className="place" as={Segment}>
                        {general && second && third ?
                            <SideNav
                                title={"Infocentres"}
                                link_title1={general.title}

                                link_route1="/info/general"

                                link_title2={second.title}

                                link_route2="/info/tourist"

                                link_title3={third.title}

                                link_route3="/info/community"
                                />
                            :
                            ''}
                        <Sidebar.Pusher>
                            {contentGeneral  ? 
                            <Segment basic>
                                <Heading nomarg big title="Information centres" bold />
                                <Heading nomarg title={general.title} bold />
                                <div className="place__hero">
                                    <Text nomarg padding text={general.desc} />
                                </div>
                                {general.centres.map(function (item) {
                                    return (
                                        <div className="m--b" key={item.title}>
                                            <Text bold nomarg text={item.title} />
                                            <Text text={'Tel: ' + item.tel} />
                                        </div>
                                    )
                                })}
                            </Segment>
                            : contentSecond ? 
                                <Segment basic>
                                    <Heading nomarg big title="Information centres" bold />
                                    <Heading nomarg title={second.title} bold />
                                    <div className="place__hero">
                                        <Text nomarg padding text={second.desc} />
                                    </div>
                                    {second.centres.map(function (item) {
                                        return (
                                            <div className="m--b" key={item.title}>
                                                <Text bold nomarg text={item.title} />
                                                <Text text={'Tel: ' + item.tel} />
                                            </div>
                                        )
                                    })}
                                </Segment>
                            : contentThird ? 
                                    <Segment basic>
                                        <Heading nomarg big title="Information centres" bold />
                                        <Heading nomarg title={third.title} bold />
                                        <div className="place__hero">
                                            <Text nomarg padding text={third.desc} />
                                        </div>
                                        {third.centres.map(function (item) {
                                            return (
                                                <div className="m--b" key={item.title}>
                                                    <Text bold nomarg text={item.title} />
                                                    <Text text={'Tel: ' + item.tel} />
                                                </div>
                                            )
                                        })}
                                    </Segment>
                            : ''}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
               
        </>

    );
}

export default InfoSection;

InfoSection.propTypes = {
    general: PropTypes.object,
    second: PropTypes.object,
    third: PropTypes.object,
};