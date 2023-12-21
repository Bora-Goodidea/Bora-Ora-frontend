import AdminStyles from '@Style/AdminStyles';
import React from 'react';
import MemberDetailForm from './MemberDetailForm';

const { ContentWrapper, ContentContainer, DetailTitleWrapper, DetailTitleContainer, DetailTitle, DetailBodyWrapper } =
    AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailMain = () => {
    // TODO: 회원 정보 관리 로직이 들어갈곳

    return (
        <ContentWrapper>
            <ContentContainer>
                <DetailTitleWrapper>
                    <DetailTitleContainer>
                        <DetailTitle>회원정보</DetailTitle>
                    </DetailTitleContainer>
                </DetailTitleWrapper>
                <DetailBodyWrapper>
                    <MemberDetailForm />
                </DetailBodyWrapper>
            </ContentContainer>
        </ContentWrapper>
    );
};

export default MemberDetailMain;
