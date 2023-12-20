import React, { useState } from 'react';
import MatchStyles from '@Style/MatchStyles';
import Header from '@Page/Publish/Header';
import LayoutStyles from '@Style/LayoutStyles';
import TemporaryData from '@Common/TemporaryData';
import MatMatchList from '@Common/MatchList.json';
import lodash from 'lodash';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { OraModal, OraButton, OraCheckBox } from '@Elements';
import Footer from '@Page/Publish/Footer';

const { DafalutMainContainer } = LayoutStyles.DafalutLayoutStyle;
const { MainContainer, SectionContainer, SectionWrapper } = MatchStyles.MatchLayoutStyle;
const {
    HeaderTabSection,
    HeaderTab,
    HeaderTitle,
    HeaderClickTitle,
    HeaderIconContainer,
    HeaderDivIcon,
    HeaderDivIcon1,
    HeaderDivIcon2,
    HeaderPIcon,
} = MatchStyles.MatchLayoutStyle.HeaderSection;

const { MainSectionContainer, MainSlideFigure, MainEmptyDiv, MainImg, MainFigcaption, MainP } = MatchStyles.MatchLayoutStyle.MainSection;

const {
    DateSectionContainer,
    DateSectionWrapper,
    DateSectionDiv,
    DateSliderSection,
    DateSliderDiv,
    DateIndexZeroDiv,
    TextLargeWhite,
    TextSmallWhite,
    DateWeeZeroDiv,
    TextLargeRed,
    TextSmallRed,
    TextLargeBlue,
    TextSmallBlue,
    TextLarge,
    TextSmall,
} = MatchStyles.MatchLayoutStyle.DateSection;

const { FilteringContainer, FilteringSectionContainer, FilteringButton, FilteringSelectedButton, Span, FilteringSvg } =
    MatchStyles.MatchLayoutStyle.FilteringSection;

const {
    MatchListContainer,
    MatchListWrapper,
    MatchInfoContainer,
    MatchInfoTime,
    MatchInfoWrapper,
    MatchTitle,
    MatchSubTitle,
    MatchSvg,
    MatchSubInfo,
    MatchButtonContainer,
    MatchButtonWrapper,
} = MatchStyles.MatchLayoutStyle.MatchListSection;

const StyledSlider = styled(Slider)`
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`;

const PrevButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

const NextButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: -50px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

const initializeState = {
    modal: {
        area: false,
        gender: false,
        level: false,
    },
};

