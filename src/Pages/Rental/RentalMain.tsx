import React, { useState } from 'react';
import Header from '@Page/Publish/Header';
import Footer from '@Page/Publish/Footer';
import LayoutStyles from '@Style/LayoutStyles';
import Slider from 'react-slick';
import TemporaryData from '@Common/TemporaryData';
import RentalList from '@Common/RentalList.json';
import { OraSpinner } from '@Elements';
import lodash from 'lodash';
import { addComma } from '@Helper';
import { OraModal, OraButton, OraCheckBox } from '@Elements';
import MatchStyles from '@Style/MatchStyles';
import RentalStyles from '@Style/RentalStyles';

const {
    DefalutMainContainer,
    SectionContainer,
    SectionWrapper,
    SectionDiv,
    PrepareButton,
    ItemCenter,
    TextXs,
    MainContainer,
    MainEmptyDiv,
    Span,
} = LayoutStyles.DefalutLayoutStyle;
const { HeaderTabSection, HeaderTab, HeaderClickTitle, HeaderIconContainer, HeaderIcon, HeaderTitle } = LayoutStyles.HeaderLayoutStyle;
const { FilteringButton, FilteringSvg4, FilteringSvg5, FilteringSvg6 } = LayoutStyles.FilteringLayoutStyle;
const {
    MainSectionContainer,
    MainSlideFigure,
    MainImg,
    MainFigcaption,
    MainP,
    ReserContainer,
    ReserSection,
    ReserWrapper,
    BtnBlue,
    TextGray,
    BtnGray,
    InfoSection,
    InfoWrapper,
    SubTitle,
    SubInfo,
    TextSmBlack,
    TextSmGray,
    SubContent,
    ItemSection,
    ItemContainer,
    InfoTitle,
} = LayoutStyles.MainLayoutStyle;

const { MatchListContainer } = MatchStyles.MatchLayoutStyle.MatchListSection;

const { ModalTitle, ModalSection, ModalFlexTitle, ModalListSection, ModalListTitle } = LayoutStyles.ModalLayout;

const {
    RentalSection,
    RentalFigure,
    RentalImg,
    RentalFigcaption,
    RentalContainer,
    CheckTimeBlue,
    CheckTimeGray,
    RentalTimeSection,
    RentalPt3,
    RentalBorder,
    RentalSpinner,
    RentalMoreSection,
    RentalModalSection,
    RentalModalDiv,
    RentalImgSection,
    RentalImgContainer,
    RentalImgWrapper,
    RentalModalContainer,
    RentalBtnGray,
    RentalBtnWhite,
    EditSection,
    EditContainer,
    EditWrapper,
    EditList,
    ItemIcon,
    ItemCount,
    BoxItem,
    CheckContainer,
} = RentalStyles.RentalLayoutStyle;

const initializeState = {
    modal: {
        area: false,
        areaChange: false,
        time: false,
        size: false,
        inout: false,
        floor: false,
        image: false,
    },
};

