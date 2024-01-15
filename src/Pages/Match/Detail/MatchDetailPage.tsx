import React, { useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import Header from '@Page/Publish/Header';
import Footer from '@Page/Publish/Footer';
import Slider from 'react-slick';
import lodash from 'lodash';
import { OraButton } from '@Elements';
import LayoutStyles from '@Style/LayoutStyles';
import MatchStyles from '@Style/MatchStyles';
import ElementStyles from '@Style/ElementStyles';
import RentalStyles from '@Style/RentalStyles';
import AuthStyles from '@Style/AuthStyles';

/**
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_goal.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
http://psmever.iptime.org:8062/assets/temp/detail-chart.png
 */

const {
    DefalutMainContainer,
    SectionContainer,
    SectionWrapper,
    Flex,
    FlexItem,
    ContentsTitle,
    FlexItemCenter,
    TextXs,
    ItemWrapper,
    FlexItemCenterBorder,
    ContentsXsTitle,
    ItemCenterSection,
    TextGrayXs,
    ThirdDivide,
    BoldLargeText,
    HalfSection,
    HalfDivide,
} = LayoutStyles.DefalutLayoutStyle;
const { Svg4, Svg5 } = ElementStyles.SvgStyle;
const { RightItemIcon, LeftItem } = AuthStyles.MyProfile;
const { TextSmall, DateSectionDiv, TextLarge } = MatchStyles.MatchLayoutStyle;
const { MainSlideFigure, MainP, InfoWrapper, TextGray, ReserSection } = LayoutStyles.MainLayoutStyle;
const {
    DetailMainSection,
    MainImg,
    PageSection,
    DetailMainContainer,
    DetailMainWrapper,
    DetailItemSection,
    DetailItem1,
    DetailItemContainer,
    DetailTitle,
    FirstDetailSection,
    FirstDetailContainer,
    FirstDetailIcon,
    FirstItemSection,
    BlueIcon,
    YellowIcon,
    RedIcon,
    WhiteText,
    FirstExplain,
    SecondItemSection,
    GrayItemSection,
    GrayItem,
    MatchItemSection,
    MatchItemContainer,
    BlueSmIcon,
    YelloSmIcon,
    RedSmIcon,
    WhiteSmText,
    LevelSection,
    ChartSection,
    ChartItemSection,
    ChartItem,
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    ItemCenterGap,
    ItemCenterGap2,
    ChartImg,
    ChartExplainSection,
    ChartExplainContainer,
    ChartExplainContainerPl6,
    DetailIcon,
    DetailItemWrapper,
    TextGraySm,
    BorderBar,
    DetailItemExplain,
    MatchDetailTitle,
    SubExplainSection,
    ExplainSection,
    ExplainWrapper,
    ExplaiContainer,
    ExplainList,
    MatchDetailTitleGray,
    TableSection,
    TableTitle,
    MatchDetailRightSection,
    MatchDetailTitleGrayUnderline,
    DivideBar,
    DetailSubSection,
    BlueTextUnderline,
    TextGrayLine,
    EmptySection,
} = MatchStyles.DetailLayoutStyle;
const { TitleSection } = RentalStyles.Detail;
const { NoneWrap } = AuthStyles.MyProfile;
const MatchDetailPage = () => {
    const [slideCurrent, setSlideCurrent] = useState<number>(1);
    const slidersettings = {
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

    return (
        <DefalutMainContainer>
            <Header />

            <DetailMainSection>
                <SectionContainer>
                    <SectionWrapper>
                        {/* Contents Start */}
                        <Slider {...slidersettings}>
                            {lodash.map(TemporaryData.Detail.slideList, (e, index) => {
                                return (
                                    <MainSlideFigure key={`publish-main-page-banner-slide-item-${index}`}>
                                        <div>
                                            <MainImg src={`${e}`} alt="..." />
                                        </div>
                                        <PageSection>
                                            <MainP>{slideCurrent} | 3 +</MainP>
                                        </PageSection>
                                    </MainSlideFigure>
                                );
                            })}
                        </Slider>
                        {/* Contents End */}
                    </SectionWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        {/* Contents Start */}
                        <DetailMainContainer>
                            <DetailMainWrapper>
                                <DetailItemSection>
                                    <DetailItem1>
                                        <DetailItemContainer>
                                            <Flex>
                                                <DetailTitle>플래버 오브 더 매치</DetailTitle>
                                            </Flex>
                                        </DetailItemContainer>
                                        <DetailItemContainer>
                                            <FlexItem>
                                                <FirstDetailSection>
                                                    <FirstDetailContainer>
                                                        <FirstDetailIcon
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_plaber_of_the_match_emoji.svg"
                                                            alt="..."
                                                        />
                                                        <ContentsTitle>Plaber Of The Match</ContentsTitle>
                                                    </FirstDetailContainer>
                                                </FirstDetailSection>
                                                <FirstItemSection>
                                                    <InfoWrapper>
                                                        <BlueIcon>
                                                            <WhiteText>2</WhiteText>
                                                        </BlueIcon>
                                                        <FlexItemCenter>
                                                            <TextXs>우의명</TextXs>
                                                        </FlexItemCenter>
                                                    </InfoWrapper>
                                                    <InfoWrapper>
                                                        <YellowIcon>
                                                            <WhiteText>2</WhiteText>
                                                        </YellowIcon>
                                                        <FlexItemCenter>
                                                            <TextXs>진하영</TextXs>
                                                        </FlexItemCenter>
                                                    </InfoWrapper>
                                                    <InfoWrapper>
                                                        <RedIcon>
                                                            <WhiteText>2</WhiteText>
                                                        </RedIcon>
                                                        <FlexItemCenter>
                                                            <TextXs>서보문</TextXs>
                                                        </FlexItemCenter>
                                                    </InfoWrapper>
                                                </FirstItemSection>
                                                <FirstItemSection>
                                                    <InfoWrapper>
                                                        <FlexItemCenter>
                                                            <TextGray>플래버 오브 더 매치는 가장 매너가 좋고</TextGray>
                                                        </FlexItemCenter>
                                                        <FlexItemCenter>
                                                            <TextGray>긍정적인 분위기를 만들어 준 플래버예요</TextGray>
                                                        </FlexItemCenter>
                                                    </InfoWrapper>
                                                </FirstItemSection>
                                            </FlexItem>
                                        </DetailItemContainer>
                                    </DetailItem1>
                                    <FirstExplain>
                                        <InfoWrapper>
                                            <ItemWrapper>
                                                <Svg5
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="orange">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </Svg5>
                                                <TextXs>플래버 오브 더 매치에 대해 알아보세요</TextXs>
                                            </ItemWrapper>
                                        </InfoWrapper>
                                    </FirstExplain>
                                </DetailItemSection>
                                <DetailItemSection>
                                    <DetailItemContainer>
                                        <Flex>
                                            <DetailTitle>매치 데이터</DetailTitle>
                                        </Flex>
                                        <SecondItemSection>
                                            <GrayItemSection>
                                                <GrayItem>
                                                    <TextGray>전체</TextGray>
                                                    <TextGray>아마추어3</TextGray>
                                                </GrayItem>
                                            </GrayItemSection>
                                            <MatchItemSection>
                                                <MatchItemContainer>
                                                    <BlueSmIcon>
                                                        <WhiteSmText>오라</WhiteSmText>
                                                    </BlueSmIcon>
                                                    <FlexItemCenterBorder>
                                                        <TextXs>아마추어2</TextXs>
                                                    </FlexItemCenterBorder>
                                                </MatchItemContainer>
                                            </MatchItemSection>
                                            <MatchItemSection>
                                                <MatchItemContainer>
                                                    <YelloSmIcon>
                                                        <WhiteSmText>오라</WhiteSmText>
                                                    </YelloSmIcon>
                                                    <FlexItemCenterBorder>
                                                        <TextXs>아마추어2</TextXs>
                                                    </FlexItemCenterBorder>
                                                </MatchItemContainer>
                                            </MatchItemSection>
                                            <MatchItemSection>
                                                <MatchItemContainer>
                                                    <RedSmIcon>
                                                        <WhiteSmText>오라</WhiteSmText>
                                                    </RedSmIcon>
                                                    <FlexItemCenterBorder>
                                                        <TextXs>아마추어2</TextXs>
                                                    </FlexItemCenterBorder>
                                                </MatchItemContainer>
                                            </MatchItemSection>
                                        </SecondItemSection>
                                        <LevelSection>
                                            <ContentsXsTitle>레벨 분포도</ContentsXsTitle>
                                            <Svg4
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                />
                                            </Svg4>
                                        </LevelSection>
                                        <InfoWrapper>
                                            <ChartSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart1></Chart1>
                                                    </ChartItem>
                                                    <TextXs>0%</TextXs>
                                                    <TextGray>루키</TextGray>
                                                </ChartItemSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart2></Chart2>
                                                    </ChartItem>
                                                    <TextXs>20%</TextXs>
                                                    <TextGray>스타터</TextGray>
                                                </ChartItemSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart3></Chart3>
                                                    </ChartItem>
                                                    <TextXs>40%</TextXs>
                                                    <TextGray>비기너</TextGray>
                                                </ChartItemSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart4></Chart4>
                                                    </ChartItem>
                                                    <TextXs>100%</TextXs>
                                                    <TextGray>아마추어</TextGray>
                                                </ChartItemSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart5></Chart5>
                                                    </ChartItem>
                                                    <TextXs>20%</TextXs>
                                                    <TextGray>세미프로</TextGray>
                                                </ChartItemSection>
                                                <ChartItemSection>
                                                    <ChartItem>
                                                        <Chart5></Chart5>
                                                    </ChartItem>
                                                    <TextXs>20%</TextXs>
                                                    <TextGray>프로</TextGray>
                                                </ChartItemSection>
                                            </ChartSection>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <ItemWrapper>
                                                <Svg5
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="orange">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </Svg5>
                                                <TextXs>팀 레벨이 맞지 않으면 친구끼리 와도 다른 팀이 될 수 있어요</TextXs>
                                            </ItemWrapper>
                                        </InfoWrapper>
                                    </DetailItemContainer>
                                    <DetailItemContainer>
                                        <ItemCenterSection>
                                            <ItemCenterGap>
                                                <DetailTitle>플레이 스타일</DetailTitle>
                                                <Svg4
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </Svg4>
                                            </ItemCenterGap>
                                            <ItemCenterGap>
                                                <TitleSection>
                                                    <img
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_graph_bar_blue.svg"
                                                        alt="..."
                                                    />
                                                    <TextXs>매치 평균</TextXs>
                                                    <img
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_graph_bar_yellow.svg"
                                                        alt="..."
                                                    />
                                                    <TextXs>전체 평균</TextXs>
                                                </TitleSection>
                                                <Flex></Flex>
                                            </ItemCenterGap>
                                        </ItemCenterSection>
                                        <FlexItemCenter>
                                            <ChartImg src="http://psmever.iptime.org:8062/assets/temp/detail-chart.png" alt="..." />
                                        </FlexItemCenter>
                                        <ChartExplainSection>
                                            <ChartExplainContainer>
                                                <ItemCenterGap2>
                                                    <DetailIcon
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_pom.svg"
                                                        alt="..."
                                                    />
                                                    <TextXs>POM이 15명 있어요</TextXs>
                                                </ItemCenterGap2>
                                            </ChartExplainContainer>
                                            <ChartExplainContainerPl6>
                                                <TextGray>
                                                    POM은 서로 존중하고 격려하며 함게 즐길 수 있도록 매치에 긍정적인 에너지를 불어넣어 주는
                                                    플래버예요
                                                </TextGray>
                                            </ChartExplainContainerPl6>
                                        </ChartExplainSection>
                                    </DetailItemContainer>
                                </DetailItemSection>
                                <DetailItemSection>
                                    <DetailItemContainer>
                                        <Flex>
                                            <DetailTitle>매치 포인트</DetailTitle>
                                        </Flex>
                                        <DetailItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_level.svg" alt="..." />
                                                <TextGraySm>모든 레벨</TextGraySm>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_gender.svg" alt="..." />
                                                <span>남녀 모두</span>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg" alt="..." />
                                                <TextGraySm>6vs6 3파전</TextGraySm>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_max_player_cnt.svg"
                                                    alt="..."
                                                />
                                                <TextGraySm>10~18명</TextGraySm>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                                <TextGraySm>풋살화/운동화</TextGraySm>
                                            </ItemWrapper>
                                        </DetailItemWrapper>
                                    </DetailItemContainer>
                                    <BorderBar></BorderBar>
                                    <DetailItemExplain>
                                        <InfoWrapper>
                                            <TitleSection>
                                                <RightItemIcon
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_woman.svg"
                                                    alt="..."
                                                />
                                                <TextSmall>아직 여자 플래버는 0명이에요</TextSmall>
                                            </TitleSection>
                                            <SubExplainSection>
                                                <TextGrayXs>
                                                    서로 배려하며, 함께 즐겨요. 내 힘이 누군가에게 큰 아픔이 될 수 있습니다. 지나친 몸싸움과
                                                    강한 슛을 조심해 주세요.
                                                </TextGrayXs>
                                            </SubExplainSection>
                                        </InfoWrapper>
                                        <ItemWrapper>
                                            <RightItemIcon
                                                src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manager.svg"
                                                alt="..."
                                            />
                                            <TextSmall>강만호 매니저가 진행해요</TextSmall>
                                        </ItemWrapper>
                                    </DetailItemExplain>
                                </DetailItemSection>
                                <DetailItemSection>
                                    <DetailItemContainer>
                                        <Flex>
                                            <DetailTitle>경기장 정보</DetailTitle>
                                        </Flex>
                                        <DetailItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg" alt="..." />
                                                <TextGraySm>40x20m</TextGraySm>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shower.svg" alt="..." />
                                                <TextGrayLine>샤워실</TextGrayLine>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_park.svg" alt="..." />
                                                <TextGraySm>유료주차</TextGraySm>
                                            </ItemWrapper>
                                            <ItemWrapper>
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                                <TextGraySm>풋살화대여</TextGraySm>
                                            </ItemWrapper>
                                        </DetailItemWrapper>
                                    </DetailItemContainer>
                                    <BorderBar></BorderBar>
                                    <DetailItemExplain>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>구장 특이사항</MatchDetailTitle>
                                            </Flex>
                                            <ExplainSection>
                                                <ExplainWrapper>
                                                    {`
                                                        ■풋살장 가는 길: 엘리베이터를 이용하여 8층 풋살장으로 이동 (주말 오전 9시 매치 입장 시 후문[정문에서 코스트코 방향으로 이동]을 통해 8시 40분 부터 출입 가능)

                                                        ■주차: 매치 신청 시 선착순 3대 2시간 무료 (롯데마트 8층 주차장은 사용 불가)
                                                        -주차 미등록자는 더에프 사무실 직원에게 문의 /010-6587-8487)
                                                        -주차 등록은 매치 30분 이내 변경 및 신청 불가(이후 10분당 500원)
                                                        -21시 이후 입차 시 주차비용 발생
                                                        -연타임 주차 신청 가능 (출차 시 부스에 이야기하면 연타임 처리)
                                                        (* 종종 주차누락이 있어 무료 주차 사전등록을 완료했음에도 1층 주차 차단기에서 통과가 안된다면, 사전 주차등록한 차량의 번호를 주차부스 담당자에게 소통해주세요.)

                                                        ■풋살화: 대여 가능(3,000원, Size : 250~285) 구장 입구에 있는 8층 더에프 사무실에서 대여 (사이즈별 재고 여부는 구장 측으로 문의 주세요.)

                                                        ■워밍업존: A구장 정면에 워밍업존 무료 이용 가능 (패스 리바운더, 사이클, 벤치프레스, 스텝 레더 등)

                                                        ■흡연: A구장 옆에 흡연장 이용 (흡연 구역 외 마트내 흡연 적발시 퇴장 조치 및 과태료 부과)

                                                        ■화장실: 7층 화장실 이용

                                                        ■무단 출입 금지: 레슨용 시설 더에프랩(실내)와 스킬피치 앞에 무단 출입금지 안내문이 비치되어 있습니다.

                                                        ■기타: 긴급 시 사용 가능한 자동 제세동기가 8F 더에프 필드 사무실 옆 벽면에 설치돼 있습니다.

                                                    `}
                                                </ExplainWrapper>
                                            </ExplainSection>
                                        </InfoWrapper>
                                    </DetailItemExplain>
                                </DetailItemSection>
                                <DetailItemSection>
                                    <DetailItemContainer>
                                        <Flex>
                                            <DetailTitle>매치 진행 방식</DetailTitle>
                                        </Flex>
                                    </DetailItemContainer>
                                    <DetailItemExplain>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>매치 규칙</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>모든 파울은 사이드라인에서 킥인</MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            골키퍼에게 백패스 가능. 손으로는 잡으면 안 돼요
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>사람을 향한 태클 금지</MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>진행 방식</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>풋살화와 개인 음료만 준비하세요</MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>매니저가 경기 진행을 도와드려요</MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            골키퍼와 휴식을 공평하게 돌아가면서 해요
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>레벨 데이터를 기준으로 팀을 나눠요</MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            친구끼리 와도 팀 실력이 맞지 않으면 다른 팀이 될 수 있어요
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>알아두면 좋아요</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>서로 존중하고 격려하며 함께 즐겨요</MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            오라에서는 하루 평균 250매치가 진행되고 있어요
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            매일 4,500여 명이 팀 없이도 풋살을 즐기고 있어요
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                    </DetailItemExplain>
                                </DetailItemSection>
                                <DetailItemSection>
                                    <DetailItemContainer>
                                        <Flex>
                                            <DetailTitle>환불 정책</DetailTitle>
                                        </Flex>
                                    </DetailItemContainer>
                                    <DetailItemExplain>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>신청 취소 시 환불 기준</MatchDetailTitle>
                                            </Flex>
                                            <DateSectionDiv>
                                                <TableSection>
                                                    <tbody>
                                                        <tr>
                                                            <TableTitle>매치 2일 전</TableTitle>
                                                            <TableTitle>무료 취소</TableTitle>
                                                        </tr>
                                                        <tr>
                                                            <TableTitle>매치 1일 전</TableTitle>
                                                            <TableTitle>80% 환급</TableTitle>
                                                        </tr>
                                                        <tr>
                                                            <TableTitle>당일 ~ 매치 시작 90분 전까지</TableTitle>
                                                            <TableTitle>20% 환급</TableTitle>
                                                        </tr>
                                                        <tr>
                                                            <TableTitle>매치 시작 90분 이내</TableTitle>
                                                            <TableTitle>환불 불가</TableTitle>
                                                        </tr>
                                                    </tbody>
                                                </TableSection>
                                            </DateSectionDiv>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>그 외 취소 기준</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            결제 후 30분 이내에는 하루 1회에 한해 무료 취소가 가능합니다. (단, 매치 시작
                                                            90분 이내일 경우 불가)
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            쿠폰 신청자는 매치 시작 90분 전까지 취소 시 쿠폰이 반환됩니다.
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            결제 시 실 결제금액(쿠폰 제외)을 기준으로 위 규정에 따라 환급됩니다.
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            현장에서 매치가 취소되는 경우 참가비는 진행되지 않은 시간만큼 다음날 오전
                                                            환급됩니다.
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            매치 시작 90분 전까지 최소 인원이 모이지 않을 시 카카오톡 혹은 LMS으로 안내되며,
                                                            자동 전액 환불됩니다. (단, 공지 전 직접 취소하시는 경우 상단 일반 환불 규정대로
                                                            처리되니 유의하시길 바랍니다)
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>다음의 경우는 환불이 불가합니다.</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            구장, 날짜, 시간 등을 실수로 잘못 선택한 경우
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            부상, 취업 등 개인 사정으로 신청된 매치에 참여하지 못하는 경우
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            단체 혹은 지인과의 참가로 매치 취소 혹은 변경을 원하는 경우
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            황사/미세먼지로 인해 취소 혹은 변경을 요청하는 경우
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            단순 변심으로 취소 혹은 변경을 요청하는 경우
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>유의사항</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            무단 불참하거나 매치 시작 90분 이내에 취소하면 패널티를 받을 수 있습니다.
                                                            (참여가 어려울 경우, 환불이 불가능하더라도 원활한 매치 진행을 위해 나의 플랩에서
                                                            미리 취소해주세요.)
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>변경 정책</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            변경은 취소와 동일한 환불 규정으로 적용됩니다.
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            변경은 상단 환불 정책 기준 100% 환불일 경우에만 가능하며, 규정 외 요청은 적용이
                                                            불가합니다.
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>우천 및 폭설 정책</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainWrapper>
                                                    {`
                                                            기상청 날씨누리 예보에 따라 진행 여부 및 환불 가능 여부를 공지해드립니다.
                                                            - 공지 시점
                                                            오전(12시 이전) 매치 : 하루 전 22시 기준, 매치 진행 시간의 강수량 예보가 1mm 이상 시
                                                            오후(12시 이후) 매치 : 매치 시작 4시간 전 기준, 매치 진행 시간의 강수량 예보가 1mm 이상 시
                                                            - 공지 방법 : 카카오톡 또는 문자(본인 인증된 연락처)
                                                            ‘강수 안내 알림톡’을 받고, 매치 시작 90분 전까지 취소하면 전액 환불됩니다.
                                                            갑작스러운 기상 악화로 1mm 이상 강수 예보가 발생하였으나 매치 3시간 전까지 알림톡이 발송되지 못한 경우, 아래와 같이 처리됩니다.
                                                            매치 시작 1시간 30분 ~ 3시간 전까지 홈페이지 우측 하단 채널톡으로 문의 시 확인 후 강수 안내 알림톡 발송 또는 전액 환불 처리
                                                            매치 시작까지 1시간 30분 미만 남은 경우 매치 확정 후 현장으로 출발한 참가자가 있을 수 있어 현장 방문 후 매니저에게 취소 의사 전달 시 전액 환불 처리 가능(익일 오전 일괄 환급)
                                                            알림톡 발송 없이 직접 취소하시는 경우 상단의 일반 환불 규정대로 처리되니 유의하시길 바랍니다.
                                                            별도 공지가 없을 시 매치는 정상 진행됩니다.
                                                            다수의 인원이 취소하거나, 구장 상태가 좋지 않아 진행이 어렵다면 매치 시작 90분 이내라도 매치를 취소합니다.
                                                            현장에서 매치가 취소되거나 중단되면 진행하지 못한 시간만큼 캐시로 환불됩니다.

                                                    `}
                                                </ExplainWrapper>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                        <InfoWrapper>
                                            <Flex>
                                                <MatchDetailTitle>소셜매치 취소 방법</MatchDetailTitle>
                                            </Flex>
                                            <ExplaiContainer>
                                                <ExplainList>
                                                    <li>
                                                        <MatchDetailTitleGray>
                                                            마이페이지 → 신청 내역 → 소셜 매치 탭 클릭 → 취소를 원하는 매치의 신청내역 클릭
                                                            후 취소
                                                        </MatchDetailTitleGray>
                                                    </li>
                                                    <li>
                                                        <MatchDetailTitleGray>신청 내역 바로 가기</MatchDetailTitleGray>
                                                    </li>
                                                </ExplainList>
                                            </ExplaiContainer>
                                        </InfoWrapper>
                                    </DetailItemExplain>
                                </DetailItemSection>
                            </DetailMainWrapper>
                            <ThirdDivide>
                                <MatchDetailRightSection>
                                    <DetailItemSection>
                                        <DetailItemContainer>
                                            <Flex>
                                                <ContentsTitle>12월 5일 화요일 15:00</ContentsTitle>
                                            </Flex>
                                            <Flex>
                                                <TextLarge>서울 영등포 더에프 필드 B구장</TextLarge>
                                            </Flex>
                                            <NoneWrap>
                                                <MatchDetailTitleGray>서울특별시 영등포구 선유로 138</MatchDetailTitleGray>
                                                <MatchDetailTitleGrayUnderline>주소복사</MatchDetailTitleGrayUnderline>
                                                <MatchDetailTitleGrayUnderline>지도보기</MatchDetailTitleGrayUnderline>
                                            </NoneWrap>
                                            <NoneWrap>
                                                <ReserSection>
                                                    <DetailIcon
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_viewer.svg"
                                                        alt="..."
                                                    />
                                                    <MatchDetailTitleGray>216</MatchDetailTitleGray>
                                                </ReserSection>
                                                <ReserSection>
                                                    <DetailIcon
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_bookmark_filled.svg"
                                                        alt="..."
                                                    />
                                                    <MatchDetailTitleGray>2</MatchDetailTitleGray>
                                                </ReserSection>
                                            </NoneWrap>
                                            <DivideBar></DivideBar>
                                            <LeftItem>
                                                <ItemCenterGap2>
                                                    <BoldLargeText>10,000원</BoldLargeText>
                                                    <TextGrayXs> / 2시간</TextGrayXs>
                                                </ItemCenterGap2>
                                            </LeftItem>
                                            <DivideBar></DivideBar>
                                            <LeftItem>
                                                <DetailSubSection>
                                                    <HalfSection>
                                                        <LeftItem>
                                                            <BlueTextUnderline>다음 일정을 미리 예약</BlueTextUnderline>
                                                            <TextXs>하세요</TextXs>
                                                        </LeftItem>
                                                        <Flex>
                                                            <TextGrayXs>2일 전까지 무료 취소</TextGrayXs>
                                                        </Flex>
                                                    </HalfSection>
                                                    <HalfDivide>
                                                        <OraButton
                                                            ButtonName={`매치 신청`}
                                                            ButtonColor={`blue`}
                                                            HandleClick={() => console.debug('click')}
                                                        />
                                                    </HalfDivide>
                                                </DetailSubSection>
                                            </LeftItem>
                                        </DetailItemContainer>
                                    </DetailItemSection>
                                </MatchDetailRightSection>
                            </ThirdDivide>
                        </DetailMainContainer>
                        {/* Contents End */}
                    </SectionWrapper>
                </SectionContainer>
                <EmptySection></EmptySection>
            </DetailMainSection>

            <Footer />
        </DefalutMainContainer>
    );
};

export default MatchDetailPage;