const MatchMain = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            area: boolean;
            gender: boolean;
            level: boolean;
        };
    }>(initializeState);

    const bannerSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        afterChange: (current: any) => setSlideCurrent(current + 1),
    };

    // https://ryurim.tistory.com/110 참조
    const calendarSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: (
            <PrevButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </PrevButton>
        ),
        nextArrow: (
            <NextButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </NextButton>
        ),
    };

    const [slideCurrent, setSlideCurrent] = useState<number>(1);

    const date = new Date();

    // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const calendarArray = Array.from({ length: lastDay.getDate() }, (v, i) => i);

    const weekString = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <DafalutMainContainer>
            <Header />
            <MainContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <HeaderTabSection>
                            <HeaderTab>
                                <HeaderTitle>
                                    <HeaderTitle>소셜매치</HeaderTitle>
                                </HeaderTitle>
                            </HeaderTab>
                            <HeaderTab>
                                <HeaderTitle>
                                    <HeaderClickTitle>구장 예약</HeaderClickTitle>
                                </HeaderTitle>
                            </HeaderTab>
                        </HeaderTabSection>
                    </SectionWrapper>
                </SectionContainer>

                <SectionContainer>
                    <SectionWrapper>
                        <HeaderIconContainer>
                            {lodash.map(TemporaryData.Main.ExploreCategory.SocialMatch, (e, index) => {
                                return (
                                    <HeaderDivIcon key={`publish-main-page-explore-category-social-match-item-${index}`}>
                                        <HeaderDivIcon1>
                                            <HeaderDivIcon2>
                                                <img src={`${e.icon}`} alt={`${e.name}`} />
                                            </HeaderDivIcon2>
                                            <HeaderPIcon>{`${e.name}`}</HeaderPIcon>
                                        </HeaderDivIcon1>
                                    </HeaderDivIcon>
                                );
                            })}
                            <HeaderDivIcon>
                                <HeaderDivIcon1>
                                    <HeaderDivIcon2>
                                        <HeaderPIcon></HeaderPIcon>
                                    </HeaderDivIcon2>
                                </HeaderDivIcon1>
                            </HeaderDivIcon>
                        </HeaderIconContainer>
                    </SectionWrapper>
                </SectionContainer>

                <MainSectionContainer>
                    <SectionWrapper>
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.Main.BannerSlide, (e, index) => {
                                return (
                                    <MainSlideFigure key={`publish-main-page-banner-slide-item-${index}`}>
                                        <MainEmptyDiv>
                                            <MainImg src={`${e.url}`} alt="..." />
                                        </MainEmptyDiv>
                                        <MainFigcaption className="flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <MainP>{slideCurrent} | 6 +</MainP>
                                        </MainFigcaption>
                                    </MainSlideFigure>
                                );
                            })}
                        </Slider>
                    </SectionWrapper>
                </MainSectionContainer>

                <DateSectionContainer>
                    <DateSectionWrapper>
                        <DateSectionDiv>
                            <StyledSlider {...calendarSlidersettings}>
                                {lodash.map(calendarArray, (e, index) => {
                                    const dayOfWeek = new Date(
                                        `${date.getFullYear()}-${date.getMonth() + 1}-${String(e + 1).padStart(2, '0')}`
                                    ).getDay();
                                    return (
                                        <DateSliderSection key={`publish-main-page-claendar-slide-item-${index}`}>
                                            <DateSliderDiv>
                                                {(() => {
                                                    // TODO: if 로 되어 있는걸 style 컴포넌트로 만들어서 props 로 받아서 style 을 변경 할것
                                                    if (index === 0) {
                                                        return (
                                                            <DateIndexZeroDiv>
                                                                <TextLargeWhite>{e + 1}</TextLargeWhite>
                                                                <TextSmallWhite>{weekString[dayOfWeek]}</TextSmallWhite>
                                                            </DateIndexZeroDiv>
                                                        );
                                                    } else if (dayOfWeek === 0) {
                                                        return (
                                                            <DateWeeZeroDiv>
                                                                <TextLargeRed>{e + 1}</TextLargeRed>
                                                                <TextSmallRed>{weekString[dayOfWeek]}</TextSmallRed>
                                                            </DateWeeZeroDiv>
                                                        );
                                                    } else if (dayOfWeek === 6) {
                                                        return (
                                                            <DateWeeZeroDiv>
                                                                <TextLargeBlue>{e + 1}</TextLargeBlue>
                                                                <TextSmallBlue>{weekString[dayOfWeek]}</TextSmallBlue>
                                                            </DateWeeZeroDiv>
                                                        );
                                                    } else {
                                                        return (
                                                            <DateWeeZeroDiv>
                                                                <TextLarge>{e + 1}</TextLarge>
                                                                <TextSmall>{weekString[dayOfWeek]}</TextSmall>
                                                            </DateWeeZeroDiv>
                                                        );
                                                    }
                                                })()}
                                            </DateSliderDiv>
                                        </DateSliderSection>
                                    );
                                })}
                            </StyledSlider>
                        </DateSectionDiv>
                        <FilteringContainer>
                            <div className="grid grid-row-1 grid-flow-col gap-2">
                                <FilteringSectionContainer>
                                    <FilteringButton
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    area: true,
                                                },
                                            }));
                                        }}>
                                        <Span>모든지역</Span>
                                        <FilteringSvg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg>
                                    </FilteringButton>
                                </FilteringSectionContainer>
                                <FilteringSectionContainer>
                                    <FilteringButton>
                                        <FilteringSvg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </FilteringSvg>
                                        <Span>혜택</Span>
                                    </FilteringButton>
                                </FilteringSectionContainer>
                                <FilteringSectionContainer>
                                    <FilteringButton>
                                        <Span>마감 가리기</Span>
                                    </FilteringButton>
                                </FilteringSectionContainer>
                                <FilteringSectionContainer>
                                    <FilteringSelectedButton
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    gender: true,
                                                },
                                            }));
                                        }}>
                                        <Span>남자</Span>
                                        <FilteringSvg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg>
                                    </FilteringSelectedButton>
                                </FilteringSectionContainer>
                                <FilteringSectionContainer>
                                    <FilteringButton
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    level: true,
                                                },
                                            }));
                                        }}>
                                        <Span>레벨</Span>
                                        <FilteringSvg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg>
                                    </FilteringButton>
                                </FilteringSectionContainer>
                            </div>
                        </FilteringContainer>
                    </DateSectionWrapper>
                </DateSectionContainer>

                <MatchListContainer>
                    <SectionWrapper>
                        <MatchListWrapper>
                            {lodash.map(MatMatchList, (e, index) => {
                                return (
                                    <MatchInfoContainer key={`publish-main-page-match-list-item-${index}`}>
                                        <MatchInfoTime>
                                            <MatchTitle>{e.label_schedule9.slice(-5)}</MatchTitle>
                                        </MatchInfoTime>
                                        <MatchInfoWrapper>
                                            <MatchTitle>{e.label_title}</MatchTitle>
                                            <MatchSubTitle>
                                                <MatchSvg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={0.5}
                                                    stroke="orange">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                                                    />
                                                </MatchSvg>
                                                <MatchSubInfo>남녀모두 · 6vs6 · 모든 레벨</MatchSubInfo>
                                            </MatchSubTitle>
                                        </MatchInfoWrapper>
                                        <MatchButtonContainer>
                                            <MatchButtonWrapper>
                                                {(() => {
                                                    if (e.is_finish === true) {
                                                        return (
                                                            <OraButton
                                                                ButtonName={`마감`}
                                                                ButtonColor={`gray`}
                                                                HandleClick={() => {
                                                                    //
                                                                }}
                                                            />
                                                        );
                                                    }

                                                    if (e.apply_status === `hurry`) {
                                                        return (
                                                            <OraButton
                                                                ButtonName={`마감임박!`}
                                                                ButtonColor={`red`}
                                                                HandleClick={() => {
                                                                    //
                                                                }}
                                                            />
                                                        );
                                                    }

                                                    return (
                                                        <OraButton
                                                            ButtonName={`신청 가능`}
                                                            ButtonColor={`blue`}
                                                            HandleClick={() => {
                                                                //
                                                            }}
                                                        />
                                                    );
                                                })()}
                                            </MatchButtonWrapper>
                                        </MatchButtonContainer>
                                    </MatchInfoContainer>
                                );
                            })}
                        </MatchListWrapper>
                    </SectionWrapper>
                </MatchListContainer>
            </MainContainer>

            <Footer IsMain={true} />

            {/* TODO: modal 은 레이아웃에서 처리 할것 */}
            {pageState.modal.area && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">지역</div>
                            <div className="w-full pt-3">
                                {lodash.map(TemporaryData.Main.AreaList, (e, index) => {
                                    return (
                                        <div
                                            className="w-full pl-10 border-b cursor-pointer"
                                            key={`publish-main-page-area-modal-area-item-${index}`}>
                                            <p className="text-xs py-3">{e}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`확인`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        area: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.gender && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">성별</div>
                            <div className="flex flex-col w-full pt-3">
                                {lodash.map(TemporaryData.Main.GenderList, (e, index) => {
                                    return (
                                        <div className="flex pl-10 py-3 border-b" key={`publish-main-page-gender-modal-item-${index}`}>
                                            <OraCheckBox
                                                LavelName={e}
                                                Checked={false}
                                                HandleOnChange={() => {
                                                    //
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`적용`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        gender: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.level && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">레벨</div>
                            <div className="flex flex-col w-full pt-3">
                                {lodash.map(TemporaryData.Main.LevelList, (e, index) => {
                                    return (
                                        <div className="flex pl-10 py-3 border-b" key={`publish-main-page-level-modal-item-${index}`}>
                                            <OraCheckBox
                                                LavelName={e}
                                                Checked={false}
                                                HandleOnChange={() => {
                                                    //
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`적용`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        level: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
        </DafalutMainContainer>
    );
};

export default MatchMain;
