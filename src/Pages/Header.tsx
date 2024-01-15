import React, { useEffect, useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import Slider from 'react-slick';
import { OraModal, OraButton } from '@Elements';
import lodash from 'lodash';
import { ElementStyles, LayoutStyles } from '@Styles';

const { SectionContainer, Flex, BoldLargeText } = LayoutStyles.DefalutLayoutStyle;
const { Text } = LayoutStyles.SplashComponentStyle;
const { InfoWrapper, SubTitle } = LayoutStyles.MainLayoutStyle;
const {
    HeaderSection,
    BackgroundSection,
    BackgroundWrapper,
    NavSection,
    HeaderText,
    HeaderContainer,
    HeaderWrapper,
    HiddenHeader,
    HeaderInput,
    DropdownSection,
    DropdownContainer,
    DropdownWrapper,
    TextSmPx4,
    DropdownAreaSection,
    AreaItem,
    SearchText,
    NewGround,
    GroundItem,
    HeaderSubSection,
} = ElementStyles.OraHeaderStyle;
const { Wrapper } = ElementStyles.OraSelectStyle;
const { Svg4, Svg6, GraySvg4, HoverGraySvg6 } = ElementStyles.SvgStyle;
const { TextLarge } = ElementStyles.TextStyle;
const {
    ModalTitle,
    SliderSection,
    SliderIconSection,
    SliderIcon,
    SliderIconName,
    SliderContainer,
    TeamSection,
    TeamIconSection,
    ModalItemSection,
    ResvSection,
    ModalDivideBar,
    ModalSubSection,
    ModalSubText,
    ModalSubContainer,
} = ElementStyles.OraModalStyle;

const modalMatcgSlidersettings = {
    dots: true,
    className: 'center',
    infinite: false,
    centerPadding: '',
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
};

const initializeState = {
    modal: {
        mainMenu: false,
    },
    searchDropDown: false,
    mainModalMatch: [],
};

const Header = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            mainMenu: boolean;
        };
        searchDropDown: boolean;
        mainModalMatch: Array<{ image: string; name: string }>;
    }>(initializeState);

    useEffect(() => {
        setPageState(prevState => ({
            ...prevState,
            mainModalMatch: TemporaryData.Main.MainModalList.Match.map(e => e),
        }));
    }, []);

    return (
        <SectionContainer>
            <BackgroundSection>
                <NavSection>
                    <BackgroundWrapper>
                        <HeaderSection
                            onClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        mainMenu: true,
                                    },
                                }))
                            }>
                            <Svg6
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </Svg6>

                            <HeaderText>보라 오라</HeaderText>
                        </HeaderSection>
                        <HeaderContainer>
                            <HeaderWrapper>
                                <HiddenHeader>
                                    <GraySvg4 aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </GraySvg4>
                                    <Text>Search icon</Text>
                                </HiddenHeader>
                                <InfoWrapper>
                                    <Flex>
                                        <HeaderInput
                                            type="text"
                                            id="search-navbar"
                                            placeholder="지역, 구장, 팀 이름으로 찾기"
                                            onFocus={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    searchDropDown: true,
                                                }))
                                            }
                                            onBlur={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    searchDropDown: false,
                                                }))
                                            }
                                        />
                                    </Flex>
                                    <Flex>
                                        {pageState.searchDropDown && (
                                            <DropdownSection>
                                                <DropdownContainer>
                                                    <DropdownWrapper>
                                                        <BoldLargeText>구장</BoldLargeText>
                                                        <TextLarge>팀</TextLarge>
                                                    </DropdownWrapper>
                                                    <SearchText>
                                                        <BoldLargeText>최근 검색어</BoldLargeText>
                                                        <TextSmPx4>하영이, 바보</TextSmPx4>
                                                    </SearchText>
                                                    <SearchText>
                                                        <BoldLargeText>인기 키워드</BoldLargeText>
                                                        <DropdownAreaSection>
                                                            <AreaItem>수원</AreaItem>
                                                            <AreaItem>부천</AreaItem>
                                                            <AreaItem>안산</AreaItem>
                                                            <AreaItem>천안</AreaItem>
                                                            <AreaItem>안양</AreaItem>
                                                        </DropdownAreaSection>
                                                    </SearchText>
                                                    <SearchText>
                                                        <BoldLargeText>새로운 구장</BoldLargeText>
                                                        <NewGround>
                                                            <GroundItem>동대문 토모 풋살피치</GroundItem>
                                                            <GroundItem>오산 풋살파크</GroundItem>
                                                            <GroundItem>고양 솔레아스풋볼 일산 중산점</GroundItem>
                                                            <GroundItem>하남 야구 풋살 스포츠 아카데미</GroundItem>
                                                            <GroundItem>하남 감일 키커스스포츠</GroundItem>
                                                            <GroundItem>경산 월드 풋살클럽</GroundItem>
                                                            <GroundItem>구리 워커힐 아천 축구장</GroundItem>
                                                            <GroundItem>전주 오풋살 풋살장</GroundItem>
                                                            <GroundItem>김포 싸커코어 축구교실</GroundItem>
                                                            <GroundItem>대구 유천 풋살장</GroundItem>
                                                        </NewGround>
                                                    </SearchText>
                                                </DropdownContainer>
                                            </DropdownSection>
                                        )}
                                    </Flex>
                                </InfoWrapper>

                                <HeaderSubSection>
                                    <HoverGraySvg6
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                        />
                                    </HoverGraySvg6>
                                    <HoverGraySvg6
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                        />
                                    </HoverGraySvg6>
                                </HeaderSubSection>
                            </HeaderWrapper>
                        </HeaderContainer>
                    </BackgroundWrapper>
                </NavSection>
            </BackgroundSection>

            {/* TODO: modal 은 레이아웃에서 처리 할것 */}

            {pageState.modal.mainMenu && pageState.mainModalMatch.length > 0 && (
                <OraModal
                    Children={
                        <Wrapper>
                            <Wrapper>
                                <ModalTitle>소셜 매치</ModalTitle>
                                <Wrapper>
                                    <Slider {...modalMatcgSlidersettings}>
                                        {lodash.map(pageState.mainModalMatch, (ml, index) => {
                                            return (
                                                <SliderSection key={`publish-main-page-main-modal-match-slide-item-${index}`}>
                                                    <SliderIconSection>
                                                        <SliderIcon src={`${ml.image}`} alt="..." />
                                                    </SliderIconSection>
                                                    <SliderIconName>{`${ml.name}`}</SliderIconName>
                                                </SliderSection>
                                            );
                                        })}
                                    </Slider>
                                </Wrapper>
                            </Wrapper>
                            <ModalItemSection>
                                <ModalTitle>팀</ModalTitle>
                                <TeamSection>
                                    {lodash.map(TemporaryData.Main.MainModalList.Team, (ml, index) => {
                                        return (
                                            <SliderContainer key={`publish-main-page-main-modal-temp-item-${index}`}>
                                                <TeamIconSection>
                                                    <img src={`${ml.image}`} alt="..." />
                                                </TeamIconSection>
                                                <SliderIconName>{`${ml.name}`}</SliderIconName>
                                            </SliderContainer>
                                        );
                                    })}
                                </TeamSection>
                            </ModalItemSection>
                            <ModalItemSection>
                                <ModalTitle>
                                    <SubTitle>
                                        <Flex>구장 예약</Flex>
                                        <ResvSection>
                                            <Svg4
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </Svg4>
                                        </ResvSection>
                                    </SubTitle>
                                </ModalTitle>
                            </ModalItemSection>
                            <ModalItemSection>
                                <ModalDivideBar></ModalDivideBar>
                            </ModalItemSection>
                            <ModalItemSection>
                                <ModalSubSection>
                                    <SubTitle>
                                        <Svg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </Svg4>
                                    </SubTitle>
                                    <ModalSubText>매니저 지원</ModalSubText>
                                </ModalSubSection>
                            </ModalItemSection>
                            <ModalSubContainer>
                                <ModalSubSection>
                                    <SubTitle>
                                        <Svg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </Svg4>
                                    </SubTitle>
                                    <ModalSubText>구장 제휴</ModalSubText>
                                </ModalSubSection>
                            </ModalSubContainer>
                            <ModalSubContainer>
                                <ModalSubSection>
                                    <SubTitle>
                                        <Svg4
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                                            />
                                        </Svg4>
                                    </SubTitle>
                                    <ModalSubText>매거진</ModalSubText>
                                </ModalSubSection>
                            </ModalSubContainer>
                        </Wrapper>
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
                                        mainMenu: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
        </SectionContainer>
    );
};

export default Header;
