import React from 'react';
import './Navbar.css';

interface NavbarProps {
    selectionValue: (value: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectionValue }) => {
    return (
        <nav>
            <ul>
                <li onClick={() => selectionValue(0)}>Rain</li>
                <li onClick={() => selectionValue(1)}>Swirl</li>
            </ul>
        </nav>
    );
}

export default Navbar;
