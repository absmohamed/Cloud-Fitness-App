import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';


const items = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blog', path: '/blog'},
    {name: 'Contact', path: '/contact'}
];

const Sidebar = () => {
    const location = useLocation();
    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Top navigation">
            <SideNavItems>
            {items.map(i => (
                <SideNavLink
                  isActive={
                    location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                  }
                  element={Link}
                  to={i.path}
                  key={i.name}
                >
                  {i.name}
                </SideNavLink>
              ))}
            </SideNavItems>
        </StyledSideNav>
    
      );
  };


export default Sidebar