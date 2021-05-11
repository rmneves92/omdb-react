import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SidebarContainer = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding: 120px 20px;
  z-index: 2;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    height: 32px;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  @media (max-width: 1024px) {
    border-bottom: 1px solid #fff;
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fff;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const ListItem = styled(motion.li)`
  padding: 8px 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 32px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
