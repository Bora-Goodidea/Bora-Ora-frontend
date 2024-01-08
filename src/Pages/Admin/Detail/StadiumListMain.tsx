import AdminStyles from '@Style/AdminStyles';
import lodash from 'lodash';
import React from 'react';

const {
    ContentContainer,
    ContentHeadContainer,
    ContentHeadInputWrapper,
    ContentHeadInputContainer,
    ContentHeadCheckbox,
    ContentHeadCheckboxLabel,
    ContentHeadTitleW1,
    ContentHeadTitleW2,
    ContentHeadTitleW3,
    ContentHeadTitleW10,
    ContentBodyWrapper,
    ContentBodyContainer,
    ContentBodyInputWrapper,
    ContentBodyInputContainer,
    ContentBodyCheckbox,
    ContentBodyCheckboxLabel,
    ContentBodyTextW1,
    ContentBodyTextW2,
    ContentBodyTextW3,
    ContentBodyTextW10,
    ContentBodyButtons,
    ContentBodyButtonBlue,
    ContentBodyButtonRed,
} = AdminStyles.ContentSectionStadiumListStyle;

const StadiumListMain = () => {
    return (
        <ContentContainer>
            <ContentHeadContainer>
                <ContentHeadInputWrapper>
                    <ContentHeadInputContainer>
                        <ContentHeadCheckbox type="checkbox" />
                        <ContentHeadCheckboxLabel htmlFor="checkbox-all-search">checkbox</ContentHeadCheckboxLabel>
                    </ContentHeadInputContainer>
                </ContentHeadInputWrapper>
                <ContentHeadTitleW1>구장명</ContentHeadTitleW1>
                <ContentHeadTitleW1>위치</ContentHeadTitleW1>
                <ContentHeadTitleW3>구장 조건1</ContentHeadTitleW3>
                <ContentHeadTitleW2>구장 조건2</ContentHeadTitleW2>
                <ContentHeadTitleW1>금액/시간</ContentHeadTitleW1>
                <ContentHeadTitleW10>상태</ContentHeadTitleW10>
                <ContentHeadTitleW1>등록일</ContentHeadTitleW1>
                <ContentHeadTitleW2>관리</ContentHeadTitleW2>
            </ContentHeadContainer>
            <ContentBodyWrapper>
                {lodash.map(
                    Array.from({ length: 30 }, (v, i) => i),
                    () => {
                        return (
                            <ContentBodyContainer>
                                <ContentBodyInputWrapper>
                                    <ContentBodyInputContainer>
                                        <ContentBodyCheckbox type="checkbox" />
                                        <ContentBodyCheckboxLabel htmlFor="checkbox-all-search">checkbox</ContentBodyCheckboxLabel>
                                    </ContentBodyInputContainer>
                                </ContentBodyInputWrapper>
                                <ContentBodyTextW1>서울 은평 롯데몰</ContentBodyTextW1>
                                <ContentBodyTextW1>서울 은평구</ContentBodyTextW1>
                                <ContentBodyTextW3>주차, 샤워 가능, 신발 대여, 조끼대여, 화장실 남녀 구분, 공 대여</ContentBodyTextW3>
                                <ContentBodyTextW2>90x50, 실외, 인조잔디</ContentBodyTextW2>
                                <ContentBodyTextW1>8,000</ContentBodyTextW1>
                                <ContentBodyTextW10>정상</ContentBodyTextW10>
                                <ContentBodyTextW1>2023.12.01</ContentBodyTextW1>
                                <ContentBodyTextW2>
                                    <ContentBodyButtons>
                                        <ContentBodyButtonBlue>보기</ContentBodyButtonBlue>
                                        <ContentBodyButtonBlue>예약 보기</ContentBodyButtonBlue>
                                        <ContentBodyButtonRed>상태중지</ContentBodyButtonRed>
                                    </ContentBodyButtons>
                                </ContentBodyTextW2>
                            </ContentBodyContainer>
                        );
                    }
                )}
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default StadiumListMain;
