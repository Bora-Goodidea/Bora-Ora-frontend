import { useState } from 'react';
import { OraModal, OraButton } from '@Elements';
import Header from '@Page/Publish/Header';
import Footer from '@Page/Publish/Footer';
import LayoutStyles from '@Style/LayoutStyles';
import AuthStyles from '@Style/AuthStyles';
import ElementStyles from '@Style/ElementStyles';

const { Svg6 } = ElementStyles.SvgStyle;
const { Wapper } = ElementStyles.OraSelectStyle;
const { ModalTitle, ModalFlexTitle } = LayoutStyles.ModalLayout;
const { DefalutMainContainer, SectionContainer, SectionWrapper, Flex, FlexItemCenter } = LayoutStyles.DefalutLayoutStyle;
const { ItemContainer, InfoWrapper, TextGray } = LayoutStyles.MainLayoutStyle;
const {
    BgBlue,
    WholeSection,
    WholeContainer,
    LeftSection,
    LeftContainer,
    LeftItem,
    NameSection,
    NoneWrap,
    KaKaoLogo,
    ProfileButton,
    QrSection,
    MyMathDataSection,
    ManerSection,
    ManerText,
    ManerIconSection,
    LevelSection,
    Level,
    RightSection,
    RightContainer,
    RightItemSection,
    RightItemTitle,
    RightItemWrapper,
    RightItem,
    RightItemIcon,
    RightItemText,
    QrImg,
    QrText,
} = AuthStyles.MyProfile;

const initializeState = {
    modal: {
        qrCode: false,
    },
};

const MyPage = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            qrCode: boolean;
        };
    }>(initializeState);

    return (
        <DefalutMainContainer>
            <Header />

            <BgBlue>
                <SectionContainer>
                    <SectionWrapper>
                        <WholeSection>
                            <WholeContainer>
                                <LeftSection>
                                    <ItemContainer>
                                        <LeftContainer>
                                            <InfoWrapper>
                                                <LeftItem>
                                                    <NameSection>하영 바보</NameSection>
                                                </LeftItem>
                                                <NoneWrap>
                                                    <TextGray>3204504691</TextGray>
                                                    <KaKaoLogo>KAKAO</KaKaoLogo>
                                                </NoneWrap>
                                            </InfoWrapper>
                                            <Flex>
                                                <NoneWrap>
                                                    <Flex>
                                                        <ProfileButton>프로필 보기</ProfileButton>
                                                    </Flex>
                                                    <Flex>
                                                        <QrSection
                                                            onClick={() => {
                                                                setPageState(prevState => ({
                                                                    ...prevState,
                                                                    modal: {
                                                                        ...prevState.modal,
                                                                        qrCode: true,
                                                                    },
                                                                }));
                                                            }}>
                                                            <Svg6
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor">
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                                                                />
                                                            </Svg6>
                                                        </QrSection>
                                                    </Flex>
                                                </NoneWrap>
                                            </Flex>
                                        </LeftContainer>
                                    </ItemContainer>
                                    <ItemContainer>
                                        <MyMathDataSection>
                                            <ManerSection>
                                                <Flex>
                                                    <ManerText>매너</ManerText>
                                                </Flex>
                                                <ManerIconSection>
                                                    <Flex>
                                                        <img
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manner_card.svg"
                                                            alt="..."
                                                        />
                                                    </Flex>
                                                    <Flex>
                                                        <span>좋아요</span>
                                                    </Flex>
                                                </ManerIconSection>
                                            </ManerSection>
                                            <ManerSection>
                                                <LevelSection>
                                                    <ManerText>레벨</ManerText>
                                                    <div>
                                                        <img
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_level_show.svg"
                                                            alt="..."></img>
                                                    </div>
                                                </LevelSection>
                                                <ManerIconSection>
                                                    <Flex>
                                                        <Level>R</Level>
                                                    </Flex>
                                                    <Flex>
                                                        <Level>루키</Level>
                                                    </Flex>
                                                </ManerIconSection>
                                            </ManerSection>
                                        </MyMathDataSection>
                                    </ItemContainer>
                                </LeftSection>
                                <RightSection>
                                    <RightContainer>
                                        <RightItemSection>
                                            <RightItemTitle>나의 오라</RightItemTitle>
                                        </RightItemSection>
                                        <RightItemSection>
                                            <RightItemWrapper>
                                                <RightItem>
                                                    <Flex>
                                                        <RightItemIcon
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_myplab_color.svg"
                                                            alt="..."></RightItemIcon>
                                                    </Flex>
                                                    <Flex>
                                                        <RightItemTitle>매칭 내역</RightItemTitle>
                                                    </Flex>
                                                </RightItem>
                                                <RightItem>
                                                    <div>
                                                        <RightItemIcon
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_profile.svg"
                                                            alt="..."></RightItemIcon>
                                                    </div>
                                                    <div>
                                                        <RightItemText>프로필 수정</RightItemText>
                                                    </div>
                                                </RightItem>
                                            </RightItemWrapper>
                                        </RightItemSection>
                                    </RightContainer>
                                    <RightContainer>
                                        <RightItemSection>
                                            <RightItemText>고객 센터</RightItemText>
                                        </RightItemSection>
                                        <RightItemSection>
                                            <RightItemWrapper>
                                                <RightItem>
                                                    <Flex>
                                                        <RightItemIcon
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_notice_color.svg"
                                                            alt="..."></RightItemIcon>
                                                    </Flex>
                                                    <div>
                                                        <RightItemText>공지사항</RightItemText>
                                                    </div>
                                                </RightItem>
                                            </RightItemWrapper>
                                        </RightItemSection>
                                    </RightContainer>
                                </RightSection>
                            </WholeContainer>
                        </WholeSection>
                    </SectionWrapper>
                </SectionContainer>
            </BgBlue>

            <Footer />

            {pageState.modal.qrCode && (
                <OraModal
                    Children={
                        <Wapper>
                            <ModalTitle>공유하기</ModalTitle>
                            <ModalFlexTitle>
                                <FlexItemCenter>
                                    <QrImg
                                        src="https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=https://plabfootball.com/player/HkiXi"
                                        alt="..."
                                    />
                                </FlexItemCenter>
                                <FlexItemCenter>
                                    <QrText>내 프로필을 QR코드로 공유해요</QrText>
                                </FlexItemCenter>
                            </ModalFlexTitle>
                        </Wapper>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`링크복사`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        qrCode: false,
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

export default MyPage;
