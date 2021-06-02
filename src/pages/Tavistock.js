import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import SideNav from '../components/SideNav';

const Tavistock = () => {

    return (
        <Grid.Column className="page">
            <Sidebar.Pushable className="place" as={Segment}>
                <SideNav />
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Tavistock</Header>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        </Grid.Column>
    )


}

export default Tavistock;
