import React, { useState } from 'react';
import lodash from 'lodash';
import Header from '../../Publish/Header';
import Slider from 'react-slick';
import TemporaryData from '@Common/TemporaryData';
import RentalDetailJson from '@Common/RentalDetail.json';
import styled from '@emotion/styled';
import { addComma } from '@Helper';
import { OraModal, OraButton } from '@Elements';

import LayoutStyles from '@Style/LayoutStyles';
import RentalStyles from '@Style/RentalStyles';
import MatchStyles from '@Style/MatchStyles';

const {
    DefalutMainContainer,
    SectionContainer,
    SectionWrapper,
    ContentsSection,
    ContentsTitle,
    ContentsWrapper,
    TextXs,
    Li,
    BoldLargeText,
    Grid,
    SmallText,
    SmallBorderText,
    SmallBorderRText,
    SubInfoSection,
} = LayoutStyles.DefalutLayoutStyle;

const {
    MainEmptyDiv,
    MainP,
    InfoSection,
    ItemSection,
    InfoWrapper,
    SubInfo,
    TextSmBlack,
    SubContent,
    TextSmGray,
    ItemContainer,
    ReserWrapper,
    ReserSection,
    BtnBlue,
    BtnGray,
    Img,
    SubTitle,
    MainImg,
} = LayoutStyles.MainLayoutStyle;
const { HeaderIcon } = LayoutStyles.HeaderLayoutStyle;
const { ModalFlexTitle, ModalSection, ModalTitle } = LayoutStyles.ModalLayout;
const { FilteringSvg5, FilteringSvg6 } = LayoutStyles.FilteringLayoutStyle;

const {
    RentalImgWrapper,
    RentalSection,
    RentalFigure,
    RentalImg,
    RentalFigcaption,
    RentalContainer,
    CheckTimeBlue,
    CheckTimeGray,
    RentalTimeSection,
    RentalPt3,
    RentalImgSection,
    RentalImgContainer,
} = RentalStyles.RentalLayoutStyle;
const {
    MainSection,
    DetailImg,
    Figcaption,
    TitleDescSection,
    TitleSection,
    DetailSubTitle,
    TextGray,
    BgBlueText,
    BgBlueSection,
    BgBlue,
    BlueLine,
    DetailSection,
    DetailSectionSticky,
    DetailWrapper4,
    DetailWrapper6,
    DetailTextSmGray,
    RuleSection,
    RuleItemSection,
    RuleIconGray,
    RuleIconBlack,
    TextGrayLine,
    RuleSubInfoSection,
    RuleSubIconSection,
    RuleSubIconWrapper,
    RuleExtraInfoSection,
    RuleExtraInfoWrapper,
    RuleExtraTitle,
    RuleExtraInfoList,
    UnderlineText,
    RuleTextSmall,
    DashText,
} = RentalStyles.Detail;

const {
    TextLarge,
    TextSmall,
    DateSectionWrapper,
    DateSliderSection,
    DateSliderDiv,
    DateIndexZeroDiv,
    DateWeekZeroDiv,
    TextLargeWhite,
    TextSmallWhite,
    TextLargeRed,
    TextSmallRed,
    TextLargeBlue,
    TextSmallBlue,
} = MatchStyles.MatchLayoutStyle.DateSection;

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
        image: false,
    },
};

