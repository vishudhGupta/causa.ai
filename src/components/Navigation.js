import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import AboutDropdown from './AboutDropdown'
import ServicesDropdown from './ServicesDropdown'
import DocumentDropdown from './DocumentDropdown'
import NoticeDropdown from './NoticeDropdown'
import MegistrateDropdown from './MegistrateDropdown'

import './CssFiles/Navigation.css'
const Navigation = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const [dropdown4, setDropdown4] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
          setDropdown1(false);
        } else {
          setDropdown1(true);
        }
      };
      const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
          setDropdown1(false);
        } else {
          setDropdown1(false);
        }
      };
    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(true);
        }
      };
      const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(false);
        }
      };
    const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
          setDropdown3(false);
        } else {
          setDropdown3(true);
        }
      };
      const onMouseLeave3 = () => {
        if (window.innerWidth < 960) {
          setDropdown3(false);
        } else {
          setDropdown3(false);
        }
      };
    const onMouseEnter4 = () => {
        if (window.innerWidth < 960) {
          setDropdown4(false);
        } else {
          setDropdown4(true);
        }
      };
      const onMouseLeave4 = () => {
        if (window.innerWidth < 960) {
          setDropdown4(false);
        } else {
          setDropdown4(false);
        }
      };
  return (
    <>
        <nav className='navbar'>
           
            {/* <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />   
            </div>   */}
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>Causa.AI</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>ABOUT COURT <i className='fas fa-caret-down'/></Link>
                    {dropdown && <AboutDropdown />} 
                </li>

                
                <li className='nav-item'>
                    <Link to='/DistrictCourts' className='nav-links' onClick={closeMobileMenu}>DISTRICT COURT</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/HighCourt' className='nav-links' onClick={closeMobileMenu}>HIGH COURT</Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter1}
                onMouseLeave={onMouseLeave1}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>SERVICES <i className='fas fa-caret-down'/></Link>
                    {dropdown1 && <ServicesDropdown />} 
                </li>
                <li className='nav-item'>
                    <Link to='#' className='nav-links' onClick={closeMobileMenu}>INDIA CODE</Link>
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter2}
                onMouseLeave={onMouseLeave2}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>DOCUMENTS <i className='fas fa-caret-down'/></Link>
                    {dropdown2 && <DocumentDropdown />} 
                </li>
                <li className='nav-item'
                  onMouseEnter={onMouseEnter3}
                  onMouseLeave={onMouseLeave3}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>NOTICES <i className='fas fa-caret-down'/></Link>
                    {dropdown3 && <NoticeDropdown />} 
                </li>
                <li className='nav-item'
                onMouseEnter={onMouseEnter4}
                onMouseLeave={onMouseLeave4}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>MAGISTRATE <i className='fas fa-caret-down'/></Link>
                    {dropdown4 && <MegistrateDropdown />} 
                </li>
            
            </ul>

        </nav>



    </>

  );
};

export default Navigation