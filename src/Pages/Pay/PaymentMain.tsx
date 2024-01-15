import { useState } from 'react';
import Header from '@Page/Publish/Header';
import Footer from '@Page/Publish/Footer';
import { OraCheckBox, OraButton } from '@Elements';
import { ElementStyles, LayoutStyles } from '@Styles';
import PayStyles from '@Style/PayStyles';
import AuthStyles from '@Style/AuthStyles';
import MatchStyles from '@Style/MatchStyles';

const {
    DefalutMainContainer,
    SectionContainer,
    SectionWrapper,
    ContentsWrapper,
    TextXs,
    Flex,
    ContentsSection,
    SubInfoSection,
    Grid,
    SmallText,
    SmallBorderRText,
    RuleTextSmall,
    ContentsXsTitle,
} = LayoutStyles.DefalutLayoutStyle;
const {
    PayMainSection,
    PayFigure,
    PayFigcaption,
    PaySection,
    PayContainer,
    PayWrapper,
    GrayBar,
    PayRadioBtn,
    PayLabel,
    PayH4,
    PayExplainSection,
    PayExplainContainer,
    PayExplainWrapper,
    PayXsText,
    PayRuleList,
    PayBottomSection,
} = PayStyles.PayLayoutStyle;
const { RightItemSection } = AuthStyles.MyProfile;
const { SelectSection } = AuthStyles.RegisterCompleteLayoutStyle;
const { MainImg, InfoWrapper, SubTitle, SubContent, TextGray } = LayoutStyles.MainLayoutStyle;
const { TextLargeWhite, TextSmall } = MatchStyles.MatchLayoutStyle.DateSection;
const { DetailTitle } = MatchStyles.DetailLayoutStyle;
const { Svg4 } = ElementStyles.SvgStyle;

const initializeState = {
    contentsToggle: {
        step1: false,
        step2: false,
        step3: false,
    },
};

