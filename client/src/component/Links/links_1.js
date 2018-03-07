import React, { Component } from "react";
import "./links.css";
import {pictures} from "./assets";

export class Links1 extends Component {
    render() {
        return (
            <div className="container-thumbs">
                <ul className="gallery">
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.youtube} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://github.com/milesbowles" className="gallery_link">
                            <img src={pictures.github} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://bootcampspot-v2.com/" className="gallery_link">
                            <img src={pictures.coding} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.amazon} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://video.vice.com/en_us?utm_source=googlead" className="gallery_link">
                            <img src={pictures.vice} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://smile.amazon.com/" className="gallery_link">
                            <img src={pictures.amazon} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://google.com/" className="gallery_link">
                            <img src={pictures.google} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.udemy.com/" className="gallery_link">
                            <img src={pictures.udemy} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.brain} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.youtube.com/" className="gallery_link">
                            <img src={pictures.linkedin} alt="" className="thumbnail"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
};