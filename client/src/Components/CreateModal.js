import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateModal() {
    return (
        <div>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Select A Gun
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">

                                <div id="assaultCarbines">
                                    <h3 className="assaultCarbinesRow">Assault Carbines</h3>
                                    <hr />
                                    <div class="row">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/3c/ADAR2-15Image.png/120px-ADAR2-15Image.png?version=abd50ebbaf6b7659c249e658fcb792a2" /> ADAR 2-15 .233 Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/4d/TX-15_View.PNG/120px-TX-15_View.PNG?version=0f387f88f79186e302c880aefe974dbe" /> Lone Star TX-15 DML Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/72/Sks.png/120px-Sks.png?version=82d06b6bebdb360dafbb6064a1c1270b" /> Simonov Semi-Automatic Carbine SKS 7.62x39</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/08/Opsks.png/120px-Opsks.png?version=9157bd8a217433cb6017ae5e56a42171" /> Simonov Semi-Automatic Carbine SKS 7.62x39 Hunting Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/b0/Vpo209.png/320px-Vpo209.png?version=59a864d06bc1f079cf621ff4ca2e4781" /> Vepr AKM / VPO-209 336TKM Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/f0/VeprHunterImage.png/320px-VeprHunterImage.png?version=85556196c0964faf01be83ef7563bcf7" /> Vepr Hunter / VP0-101 7.62x51 Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/e9/Vpo136.png/320px-Vpo136.png?version=611b257fb2eb7dbb4699c7e5ff8bf2e6" /> Vepr KM / VP0-136 9.62x39 Carbine</li>
                                    </div>
                                </div>

                                <div id="assaultRifles">
                                    <h3 className="assaultRiflesRow">Assault Rifles</h3>
                                    <hr />
                                    <div class="row">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="" /> </li>
                                    </div>
                                </div>

                                <div id="boltActionRifles">
                                    <h3 className="boltActionRiflesRow">Bolt-action Rifles</h3>
                                    <hr />
                                    <div class="row">

                                    </div>
                                </div>

                                <div id="machineGuns">
                                    <h3 className="machineGunsRow">Machine Guns</h3>
                                    <hr />
                                    <div class="row">

                                    </div>
                                </div>

                                <div id="marksmanRifles">
                                    <h3 className="marskmanRiflesRow">Marksman Rifles</h3>
                                    <hr />
                                    <div class="row">

                                    </div>
                                </div>

                                <div id="pistols">
                                    <h3 className="pistolRow">Pistols</h3>
                                    <hr />
                                    <div className="row">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/ba/APBImage.png/120px-APBImage.png?version=31bf04d330c7e7e312efe51bdcb8f570" /> APB</li>
                                    </div>
                                </div>

                                <div id="smgs">
                                    <h3 className="smgsRow">SMGs</h3>
                                    <hr />
                                    <div class="row">

                                    </div>
                                </div>

                                <div id="shotguns">
                                    <h3 className="shotgunsRow">Shotguns</h3>
                                    <hr />
                                    <div class="row">

                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
