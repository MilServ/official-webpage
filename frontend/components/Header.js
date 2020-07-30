import { useState } from "react";
import Link from "next/link";
// import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md" className="navbar">
        <Link href="/">
          <NavLink className="font-weight-bold">
            <NavbarBrand className="navBarLogo">
              <img
                //Try makeStyle classes to ref image within file
                src="../static/images/owllogo.jpg"
                width="45px"
                height="40px"
                alt="React Bootstrap logo"
              />
              MILSERV
              <span className="bottom-logo-text">
                An American Craft Deliveries Company
              </span>
            </NavbarBrand>
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navtoggler">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                PARTNERS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>MAKERS</DropdownItem>
                <Link href="/retailers">
                  <DropdownItem>RETAILERS</DropdownItem>
                </Link>
                <Link href="/distributors">
                  <DropdownItem>DISTRIBUTORS</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/index#partner">
                  <DropdownItem>PARTNER WITH US</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                VETERANS
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/veteran-jobs">
                  <DropdownItem>JOBS</DropdownItem>
                </Link>

                <DropdownItem>SKILLBRIDGE</DropdownItem>
                <DropdownItem>GIVING BACK</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                NEWS
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/blogs">
                  <DropdownItem>BLOG</DropdownItem>
                </Link>
                <DropdownItem>PRESS RELEASES</DropdownItem>
                <DropdownItem>STAY CONNECTED</DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>Partner with us</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link href="/contact">
              <NavItem className="listItems">CONTACT</NavItem>
            </Link>
            <Link href="/about">
              <NavItem className="listItems">ABOUT</NavItem>
            </Link>

            {isAuth() && isAuth().role === 0 && (
              <Link href="/user">
                <NavItem className="listItems">
                  {" "}
                  {`${isAuth().name}'s Portal`}
                </NavItem>
              </Link>
            )}

            {isAuth() && isAuth().role === 1 && (
              <Link href="/admin">
                <NavItem className="listItems">
                  <FontAwesomeIcon icon={faLaptopCode} />{" "}
                  {`${isAuth().name}'s Portal`}
                </NavItem>
              </Link>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  className="signout"
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  <FontAwesomeIcon icon={faDoorOpen} /> Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
