import PropTypes from 'prop-types';
import {
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react'
import { useState } from 'react';
import CustomLink from './CustomLink';

const SideNav = (props) => {
    const { title, link_title1, link_route1, link_title2, link_route2, link_title3, link_route3 } = props;

    const [visible, setVisible] = useState(false)

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            {visible && props ?
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
                        <p className="sidenav__title">{title}</p>
                        <CustomLink title={link_title1} to={link_route1}/>
                        <CustomLink title={link_title2} to={link_route2} />
                        {link_route3 && link_title3 ?
                            <CustomLink title={link_title3} to={link_route3} />
                            :
                            ''
                        }
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

SideNav.propTypes = {
    title: PropTypes.string,
    link_title1: PropTypes.string,
    link_title2: PropTypes.string,
    link_title3: PropTypes.string,
    link_route1: PropTypes.string,
    link_route2: PropTypes.string,
    link_route3: PropTypes.string
};
