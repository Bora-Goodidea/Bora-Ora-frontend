import AdminStyles from '@Style/AdminStyles';
import React from 'react';

const { DetailBodyInfoItemContainer, DetailBodyInfoItemTitle, DetailBodyInfoItemEdit } = AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailInfoItem = ({ title, type, isReadOnly, placeholder }: any) => {
    return (
        <DetailBodyInfoItemContainer>
            <DetailBodyInfoItemTitle>{title}</DetailBodyInfoItemTitle>
            <DetailBodyInfoItemEdit type={type} readOnly={isReadOnly} placeholder={placeholder} />
        </DetailBodyInfoItemContainer>
    );
};

export default MemberDetailInfoItem;
