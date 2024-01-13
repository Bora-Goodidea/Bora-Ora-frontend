import React from 'react';
import AdminStyles from '@Style/AdminStyles';
import lodash from 'lodash';

const { DetailBodyInfoItemTitle, DetailBodyInfoItemSelect } = AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailInfoSelectItem = ({ title, placeholder }: any) => {
    return (
        <>
            <DetailBodyInfoItemTitle>{title}</DetailBodyInfoItemTitle>
            <div className="flex gap-6 md:grid-cols-1">
                <DetailBodyInfoItemSelect value={placeholder}>
                    {lodash.map(lodash.range(1980, 2023, 1), item => {
                        return <option value={item}>{item}</option>;
                    })}
                </DetailBodyInfoItemSelect>
                <DetailBodyInfoItemSelect value={placeholder}>
                    {lodash.map(lodash.range(1, 13, 1), item => {
                        return <option value={String(item).padStart(2, '0')}>{String(item).padStart(2, '0')}</option>;
                    })}
                </DetailBodyInfoItemSelect>
                <DetailBodyInfoItemSelect value={placeholder}>
                    {lodash.map(lodash.range(1, 32, 1), item => {
                        return <option value={String(item).padStart(2, '0')}>{String(item).padStart(2, '0')}</option>;
                    })}
                </DetailBodyInfoItemSelect>
            </div>
        </>
    );
};

export default MemberDetailInfoSelectItem;
