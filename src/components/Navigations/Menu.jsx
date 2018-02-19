import React from 'react'

import SideMenu from './Menus/SideMenu'

const Menu = ({ isOpen, pageWrapId, toggleMenu }) => (
  <SideMenu
    isOpen={isOpen}
    toggleMenu={toggleMenu}
  >
    <h3 style={{ paddingTop: '50px' }} >Beers I like:</h3>
    <hr />
    <p>
      Or not ;)
    </p>
  </SideMenu>
)

Menu.propTypes = {
  isOpen: React.PropTypes.bool,
  pageWrapId: React.PropTypes.string,
  toggleMenu: React.PropTypes.func
}

export default Menu
