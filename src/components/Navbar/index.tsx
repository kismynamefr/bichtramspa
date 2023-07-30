'use client'
import {
    CodeBracketSquareIcon,
    CubeTransparentIcon,
    UserCircleIcon
} from "@heroicons/react/24/outline";
import React from "react";
import "./index.scss";

// nav list component
const navListItems = [
    {
        label: "Account",
        icon: UserCircleIcon,
    },
    {
        label: "Blocks",
        icon: CubeTransparentIcon,
    },
    {
        label: "Docs",
        icon: CodeBracketSquareIcon,
    },
];

export const NavbarComponents: React.FunctionComponent = () => {

    return (
        <>
            <input type="checkbox" id="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
            <div className="menu">
                <div className="menu-inner">
                    <div className="gallery">
                        <div className="title">
                            <p>Các Dịch Vụ Chính Của Chúng Tôi</p>
                        </div>
                        <div className="images">
                            <a className="image-link" href="#">
                                <div className="image" data-label="Star">
                                    <img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt="" />
                                </div>
                            </a>
                            <a className="image-link" href="#">
                                <div className="image" data-label="Sun">
                                    <img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt="" />
                                </div>
                            </a>
                            <a className="image-link" href="#">
                                <div className="image" data-label="Tree"
                                ><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt="" />
                                </div>
                            </a>
                            <a className="image-link" href="#">
                                <div className="image" data-label="Sky">
                                    <img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NavbarComponents;