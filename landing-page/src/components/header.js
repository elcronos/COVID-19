import React from "react"
import PropTypes from "prop-types"

import {
    StyledHeader,
    HeaderTitle,
    StyledHeaderLink,
} from "../styles/header.styles"
import { GenericContainer } from "../styles/generic.styles"

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <GenericContainer>
            <HeaderTitle>
                <StyledHeaderLink to="/">{siteTitle}</StyledHeaderLink>
            </HeaderTitle>
        </GenericContainer>
    </StyledHeader>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
