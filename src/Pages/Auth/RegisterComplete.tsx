import { useState } from 'react';
import { OraModal, OraButton, OraSelect, OraInput } from '@Elements';
import TemporaryData from '@Common/TemporaryData';
import lodash from 'lodash';
import LayoutStyles from '@Style/LayoutStyles';
import AuthStyles from '@Style/AuthStyles';
import ElementStyles from '@Style/ElementStyles';

const {
    DefalutMainContainer,
    SectionContainer,
    SectionWrapper,
    BackgroundWhite,
    MainContainer,
    ExtraInfoWrapper,
    ItemCenter,
    ContentsWrapper,
    ContentsTitle,
    ContentsXsTitle,
    HalfDivide,
    Flex,
    FlexItem,
} = LayoutStyles.DefalutLayoutStyle;
const { InfoWrapper, ItemContainer } = LayoutStyles.MainLayoutStyle;
const {
    BackgroundSection,
    BackgroundWrapper,
    HeaderText,
    CompleteImgSection,
    CompleteImg,
    Text2Xl,
    TextBase,
    CompleteInfoSection,
    CompleteInfoContainer,
    WhiteTextBold,
    WhiteText,
    NextButton,
    NextButtonIcon,
    SubItemSection,
    SubItemContainer,
    SubItemTextBold,
    SubItemTextSmall,
    SubTextSmall,
    SubItemWrapper,
    InputWrapper,
    CodeSubmitButton,
    CompleteModalSection,
    CompleteModalItem,
    Tex3Xl,
    TextPt3,
    Divide2,
    SelectSection,
    SelectButton,
    SelectButtonContainer,
    SelectButtonWrapper,
    SelectButtonIcon,
} = AuthStyles.RegisterCompleteLayoutStyle;
const { AuthInputSection } = AuthStyles.EmailLayoutStyle;
const { HeaderSection, HeaderContainer, HeaderWrapper, HiddenHeader, SearchIcon, HeaderSubSection } = ElementStyles.OraHeaderStyle;
const { Svg6, GraySvg4, HoverGraySvg6 } = ElementStyles.SvgStyle;
const { SelectButtonSection, FourthDivide } = ElementStyles.OraSelectStyle;

const initializeState = {
    modal: {
        selectInfo: true,
    },
};

