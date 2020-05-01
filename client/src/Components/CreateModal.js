import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateModal() {
    return (
        <div>

            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#gunModal">
                Select A Gun
            </button>

            <div className="modal fade bd-example-modal-xl" id="gunModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-white" id="exampleModalLabel">Select A Gun</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="text-white" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            {/* List of guns here */}
                            <div className="container">

                                <div id="assaultCarbines">
                                    <button className="btn btn-block btn-dark dropdown-toggle assaultCarbinesRow" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Assault Carbines
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/3c/ADAR2-15Image.png/320px-ADAR2-15Image.png?version=71969832c19113a9dc2c5e9e43e643ba" /> ADAR 2-15 .233 Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/4d/TX-15_View.PNG/320px-TX-15_View.PNG?version=0f387f88f79186e302c880aefe974dbe" /> Lone Star TX-15 DML Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/72/Sks.png/320px-Sks.png?version=82d06b6bebdb360dafbb6064a1c1270b" /> Simonov Semi-Automatic Carbine SKS 7.62x39</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/08/Opsks.png/320px-Opsks.png?version=9157bd8a217433cb6017ae5e56a42171" /> Simonov Semi-Automatic Carbine SKS 7.62x39 Hunting Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/b0/Vpo209.png/320px-Vpo209.png?version=59a864d06bc1f079cf621ff4ca2e4781" /> Vepr AKM / VPO-209 336TKM Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/f0/VeprHunterImage.png/320px-VeprHunterImage.png?version=85556196c0964faf01be83ef7563bcf7" /> Vepr Hunter / VP0-101 7.62x51 Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/e9/Vpo136.png/320px-Vpo136.png?version=611b257fb2eb7dbb4699c7e5ff8bf2e6" /> Vepr KM / VP0-136 9.62x39 Carbine</li>
                                    </div>
                                </div>

                                <div id="assaultRifles">
                                    <button className="btn btn-block btn-dark dropdown-toggle assaultRiflesRow" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Assault Rifles
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/31/AK101_Image.png/320px-AK101_Image.png?version=cd0e46da96429b399a2b3f30719db6b5" /> AK-101 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/ca/Ak102image.png/320px-Ak102image.png?version=2fad724518a352ceb5ce69ba37ab6aa9" /> AK-102 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/e1/AK-103_7.62x39.png/320px-AK-103_7.62x39.png?version=793d77f0a5522f78e569f7c225042bad" /> AK-103 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/b2/AK-104Image.png/320px-AK-104Image.png?version=9cf5947c76e8c4994204f6a261342960" /> AK-104 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/8b/AK-105_5.45x39.png/320px-AK-105_5.45x39.png?version=6432fcf83ac6dadabf895808737428b4" /> AK-105 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/fe/AK-74M.png/320px-AK-74M.png?version=e32521b27b7184c7f708629de9820418" /> AK-74M 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/84/Akn.png/320px-Akn.png?version=c4afb635faea310af89927738210262e" /> AK-74N 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/0f/Akm.png/320px-Akm.png?version=028550e5aff068b11045445e6165f038" /> AKM 7.62x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/55/Akmn.png/320px-Akmn.png?version=99af3a2f3251ed4f36ffc15b8abea794" /> AKMN 7.62x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/2/2b/Akms.png/320px-Akms.png?version=60cbc290162ebca60381ac66329a6e1b" /> AKMS 7.62x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/e6/Akmsn.png/320px-Akmsn.png?version=86ce381cd6835a15bd5fbc15f5f2a4ea" /> AKMSN 7.62x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/4f/AKS-74N.png/320px-AKS-74N.png?version=050c9d1174f153b8ffcc1a542e4aee08" /> AKS-74N 5.45x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/1c/Asval.png/320px-Asval.png?version=069b60024fe5a68c2ddf947d1da1b410" /> AS VAL</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/f1/ASh_12.png/320px-ASh_12.png?version=3076f95a038b230b68c95ee5b2a08f1a" /> ASh-12 12.7x55 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/2/29/M4a1.png/320px-M4a1.png?version=12018c9dfcf8c34636eb30a3deadc660" /> Colt M4A1 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/a/ae/DS_Arms_SA-58_OSW_Para_7.62x51.png/320px-DS_Arms_SA-58_OSW_Para_7.62x51.png?version=e37e11f731bc965fd7231857027dde5b" /> DS Arms SA-58 7.62x51</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/13/DT_MDR_5.56x45_Assault_Rifle.png/320px-DT_MDR_5.56x45_Assault_Rifle.png?version=7b426f5f8dd06c54106ba65df518bbdf" /> DT MDR 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/33/DT_MDR_308.png/320px-DT_MDR_308.png?version=fda23b2eb946b23f21876534097e5b3f" /> DT MDR 7.62x51 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/5f/HK416Image.png/320px-HK416Image.png?version=a93364a4029cca899e66490ee4f8618c" /> HK 416A5 5.56x45 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/84/Aks74u.png/320px-Aks74u.png?version=a888d0864424b144eb4dd298779d9e98" /> Kalashnikov AKS-74U 5.45x39</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/19/Aks74ub.png/320px-Aks74ub.png?version=5330e12d787a568de6bceebcda407545" /> Kalashnikov AKS-74UB 5.45x39</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/b3/Aks74un.png/320px-Aks74un.png?version=8a89583c7e7e07515c44c2548a0776b3" /> Kalashnikov AKS-74UN 5.45x39</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/13/AK-74Image.png/320px-AK-74Image.png?version=ec6c5fce1fe740a6ab18a404e66819cc" /> AK-74 5.45x39 Assault Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/b3/AKS-74.png/320px-AKS-74.png?version=cfead9dff35a716e739355cff15e177c" /> AKS-74 5.45x39 Assault Rifle</li>
                                    </div>
                                </div>

                                <div id="boltActionRifles">
                                    <button className="btn btn-block btn-dark dropdown-toggle boltActionRiflesRow" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Bolt-action Rifles
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/6c/Dvl10.png/320px-Dvl10.png?version=b74b1a1f4e3de740f67dac1c4bc3e06a" /> DVL-10 Saboteur Sniper Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/4e/VPO-215_View.png/320px-VPO-215_View.png?version=fb4b18b22337107a1787dcadeb27e066" /> Molot VPO-215 .366 TKM Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/d/d4/MosinInfantryImage.png/320px-MosinInfantryImage.png?version=30838d1f221fc1965c3b314c69cbde3b" /> Mosin bolt-action Infantry Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/02/MosinInspect.png/320px-MosinInspect.png?version=76349c65a7e3150f439c9b3073664869" /> Mosin bolt-action Sniper Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/e/ea/T-5000_View.png/320px-T-5000_View.png?version=50b3433f7c6625ae565952f47e11efa0" /> Orsis T-5000 .308 Sniper Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/2/26/M700Image.png/320px-M700Image.png?version=e95e9a4c86f86ae635a22c63c3344cff" /> Remington Model 700 Sniper Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/7d/Sv98.png/320px-Sv98.png?version=56e589b52a3de7e952f7e3524b1aad17" /> SV-98 bolt-action Sniper Rifle</li>
                                    </div>
                                </div>

                                <div id="machineGuns">
                                    <button className="btn btn-block btn-dark dropdown-toggle machineGunsRow" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Machine Guns
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/c7/RPK-16.png/320px-RPK-16.png?version=3d0f8963c6cc2037b86d59afaf45b84e" /> RPK-16 5.45x39 Light Machine Gun</li>
                                    </div>
                                </div>

                                <div id="marksmanRifles">
                                    <button className="btn btn-block btn-dark dropdown-toggle marskmanRiflesRow" type="button" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Marksman Rifles
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu5">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/69/SR-25_View.png/320px-SR-25_View.png?version=47404fb0b65ac8a563eb526a4ec3a199" /> Knight's Armament Company SR-25 7.62x51</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/9b/Rsass.png/320px-Rsass.png?version=54ca9727cdf1f2f904c6ffde509c48f4" /> Remington R11 RSASS 7.62x51</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/8f/SVD-S.png/320px-SVD-S.png?version=29d19519397dd787283c0d66386fa915" /> SVDS 7.62x54 Sniper Rifle</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/6b/Vss.png/320px-Vss.png?version=39c17b7f0c35d167f69fc4c64807623c" /> Special Sniper Rifle VSS Vintorez</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/5f/M1A_Icon.png/320px-M1A_Icon.png?version=b34674be0db3bcb51a28f4b6d7ae650c" /> Springfield Armory M1A 7.62x51</li>
                                    </div>
                                </div>

                                <div id="pistols">
                                    <button className="btn btn-block btn-dark dropdown-toggle pistolRow" type="button" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pistols
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu6">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/cc/Sr1mp.png/320px-Sr1mp.png?version=ff0470ec8c47e53a826304b4d58e06e3" /> 9x21 Serdyukov Automatic Pistol SR1MP Gyurza</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/86/EFT_UpcomingM9A3.png/320px-EFT_UpcomingM9A3.png?version=5350cda8179efc2429d53045e771b220" /> Beretta M9A3 9x19 Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/d/de/Five-seveN.gif/320px-Five-seveN.gif?version=d464c1e71dd5b92b3e407743a330215b" /> FN Five-seveN MK2 5.7x28 Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/d/de/Five-seveN.gif/320px-Five-seveN.gif?version=d464c1e71dd5b92b3e407743a330215b" /> FN Five-seveN MK2 FDE Frame 5.7x28 pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/54/Glock17.png/320px-Glock17.png?version=89c9c2c1ad33d7424cfafeef3ccde117" /> GLOCK 17 9x19 Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/81/Glock18CImage.png/320px-Glock18CImage.png?version=cafa939abb658264f89bcd4961c8f6a6" /> GLOCK 18C 9x19 Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/c6/P226.png/320px-P226.png?version=71787210d2a242f9152005552232a0dc" /> P226R 9x19 Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/c4/Pb.png/320px-Pb.png?version=f117c1425b687c51dacc3a54e60cef3f" /> PB 9x18PM Silenced Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/c7/Makarovt.png/320px-Makarovt.png?version=f8bc09e59f7e324c714c0b6059fa0c9b" /> PM (t) 9x18PM Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/4c/Makarov.png/320px-Makarov.png?version=8b545bc5e6eefa6e11e1314e4c75748d" /> PM 9x18PM Pistol</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/ba/APBImage.png/320px-APBImage.png?version=52149d718c59605a5483344f6c1ddf97" /> Silenced Stechkin Automatic Pistol 9x18PM</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/8/81/Stechkin_Automatic_Pistol_9x18PM.png/320px-Stechkin_Automatic_Pistol_9x18PM.png?version=453199358a49baf6d1f167c91156cbe7" /> Stechkin Automatic Pistol 9x18PM</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/1/1b/Tt.png/320px-Tt.png?version=4b119831b3456f5b1dc8a364b3e65e81" /> TT Pistol 7.62x25 TT</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/46/TT_Pistol_7.62x25_TT_gold_2.png/320px-TT_Pistol_7.62x25_TT_gold_2.png?version=6f1aff316404633932d3765758f271a7" /> TT Pistol 7.62x25 TT Gold</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/0b/Grach.png/320px-Grach.png?version=511231a0292a8f935c5758a96acf32e9" /> Yarygin MP-443 Grach 9x19 Pistol</li>
                                    </div>
                                </div>

                                <div id="smgs">
                                    <button className="btn btn-block btn-dark dropdown-toggle smgsRow" type="button" id="dropdownMenu7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SMGs
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu7">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/0e/MP9_View.png/320px-MP9_View.png?version=ad7d7aacd310b335d590d6ea540e0bb7" /> B&T MP9 9x19 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/fd/B%26T_MP9-N_9x19_Submachinegun.png/320px-B%26T_MP9-N_9x19_Submachinegun.png?version=0fecd20e0a2a9963c60d688a0e24266a" /> B&T MP9-N 9x19 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/6/6c/P90Image.png/320px-P90Image.png?version=544e3765a9a65be84ded3c523751c759" /> FN P90 5.7x28 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/54/Mp5.png/320px-Mp5.png?version=431a1b87f89b89ffd6a37de352991eee" /> HK MP5 9x19 Submachinegun (Navy 3 Round Burst)</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/45/HK_MP5K-N.png/320px-HK_MP5K-N.png?version=b3eb7010023a30967838d5abfa5b9f5f" /> HK MP5 Kurz 9x19 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/0/02/HKMP7A1Image.png/320px-HKMP7A1Image.png?version=accb95893b9f23336a19c40f4df212da" /> HK MP7A1 4.6x30 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/52/HKMP7A2Image.png/320px-HKMP7A2Image.png?version=c6cd69734711a2f9a6f16a6c5231e2eb" /> HK MP7A2 4.6x30 Submachinegun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/4/48/Klin.png/320px-Klin.png?version=0d29d69de2166abd209a2a15f3c99e35" /> PP-9 Klin 9x18PMM SMG</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/ba/Kedr.png/320px-Kedr.png?version=035a7e67966b7796e6aa0172e5d85c9c" /> PP-91 Kedr 9x18PM SMG</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/a/a4/Kedrb.png/320px-Kedrb.png?version=b93c643f3e382c5c5c965b7173c798d3" /> PP-91-01 Kedr-B 9x18PM SMG</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/f7/Mpx.png/320px-Mpx.png?version=4b04068e7180bda3c23568402a0e4bef" /> SIG MPX 9x19 Submachine Gun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/7/70/Saiga9.png/320px-Saiga9.png?version=d93c5bc4d77e3a214175f43563b0045e" /> Saiga-9 9x19 Carbine</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/fb/Pp19.png/320px-Pp19.png?version=b5e228e4f153302dbce222f2be174a2c" /> Submachinegun 19-01 Vityaz-SN 9x19</li>
                                    </div>
                                </div>

                                <div id="shotguns">
                                    <button className="btn btn-block btn-dark dropdown-toggle shotgunsRow" type="button" id="dropdownMenu8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shotguns
                                    </button>
                                    <hr />
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu8">
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/f/fe/Mr133.png/320px-Mr133.png?version=47ea8c79e42b3f61ff3f733a638d4fa7" /> MP-133 12ga Shotgun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/3/3b/Mp153.png/320px-Mp153.png?version=5751d37871dd46a2d629a1209b717b93" /> MP-153 12ga semi-automatic Shotgun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/9/91/M870.png/320px-M870.png?version=a9e97fa14e35f27ef47ae374c634abd5" /> Remington Model 870 12ga Shotgun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/c/cd/Saiga12.png/320px-Saiga12.png?version=d6e604337029021bf6b4f2240d026503" /> Saiga 12ga Ver. 10 12/76 Shotgun</li>
                                        <li className="dropdown-item gun-dropdown"><img className="itemImage" src="https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/5/5b/Toz.png/320px-Toz.png?version=fb8930ac8a5a3d167d488663e6a5b1d7" /> TOZ-106 bolt-action Shotgun</li>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
