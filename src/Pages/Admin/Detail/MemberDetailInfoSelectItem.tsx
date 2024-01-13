import AdminStyles from '@Style/AdminStyles';
import lodash from 'lodash';
import React from 'react';

const { DetailBodyInfoItemContainer, DetailBodyInfoItemTitle, DetailBodyInfoItemSelect } = AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailInfoSelectItem = ({
    title,
    items,
    placeholder,
}: {
    title: string;
    items: Array<{ title: string; value: string }>;
    isReadOnly: boolean;
    placeholder: string;
}) => {
    return (
        <DetailBodyInfoItemContainer>
            <DetailBodyInfoItemTitle>{title}</DetailBodyInfoItemTitle>
            <DetailBodyInfoItemSelect value={placeholder}>
                {lodash.map(items, item => {
                    return <option value={item.value}>{item.title}</option>;
                })}
            </DetailBodyInfoItemSelect>
        </DetailBodyInfoItemContainer>
    );
};

export default MemberDetailInfoSelectItem;
