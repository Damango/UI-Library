import React, { useState } from 'react';
import ComponentLink from './components/ComponentLink/ComponentLink';
import "./UILibrary.css"

// Imports for UI Components
import DropDownMenu from "./LibraryComponents/DropDownMenu/DropDownMenu"
import NavBar from './LibraryComponents/NavBar/NavBar';

const UILibrary = (props) => {

    let componentLinks = [
        {
            title: 'Drop Down Menu',
            component: <DropDownMenu options={['Twisted Fate', 'Veigar', 'Orianna', 'Something']} />,
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
            component: <NavBar />,
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



    function handleFullView() {
        (fullCompView === 'none' ? setFullCompView('inline-block') : setFullCompView('none'))

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
                    <div className='component-nav-button'>
                        Usage
                        <span className='nav-button-underline'></span>
                    </div>
                    <div className='component-nav-button'>
                        Properties
                        <span className='nav-button-underline'></span>
                    </div>
                </div>

                <div className="component-data-wrapper">
                    <div className="component-data-header">Properties</div>
                    <div className="component-properties-container">
                        {componentView.properties.map((property) => <div className="component-property-container">
                            <div className="component-property-name-container">
                                <div className="component-property-name">{property.name}</div>
                            </div>
                            <div className="component-property-details-container">
                                <div className="property-type-default">Default - {property.default} | {property.type}</div>
                                <div className="property-description">{property.description}</div>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>

            <div className='component-preview-container'>
                {componentView.component}
            </div>

        </div>


    </div>);
}

export default UILibrary;