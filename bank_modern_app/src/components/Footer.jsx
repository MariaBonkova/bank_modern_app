import React from "react";
import styles from "../style.js";
import {logo} from "../assets";
import {footerLinks, socialMedia} from "../constants/index.js";

const Footer = () => (
    <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex-col justify-start object-contain mr-10">
                <img src={logo} alt="logo" className="w-[266px h-[72px] "/>
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable
                    and secure.</p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-o mt-10">

                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[24px] text-white">{footerLink.title}</h4>
                        <ul className="list-none mt-4">
                            {footerLink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px]
                                hover:text-secondary cursor-pointer ${index !== footerLinks.length - 1 ? "mb-4" : "mb-0"}`}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </div>


        <div
            className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-white text-[18px] leading-[27px]">2024 HooBank. All
                Rights Reserved.</p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img src={social.icon} key={social.id} alt="socia"
                         className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                         onClick={() => window.open(social.link)}/>
                ))}
            </div>
        </div>
    </section>

)

export default Footer;