const RegisterComplete = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            selectInfo: boolean;
        };
    }>(initializeState);

    return (
        <DefalutMainContainer>
            <SectionContainer>
                <BackgroundSection>
                    <BackgroundWhite>
                        <BackgroundWrapper>
                            <HeaderSection onClick={() => console.debug('')}>
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
                                        <SearchIcon>Search icon</SearchIcon>
                                    </HiddenHeader>
                                    <InfoWrapper>
                                        {/* 상단 검색 깨지는데 그냥 두세요 페이지에서 수정 예정 */}
                                        <OraInput InputType={`text`} InputValue={``} Placeholder={`지역, 구장, 팀 이름으로 찾기`} />
                                        <Flex></Flex>
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
                    </BackgroundWhite>
                </BackgroundSection>
            </SectionContainer>

            <MainContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <CompleteImgSection>
                            <ItemContainer>
                                <ExtraInfoWrapper>
                                    <CompleteImg src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_handshake.png" alt="..." />
                                </ExtraInfoWrapper>
                            </ItemContainer>
                            <ItemContainer>
                                <ExtraInfoWrapper>
                                    <ItemCenter>
                                        <Text2Xl>플랩풋볼 가입을 마쳤습니다</Text2Xl>
                                        <TextBase>이제 소셜 매치 데뷔전을 준비하세요</TextBase>
                                    </ItemCenter>
                                </ExtraInfoWrapper>
                            </ItemContainer>
                            <ItemContainer>
                                <ExtraInfoWrapper>
                                    <ItemCenter>
                                        <CompleteInfoSection>
                                            <CompleteInfoContainer>
                                                <div>
                                                    <WhiteTextBold>미리 충전하고 전에 보던 매치를 신청하세요</WhiteTextBold>
                                                </div>
                                                <div>
                                                    <WhiteText>12월 2일 토요일 09:00</WhiteText>
                                                </div>
                                                <div>
                                                    <WhiteText>서울 영등포 더에프 필드 B구장 *주차마감*</WhiteText>
                                                </div>
                                            </CompleteInfoContainer>
                                            <NextButton>
                                                <NextButtonIcon
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
                                                </NextButtonIcon>
                                            </NextButton>
                                        </CompleteInfoSection>
                                    </ItemCenter>
                                </ExtraInfoWrapper>
                            </ItemContainer>
                            <ItemContainer>
                                <ExtraInfoWrapper>
                                    <ItemCenter>
                                        <SubItemSection>
                                            <SubItemContainer>
                                                <ItemCenter>
                                                    <SubItemTextBold>스카웃 코드 입력</SubItemTextBold>
                                                </ItemCenter>
                                                <SubItemTextSmall>
                                                    <SubTextSmall>친구에게 받은 스카웃 코드가 있다면 입력해주세요</SubTextSmall>
                                                </SubItemTextSmall>
                                                <SubItemWrapper>
                                                    <Flex>
                                                        <InputWrapper>
                                                            <OraInput
                                                                InputType={`text`}
                                                                InputValue={``}
                                                                Placeholder={`스카웃 코드`}
                                                                InputButton={
                                                                    <CodeSubmitButton type="submit">
                                                                        <span>입력</span>
                                                                    </CodeSubmitButton>
                                                                }
                                                            />
                                                        </InputWrapper>
                                                    </Flex>
                                                </SubItemWrapper>
                                            </SubItemContainer>
                                        </SubItemSection>
                                    </ItemCenter>
                                </ExtraInfoWrapper>
                            </ItemContainer>
                        </CompleteImgSection>
                    </SectionWrapper>
                </SectionContainer>
            </MainContainer>

            <MainContainer></MainContainer>
            {pageState.modal.selectInfo && (
                <OraModal
                    Children={
                        <CompleteModalSection>
                            <FlexItem>
                                <ContentsWrapper>
                                    <img
                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_cover_favorite_summer.jpg"
                                        alt="..."></img>
                                </ContentsWrapper>
                                <ContentsWrapper>
                                    <ContentsWrapper>
                                        <CompleteModalItem>
                                            <Tex3Xl>선호하는 지역과 시간을</Tex3Xl>
                                            <Tex3Xl>알려 주세요</Tex3Xl>
                                            <TextPt3>주변에 더 많은 매치를 열고 찾기 쉽게 도와드릴게요!</TextPt3>
                                        </CompleteModalItem>
                                    </ContentsWrapper>
                                </ContentsWrapper>
                                <Divide2>
                                    <SelectSection>
                                        <CompleteModalItem>
                                            <ContentsTitle>선호 지역</ContentsTitle>
                                            <ContentsXsTitle>주로 활동하는 지역을 선택해주세요</ContentsXsTitle>
                                        </CompleteModalItem>
                                        <AuthInputSection>
                                            <HalfDivide>
                                                <OraSelect
                                                    Label={`도시`}
                                                    Options={[
                                                        { text: `서울`, value: '01' },
                                                        { text: `경기`, value: '02' },
                                                    ]}
                                                    Value={``}
                                                />
                                            </HalfDivide>
                                            <HalfDivide>
                                                <OraSelect
                                                    Label={`선택`}
                                                    Options={[
                                                        { text: `구로`, value: '01' },
                                                        { text: `강남`, value: '02' },
                                                    ]}
                                                    Value={``}
                                                />
                                            </HalfDivide>
                                        </AuthInputSection>
                                    </SelectSection>
                                </Divide2>
                                <Divide2>
                                    <SelectSection>
                                        <CompleteModalItem>
                                            <ContentsTitle>활동 반경</ContentsTitle>
                                            <ContentsXsTitle>플랩하러 어디까지 갈 수 있나요?</ContentsXsTitle>
                                        </CompleteModalItem>
                                        <SelectButtonSection>
                                            <FourthDivide>
                                                <SelectButton>10Km</SelectButton>
                                            </FourthDivide>
                                            <FourthDivide>
                                                <SelectButton>20Km</SelectButton>
                                            </FourthDivide>
                                            <FourthDivide>
                                                <SelectButton>30Km</SelectButton>
                                            </FourthDivide>
                                            <FourthDivide>
                                                <SelectButton>40Km</SelectButton>
                                            </FourthDivide>
                                        </SelectButtonSection>
                                        <CompleteModalItem>
                                            <ContentsXsTitle>풋살하러 어디까지 갈 수 있나요?</ContentsXsTitle>
                                        </CompleteModalItem>
                                    </SelectSection>
                                </Divide2>
                                <Divide2>
                                    <SelectSection>
                                        <CompleteModalItem>
                                            <ContentsTitle>평일 선호 시간</ContentsTitle>
                                            <ContentsXsTitle>중복으로 선택할수 있어요</ContentsXsTitle>
                                        </CompleteModalItem>
                                        <SelectButtonSection>
                                            <SelectButtonContainer>
                                                {lodash.map(TemporaryData.RegisterComplete.MatchTime, (e, index) => {
                                                    return (
                                                        <SelectButton key={`publish-register-complete-page-weekday-item-${index}`}>
                                                            {' '}
                                                            <SelectButtonWrapper>
                                                                <SelectButtonIcon src={`${e.image}`} alt="" />
                                                                <span>{e.name}</span>
                                                            </SelectButtonWrapper>
                                                        </SelectButton>
                                                    );
                                                })}
                                            </SelectButtonContainer>
                                        </SelectButtonSection>
                                    </SelectSection>
                                </Divide2>
                                <Divide2>
                                    <SelectSection>
                                        <CompleteModalItem>
                                            <ContentsTitle>주말/휴일 선호 시간</ContentsTitle>
                                            <ContentsXsTitle>중복으로 선택할 수 있습니다</ContentsXsTitle>
                                        </CompleteModalItem>
                                        <SelectButtonSection>
                                            <SelectButtonContainer>
                                                {lodash.map(TemporaryData.RegisterComplete.MatchTime, (e, index) => {
                                                    return (
                                                        <SelectButton key={`publish-register-complete-page-weekend-item-${index}`}>
                                                            {' '}
                                                            <SelectButtonWrapper>
                                                                <SelectButtonIcon src={`${e.image}`} alt="" />
                                                                <span>{e.name}</span>
                                                            </SelectButtonWrapper>
                                                        </SelectButton>
                                                    );
                                                })}
                                            </SelectButtonContainer>
                                        </SelectButtonSection>
                                    </SelectSection>
                                </Divide2>
                            </FlexItem>
                        </CompleteModalSection>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`저장`}
                            ButtonHeight={`lg`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        selectInfo: false,
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

export default RegisterComplete;
