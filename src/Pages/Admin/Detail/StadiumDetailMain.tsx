import TemporaryData from '@Common/TemporaryData';
import AdminStyles from '@Style/AdminStyles';
import lodash from 'lodash';
import React, { useState } from 'react';
import Slider from 'react-slick';

const {
    ContentWrapper,
    ContentContainer,
    DetailTitleWrapper,
    DetailTitleContainer,
    DetailTitle,
    DetailBodyWrapper,
    DetailBodyContentWrapper,
    DetailBodyContentContainer,
    DetailBodyStadiumContainer,
    DetailBodyStadiumProfileWrapper,
    DetailBodyStadiumProfileSliderWrapper,
    DetailBodyStadiumProfileSliderFigure,
    DetailBodyStadiumProfileSliderFigureImgWrapper,
    DetailBodyStadiumProfileSliderFigureImg,
    DetailBodyStadiumProfileSliderFigureCaption,
    DetailBodyStadiumProfileSliderFigureCaptionText,
    DetailBodyStadiumEditContainer,
    DetailBodyStadiumEditLabel,
    DetailBodyStadiumEditFile,
    DetailBodyInfoContainer,
    DetailBodyInfoItemContainer,
    DetailBodyInfoItemTitle,
    DetailBodyInfoItemEdit,
    DetailBodyInfoAddressContainer,
    DetailBodyInfoAddressStreetItemContainer,
    DetailBodyInfoAddressStreetLabel,
    DetailBodyInfoAddressStreetEdit,
    DetailBodyInfoAddressStreetDetailContainer,
    DetailBodyInfoConditionWrapper,
    DetailBodyInfoConditionContainer,
    DetailBodyInfoConditionTitle,
    DetailBodyInfoConditionItemsContainer,
    DetailBodyInfoConditionItemContainer,
    DetailBodyInfoConditionItemCheckbox,
    DetailBodyInfoConditionItemCheckboxLabel,
    DetailBodyInfoCondition2Container,
    DetailBodyInfoConditionItemSelectContainer,
    DetailBodyInfoConditionItemSelectTitle,
    DetailBodyInfoConditionItemSelect,
    DetailBodyInfoConditionItemSelectOption,
    DetailBodyInfoConditionItemSelectAdditionContainer,
    DetailBodyInfoConditionItemSelectAdditionBlank,
    DetailBodyInfoConditionItemSelectAdditionItemContainer,
    DetailBodyInfoConditionItemSelectAdditionItemCenter,
    DetailButtonsContainer,
    DetailButtonsWrapper,
    DetailButton,
} = AdminStyles.ContentSectionStadiumDetailStyle;

