import AdminStyles from '@Style/AdminStyles';
import React from 'react';
import lodash from 'lodash';

const {
    ContentContainer,
    ContentHeadContainer,
    ContentHeadInputWrapper,
    ContentHeadInputContainer,
    ContentHeadCheckbox,
    ContentHeadCheckboxLabel,
    ContentHeadTitle,
    ContentBodyWrapper,
    ContentBodyContainer,
    ContentBodyInputWrapper,
    ContentBodyInputContainer,
    ContentBodyCheckbox,
    ContentBodyText,
    ContentBodyButtons,
    ContentBodyButtonBlue,
    ContentBodyButtonRed,
} = AdminStyles.ContentSectionMemberListStyle;

const MemberListMain = () => {
    return (
        <ContentContainer>
            <ContentHeadContainer>
                <ContentHeadInputWrapper>
                    <ContentHeadInputContainer>
                        <ContentHeadCheckbox id="checkbox-all-search" type="checkbox" />
                        <ContentHeadCheckboxLabel htmlFor="checkbox-all-search" className="sr-only">
                            checkbox
                        </ContentHeadCheckboxLabel>
                    </ContentHeadInputContainer>
                </ContentHeadInputWrapper>
                <ContentHeadTitle>이름</ContentHeadTitle>
                <ContentHeadTitle>이메일</ContentHeadTitle>
                <ContentHeadTitle>레벨</ContentHeadTitle>
                <ContentHeadTitle>생년월일</ContentHeadTitle>
                <ContentHeadTitle>성별</ContentHeadTitle>
                <ContentHeadTitle>가입경로</ContentHeadTitle>
                <ContentHeadTitle>상태</ContentHeadTitle>
                <ContentHeadTitle>등록일</ContentHeadTitle>
                <ContentHeadTitle>관리</ContentHeadTitle>
            </ContentHeadContainer>
            <ContentBodyWrapper>
                {lodash.map(
                    Array.from({ length: 30 }, (v, i) => i),
                    () => {
                        return (
                            <ContentBodyContainer>
                                <ContentBodyInputWrapper>
                                    <ContentBodyInputContainer>
                                        <ContentBodyCheckbox id="checkbox-all-search" type="checkbox" />
                                        <ContentHeadCheckboxLabel htmlFor="checkbox-all-search" className="sr-only">
                                            checkbox
                                        </ContentHeadCheckboxLabel>
                                    </ContentBodyInputContainer>
                                </ContentBodyInputWrapper>
                                <ContentBodyText>서보문</ContentBodyText>
                                <ContentBodyText>test@test.com</ContentBodyText>
                                <ContentBodyText>관리자</ContentBodyText>
                                <ContentBodyText>78.10.22</ContentBodyText>
                                <ContentBodyText>남성</ContentBodyText>
                                <ContentBodyText>카카오</ContentBodyText>
                                <ContentBodyText>인증완료</ContentBodyText>
                                <ContentBodyText>2023.12.01</ContentBodyText>
                                <ContentBodyText>
                                    <ContentBodyButtons>
                                        <ContentBodyButtonBlue>보기</ContentBodyButtonBlue>
                                        <ContentBodyButtonRed>블럭처리</ContentBodyButtonRed>
                                    </ContentBodyButtons>
                                </ContentBodyText>
                            </ContentBodyContainer>
                        );
                    }
                )}
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MemberListMain;
