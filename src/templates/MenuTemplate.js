import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../context/context";
import { useLocation } from "react-router-dom";
import MenuTemplateHome from "./MenuTemplateHome";
import podpis from "../assets/img/podpisA.png";

const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 15vh;
  width: 100%;
  background: white;
  z-index: 1;
  transition: 0.3s;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.border > 0 ? "1px solid black" : "none")};
  @media (max-width: 730px) {
    flex-direction: column;
  }
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: cener;
  height: 100%;
  width: 35rem;

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem 0 1.5rem;
  width: 100%;
  height: 100%;
  @media (max-width: 730px) {
    align-items: center;
  }
`;

const StyledNavHeader = styled(Link)`
  font-size: 1.9rem;
  color: black;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.1rem;
  text-decoration: none;
  font-weight: 300;
`;

const StyledNavHeaderSmall = styled.h4`
  text-transform: capitalize;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.55rem;
  font-weight: 300;
  font-size: 1.5rem;
  color: #526163;
`;

const StyledListContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  align-items: center;
  list-style: none;
  grid-column: 2/-1;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 98%;
  }
`;

const StyledLink = styled.li`
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.fontDark};
  font-weight: 300;
  letter-spacing: 0.3rem;
  font-family: "Nunito", sans-serif;

  &.active {
    color: black;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    color: black;
    font-size: 1rem;
  }
`;

const MenuTemplate = () => {
  const { activeMenu, toggleSetActiveMenu, scrollTop } = useContext(AppContext);

  let { pathname } = useLocation();

  //const colorBgc = pathname === "/about" ? "#212529" : "transparent";
  const colorFont = pathname === "/about" ? "#F8F9FA" : "#F8F9FA";

  const display = pathname === "/" ? "none" : "flex";

  if (pathname === "/") {
    return <MenuTemplateHome></MenuTemplateHome>;
  } else
    return (
      <StyledNav isactive={activeMenu} display={display} border={scrollTop}>
        <StyledHeaderContainer>
          <StyledTextContainer podpis={podpis}>
            <StyledNavHeader to="/">Anna Maria Szpecht</StyledNavHeader>

            <StyledNavHeaderSmall>Contemporary art</StyledNavHeaderSmall>
          </StyledTextContainer>
        </StyledHeaderContainer>

        <StyledListContainer>
          <StyledList isactive={activeMenu}>
            <StyledLink>
              <StyledNavLink
                exact
                to="/"
                color={colorFont}
                onClick={toggleSetActiveMenu}
                activeClassName="active"
              >
                Home
              </StyledNavLink>
            </StyledLink>
            <StyledLink>
              <StyledNavLink
                to="/about"
                color={colorFont}
                onClick={toggleSetActiveMenu}
                activeClassName="active"
              >
                Bio
              </StyledNavLink>
            </StyledLink>
            <StyledLink>
              <StyledNavLink
                to="/gallery2D"
                onClick={toggleSetActiveMenu}
                activeClassName="active"
              >
                Artwork2D
              </StyledNavLink>
            </StyledLink>
            <StyledLink>
              <StyledNavLink
                to="/gallery3D"
                onClick={toggleSetActiveMenu}
                activeClassName="active"
              >
                Artwork3D
              </StyledNavLink>
            </StyledLink>
            <StyledLink>
              <StyledNavLink
                to="/contact"
                onClick={toggleSetActiveMenu}
                activeClassName="active"
              >
                Contact
              </StyledNavLink>
            </StyledLink>
          </StyledList>
        </StyledListContainer>
      </StyledNav>
    );
};

export default MenuTemplate;