const RentalMain = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            area: boolean;
            areaChange: boolean;
            time: boolean;
            size: boolean;
            inout: boolean;
            floor: boolean;
            image: boolean;
        };
    }>(initializeState);

    const [slideCurrent, setSlideCurrent] = useState<number>(1);

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
    const rentalTimeArray = Array.from({ length: 48 }, (v, i) => {
        const inNumber = i + 6;

        return inNumber >= 24 ? (inNumber - 24 >= 24 ? inNumber - 48 : inNumber - 24) : inNumber;
    });

    return (
        <DefalutMainContainer>
            <Header />

            <MainContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <HeaderTabSection>
                            <HeaderTab>
                                <HeaderClickTitle>소셜매치</HeaderClickTitle>
                            </HeaderTab>
                            <HeaderTab>
                                <HeaderTitle>구장 예약</HeaderTitle>
                            </HeaderTab>
                        </HeaderTabSection>
                    </SectionWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <HeaderIconContainer>
                            <div className="grid grid-row-1 grid-flow-col gap-2">
                                <HeaderIcon>
                                    <FilteringButton
                                        onClick={() => {
                                            console.debug('click');
                                        }}>
                                        <FilteringSvg6
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </FilteringSvg6>
                                    </FilteringButton>
                                </HeaderIcon>
                                <HeaderIcon>
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
                                        <Span>내지역</Span>
                                        <FilteringSvg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg4>
                                    </FilteringButton>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <PrepareButton onClick={() => alert('준비 중입니다.')}>
                                        <Span>12월 11일</Span>
                                        <FilteringSvg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg4>
                                    </PrepareButton>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <FilteringButton
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    time: true,
                                                },
                                            }));
                                        }}>
                                        <Span>시간</Span>
                                        <FilteringSvg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg4>
                                    </FilteringButton>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <FilteringButton
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    size: true,
                                                },
                                            }))
                                        }>
                                        <Span>구장 크기</Span>
                                        <FilteringSvg6
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg6>
                                    </FilteringButton>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <FilteringButton
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    inout: true,
                                                },
                                            }))
                                        }>
                                        <Span>실내외</Span>
                                        <FilteringSvg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg4>
                                    </FilteringButton>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <FilteringButton
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    floor: true,
                                                },
                                            }))
                                        }>
                                        <Span>바닥 종류</Span>
                                        <FilteringSvg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </FilteringSvg4>
                                    </FilteringButton>
                                </HeaderIcon>
                            </div>
                        </HeaderIconContainer>
                    </SectionWrapper>
                </SectionContainer>
                <MainSectionContainer>
                    <SectionWrapper>
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.Rental.BannerSlide, (e, index, lists) => {
                                return (
                                    <MainSlideFigure key={`publish-rentel-page-banner-slide-item-${index}`}>
                                        <MainEmptyDiv>
                                            <MainImg src={`${e.url}`} alt="..." />
                                        </MainEmptyDiv>
                                        <MainFigcaption>
                                            <MainP>
                                                {slideCurrent} | {lists.length} +
                                            </MainP>
                                        </MainFigcaption>
                                    </MainSlideFigure>
                                );
                            })}
                        </Slider>
                    </SectionWrapper>
                </MainSectionContainer>
                <ReserContainer>
                    <SectionWrapper>
                        <ReserWrapper>
                            <ReserSection>
                                <BtnBlue></BtnBlue>
                                <HeaderIcon>
                                    <TextGray>예약 가능</TextGray>
                                </HeaderIcon>
                            </ReserSection>
                            <ReserSection>
                                <BtnGray></BtnGray>
                                <HeaderIcon>
                                    <TextGray>예약 불가</TextGray>
                                </HeaderIcon>
                            </ReserSection>
                        </ReserWrapper>
                    </SectionWrapper>
                </ReserContainer>
                <MatchListContainer>
                    <SectionWrapper>
                        <SectionDiv>
                            {(() => {
                                const templists = lodash.map(RentalList.results, (r: any) => {
                                    const mainStadiumName = r.name;

                                    // "is_partnership": true,
                                    // "is_parking": true,
                                    // "is_wear": false,
                                    // "is_shower": false,
                                    // "is_shoes": false,
                                    // "is_rental": true,
                                    // "is_bibs": false, // 쪼끼
                                    // "is_toilet": 2, // 화장실
                                    // "is_ball": false,

                                    const stadiumOption: any = [];

                                    if (r.is_parking) {
                                        stadiumOption.push(`주차`);
                                    }

                                    if (r.is_shower) {
                                        stadiumOption.push(`샤워 가능`);
                                    }

                                    if (r.is_shoes) {
                                        stadiumOption.push(`신발 대여`);
                                    }

                                    if (r.is_bibs) {
                                        stadiumOption.push(`조끼대여`);
                                    }

                                    if (r.is_toilet === 1) {
                                        stadiumOption.push(`화장실 남녀 구분`);
                                    } else if (r.is_toilet === 2) {
                                        stadiumOption.push(`화장실`);
                                    }

                                    if (r.is_ball) {
                                        stadiumOption.push(`공 대여`);
                                    }

                                    return lodash.map(r.stadiums, (el: any) => {
                                        const gubunName = lodash.has(el, `name`) && el.name ? el.name : ``;
                                        return {
                                            name: `${mainStadiumName} ${gubunName}`,
                                            stadiumOption: stadiumOption,
                                            product_option: [`${el.size_x}x${el.size_y}`, `${el.inout_door_nm}`, `${el.stadium_type_nm}`],
                                            price: lodash.has(el.products[0], `product_price`) ? el.products[0].product_price / 2 : 0,
                                            schedule: lodash.map(el.products, p => {
                                                return {
                                                    start: Number(p.start_t.substring(0, 2)),
                                                    end: Number(p.end_t.substring(0, 2)),
                                                };
                                            }),
                                            images: lodash.map(el.images, i => {
                                                return i.image;
                                            }),
                                        };
                                    });
                                });

                                const lists: Array<{
                                    name: string;
                                    price: number;
                                    product_option: Array<string>;
                                    schedule: Array<{ start: number; end: number }>;
                                    stadiumOption: Array<string>;
                                    images: Array<string>;
                                }> = [];

                                lodash.forEach(templists, e => {
                                    lodash.forEach(e, el => {
                                        lists.push(el);
                                    });
                                });

                                return lodash.map(lists, (l, index) => {
                                    return (
                                        <RentalSection key={`publish-rentel-page-rental-list-item-${index}`}>
                                            <InfoSection>
                                                <InfoWrapper>
                                                    <SubTitle>
                                                        <InfoTitle>{l.name}</InfoTitle>
                                                    </SubTitle>
                                                    <SubInfo>
                                                        {lodash.map(l.product_option, (po, indexPo) => {
                                                            if (indexPo === 0) {
                                                                return (
                                                                    <TextSmBlack
                                                                        key={`publish-rental-page-rental-product-option-item-${index}-${indexPo}`}>
                                                                        {po}
                                                                    </TextSmBlack>
                                                                );
                                                            } else {
                                                                return (
                                                                    <React.Fragment
                                                                        key={`publish-rental-page-rental-product-option-item-${index}-${indexPo}`}>
                                                                        <Span>•</Span>
                                                                        <TextSmGray>{po}</TextSmGray>
                                                                    </React.Fragment>
                                                                );
                                                            }
                                                        })}
                                                    </SubInfo>
                                                    <SubContent>
                                                        <TextSmGray>{`${addComma(l.price)}원~${addComma(l.price)}원/시간`}</TextSmGray>
                                                    </SubContent>
                                                </InfoWrapper>
                                                <HeaderIcon>
                                                    <RentalFigure
                                                        onClick={() =>
                                                            setPageState(prevState => ({
                                                                ...prevState,
                                                                modal: {
                                                                    ...prevState.modal,
                                                                    image: true,
                                                                },
                                                            }))
                                                        }>
                                                        <HeaderIcon>
                                                            <RentalImg src={l.images[0]} alt="..." />
                                                        </HeaderIcon>
                                                        <RentalFigcaption>
                                                            <FilteringSvg5
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                                                />
                                                            </FilteringSvg5>
                                                        </RentalFigcaption>
                                                    </RentalFigure>
                                                </HeaderIcon>
                                            </InfoSection>
                                            <ItemSection>
                                                <ItemContainer>
                                                    <RentalContainer>
                                                        {lodash.map(rentalTimeArray, (e, index) => {
                                                            // TODO: 현재 예약 시간 처리를 해야 하는데 좀 복잡하네?? 추후 의논으로 해결 필요.
                                                            let checkTime = false;
                                                            lodash.forEach(l.schedule, ls => {
                                                                if (ls.start <= e + 5 && ls.end >= e + 5) {
                                                                    checkTime = true;
                                                                }
                                                            });
                                                            if (checkTime) {
                                                                return (
                                                                    <CheckTimeBlue
                                                                        key={`publish-rental-page-rental-time-item-${index}`}></CheckTimeBlue>
                                                                );
                                                            } else {
                                                                return (
                                                                    <CheckTimeGray
                                                                        key={`publish-rental-page-rental-time-item-${index}`}></CheckTimeGray>
                                                                );
                                                            }
                                                        })}
                                                    </RentalContainer>
                                                    <RentalTimeSection>
                                                        <TextGray>6시</TextGray>
                                                        <TextGray>12시</TextGray>
                                                        <TextGray>18시</TextGray>
                                                        <TextGray>24시</TextGray>
                                                    </RentalTimeSection>
                                                </ItemContainer>
                                            </ItemSection>
                                            <RentalPt3>
                                                <RentalBorder></RentalBorder>
                                            </RentalPt3>
                                        </RentalSection>
                                    );
                                });
                            })()}
                        </SectionDiv>
                    </SectionWrapper>
                </MatchListContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <RentalSpinner>
                            <OraSpinner />
                        </RentalSpinner>
                    </SectionWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <RentalMoreSection>
                            <ItemCenter>
                                <HeaderIcon>
                                    <TextSmGray>비제휴 구장 더보기</TextSmGray>
                                </HeaderIcon>
                                <HeaderIcon>
                                    <TextGray>예약 가능 여부는 구장에 직접 확인해 주세요.</TextGray>
                                </HeaderIcon>
                            </ItemCenter>
                        </RentalMoreSection>
                    </SectionWrapper>
                </SectionContainer>
            </MainContainer>

            <Footer IsMain={false} />

            {pageState.modal.area && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>지역</ModalTitle>
                            <ModalFlexTitle>
                                <RentalModalSection>
                                    <SubTitle>
                                        <TextXs>내 지역</TextXs>
                                    </SubTitle>
                                    <HeaderIcon>
                                        <OraButton
                                            ButtonName={`편집하기`}
                                            ButtonColor={`blue`}
                                            HandleClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    modal: {
                                                        ...prevState.modal,
                                                        area: false,
                                                        areaChange: true,
                                                    },
                                                }))
                                            }
                                        />
                                    </HeaderIcon>
                                </RentalModalSection>
                                {lodash.map(TemporaryData.Main.AreaList.slice(1, -1), (e, index) => {
                                    return (
                                        <RentalModalDiv key={`publish-rent-page-search-area-modal-item-${index}`}>
                                            <TextXs>{e}</TextXs>
                                        </RentalModalDiv>
                                    );
                                })}
                            </ModalFlexTitle>
                        </ModalSection>
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
                                        area: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.areaChange && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>내 지역</ModalTitle>
                            <ModalFlexTitle>
                                <ModalListSection>
                                    <RentalModalContainer>
                                        <RentalBtnGray>
                                            <TextXs>내지역</TextXs>
                                        </RentalBtnGray>
                                        {lodash.map(TemporaryData.Main.AreaList.slice(1, -1), (e, index) => {
                                            if (index === 1) {
                                                return (
                                                    <RentalBtnWhite key={`publish-rent-page-search-my-area-modal-area-item-${index}`}>
                                                        <TextXs>{e}</TextXs>
                                                    </RentalBtnWhite>
                                                );
                                            } else {
                                                return (
                                                    <RentalBtnGray key={`publish-rent-page-search-my-area-modal-area-item-${index}`}>
                                                        <TextXs>{e}</TextXs>
                                                    </RentalBtnGray>
                                                );
                                            }
                                        })}
                                    </RentalModalContainer>
                                    <EditSection>
                                        <EditContainer>
                                            <EditWrapper>
                                                <EditList>
                                                    <ItemIcon
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="gray">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </ItemIcon>
                                                </EditList>
                                                <TextXs>은평</TextXs>
                                                <TextXs>∙</TextXs>
                                                <TextXs>서대문</TextXs>
                                                <TextXs>∙</TextXs>
                                                <TextXs>마포</TextXs>
                                                <ItemCount>2</ItemCount>
                                            </EditWrapper>
                                            <EditWrapper>
                                                <EditList>
                                                    <ItemIcon
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}>
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </ItemIcon>
                                                </EditList>
                                                <TextXs>노원</TextXs>
                                                <TextXs>∙</TextXs>
                                                <TextXs>도봉</TextXs>
                                                <TextXs>∙</TextXs>
                                                <TextXs>성동</TextXs>
                                                <ItemCount>2</ItemCount>
                                            </EditWrapper>
                                        </EditContainer>
                                    </EditSection>
                                </ModalListSection>
                            </ModalFlexTitle>
                        </ModalSection>
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
                                        areaChange: false,
                                        area: true,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.time && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>시간</ModalTitle>
                            <ModalListTitle>시작시간 기준</ModalListTitle>
                            <ModalFlexTitle>
                                <BoxItem>
                                    {lodash.map(TemporaryData.Rental.TimeModal, (e, index) => {
                                        return (
                                            <HeaderIcon key={`publish-rent-page-time-select-modal-item-${index}`}>
                                                <OraButton
                                                    ButtonName={`${e.start}~${e.end}시`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() =>
                                                        setPageState(prevState => ({
                                                            ...prevState,
                                                            modal: {
                                                                ...prevState.modal,
                                                                time: false,
                                                            },
                                                        }))
                                                    }
                                                />
                                            </HeaderIcon>
                                        );
                                    })}
                                </BoxItem>
                            </ModalFlexTitle>
                        </ModalSection>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            time: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            time: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.size && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>구장크기</ModalTitle>
                            <ModalFlexTitle>
                                <CheckContainer>
                                    {lodash.map(TemporaryData.Rental.StadiumSize, (e, index) => {
                                        return (
                                            <HeaderIcon key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </HeaderIcon>
                                        );
                                    })}
                                </CheckContainer>
                            </ModalFlexTitle>
                        </ModalSection>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            size: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            size: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.inout && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>실내외</ModalTitle>
                            <ModalFlexTitle>
                                <CheckContainer>
                                    {lodash.map(TemporaryData.Rental.InOut, (e, index) => {
                                        return (
                                            <HeaderIcon key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </HeaderIcon>
                                        );
                                    })}
                                </CheckContainer>
                            </ModalFlexTitle>
                        </ModalSection>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            inout: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            inout: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.floor && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>바닥 종류</ModalTitle>
                            <ModalFlexTitle>
                                <CheckContainer>
                                    {lodash.map(TemporaryData.Rental.floor, (e, index) => {
                                        return (
                                            <HeaderIcon key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </HeaderIcon>
                                        );
                                    })}
                                </CheckContainer>
                            </ModalFlexTitle>
                        </ModalSection>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            floor: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            floor: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.image && (
                <OraModal
                    Children={
                        <ModalSection>
                            <ModalTitle>전체 보기</ModalTitle>
                            <RentalImgSection>
                                <RentalImgContainer>
                                    <RentalImgWrapper>
                                        <MainEmptyDiv>
                                            <MainImg src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_corner.jpg`} alt="..." />
                                        </MainEmptyDiv>
                                    </RentalImgWrapper>
                                    <RentalImgWrapper>
                                        <MainEmptyDiv>
                                            <MainImg src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_half.jpg`} alt="..." />
                                        </MainEmptyDiv>
                                    </RentalImgWrapper>
                                    <RentalImgWrapper>
                                        <MainEmptyDiv>
                                            <MainImg src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_goal.jpg`} alt="..." />
                                        </MainEmptyDiv>
                                    </RentalImgWrapper>
                                    <RentalImgWrapper>
                                        <MainEmptyDiv>
                                            <MainImg src={`https://d31wz4d3hgve8q.cloudfront.net/media/DSC07845_l4piKiA.jpg`} alt="..." />
                                        </MainEmptyDiv>
                                    </RentalImgWrapper>
                                    <RentalImgWrapper>
                                        <MainEmptyDiv>
                                            <MainImg
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_corner2.jpg`}
                                                alt="..."
                                            />
                                        </MainEmptyDiv>
                                    </RentalImgWrapper>
                                </RentalImgContainer>
                            </RentalImgSection>
                        </ModalSection>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`닫기`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        image: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
        </DefalutMainContainer>
    );
};

export default RentalMain;
