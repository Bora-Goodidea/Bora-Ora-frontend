import AdminStyles from '@Style/AdminStyles';
import lodash from 'lodash';
import React from 'react';

const { DetailBodyInfoItemTitle, DetailBodyInfoItemSelect } = AdminStyles.ContentSectionMemberDetailStyle;

const MemberDetailInfoSelectItem = ({ title, birthItems, isReadOnly, placeholder }: any) => {
    return (
        <>
            <DetailBodyInfoItemTitle>{title}</DetailBodyInfoItemTitle>
            <div className="flex gap-6 md:grid-cols-1">
                {lodash.map(birthItems, birthItem => {
                    return (
                        <DetailBodyInfoItemSelect value={placeholder} aria-readonly={isReadOnly}>
                            {lodash.map(birthItem, item => {
                                return <option value={item.value}>{item.title}</option>;
                            })}
                        </DetailBodyInfoItemSelect>
                    );
                })}
            </div>
        </>
    );
};

export default MemberDetailInfoSelectItem;
