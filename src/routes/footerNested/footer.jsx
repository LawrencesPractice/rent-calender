import React from "react";
import { footerData } from './footer.fallbackdata'
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles.js";
import { ReactComponent as CrwnLogo } from '../../assets/store.svg';


const FooterNested = () => {
    return (
        <>
            <hr />
            <Box>
                <Container>
                    <Row>

                        <Column>
                            {footerData.linkGroups.map(
                                group =>
                                    group.links.length > 0 && (
                                        group.linkGroupLabel


                                    ),
                            )}
                        </Column>
                    </Row>


                </Container>


                <hr />
            </Box>

        </>
    );
};
export default FooterNested;