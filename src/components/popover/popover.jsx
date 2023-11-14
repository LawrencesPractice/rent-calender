import React, { useEffect, useRef } from "react";
import * as S from './popover.styles'

const Popover = (id,
    name,
    testId,
    children,
    isPopoverVisible = true,
    headerText,
    closeButton,
    closeButtonCallback,
    hasCloseButton = true,
    variant = 'leftTop',) => {
    const ref = useRef(null)
    const headerRef = useRef(null)

    useEffect(() => {
        const listener = (event) => {
            if (
                isPopoverVisible &&
                ref.current
            ) {
                closeButtonCallback()
            }
            event.stopPropagation()
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        if (isPopoverVisible && headerRef.current) {
            headerRef.current.focus()
        }
        return () => {
            if (isPopoverVisible) {
                document.removeEventListener('mousedown', listener)
                document.removeEventListener('touchstart', listener)
            }
        }
    }, [ref, isPopoverVisible, closeButtonCallback])

    return (
        <S.PopoverContainer
            ref={ref}
            isPopoverVisible={isPopoverVisible}
            onClick={closeButtonCallback}
            role="region"
            id={id}
            className="popover-container"
            data-testid={testId}
        >
            <S.Popover
                isPopoverVisible={isPopoverVisible}
                className="popover"
                variant={variant}
            >
                <S.CenteredTextDiv>
                    <S.HeaderText tabIndex={0} className="popover-header" ref={headerRef}>
                        {headerText}
                        <span className="visuallyHidden">{`${name} popover`}</span>
                    </S.HeaderText>
                    {hasCloseButton ? (
                        <S.ExpLinksCloseImgContainer
                            role="button"
                            className="popover-close-button"
                            tabIndex={0}
                            onClick={closeButtonCallback}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    closeButtonCallback()
                                }
                            }}
                        >
                            Icon
                        </S.ExpLinksCloseImgContainer>
                    ) : (
                        ''
                    )}
                </S.CenteredTextDiv>

                {children}
            </S.Popover>
        </S.PopoverContainer>
    );
};
export default Popover;