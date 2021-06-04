import { Link, useHistory } from "react-router-dom";

//Got help from stackoverflow: https://stackoverflow.com/questions/51803771/how-to-delay-the-redirect-of-a-react-router-link-component-for-1-second/64812668#64812668

export default function CustomLink({ to, title }) {
    const history = useHistory();

    function delayAndGo(e) {
        e.preventDefault();

        setTimeout(() => history.push(to), 300);
    }

    return (
        <Link className="sidenav__link" to={to} onClick={delayAndGo}>
            {title}
        </Link>
    );
}