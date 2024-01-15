import TemporaryData from '@Common/TemporaryData';
import { ElementStyles, LayoutStyles } from '@Styles';
import lodash from 'lodash';

const Footer = ({ IsMain }: { IsMain?: boolean }) => {
    const { MainContainer, SectionWrapper, HalfSection } = LayoutStyles.DefalutLayoutStyle;
    const { InfoWrapper } = LayoutStyles.MainLayoutStyle;
    const {
        FooterSection,
        FooterContainer,
        FooterWhiteText,
        FooterSmText,
        FooterBtnSection,
        FooterWhiteBtn,
        FooterImgSection,
        FooterImg,
        BlackBackground,
        FooterWrapper,
        FooterItemSection,
        FooterTitle,
        FooterItem,
        FooterRightSection,
        FooterRightContainer,
    } = ElementStyles.OraFooterStyle;

    return (
        <MainContainer>
            {IsMain && (
                <FooterSection>
                    <SectionWrapper>
                        <FooterContainer>
                            <HalfSection>
                                <FooterWhiteText>원하는 매치가 없다면</FooterWhiteText>
                                <FooterSmText>보라하고 싶은 곳을 추천해 주세요</FooterSmText>
                                <FooterBtnSection>
                                    <FooterWhiteBtn>추천 하기</FooterWhiteBtn>
                                </FooterBtnSection>
                            </HalfSection>
                            <FooterImgSection>
                                <FooterImg src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_thunder.png" alt=""></FooterImg>
                            </FooterImgSection>
                        </FooterContainer>
                    </SectionWrapper>
                </FooterSection>
            )}
            <BlackBackground>
                <SectionWrapper>
                    <FooterWrapper>
                        <FooterItemSection>
                            <InfoWrapper>
                                <FooterTitle>매치</FooterTitle>
                                <FooterItem>모든 매치</FooterItem>
                                <FooterItem>여자 매치</FooterItem>
                                <FooterItem>남녀모두 매치</FooterItem>
                                <FooterItem>스타터 매치</FooterItem>
                                <FooterItem>티셔츠 매치</FooterItem>
                                <FooterItem>초급 매치</FooterItem>
                                <FooterItem>중금 매치</FooterItem>
                            </InfoWrapper>
                            <InfoWrapper>
                                <FooterTitle>서비스 지역</FooterTitle>
                                {lodash.map(TemporaryData.Main.AreaList, (e, index) => {
                                    return <FooterItem key={`publish-main-page-footer-area-list-item-${index}`}>{e}</FooterItem>;
                                })}
                            </InfoWrapper>
                            <InfoWrapper>
                                <FooterTitle>오라풋볼</FooterTitle>
                                <FooterItem>오라풋볼 소개</FooterItem>
                                <FooterItem>공지사항</FooterItem>
                                <FooterItem>자주 묻는 질문</FooterItem>
                                <FooterItem>오라 매거진</FooterItem>
                                <FooterItem>매니저 지원</FooterItem>
                                <FooterItem>구장 제휴</FooterItem>
                                <FooterItem>채용</FooterItem>
                            </InfoWrapper>
                            <InfoWrapper>
                                <FooterTitle>소셜 미디어</FooterTitle>
                                <FooterItem>인스타 그램</FooterItem>
                                <FooterItem>유투브</FooterItem>
                            </InfoWrapper>
                        </FooterItemSection>
                        <FooterRightSection>
                            <InfoWrapper>
                                <FooterTitle>localhost.com</FooterTitle>
                                <FooterRightContainer>풋살하고 싶을 땐, 오라풋볼</FooterRightContainer>
                                <FooterRightContainer>이용 약관 | 개인정보 처리방침 | 사업자 정보 확인</FooterRightContainer>
                                <FooterRightContainer>
                                    <p>
                                        플랩풋볼 | 서울특별시 마포구 잔다리로31 제우피스빌딩 2층 | 대표 메일 contact@plabfootball.com
                                        |마케팅 제안 marketing@plabfootball.com | 언론, 연구 team@plabfootball.com | 02-704-7983 주식회사
                                        마이플레이컴퍼니 | 사업자번호 650-81-00575 | 대표 강동규 | 통신판매업 신고 2020-서울마포-4411
                                        Copyright PLAB All rights reserved.
                                    </p>
                                </FooterRightContainer>
                            </InfoWrapper>
                        </FooterRightSection>
                    </FooterWrapper>
                </SectionWrapper>
            </BlackBackground>
        </MainContainer>
    );
};

export default Footer;
