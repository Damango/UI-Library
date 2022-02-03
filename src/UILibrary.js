import React, { useState } from 'react';
import ComponentLink from './components/ComponentLink/ComponentLink';
import "./UILibrary.css"

// Imports for UI Components
import DropDownMenu from "./LibraryComponents/DropDownMenu/DropDownMenu"
import NavBar from './LibraryComponents/NavBar/NavBar';

const UILibrary = (props) => {

    let selectedButtonStyle = {
        backgroundColor: 'white',
        boxShadow: '1px 1px 2px 1px gray',
        borderColor: 'transparent',
        zIndex: 2
    }

    let componentLinks = [
        {
            title: 'Drop Down Menu',
            component: <DropDownMenu dropDownOptions={['Twisted Fate', 'Veigar', 'Orianna', 'Something']} />,
            usage: [],
            properties: [
                {
                    name: 'Options',
                    default: '[Option 1, Option 2, Option 3, Option 4',
                    type: 'Array',
                    description: 'An array of text options to select'
                }
            ]
        },
        {
            title: 'Navigation Bar',
            component: <NavBar navLinks={[
                {text: 'Dashboard', link:'https://google.com',subLinks: [{text: 'Computer Science', link: 'https://google.com'},{text: 'Calculus', link: 'https://google.com'},{text: 'Electrical Engineering', link: 'https://google.com'},{text: 'Computer Science', link: 'https://google.com'},{text: 'Calculus', link: 'https://google.com'},{text: 'Electrical Engineering', link: 'https://google.com'}]},
                {text: 'Customization', link:'https://google.com'},
                {text: 'Templates', link:'https://google.com', subLinks:[{text: 'Angular', link:"https://google.com"}, {text: 'React', link:"https://google.com"},{text: 'Vue', link:"https://google.com"}]}, 
                {text: 'Blog', link:'https://google.com'},
                {text: 'Component API', link:'https://google.com'}
            ]}/>,
            usage: [],
            properties: [
                {
                    name: 'Collapseable',
                    default: 'false',
                    type: 'boolean',
                    description: 'A boolean to determine if the navigation bar is collapseable or not'
                }
            ]

        }
    ]





    const [componentView, setComponentView] = useState(componentLinks[0])

    const [fullCompView, setFullCompView] = useState('inline-block')

    const [componentInfoPage, setComponentInfoPage] = useState('properties')



    function handleFullView() {
        (fullCompView === 'none' ? setFullCompView('inline-block') : setFullCompView('none'))

    }


   function renderInfoPage(){
       if(componentInfoPage === 'usage'){
           return(<div className="component-usage-container"></div>)
       }
       else if(componentInfoPage === 'properties'){
            return(<div className="component-properties-container">
            {componentView.properties.map((property) => <div className="component-property-container">
                <div className="component-property-name-container">
                    <div className="component-property-name">{property.name}</div>
                </div>
                <div className="component-property-details-container">
                    <div className="property-type-default">Default - {property.default} | {property.type}</div>
                    <div className="property-description">{property.description}</div>
                </div>
            </div>)}
        </div>)
       }
   }


   function renderSelectedButton(element){
       if(componentInfoPage ===  element){
        return({display: 'block'})
       }
   }







    return (<div className="ui-library-app-container">

        <div className='component-nav-bar-container'>
            <div className="component-nav-bar-logo">Phidom <i class="fas fa-columns" onClick={() => { handleFullView() }}></i></div>
            <div className='component-nav-bar-content-wrapper'>
                <div className='component-nav-bar-links-container'>
                    {componentLinks.map((link) => <ComponentLink data={link} setComponentView={setComponentView} componentView={componentView} />)}
                </div>
            </div>


        </div>
        <div className='main-view-container'>

            <div className='component-information-container' style={{ display: fullCompView }}>

                <div className='component-title-container'>{componentView.title}</div>
                <div className='component-description-container'>A small description for the user to describe the basic function of the Component.</div>

                <div className='component-nav-buttons-container'>
                    <div className='component-nav-button' onClick={() => {setComponentInfoPage('usage')}} style={(componentInfoPage === 'usage' ? selectedButtonStyle : {})}>
                        Usage
                        <span className='nav-button-underline'></span>
                    </div>
                    <div className='component-nav-button' onClick={() => {setComponentInfoPage('properties')}} style={(componentInfoPage === 'properties' ? selectedButtonStyle : {})}>
                        Properties
                        <span className='nav-button-underline'></span>
                    </div>
                </div>

                <div className="component-data-wrapper">
                    <div className="component-data-header">{componentInfoPage.toUpperCase()}</div>
                    {renderInfoPage()}
                </div>

            </div>

            <div className='component-preview-container'>
                {componentView.component}
            </div>

        </div>


    </div>);
}

export default UILibrary;