import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function BuildCreate() {

    return (
        <div className="build-wrapper">
            <div className="gun-selection">
                <form className="gun-selection-form">
                    <h3>Select a gun</h3>
                    <select id="gun" name="gun">

                    </select>
                </form>
            </div>
        </div>
    )
}
