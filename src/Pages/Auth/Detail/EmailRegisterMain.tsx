import LayoutStyles from '@Style/LayoutStyles';
import AuthStyles from '@Style/AuthStyles';
import ElementStyles from '@Style/ElementStyles';

const {
    DefalutMainContainer,
    SectionContainer,
    MainContainer,
    MainEmptyDiv,
    MainWrapper,
    HalfDivide,
    ThirdDivide,
    ContentsWrapper,
    Height6Div,
    ExtraInfoWrapper,
} = LayoutStyles.DefalutLayoutStyle;
const { LoginImgSection, AuthWrapper, AuthContainer, AuthText, AuthBlueText } = AuthStyles.LoginLayoutStyle;
const {
    EmailSection,
    AuthInput,
    AuthInputSection,
    AuthGuideSection,
    AuthGuideText,
    AuthRadioButton,
    AuthLabel,
    EmailJoinButton,
    JoinExtraInfo,
    JoinExtraText,
} = AuthStyles.EmailLayoutStyle;
const { SelectLabel, Select } = ElementStyles.OraSelectStyle;
const { ModalListSection } = ElementStyles.OraModalStyle;
const { SubTitle } = LayoutStyles.MainLayoutStyle;
const EmailRegisterPage = () => {
    return (
        <DefalutMainContainer>
            <SectionContainer></SectionContainer>

            <MainContainer>
                <SectionContainer>
                    <LoginImgSection>
                        <EmailSection>
                            <AuthWrapper>
                                <AuthContainer>
                                    <MainEmptyDiv>
                                        <AuthText>풋살 하고 싶을땐</AuthText>
                                        <AuthBlueText>오라 풋볼</AuthBlueText>
                                    </MainEmptyDiv>

                                    <MainEmptyDiv>
                                        <MainWrapper>
                                            <SelectLabel>이메일</SelectLabel>
                                            <AuthInput type="email" placeholder="name@company.com" />
                                        </MainWrapper>
                                    </MainEmptyDiv>
                                    <MainEmptyDiv>
                                        <AuthInputSection>
                                            <HalfDivide>
                                                <MainWrapper>
                                                    <SelectLabel>비밀번호</SelectLabel>
                                                    <AuthInput type="password" placeholder="********" />
                                                </MainWrapper>
                                            </HalfDivide>
                                            <HalfDivide>
                                                <MainWrapper>
                                                    <SelectLabel>비밀번호 확인</SelectLabel>
                                                    <AuthInput type="password" placeholder="********" />
                                                </MainWrapper>
                                            </HalfDivide>
                                        </AuthInputSection>
                                        <AuthGuideSection>
                                            <AuthGuideText>매치 참여시 본인 확인 및 참여 안내톡을 보내드립니다.</AuthGuideText>
                                            <AuthGuideText>이름과 휴대폰 번호를 꼭 바르게 적어주세요!</AuthGuideText>
                                        </AuthGuideSection>
                                    </MainEmptyDiv>
                                    <MainEmptyDiv>
                                        <AuthInputSection>
                                            <HalfDivide>
                                                <MainWrapper>
                                                    <SelectLabel>이름</SelectLabel>
                                                    <AuthInput type="email" placeholder="name@company.com" />
                                                </MainWrapper>
                                            </HalfDivide>
                                            <HalfDivide>
                                                <MainWrapper>
                                                    <SelectLabel>성별</SelectLabel>
                                                    <Select>
                                                        <option selected>선택</option>
                                                        <option value="">남성</option>
                                                        <option value="">여성</option>
                                                    </Select>
                                                </MainWrapper>
                                            </HalfDivide>
                                        </AuthInputSection>
                                        <ModalListSection>
                                            <MainWrapper>
                                                <AuthGuideSection>
                                                    <AuthGuideText>2자 이상 10자 이하의 한글/영어로 설정해주세요</AuthGuideText>
                                                </AuthGuideSection>
                                            </MainWrapper>
                                        </ModalListSection>
                                    </MainEmptyDiv>
                                    <MainEmptyDiv>
                                        <AuthInputSection>
                                            <ThirdDivide>
                                                <MainWrapper>
                                                    <SelectLabel>생년월일</SelectLabel>
                                                    <Select>
                                                        <option selected>1990</option>
                                                        <option value="">1991</option>
                                                        <option value="">1992</option>
                                                        <option value="">1993</option>
                                                        <option value="">1994</option>
                                                    </Select>
                                                </MainWrapper>
                                            </ThirdDivide>
                                            <ThirdDivide>
                                                <MainWrapper>
                                                    <Height6Div></Height6Div>
                                                    <Select>
                                                        <option selected>선택</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                    </Select>
                                                </MainWrapper>
                                            </ThirdDivide>
                                            <ThirdDivide>
                                                <MainWrapper>
                                                    <Height6Div></Height6Div>
                                                    <Select>
                                                        <option selected>선택</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                    </Select>
                                                </MainWrapper>
                                            </ThirdDivide>
                                        </AuthInputSection>
                                    </MainEmptyDiv>
                                    <MainEmptyDiv>
                                        <ContentsWrapper>
                                            <SubTitle>
                                                <AuthRadioButton checked={true} type="radio" value="" name="default-radio" />
                                                <AuthLabel>오라 서비스 이용 약관 및 개인 정보 수집 및 이용에 동의합니다.</AuthLabel>
                                            </SubTitle>
                                        </ContentsWrapper>
                                    </MainEmptyDiv>
                                    <MainEmptyDiv>
                                        <ContentsWrapper>
                                            <EmailJoinButton type="submit">
                                                {' '}
                                                <span>회원 가입</span>
                                            </EmailJoinButton>
                                        </ContentsWrapper>
                                    </MainEmptyDiv>
                                </AuthContainer>
                            </AuthWrapper>
                            <JoinExtraInfo>
                                <ExtraInfoWrapper>
                                    <JoinExtraText>이미 아이디가 있다면 여기에서 로그인하세요</JoinExtraText>
                                </ExtraInfoWrapper>
                            </JoinExtraInfo>
                        </EmailSection>
                    </LoginImgSection>
                </SectionContainer>
            </MainContainer>
        </DefalutMainContainer>
    );
};

export default EmailRegisterPage;
