import Slider from 'react-slick';
import lodash from 'lodash';
import TemporaryData from '@Common/TemporaryData';
import React, { useState } from 'react';
import { OraButton, OraModal } from '@Elements';
import LayoutStyles from '@Style/LayoutStyles';
import AuthStyles from '@Style/AuthStyles';

const initializeState = {
    modal: {
        register: false,
    },
};

const { DefalutMainContainer, SectionContainer, MainContainer, MainEmptyDiv, ContentsWrapper, MainWrapper, ExtraInfoWrapper, Flex } =
    LayoutStyles.DefalutLayoutStyle;
const {
    LoginImgSection,
    LoginImgWrapper,
    LoginImgContainer,
    LoginMainImg,
    LoginImg,
    LoginFigcaption,
    FigTitle,
    FigName,
    LoginSection,
    AuthWrapper,
    AuthContainer,
    AuthText,
    AuthBlueText,
    LoginInputSection,
    LoginInput,
    LoginCheckSection,
    LoginCheckWrapper,
    LoginCheckContainer,
    IdCheckBox,
    IdCheckSection,
    IdLabel,
    SubmitBlueButton,
    FindSection,
    FindText,
    KaKaoLoginSection,
    KaKaoLoginButton,
    KaKaoIcon,
    KaKaoJoinButton,
    EmailJoinButton,
    JoinModalSection,
    JoinText,
} = AuthStyles.LoginLayoutStyle;

const LoginMain = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            register: boolean;
        };
    }>(initializeState);

    const slidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <DefalutMainContainer>
            <SectionContainer></SectionContainer>

            <MainContainer>
                <SectionContainer>
                    <LoginImgSection>
                        <LoginImgWrapper>
                            <LoginImgContainer>
                                <Slider {...slidersettings}>
                                    {lodash.map(TemporaryData.Login.LoginLeftImage, (e, index) => {
                                        return (
                                            <LoginMainImg key={`publish-login-page-left-image-item-${index}`}>
                                                <LoginImg src={`${e.image}`} alt="image description" />
                                                <LoginFigcaption>
                                                    <FigTitle>{e.title}</FigTitle>
                                                    <FigName>{e.name}</FigName>
                                                </LoginFigcaption>
                                            </LoginMainImg>
                                        );
                                    })}
                                </Slider>
                            </LoginImgContainer>
                        </LoginImgWrapper>
                        <MainWrapper>
                            <LoginSection>
                                <AuthWrapper>
                                    <AuthContainer>
                                        <AuthText>풋살 하고 싶을땐</AuthText>
                                        <AuthBlueText>오라 풋볼</AuthBlueText>
                                        <LoginInputSection>
                                            <MainEmptyDiv>
                                                <LoginInput type="email" placeholder="아이디 또는 이메일" />
                                            </MainEmptyDiv>
                                            <MainEmptyDiv>
                                                <LoginInput type="password" placeholder="비밀번호" autoComplete="on" />
                                            </MainEmptyDiv>
                                            <LoginCheckSection>
                                                <LoginCheckWrapper>
                                                    <LoginCheckContainer>
                                                        <IdCheckBox type="checkbox" />
                                                    </LoginCheckContainer>
                                                    <IdCheckSection>
                                                        <IdLabel htmlFor="remember">아이디 저장</IdLabel>
                                                    </IdCheckSection>
                                                </LoginCheckWrapper>
                                            </LoginCheckSection>
                                            <SubmitBlueButton type="submit">로그인</SubmitBlueButton>
                                            <FindSection>
                                                <FindText>아이디/비밀번호 찾기</FindText>
                                                <FindText
                                                    onClick={() => {
                                                        setPageState(prevState => ({
                                                            ...prevState,
                                                            modal: {
                                                                ...prevState.modal,
                                                                register: true,
                                                            },
                                                        }));
                                                    }}>
                                                    회원가입
                                                </FindText>
                                            </FindSection>
                                        </LoginInputSection>
                                    </AuthContainer>
                                </AuthWrapper>
                                <KaKaoLoginSection>
                                    <KaKaoLoginButton type="submit">
                                        <KaKaoIcon
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="black">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                                            />
                                        </KaKaoIcon>
                                        <span>카카오 로그인</span>
                                    </KaKaoLoginButton>
                                </KaKaoLoginSection>
                            </LoginSection>
                        </MainWrapper>
                    </LoginImgSection>
                </SectionContainer>
            </MainContainer>
            {pageState.modal.register && (
                <OraModal
                    Children={
                        <MainWrapper>
                            <JoinModalSection>
                                <ExtraInfoWrapper>
                                    <Flex>
                                        <JoinText>오라</JoinText>
                                    </Flex>
                                </ExtraInfoWrapper>
                                <ExtraInfoWrapper>
                                    <Flex>
                                        <FigTitle>회원 가입하고 매치에 참여하세요</FigTitle>
                                    </Flex>
                                </ExtraInfoWrapper>
                                <ExtraInfoWrapper>
                                    <ContentsWrapper>
                                        <KaKaoJoinButton type="submit">
                                            <span>카카오 계정으로 가입</span>
                                        </KaKaoJoinButton>
                                    </ContentsWrapper>
                                </ExtraInfoWrapper>
                                <ExtraInfoWrapper>
                                    <ContentsWrapper>
                                        <EmailJoinButton type="submit">
                                            <span>이메일로 가입할래요</span>
                                        </EmailJoinButton>
                                    </ContentsWrapper>
                                </ExtraInfoWrapper>
                            </JoinModalSection>
                        </MainWrapper>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`취소`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        register: false,
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

export default LoginMain;
