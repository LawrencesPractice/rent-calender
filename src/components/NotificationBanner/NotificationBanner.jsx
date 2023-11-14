import { useState, useEffect, useRef } from "react";
import * as S from './NotificationBanner.styles'


const NotificationBanner = ({ isOpen = true, text }) => {
    const [isBannerOpen, setIsBannerOpen] = useState(isOpen)


    return (

        <>
            {isBannerOpen && (
                <S.ContentWrapper
                    isBannerOpen={isBannerOpen}
                >
                    <S.InnerWrapper>
                        {text}
                        <S.CrossButton onClick={() => { setIsBannerOpen(false) }} />
                    </S.InnerWrapper>

                </S.ContentWrapper>

            )
            }
        </>
    )
};

export default NotificationBanner;