const StadiumDetailMain = () => {
    const [slideCurrent, setSlideCurrent] = useState<number>(1);
    const bannerSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        afterChange: (current: any) => setSlideCurrent(current + 1),
    };

    return (
        <ContentWrapper>
            <ContentContainer>
                <DetailTitleWrapper>
                    <DetailTitleContainer>
                        <DetailTitle>구장 정보</DetailTitle>
                    </DetailTitleContainer>
                </DetailTitleWrapper>
                <DetailBodyWrapper>
                    <DetailBodyContentWrapper>
                        <DetailBodyContentContainer>
                            <DetailBodyStadiumContainer>
                                <DetailBodyStadiumProfileWrapper>
                                    <DetailBodyStadiumProfileSliderWrapper>
                                        <Slider {...bannerSlidersettings}>
                                            {lodash.map(TemporaryData.RentalDetail.slider, (e, index, lists) => {
                                                return (
                                                    <DetailBodyStadiumProfileSliderFigure
                                                        key={`publish-rental-detail-page-banner-slide-item-${index}`}>
                                                        <DetailBodyStadiumProfileSliderFigureImgWrapper>
                                                            <DetailBodyStadiumProfileSliderFigureImg src={`${e}`} alt="..." />
                                                        </DetailBodyStadiumProfileSliderFigureImgWrapper>
                                                        <DetailBodyStadiumProfileSliderFigureCaption>
                                                            <DetailBodyStadiumProfileSliderFigureCaptionText>{`${slideCurrent} | ${lists.length} +`}</DetailBodyStadiumProfileSliderFigureCaptionText>
                                                        </DetailBodyStadiumProfileSliderFigureCaption>
                                                    </DetailBodyStadiumProfileSliderFigure>
                                                );
                                            })}
                                        </Slider>
                                    </DetailBodyStadiumProfileSliderWrapper>
                                </DetailBodyStadiumProfileWrapper>
                                <DetailBodyStadiumEditContainer>
                                    <DetailBodyStadiumEditLabel>이미지 업로드</DetailBodyStadiumEditLabel>
                                    <DetailBodyStadiumEditFile id="file_input" type="file" />
                                </DetailBodyStadiumEditContainer>
                            </DetailBodyStadiumContainer>
                            <DetailBodyInfoContainer>
                                <DetailBodyInfoItemContainer>
                                    <DetailBodyInfoItemTitle>번호</DetailBodyInfoItemTitle>
                                    <DetailBodyInfoItemEdit type="number" placeholder="1111" />
                                </DetailBodyInfoItemContainer>
                                <DetailBodyInfoItemContainer>
                                    <DetailBodyInfoItemTitle>고유값</DetailBodyInfoItemTitle>
                                    <DetailBodyInfoItemEdit type="text" readOnly={true} />
                                </DetailBodyInfoItemContainer>
                                <DetailBodyInfoItemContainer>
                                    <DetailBodyInfoItemTitle>구장 명</DetailBodyInfoItemTitle>
                                    <DetailBodyInfoItemEdit type="text" placeholder="서울 구장" />
                                </DetailBodyInfoItemContainer>
                            </DetailBodyInfoContainer>
                            <DetailBodyInfoAddressContainer>
                                <DetailBodyInfoAddressStreetItemContainer>
                                    <DetailBodyInfoAddressStreetLabel>주소</DetailBodyInfoAddressStreetLabel>
                                    <DetailBodyInfoAddressStreetEdit type="text" placeholder="서울시 부산구" />
                                </DetailBodyInfoAddressStreetItemContainer>
                                <DetailBodyInfoAddressStreetDetailContainer>
                                    <DetailBodyInfoAddressStreetItemContainer>
                                        <DetailBodyInfoAddressStreetEdit
                                            type="text"
                                            placeholder="상세 주소"></DetailBodyInfoAddressStreetEdit>
                                    </DetailBodyInfoAddressStreetItemContainer>
                                    <DetailBodyInfoAddressStreetItemContainer>
                                        <DetailBodyInfoAddressStreetEdit
                                            type="text"
                                            placeholder="우편번호"></DetailBodyInfoAddressStreetEdit>
                                    </DetailBodyInfoAddressStreetItemContainer>
                                </DetailBodyInfoAddressStreetDetailContainer>
                            </DetailBodyInfoAddressContainer>
                            <DetailBodyInfoConditionWrapper>
                                <DetailBodyInfoConditionContainer>
                                    <DetailBodyInfoConditionTitle>조건 1</DetailBodyInfoConditionTitle>
                                    <DetailBodyInfoConditionItemsContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>주차</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>샤워 가능</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>신발 대여</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>조끼대여</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>
                                                화장실 남녀 구분
                                            </DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>화장실</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                        <DetailBodyInfoConditionItemContainer>
                                            <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                            <DetailBodyInfoConditionItemCheckboxLabel>공 대여</DetailBodyInfoConditionItemCheckboxLabel>
                                        </DetailBodyInfoConditionItemContainer>
                                    </DetailBodyInfoConditionItemsContainer>
                                </DetailBodyInfoConditionContainer>
                            </DetailBodyInfoConditionWrapper>
                            <DetailBodyInfoConditionWrapper>
                                <DetailBodyInfoConditionContainer>
                                    <DetailBodyInfoConditionTitle>조건 2</DetailBodyInfoConditionTitle>
                                    <DetailBodyInfoCondition2Container>
                                        <DetailBodyInfoConditionItemSelectContainer>
                                            <DetailBodyInfoConditionItemSelectTitle>좋아하는 스타일</DetailBodyInfoConditionItemSelectTitle>
                                            <DetailBodyInfoConditionItemSelect>
                                                <DetailBodyInfoConditionItemSelectOption value="">
                                                    선택
                                                </DetailBodyInfoConditionItemSelectOption>
                                                <DetailBodyInfoConditionItemSelectOption value="0001">
                                                    공격
                                                </DetailBodyInfoConditionItemSelectOption>
                                                <DetailBodyInfoConditionItemSelectOption value="0002">
                                                    밸런스
                                                </DetailBodyInfoConditionItemSelectOption>
                                                <DetailBodyInfoConditionItemSelectOption value="0003">
                                                    스타일
                                                </DetailBodyInfoConditionItemSelectOption>
                                            </DetailBodyInfoConditionItemSelect>
                                        </DetailBodyInfoConditionItemSelectContainer>
                                        <DetailBodyInfoConditionItemSelectAdditionContainer>
                                            <DetailBodyInfoConditionItemSelectAdditionBlank />
                                            <DetailBodyInfoConditionItemSelectAdditionItemContainer>
                                                <DetailBodyInfoConditionItemSelectAdditionItemCenter>
                                                    <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                                    <DetailBodyInfoConditionItemCheckboxLabel>
                                                        실외
                                                    </DetailBodyInfoConditionItemCheckboxLabel>
                                                </DetailBodyInfoConditionItemSelectAdditionItemCenter>
                                                <DetailBodyInfoConditionItemSelectAdditionItemCenter>
                                                    <DetailBodyInfoConditionItemCheckbox type="checkbox" value="" />
                                                    <DetailBodyInfoConditionItemCheckboxLabel>
                                                        인조잔디
                                                    </DetailBodyInfoConditionItemCheckboxLabel>
                                                </DetailBodyInfoConditionItemSelectAdditionItemCenter>
                                            </DetailBodyInfoConditionItemSelectAdditionItemContainer>
                                        </DetailBodyInfoConditionItemSelectAdditionContainer>
                                    </DetailBodyInfoCondition2Container>
                                </DetailBodyInfoConditionContainer>
                            </DetailBodyInfoConditionWrapper>
                            <DetailBodyInfoContainer>
                                <DetailBodyInfoItemContainer>
                                    <DetailBodyInfoItemTitle>사용료</DetailBodyInfoItemTitle>
                                    <DetailBodyInfoItemEdit type="number" placeholder="1111" />
                                </DetailBodyInfoItemContainer>
                            </DetailBodyInfoContainer>
                            <DetailButtonsContainer>
                                <DetailButtonsWrapper>
                                    <DetailButton>취소</DetailButton>
                                </DetailButtonsWrapper>
                                <DetailButtonsWrapper>
                                    <DetailButton>저장</DetailButton>
                                </DetailButtonsWrapper>
                            </DetailButtonsContainer>
                        </DetailBodyContentContainer>
                    </DetailBodyContentWrapper>
                </DetailBodyWrapper>
            </ContentContainer>
        </ContentWrapper>
    );
};

export default StadiumDetailMain;
