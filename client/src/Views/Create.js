import React from 'react';

import Building from '../Components/BuildCreate';

import BuildPlaceholder from '../Images/building-placeholder.gif';


export default function Create() {
    return (
        <div className="create-wrapper">
            <div className="create-header">
                <h1>Create a Build</h1>
            </div>
            <div className="create-landing">
                <div className="create-landing-left">
                    <h1>1. Select a weapon</h1>
                    <p>There are 76 customizable weapons currently in the game</p>
                    <h1>2. Add attachments</h1>
                    <p>With hundreds of attachments mix and match to find what works for you</p>
                    <h1>3. Share your build</h1>
                    <p>Users can view builds and rank their favorites</p>
                </div>
                <div className="create-landing-right">
                    <img src={BuildPlaceholder} alt="modding gif" />
                </div>
            </div>
            <div>
                <Building />
            </div>
        </div>
    )
}
