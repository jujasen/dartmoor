import {
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = (props) => {
    const { title, link_title1, link_route1, link_title2, link_route2 } = props;

    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            {visible ?
                <div>
                    <Sidebar
                        className="sidenav"
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <div className="sidenav__line"></div>
                        <p className="sidenav__title">Tavistock</p>
                        <Link className="sidenav__link" to="/">General</Link>
                        <Link className="sidenav__link" to="/">History</Link>
                    </Sidebar>
                    <Icon
                        className="sidenav__toggle sidenav__toggle--clicked"
                        size="big"
                        name='caret square left outline'
                        onClick={handleToggle} />
                </div>
                :
                <Icon
                    className="sidenav__toggle"
                    size="big"
                    name='caret square right outline'
                    onClick={handleToggle} />
            }


        </>
    )


}

export default SideNav;
