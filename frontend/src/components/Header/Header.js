import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { useEffect } from "react";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar bg="primary" className="p-2" style={{filter: "sepia(100%)"}} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{"fontSize":"1.5rem" , "fontFamily" : "Oregano, cursive"}}><img src="/diarylogo_navbar.png" alt="logo" height={"40px"}></img>Daydream Diary</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* Word "inline error */}
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav>
            {userInfo ? (
              <>
                <NavDropdown title={userInfo?.name} id="basic-nav-dropdown" style={{"fontSize":"1.5rem" , "fontFamily" : "Oregano, cursive"}} drop="down">
                  <NavDropdown.Item as={Link} to="/profile" style={{"fontWeight":"bold" , "fontFamily" : "Oregano, cursive"}}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler} style={{"fontWeight":"bold" , "fontFamily" : "Oregano, cursive"}}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/mynotes" style={{"fontSize":"1.5rem" , "fontFamily" : "Oregano, cursive"}}>
                  My Notes
                </Nav.Link>

              </>
            ) : (
              <Nav.Link as={Link} to="/login" style={{"fontSize":"1.5rem" , "fontFamily" : "Oregano, cursive"}}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
