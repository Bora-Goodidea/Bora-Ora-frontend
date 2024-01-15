import { OraButton } from '@Elements';
import Header from '@Page/Header';
import Footer from '@Page/Footer';
import LayoutStyles from '@Style/LayoutStyles';
import AuthStyles from '@Style/AuthStyles';
import RentalStyles from '@Style/RentalStyles';

const { DefalutMainContainer, MainContainer, SectionContainer, SectionWrapper, MainWrapper, TextGrayXs } = LayoutStyles.DefalutLayoutStyle;
const {
    ChangeSection,
    ChangeContainer,
    ChangeWrapper,
    ChangeItemSection,
    ChangeImgSection,
    ImgItem,
    ProfileLabel,
    ProfileInput,
    SubText,
    ProfileNameSection,
    DivideItem,
    GridSection,
    SaveButton,
} = AuthStyles.ChangeLayoutStyle;
const { RuleSubIconWrapper } = RentalStyles.Detail;

const ChangeProfilePage = () => {
    return (
        <DefalutMainContainer>
            <Header />

            <MainContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <ChangeSection>
                            <ChangeContainer>
                                <ChangeWrapper>
                                    <ChangeItemSection>
                                        <ChangeImgSection>
                                            <SectionContainer>
                                                <ImgItem
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_profile_default.png"
                                                    alt="..."
                                                />
                                            </SectionContainer>
                                            <SectionContainer>
                                                <OraButton
                                                    ButtonName={`사진 바꾸기`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('click')}
                                                />
                                            </SectionContainer>
                                        </ChangeImgSection>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <MainWrapper>
                                            <ProfileLabel>이름</ProfileLabel>
                                            <ProfileInput
                                                type="text"
                                                value="하영 바보"
                                                placeholder="..."
                                                onChange={() => console.debug('onChange')}
                                            />
                                            <TextGrayXs>프로필에 표시되는 이름이에요</TextGrayXs>
                                        </MainWrapper>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <ProfileNameSection>
                                            <ProfileLabel>사용자 이름</ProfileLabel>
                                            <ProfileInput
                                                type="text"
                                                value="HkiXi"
                                                placeholder="..."
                                                onChange={() => console.debug('onChange')}
                                            />
                                            <SubText>사용자 이름은 프로필 페이지 주소와 친구 초대 코드로 사용돼요</SubText>
                                            <TextGrayXs>https://localhost:3030/player/HkiXi</TextGrayXs>
                                        </ProfileNameSection>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <MainWrapper>
                                            <ProfileLabel>소개</ProfileLabel>
                                            <ProfileInput
                                                type="text"
                                                value=""
                                                placeholder="주 1회 영등포에서 오라해요"
                                                onChange={() => console.debug('onChange')}
                                            />
                                        </MainWrapper>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <DivideItem></DivideItem>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <MainWrapper>
                                            <ProfileLabel>성별</ProfileLabel>
                                            <RuleSubIconWrapper>
                                                <OraButton
                                                    ButtonName={`남자`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`여자`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </RuleSubIconWrapper>
                                        </MainWrapper>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <MainWrapper>
                                            <ProfileLabel>좋아하는 스타일</ProfileLabel>
                                            <RuleSubIconWrapper>
                                                <OraButton
                                                    ButtonName={`공격`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`밸런스`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`수비`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </RuleSubIconWrapper>
                                        </MainWrapper>
                                    </ChangeItemSection>
                                    <ChangeItemSection>
                                        <MainWrapper>
                                            <ProfileLabel>자신있는 능력</ProfileLabel>
                                            <GridSection>
                                                <OraButton
                                                    ButtonName={`슛`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`패스`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`드리블`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`체력`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`스피드`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`피지컬`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`골키퍼`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </GridSection>
                                        </MainWrapper>
                                    </ChangeItemSection>
                                    <SaveButton>
                                        <MainWrapper>
                                            <OraButton
                                                ButtonName={`저장하기`}
                                                ButtonColor={`blue`}
                                                ButtonHeight={'lg'}
                                                HandleClick={() => console.debug('client')}
                                            />
                                        </MainWrapper>
                                    </SaveButton>
                                </ChangeWrapper>
                            </ChangeContainer>
                        </ChangeSection>
                    </SectionWrapper>
                </SectionContainer>
            </MainContainer>

            <Footer />
        </DefalutMainContainer>
    );
};

export default ChangeProfilePage;
