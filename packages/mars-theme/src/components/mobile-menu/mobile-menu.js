import React from "react";
import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon } from "./mobile-menu-icon";
import MenuModal from "./mobile-menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="black" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="black" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
  color: black;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
