import React from 'react';
import "./ComponentLink.css"

const ComponentLink = (props) => {
    return (<div className="component-link-container" onClick={() => { props.setComponentView(props.data) }}>
        {props.data.title}
    </div>);
}

export default ComponentLink;