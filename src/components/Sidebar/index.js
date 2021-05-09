import React from "react";
import * as S from "./styles";

const Sidebar = (props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <S.SidebarContainer>
      <S.Nav>
        <S.List
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <S.ListItem variants={item}>
            <S.NavLink to="/">Home</S.NavLink>
          </S.ListItem>

          {/* <S.ListItem variants={item}>
            <S.NavLink to="/catalog">Catálogo</S.NavLink>
          </S.ListItem> */}
          <S.ListItem variants={item}>
            <S.NavLink to="/details">Última visita</S.NavLink>
          </S.ListItem>
        </S.List>
      </S.Nav>
    </S.SidebarContainer>
  );
};

export default Sidebar;
