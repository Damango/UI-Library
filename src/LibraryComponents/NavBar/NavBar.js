import React, {useState} from 'react';
import "./NavBar.css"
import NavLink from "./NavLink/NavLink"

const NavBar = (props) => {

    const [linkDropDownState, setLinkDropDownState] = useState(false)



function renderFooter(){
    if(props.footer){
        return(<div className='nav-bar-footer-container'>{props.footer.text}</div>)
    }
}

function renderCollapseButton(){
    if(props.collapseable){
        return(<i className="fas fa-angle-double-left"></i>)
    }
}

  

    
        return (<div className='phi-nav-bar-container'>
        <div className='nav-bar-logo-container'>LOGO {renderCollapseButton()}</div>
        <div className='nav-bar-links-container'>
            {props.navLinks.map((link) => 
                <NavLink data={link}/>
            )}
        </div>

        {renderFooter()}
    </div>);


   
}

NavBar.defaultProps = {
    navLinks: [
        {text: 'Dashboard', link:'https://google.com', subLinks: [{text: 'Computer Science', link: 'https://google.com'},{text: 'Calculus', link: 'https://google.com'},{text: 'Electrical Engineering', link: 'https://google.com'}]},
        {text: 'Customization', link:'https://google.com'},
        {text: 'Templates', link:'https://google.com'}, 
        {text: 'Blog', link:'https://google.com'},
        {text: 'Component API', link:'https://google.com'}
    ],
    footer: {text: 'Settings', link:"https://github.com"},
    collapseable: true
}

export default NavBar;