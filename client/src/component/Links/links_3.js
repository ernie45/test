import React, { Component } from "react";
import "./links.css";
import {pictures} from "./assets";

export class Links3 extends Component {
    render() {
        return (
            <div className="container-thumbs">
                <ul className="gallery">
                    <li className="gallery-item">
                        <a href="https://www.soundcloud.com/" className="gallery_link">
                            <img src={pictures.sound} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://github.com/milesbowles" className="gallery_link">
                            <img src={pictures.evernote} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://skype.com/" className="gallery_link">
                            <img src={pictures.skype} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.craigslist.com/" className="gallery_link">
                            <img src={pictures.craiglist} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://zomato.com" className="gallery_link">
                            <img src={pictures.zomato} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://tumblr.com/" className="gallery_link">
                            <img src={pictures.tumblr} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://venmo.com/" className="gallery_link">
                            <img src={pictures.venmo} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.meetup.com/" className="gallery_link">
                            <img src={pictures.meetup} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.wellsfargo.com/" className="gallery_link">
                            <img src={pictures.wells} alt="" className="thumbnail"/>
                        </a>
                    </li>
                    <li className="gallery-item">
                        <a href="https://www.cnet.com/" className="gallery_link">
                            <img src={pictures.cnet} alt="" className="thumbnail"/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    };
};