const RentalDetailMain = () => {
    const [pageState, setPageState] = useState<{
        modal: {
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

    const calendarSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: (
            <PrevButton>
                <FilteringSvg6 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </FilteringSvg6>
            </PrevButton>
        ),
        nextArrow: (
            <NextButton>
                <FilteringSvg6 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </FilteringSvg6>
            </NextButton>
        ),
    };

    const date = new Date();

    // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const calendarArray = Array.from({ length: lastDay.getDate() }, (v, i) => i);

    const weekString = ['일', '월', '화', '수', '목', '금', '토'];

    const rentalTimeArray = Array.from({ length: 48 }, (v, i) => {
        const inNumber = i + 6;

        return inNumber >= 24 ? (inNumber - 24 >= 24 ? inNumber - 48 : inNumber - 24) : inNumber;
    });

    return (
        <DefalutMainContainer>
            <Header />

            <MainSection>
                <SectionContainer>
                    <SectionWrapper>
                        {/* Contents Start */}
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.RentalDetail.slider, (e, index, lists) => {
                                return (
                                    <RentalImgWrapper key={`publish-rental-detail-page-banner-slide-item-${index}`}>
                                        <MainEmptyDiv>
                                            <DetailImg src={`${e}`} alt="..." />
                                        </MainEmptyDiv>
                                        <Figcaption>
                                            <MainP>{`${slideCurrent} | ${lists.length} +`}</MainP>
                                        </Figcaption>
                                    </RentalImgWrapper>
                                );
                            })}
                        </Slider>
                        {/* Contents End */}
                    </SectionWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        {/* Contents Start */}
                        <ContentsSection>
                            <HeaderIcon>
                                <ContentsTitle>서울 / 은평구</ContentsTitle>
                            </HeaderIcon>
                            <HeaderIcon>
                                <TextLarge>서울 은평 롯데몰</TextLarge>
                            </HeaderIcon>
                            <TitleSection>
                                <TextSmall>서울 은평구 통일로 1050</TextSmall>
                                <TextGray>주소 복사</TextGray>
                                <TextGray>지도보기</TextGray>
                            </TitleSection>
                            <TitleDescSection>
                                <BgBlueText>
                                    <TextXs>바로 예약</TextXs>
                                </BgBlueText>
                                <BgBlueText>
                                    <TextXs>쇼셜 매치</TextXs>
                                </BgBlueText>
                            </TitleDescSection>
                        </ContentsSection>
                        <BgBlueSection>
                            <BgBlue>
                                <ContentsTitle>공지</ContentsTitle>
                            </BgBlue>
                        </BgBlueSection>
                        <ModalFlexTitle>
                            <BlueLine></BlueLine>
                        </ModalFlexTitle>
                        {/* Contents End */}
                    </SectionWrapper>
                </SectionContainer>
                <DetailSection>
                    <DateSectionWrapper>
                        <ContentsWrapper>
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
                                                            <DateWeekZeroDiv>
                                                                <TextLargeRed>{e + 1}</TextLargeRed>
                                                                <TextSmallRed>{weekString[dayOfWeek]}</TextSmallRed>
                                                            </DateWeekZeroDiv>
                                                        );
                                                    } else if (dayOfWeek === 6) {
                                                        return (
                                                            <DateWeekZeroDiv>
                                                                <TextLargeBlue>{e + 1}</TextLargeBlue>
                                                                <TextSmallBlue>{weekString[dayOfWeek]}</TextSmallBlue>
                                                            </DateWeekZeroDiv>
                                                        );
                                                    } else {
                                                        return (
                                                            <DateWeekZeroDiv>
                                                                <TextLarge>{e + 1}</TextLarge>
                                                                <TextSmall>{weekString[dayOfWeek]}</TextSmall>
                                                            </DateWeekZeroDiv>
                                                        );
                                                    }
                                                })()}
                                            </DateSliderDiv>
                                        </DateSliderSection>
                                    );
                                })}
                            </StyledSlider>
                        </ContentsWrapper>
                    </DateSectionWrapper>
                </DetailSection>
                <DetailSection>
                    <DateSectionWrapper>
                        <ContentsWrapper>
                            {(() => {
                                const info = {
                                    product_option: [
                                        `${RentalDetailJson.size_x}x${RentalDetailJson.size_y}`,
                                        `${RentalDetailJson.inout_door_nm}`,
                                        `${RentalDetailJson.stadium_type_nm}`,
                                    ],
                                    price: lodash.has(RentalDetailJson.products[0], `product_price`)
                                        ? RentalDetailJson.products[0].product_price / 2
                                        : 0,
                                    schedule: lodash.map(RentalDetailJson.products, p => {
                                        return {
                                            start: Number(p.start_t.substring(0, 2)),
                                            end: Number(p.end_t.substring(0, 2)),
                                        };
                                    }),
                                    images: lodash.map(RentalDetailJson.images, i => {
                                        return i.image;
                                    }),
                                };
                                return (
                                    <RentalSection>
                                        <InfoSection>
                                            <InfoWrapper>
                                                <SubInfo>
                                                    {lodash.map(info.product_option, (po, indexPo) => {
                                                        return (
                                                            <TextSmBlack key={`publish-rental-page-rental-product-option-item-${indexPo}`}>
                                                                {po}
                                                            </TextSmBlack>
                                                        );
                                                    })}
                                                </SubInfo>
                                                <SubContent>
                                                    <TextSmGray>{`${addComma(info.price)}원~${addComma(info.price)}원/시간`}</TextSmGray>
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
                                                        <RentalImg src={info.images[0]} alt="..." />
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
                                                        lodash.forEach(info.schedule, ls => {
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
                                                    <DetailTextSmGray>6시</DetailTextSmGray>
                                                    <DetailTextSmGray>12시</DetailTextSmGray>
                                                    <DetailTextSmGray>18시</DetailTextSmGray>
                                                    <DetailTextSmGray>24시</DetailTextSmGray>
                                                </RentalTimeSection>
                                            </ItemContainer>
                                        </ItemSection>
                                        <RentalPt3>
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
                                        </RentalPt3>
                                    </RentalSection>
                                );
                            })()}
                        </ContentsWrapper>
                        <ModalFlexTitle>
                            <BlueLine></BlueLine>
                        </ModalFlexTitle>
                    </DateSectionWrapper>
                </DetailSection>
                <DetailSection>
                    <DetailWrapper4>
                        <ContentsWrapper>
                            <TextSmall>시설 및 이용 규칙</TextSmall>
                        </ContentsWrapper>
                        <ContentsWrapper>
                            <RuleSection>
                                <RuleItemSection>
                                    <RuleIconGray>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shower.svg" />
                                    </RuleIconGray>
                                    <SubTitle>
                                        <TextGrayLine>샤워실</TextGrayLine>
                                    </SubTitle>
                                </RuleItemSection>
                                <RuleItemSection>
                                    <RuleIconBlack>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_park.svg" alt="..." />
                                    </RuleIconBlack>
                                    <SubTitle>
                                        <TextXs>무료주차</TextXs>
                                    </SubTitle>
                                </RuleItemSection>
                                <RuleItemSection>
                                    <RuleIconBlack>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                    </RuleIconBlack>
                                    <SubTitle>
                                        <TextXs>풋살화 대여</TextXs>
                                    </SubTitle>
                                </RuleItemSection>
                                <RuleItemSection>
                                    <RuleIconBlack>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_beverage.svg" alt="..." />
                                    </RuleIconBlack>
                                    <SubTitle>
                                        <TextXs>음료 판매</TextXs>
                                    </SubTitle>
                                </RuleItemSection>
                                <RuleItemSection>
                                    <RuleIconBlack>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_toilet.svg" alt="..." />
                                    </RuleIconBlack>
                                    <SubTitle>
                                        <TextXs>남녀 구분</TextXs>
                                    </SubTitle>
                                </RuleItemSection>
                            </RuleSection>
                        </ContentsWrapper>
                        <ContentsWrapper>
                            <RuleSubInfoSection>
                                <ContentsWrapper>
                                    <TextXs>최근 3개월 이 구장을 방문한 플래버들이 일해요</TextXs>
                                </ContentsWrapper>
                                <RuleSubIconSection>
                                    <RuleSubIconWrapper>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_grass.svg" />
                                        <TextXs>잔디 상태가 좋아요</TextXs>
                                    </RuleSubIconWrapper>
                                    <RuleSubIconWrapper>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_correct.svg" />
                                        <TextXs>시설 정보가 정확해요</TextXs>
                                    </RuleSubIconWrapper>
                                    <RuleSubIconWrapper>
                                        <Img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_clean.svg" />
                                        <TextXs>화장실이 깨끗해요</TextXs>
                                    </RuleSubIconWrapper>
                                </RuleSubIconSection>
                            </RuleSubInfoSection>
                        </ContentsWrapper>
                        <ContentsWrapper>
                            <RuleExtraInfoSection>
                                <RuleExtraInfoWrapper>
                                    <RuleExtraTitle>주차</RuleExtraTitle>
                                    <RuleExtraInfoList>
                                        <Li>At least 10 characters (and up to 100 characters)</Li>
                                        <Li>At least one lowercase character</Li>
                                        <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
                                    </RuleExtraInfoList>
                                </RuleExtraInfoWrapper>
                                <RuleExtraInfoWrapper>
                                    <RuleExtraTitle>특이사항</RuleExtraTitle>
                                    <RuleExtraInfoList>
                                        <Li>샤워실 이용 금지 / 공, 조끼 대여 불가 (코로나 확산 방지 차원 / 별도의 안내 시 까지)</Li>
                                        <Li>풋살화 2시간 6,000원 유료 대여(우천시 대여 불가)</Li>
                                        <Li>22:30 이전 현금,카드,계좌이체 // 22:30 이후 현금,계좌이체만 가능</Li>
                                    </RuleExtraInfoList>
                                </RuleExtraInfoWrapper>
                                <RuleExtraInfoWrapper>
                                    <RuleExtraTitle>꼭 지켜주세요</RuleExtraTitle>
                                    <RuleExtraInfoList>
                                        <Li>고성방가 및 휘슬 사용 금지 (소음 민원)</Li>
                                        <Li>민원 반복 발생 시 퇴장 조치할 수 있음</Li>
                                        <Li>흡연은 지정된 장소에서만 허용</Li>
                                        <Li>적발 시 추후 대관 이용 불이익</Li>
                                    </RuleExtraInfoList>
                                </RuleExtraInfoWrapper>
                            </RuleExtraInfoSection>
                        </ContentsWrapper>
                        <ModalFlexTitle>
                            <BlueLine></BlueLine>
                        </ModalFlexTitle>
                    </DetailWrapper4>
                </DetailSection>
                <DetailSection>
                    <DetailWrapper4>
                        <ContentsWrapper>
                            <TextSmall>위치</TextSmall>
                        </ContentsWrapper>
                        <ContentsWrapper>
                            <Img src="http://psmever.iptime.org:8062/sample-image/map-1.png" alt="..." />
                        </ContentsWrapper>
                        <DetailSubTitle>
                            <TextXs>서울 은평구 통일로 1050</TextXs>
                            <UnderlineText>주소 복사</UnderlineText>
                        </DetailSubTitle>
                        <ModalFlexTitle>
                            <BlueLine></BlueLine>
                        </ModalFlexTitle>
                    </DetailWrapper4>
                </DetailSection>
                <DetailSectionSticky>
                    <DetailWrapper6>
                        <ContentsWrapper>
                            <BoldLargeText>예약 취소 및 환불 규정</BoldLargeText>
                        </ContentsWrapper>
                        <ContentsSection>
                            <TextSmall>일반</TextSmall>
                            <ContentsWrapper>
                                <Grid>
                                    <SmallText>7일 전</SmallText>
                                    <SmallBorderText>100% 환불</SmallBorderText>
                                    <SmallText>5일 전</SmallText>
                                    <SmallBorderText>80% 환불</SmallBorderText>
                                    <SmallText>3일 전</SmallText>
                                    <SmallBorderText>50% 환불</SmallBorderText>
                                    <SmallBorderRText>2일 전 ~ 예약 당일</SmallBorderRText>
                                    <RuleTextSmall>환불 불가</RuleTextSmall>
                                </Grid>
                            </ContentsWrapper>
                        </ContentsSection>
                        <SubInfoSection>
                            <RuleExtraTitle>강수 시 변경 및 환불 규정</RuleExtraTitle>
                            <RuleExtraInfoList>
                                <Li>
                                    아래 조건에 해당하는 경우, 플래비(홈페이지 우측 하단의 노란색 아이콘)를 통해 문의주시면 확인 후 변경 및
                                    환불을 도와드립니다.
                                </Li>
                                <Li>실내 구장은 강수로 인한 변경 및 환불 가능 조건에 해당하지 않습니다.</Li>
                            </RuleExtraInfoList>
                        </SubInfoSection>
                        <SubInfoSection>
                            <RuleExtraTitle>변경 규정</RuleExtraTitle>
                            <RuleExtraInfoList>
                                <Li>예약 시작 시간 2시간 전 기상청 날씨누리 해당 주소지를 기준으로 합니다 (확인하러 가기)</Li>
                                <DashText>- 오전 예약의 경우 전일 21시부터 변경 요청 가능</DashText>
                                <Li>실내 구장은 강수로 인한 변경 및 환불 가능 조건에 해당하지 않습니다.</Li>
                            </RuleExtraInfoList>
                        </SubInfoSection>
                        <SubInfoSection>
                            <RuleExtraTitle>환불 규정</RuleExtraTitle>
                            <RuleExtraInfoList>
                                <Li>당일 천재지변으로 인해 구장 이용이 불가한 경우, 100% 환불됩니다.</Li>
                                <DashText>- 적용 기준: 호우경보, 대설경보, 태풍주의보, 태풍경보</DashText>
                            </RuleExtraInfoList>
                        </SubInfoSection>
                        <SubInfoSection>
                            <RuleExtraTitle>그 외 취소 기준</RuleExtraTitle>
                            <RuleExtraInfoList>
                                <Li>결제 후 30분 이내 하루 1회에 한해 무료 취소가 가능합니다.</Li>
                                <Li>단순 변심에 의한 날짜 변경은 불가합니다.</Li>
                                <Li>예약 시간이 지나고 문의하는 경우 변경 및 환불이 불가합니다.</Li>
                            </RuleExtraInfoList>
                        </SubInfoSection>
                    </DetailWrapper6>
                </DetailSectionSticky>
            </MainSection>

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

export default RentalDetailMain;
