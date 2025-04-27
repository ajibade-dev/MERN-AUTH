import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import {logout} from '../slices/authSlices'

const Header = () => {
const {userInfo} = useSelector((state) => state.auth)

const  [logoutApiCall] = useLogoutMutation()
const dispatch = useDispatch()
const navigate = useNavigate()

const logoutHandler = async () => {
  try {
    await logoutApiCall().unwrap();
    dispatch(logout())
    navigate('/')
  } catch (err) {
    console.log(err)
  }
}



  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            MERN Auth
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                <NavDropdown title={userInfo.name} id='username'> 
                  <Nav.Link>
                  <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link as={Link} to='/logout'>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
                </>
              ) : (
                <>
                <Nav.Link as={Link} to='/login'>
                <FaSignInAlt /> Sign In
              </Nav.Link>
              <Nav.Link as={Link} to='/register'>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
                </>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
