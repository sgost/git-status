import React from "react"
import img1 from "../../../images/landing/c_phone.png"
import img2 from "../../../images/landing/c_mail.png"
import { ContactSection } from "./styles"

const Contact = () =>
{

    return (
        <ContactSection>
            <div className="contact" id="contact">
                <h1>Contact us</h1>
                <div className="contact_contrainer">
                    <div className="contact_img_block">
                        <div id="contact_img_block_top">
                            <p>Reach Us</p>
                            <p>We would love to hear from you!</p>
                        </div>
                        <div id="contact_img_block_bottom">
                            <div id="contact_img_block_bottom_blocks">
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <img src={ img1 } alt="img" />
                                </div>
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <p>+91  9898989898</p>
                                </div>
                            </div>
                            <div id="contact_img_block_bottom_blocks">
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <img src={ img2 } alt="img" />
                                </div>
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <p>contact@hotkup.net</p>
                                </div>
                            </div>
                        </div>
                        <iframe
                            title="Archimedis"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.7599284769844!2d-79.9094553845514!3d43.319284779134115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9d3a6dc1b965%3A0xfd665e1cacf94524!2s44%20Grindstone%20Way%2C%20Dundas%2C%20ON%20L9H%207B7%2C%20Canada!5e0!3m2!1sen!2sin!4v1636461270509!5m2!1sen!2sin"
                            id="contact_img_block_bottom_blocks2"
                        ></iframe>
                    </div>
                    <div className="contact_info_block">
                        <div className="contact_info_top">
                            <div className="contact_name" style={ { position: `relative` } }>
                                <span>Your Name</span>
                                <input
                                    type="text"
                                    placeholder="Chris Do"
                                />
                            </div>
                            <div className="contact_name" style={ { position: `relative` } }>
                                <span>Email Address</span>
                                <input
                                    type="text"
                                    placeholder="chrisdo@abc.com"
                                />
                            </div>
                        </div>
                        <div className="contact_info_top">
                            <div className="contact_name" style={ { position: `relative` } }>
                                <span>Contact Number (optional)</span>
                                <input
                                    type="mail"
                                    placeholder="+91  9876543210"
                                />
                            </div>
                            <div className="contact_name" style={ { position: `relative` } }>
                                <span>Your organization name (optional)</span>
                                <input
                                    type="text"
                                    placeholder="ABC inc."
                                />
                            </div>
                        </div>
                        <div className="contact_message" style={ { position: `relative` } }>
                            <span>Message</span>
                            <textarea
                                type="text"
                                placeholder="What do you want to talk to us about?"
                            />
                        </div>
                        <div className="button">
                            <button >SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </ContactSection>
    )
}
export default Contact