const PaymentPage = () => {
    const [pageState, setPageState] = useState<{
        contentsToggle: {
            step1: boolean;
            step2: boolean;
            step3: boolean;
        };
    }>(initializeState);
    return (
        <DefalutMainContainer>
            <Header />

            <PayMainSection>
                <SectionContainer>
                    <SectionWrapper>
                        <RightItemSection>
                            <PayFigure>
                                <div>
                                    <MainImg src={`https://d31wz4d3hgve8q.cloudfront.net/static/img/cover_default.jpg`} alt="..." />
                                </div>
                                <PayFigcaption>
                                    <InfoWrapper>
                                        <TextLargeWhite>12월 17일 일요일</TextLargeWhite>
                                        <TextLargeWhite>21:00 ~ 23:00</TextLargeWhite>
                                        <TextLargeWhite>서울 은행 롯데몰 실내</TextLargeWhite>
                                    </InfoWrapper>
                                </PayFigcaption>
                            </PayFigure>
                        </RightItemSection>
                    </SectionWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionWrapper>
                        <PaySection>
                            <PayContainer>
                                <SelectSection>
                                    <ContentsWrapper>
                                        <TextXs>결제</TextXs>
                                    </ContentsWrapper>
                                    <PayWrapper>
                                        <TextSmall>이용금액</TextSmall>
                                        <TextSmall>100,000</TextSmall>
                                    </PayWrapper>
                                    <ContentsWrapper>
                                        <GrayBar></GrayBar>
                                    </ContentsWrapper>
                                    <PayWrapper>
                                        <DetailTitle>결제 금액</DetailTitle>
                                        <DetailTitle>100,000</DetailTitle>
                                    </PayWrapper>
                                </SelectSection>
                            </PayContainer>
                            <PayContainer>
                                <SelectSection>
                                    <ContentsWrapper>
                                        <TextXs>결제 수단</TextXs>
                                    </ContentsWrapper>
                                    <PayWrapper>
                                        <SubTitle>
                                            <PayRadioBtn checked={true} type="radio" value="" onChange={() => console.debug('click')} />
                                            <PayLabel>
                                                카카오페이
                                                <Flex>
                                                    <PayH4
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_kakaopay.png"
                                                        alt="..."></PayH4>
                                                </Flex>
                                            </PayLabel>
                                        </SubTitle>
                                    </PayWrapper>
                                </SelectSection>
                            </PayContainer>
                            <PayContainer>
                                <SelectSection>
                                    <PayExplainSection>
                                        <PayExplainContainer
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step1: !prevState.contentsToggle.step1,
                                                    },
                                                }))
                                            }>
                                            <TextXs>이것만은 꼭!</TextXs>
                                            <TextXs>
                                                {pageState.contentsToggle.step1 ? (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </Svg4>
                                                ) : (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </Svg4>
                                                )}
                                            </TextXs>
                                        </PayExplainContainer>
                                        <PayWrapper>
                                            <SubTitle>
                                                {pageState.contentsToggle.step1 && (
                                                    <PayExplainWrapper>
                                                        {`
                                                    제시간에 경기를 마쳐 주세요. 예약 시간을 초과하지 않도록 3~5분 전에 마무리 하는 게 좋습니다.

                                                    다른 사용자나 인근 주민에게 피해를 끼치는 행동을 삼가주세요. 음식 조리, 배달 취식, 음주는 할 수 없습니다. 너무 크게 소리 지르면, 민원으로 시설 사용을 중단할 수 있습니다.

                                                    풋살화(TF)를 신고 플레이 해주세요. 풋살장에서 축구화(FG, HG, AG, MG) 착용은 나와 상대방의 부상을 유발합니다.

                                                    이용자 부주의로 시설을 파손하면, 손해배상을 청구할 수 있습니다. 이 점 유의해 주세요.

                                                    `}
                                                    </PayExplainWrapper>
                                                )}
                                            </SubTitle>
                                        </PayWrapper>
                                    </PayExplainSection>
                                    <PayExplainSection>
                                        <PayExplainContainer
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step2: !prevState.contentsToggle.step2,
                                                    },
                                                }))
                                            }>
                                            <TextXs>부상과 보험</TextXs>
                                            <TextXs>
                                                {pageState.contentsToggle.step2 ? (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </Svg4>
                                                ) : (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </Svg4>
                                                )}
                                            </TextXs>
                                        </PayExplainContainer>
                                        <PayWrapper>
                                            <SubTitle>
                                                {pageState.contentsToggle.step2 && (
                                                    <PayExplainWrapper>
                                                        {`
                                                    플랩은 상대를 배려하고, 나를 지키는 안전한 플레이를 권장합니다.

                                                    거친 플레이를 하는 참가자에게 매너 카드를 발급하여 안전하고 즐거운 매치 문화를 만들어 나갑니다.

                                                    다른 사람에게 피해를 끼치는 경우 이용이 정지될 수 있습니다.

                                                    축구, 풋살 등 부상의 위험성이 내재된 경기 규칙 안에서 발생한 부상 대부분이 개인에게 책임이 있음을 판단하고 있습니다.

                                                    경기 규칙 안에서 발생한 부상 대부분은 책임을 묻기 어렵다는 판결 사례가 많습니다.

                                                    그러나 과도한 힘을 사용해 일부러 상대를 다치게 할 경우 법원이 배상을 결정한 판례가 있습니다.

                                                    플랩에서 직접 운용하는 보험 상품은 없습니다. 소셜 매치 참여 전 실손의료보험 가입 여부를 확인해 주세요.


                                                    *자주 묻는 질문에서 '부상'을 검색해 법적 보상에 대한 자세한 내용을 확인해 보세요.

                                                    `}
                                                    </PayExplainWrapper>
                                                )}
                                            </SubTitle>
                                        </PayWrapper>
                                    </PayExplainSection>
                                    <PayExplainSection>
                                        <PayExplainContainer
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step3: !prevState.contentsToggle.step3,
                                                    },
                                                }))
                                            }>
                                            <TextXs>환불 안내</TextXs>
                                            <TextXs>
                                                {pageState.contentsToggle.step3 ? (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </Svg4>
                                                ) : (
                                                    <Svg4
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </Svg4>
                                                )}
                                            </TextXs>
                                        </PayExplainContainer>
                                        <PayWrapper>
                                            <SubContent>
                                                {pageState.contentsToggle.step3 && (
                                                    <ContentsSection>
                                                        <SubInfoSection>
                                                            <TextXs>취소 시 환불 기준</TextXs>
                                                            <ContentsWrapper>
                                                                <Grid>
                                                                    <SmallText>7일 전</SmallText>
                                                                    <SmallText>100% 환불</SmallText>
                                                                    <SmallText>5일 전</SmallText>
                                                                    <SmallText>80% 환불</SmallText>
                                                                    <SmallText>3일 전</SmallText>
                                                                    <SmallText>50% 환불</SmallText>
                                                                    <SmallBorderRText>2일 전 ~ 예약 당일</SmallBorderRText>
                                                                    <RuleTextSmall>환불 불가</RuleTextSmall>
                                                                </Grid>
                                                            </ContentsWrapper>
                                                            <ContentsXsTitle>
                                                                결제 완료 후 30분 이내는 무료 취소가 가능합니다. (하루 1회 제한)
                                                            </ContentsXsTitle>
                                                            <TextGray>
                                                                환불 수수료율은 위 표와 같이 적용되며, 예약 시간에 가까울수록 취소 수수료가
                                                                큽니다.
                                                            </TextGray>
                                                        </SubInfoSection>
                                                        <SubInfoSection>
                                                            <PayXsText>강수 시 변경 및 환불 규정</PayXsText>
                                                            <PayRuleList>
                                                                <li>
                                                                    예약 시작 2시간 전 기상청 날씨누리 기준 시간당 5mm 이상의 강수량이
                                                                    예보되는 경우, 예약 날짜를 변경할 수 있습니다.
                                                                </li>
                                                                <li>
                                                                    예약 당일 천재지변(호우경보, 대설경보, 태풍주의보, 태풍경보)으로 인해
                                                                    구장 이용이 어려우면 100% 환불됩니다.
                                                                </li>
                                                                <li>실내 구장의 경우, 변경 및 환불 가능 조건에 해당하지 않습니다.</li>
                                                                <li> 변경 및 환불 필요시 직접 문의주셔야 확인 후 안내 드릴 수 있습니다.</li>
                                                            </PayRuleList>
                                                        </SubInfoSection>
                                                    </ContentsSection>
                                                )}
                                            </SubContent>
                                        </PayWrapper>
                                    </PayExplainSection>
                                    <PayBottomSection>
                                        <ContentsWrapper>
                                            <OraCheckBox
                                                Checked={false}
                                                LavelName={`네, 위내용을 보고 동의해요`}
                                                HandleOnChange={() => console.debug('checked')}
                                            />
                                        </ContentsWrapper>
                                    </PayBottomSection>
                                    <PayBottomSection>
                                        <ContentsWrapper>
                                            <OraButton
                                                ButtonName={`100,000원 결제하기`}
                                                HandleClick={() => console.debug('click')}
                                                ButtonColor={`blue`}
                                            />
                                        </ContentsWrapper>
                                    </PayBottomSection>
                                </SelectSection>
                            </PayContainer>
                        </PaySection>
                    </SectionWrapper>
                </SectionContainer>
            </PayMainSection>

            <Footer />
        </DefalutMainContainer>
    );
};

export default PaymentPage;
