import React, { useState } from "react";

import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles.js";
import { ReactComponent as CrwnLogo } from '../../assets/store.svg';
import * as S from './FooterStyles'

import { footerData } from "./footer.fallbackdata.js";
const LinkGroup = ({ linkGroupLabel, links }) => {
    return (
        <>
            {linkGroupLabel}
            <Column>
                {links.map(link => (
                    <FooterLink>

                        {link.label}
                    </FooterLink>

                ))
                }
            </Column>
        </>
    )
}
const Footer = () => {
    const SocialIconsBlock = ({
        socialLinks,
        socialCloseButton,
    }) => {
        const [popoverVisible, setPopoverVisible] = useState(null)
        return (
            <>
                {socialLinks?.map((socialLink, index) =>
                    socialLink.links && socialLink.links.length > 1 ? (
                        <S.SocialLinkItem
                            key={socialLink.expLinksHeading}
                            hasMargin={!(index === socialLinks.length - 1)}
                        >
                            <Column key={socialLink.expLinksHeading}>
                                <SocialIconGroup
                                    key={socialLink.expLinksHeading}
                                    index={index}
                                    icon={socialLink.icon}
                                    expLinksHeading={socialLink.expLinksHeading}
                                    links={socialLink.links}
                                    socialUrl={socialLink.socialUrl}
                                    socialCloseButton={socialCloseButton}
                                    popoverVisible={popoverVisible === index}
                                    setPopoverVisible={setPopoverVisible}
                                    isLast={index === socialLinks.length - 1}
                                />
                            </Column>
                        </S.SocialLinkItem>
                    ) : (
                        <S.SocialLinkItem
                            key={socialLink.expLinksHeading}
                            hasMargin={!(index === socialLinks.length - 1)}
                        >
                            <Column key={socialLink.expLinksHeading}>
                                {/* <SocialIconGroupWithoutPopover
                                    key={socialLink.expLinksHeading}
                                    icon={socialLink.icon}
                                    links={socialLink.links}
                                /> */}
                            </Column>
                        </S.SocialLinkItem>
                    ),
                )}
            </>
        )
    }
    const socials = {
        facebook: { icon: CrwnLogo, name: 'Facebook' },
        instagram: { icon: CrwnLogo, name: 'Instagram' },
        pinterest: { icon: CrwnLogo, name: 'Pinterest' },
        linkedin: { icon: CrwnLogo, name: 'Linkedin' },
        twitter: { icon: CrwnLogo, name: 'Twitter' },
        youtube: { icon: CrwnLogo, name: 'Youtube' },
    }

    const SocialIconGroup = ({
        index,
        icon,
        expLinksHeading,
        links,
        socialCloseButton,
        popoverVisible,
        setPopoverVisible,
        isLast,
    }) => {
        const social = icon?.key && socials[icon.key]
        const [isOpen, setIsOpen] = useState(false)

        if (links && links.length !== 0 && social)
            return (
                <S.SocialIconGroupWrapper isPadding={!isLast}>
                    <S.SocialIconImg
                        onClick={() => {
                            setPopoverVisible(index)
                            setIsOpen(true)
                        }}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                setPopoverVisible(index)
                            }
                        }}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-controls={`${social.name}-social-popover`}
                        aria-label={`Open social popover for ${social.name}`}
                        className={`social-${social.name}`}
                    >
                        {/* {social.icon && (
                            <Icon
                                testId="icons"
                                aria-hidden
                                svgIcon={social.icon}
                                accessibleName={icon?.text}
                                isFillRequired={false}
                            />
                        )} */}
                    </S.SocialIconImg>
                    {/* <Popover
                        name="social"
                        id={`${social.name}-social-popover`}
                        isPopoverVisible={popoverVisible}
                        headerText={expLinksHeading}
                        closeButton={socialCloseButton}
                        closeButtonCallback={() => {
                            setPopoverVisible(null)
                            setIsOpen(false)
                        }}
                    >
                        <S.SocialLinksDiv className="social-links">
                            {links &&
                                links.map(link => (
                                    <S.Link key={link.label} href={link.url}>
                                        {link.label}
                                    </S.Link>
                                ))}
                        </S.SocialLinksDiv>
                    </Popover> */}
                </S.SocialIconGroupWrapper>
            )
        return null
    }
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

                <hr />
            </Box>

        </>
    );
};
export default Footer;