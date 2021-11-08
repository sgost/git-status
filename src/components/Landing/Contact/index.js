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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.306655100214!2d80.0145069!3d12.9989065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd072fdf7b5826742!2sArchimedis%20Healthcare%20Private%20Limited%20-%20Reputed%20Pharma%20Manufacturers%20Chennai!5e0!3m2!1sen!2sin!4v1623929915150!5m2!1sen!2sin"
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