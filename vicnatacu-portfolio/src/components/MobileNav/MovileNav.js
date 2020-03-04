import React from 'react'
import { Home32, Person32, Portfolio32, Book32, Email32 } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={Home32}
            iconDescription="Home"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/about">
          <NavButton
            hasIconOnly
            renderIcon={Person32}
            iconDescription="About"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={Portfolio32}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/design">
          <NavButton
            hasIconOnly
            renderIcon={Book32}
            iconDescription="Design"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/contact">
        <NavButton
          hasIconOnly
          renderIcon={Email32}
          iconDescription="Contact"
          tooltipPosition="bottom"
        />
      </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav