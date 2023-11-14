import React from "react";
import { Outlet, Link } from 'react-router-dom';

import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles.js";
import { ReactComponent as CrwnLogo } from '../../assets/store.svg';

import { footerData } from "./footer.fallbackdata.js";
const LinkGroup = ({ linkGroupLabel, links }) => {
    return (
        <>
            {linkGroupLabel}
            <Column>
                {links.map(link => (
                    <FooterLink>

                        <Link to={link.url}>   {link.label}</Link>
                    </FooterLink>

                ))
                }
            </Column>
        </>
    )
}
const Footer = () => {
    return (
        <>
            <hr />
            <Box>
                <Container>
                    <Row>


                        {footerData.linkGroups.map(
                            group =>
                                group.links.length > 0 && (
                                    <LinkGroup
                                        key={group.linkGroupLabel}
                                        linkGroupLabel={group.linkGroupLabel}
                                        links={group.links}
                                    />
                                ),
                        )}



                    </Row>


                </Container>
                <Outlet />
                {/*
                Hard coded data
                <Container>
                    <Column>
                        <CrwnLogo className='logo-container' style={{
                            width: 20,
                            height: 30,
                        }} />

                        <h5 style={{
                            color: "grey",


                        }}>
                            Lawrence's fasion Store: A place for fasion maniac
                        </h5>
                    </Column>
                    <Row>

                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="#">Aim</FooterLink>
                            <FooterLink href="#">Vision</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Services</Heading>
                            <FooterLink href="#">Writing</FooterLink>
                            <FooterLink href="#">Internships</FooterLink>
                            <FooterLink href="#">Coding</FooterLink>
                            <FooterLink href="#">Teaching</FooterLink>
                        </Column>\
                        <Column>
                            <h5>Contact Us</h5>
                            <FooterLink href="#">Location</FooterLink>
                            <FooterLink href="#">Phone number</FooterLink>
                            <FooterLink href="#">Sydney office</FooterLink>
                            <FooterLink href="#">Melbourne Office</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Social Media</Heading>
                            <FooterLink href="#">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>
                                        Facebook
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>
                                        Instagram
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>
                                        Twitter
                                    </span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>
                                        Youtube
                                    </span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container> */}
                <hr />
            </Box>

        </>
    );
};
export default Footer;