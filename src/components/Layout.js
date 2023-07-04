import NavMenu from "./NavMenu";
import { Container } from 'reactstrap';

function Layout(props) {
    return (
        <div>
            <NavMenu />
            <Container>
                {props.children}
            </Container>
        </div>
    )
};

export default Layout;