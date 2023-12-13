import React, { useState } from 'react';
import lodash from 'lodash';
import Header from './Header';
import Slider from 'react-slick';
import TemporaryData from '@Common/TemporaryData';
import RentalDetailJson from '@Common/RentalDetail.json';
import styled from '@emotion/styled';
import { addComma } from '@Helper';
import { OraModal, OraButton } from '@Elements';

const StyledSlider = styled(Slider)`
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`;

const PrevButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

const NextButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: -50px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

const initializeState = {
    modal: {
        image: false,
    },
};

const RentalDetailPage = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            image: boolean;
        };
    }>(initializeState);

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

    const calendarSlidersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: (
            <PrevButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </PrevButton>
        ),
        nextArrow: (
            <NextButton>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </NextButton>
        ),
    };

    const date = new Date();

    // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const calendarArray = Array.from({ length: lastDay.getDate() }, (v, i) => i);

    const weekString = ['일', '월', '화', '수', '목', '금', '토'];

    const rentalTimeArray = Array.from({ length: 48 }, (v, i) => {
        const inNumber = i + 6;

        return inNumber >= 24 ? (inNumber - 24 >= 24 ? inNumber - 48 : inNumber - 24) : inNumber;
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full space-y-3">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.RentalDetail.slider, (e, index, lists) => {
                                return (
                                    <figure
                                        className="relative transition-all duration-300 cursor-pointer"
                                        key={`publish-rental-detail-page-banner-slide-item-${index}`}>
                                        <div className="">
                                            <img className="rounded-2xl h-96 w-full" src={`${e}`} alt="..." />
                                        </div>
                                        <figcaption className="flex absolute bottom-10 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <p className="text-white text-lg">{`${slideCurrent} | ${lists.length} +`}</p>
                                        </figcaption>
                                    </figure>
                                );
                            })}
                        </Slider>
                        {/* Contents End */}
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex">
                                <span className="text-sm font-semibold">서울 / 은평구</span>
                            </div>
                            <div className="flex">
                                <span className="text-lg">서울 은평 롯데몰</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-sm">서울 은평구 통일로 1050</span>
                                <span className="text-sm text-gray-400 underline cursor-pointer">주소 복사</span>
                                <span className="text-sm text-gray-400 underline cursor-pointer">지도보기</span>
                            </div>
                            <div className="flex gap-2 pt-3">
                                <div className="flex bg-blue-300 rounded-md px-2 py-1">
                                    <span className="text-xs">바로 예약</span>
                                </div>
                                <div className="flex bg-blue-300 rounded-md px-2 py-1">
                                    <span className="text-xs">쇼셜 매치</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full pt-2 space-y-2">
                            <div className="flex w-full rounded-lg bg-blue-100 py-2 px-4">
                                <span className="text-sm font-semibold">공지</span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full pt-3">
                            <div className="flex w-full bg-blue-50 py-1"></div>
                        </div>
                        {/* Contents End */}
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white">
                    <div className="flex flex-col w-full md:max-w-screen-lg">
                        <div className="flex w-full">
                            <StyledSlider {...calendarSlidersettings}>
                                {lodash.map(calendarArray, (e, index) => {
                                    const dayOfWeek = new Date(
                                        `${date.getFullYear()}-${date.getMonth() + 1}-${String(e + 1).padStart(2, '0')}`
                                    ).getDay();
                                    return (
                                        <div
                                            className="flex w-full pl-1 items-center justify-center"
                                            key={`publish-main-page-claendar-slide-item-${index}`}>
                                            <div className="flex flex-col w-full justify-center items-center">
                                                {(() => {
                                                    // TODO: if 로 되어 있는걸 style 컴포넌트로 만들어서 props 로 받아서 style 을 변경 할것
                                                    if (index === 0) {
                                                        return (
                                                            <div className="flex flex-col-reverse w-full items-center justify-center rounded-full bg-blue-400 py-2">
                                                                <div className="text-lg text-white">{e + 1}</div>
                                                                <div className="text-sm text-white">{weekString[dayOfWeek]}</div>
                                                            </div>
                                                        );
                                                    } else if (dayOfWeek === 0) {
                                                        return (
                                                            <div className="flex flex-col-reverse w-full items-center justify-center rounded-full py-2">
                                                                <div className="text-lg text-red-700">{e + 1}</div>
                                                                <div className="text-sm text-red-700">{weekString[dayOfWeek]}</div>
                                                            </div>
                                                        );
                                                    } else if (dayOfWeek === 6) {
                                                        return (
                                                            <div className="flex flex-col-reverse w-full items-center justify-center rounded-full py-2">
                                                                <div className="text-lg text-blue-700">{e + 1}</div>
                                                                <div className="text-sm text-blue-700">{weekString[dayOfWeek]}</div>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div className="flex flex-col-reverse w-full items-center justify-center rounded-full py-2">
                                                                <div className="text-lg">{e + 1}</div>
                                                                <div className="text-sm">{weekString[dayOfWeek]}</div>
                                                            </div>
                                                        );
                                                    }
                                                })()}
                                            </div>
                                        </div>
                                    );
                                })}
                            </StyledSlider>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white">
                    <div className="flex flex-col w-full md:max-w-screen-lg">
                        <div className="flex w-full">
                            {(() => {
                                const info = {
                                    product_option: [
                                        `${RentalDetailJson.size_x}x${RentalDetailJson.size_y}`,
                                        `${RentalDetailJson.inout_door_nm}`,
                                        `${RentalDetailJson.stadium_type_nm}`,
                                    ],
                                    price: lodash.has(RentalDetailJson.products[0], `product_price`)
                                        ? RentalDetailJson.products[0].product_price / 2
                                        : 0,
                                    schedule: lodash.map(RentalDetailJson.products, p => {
                                        return {
                                            start: Number(p.start_t.substring(0, 2)),
                                            end: Number(p.end_t.substring(0, 2)),
                                        };
                                    }),
                                    images: lodash.map(RentalDetailJson.images, i => {
                                        return i.image;
                                    }),
                                };
                                return (
                                    <div className="flex w-full flex-col space-y-2 cursor-pointer">
                                        <div className="flex flex-nowrap w-full items-center justify-between">
                                            <div className="flex flex-col">
                                                <div className="flex w-full items-center gap-1">
                                                    {lodash.map(info.product_option, (po, indexPo) => {
                                                        return (
                                                            <span
                                                                key={`publish-rental-page-rental-product-option-item-${indexPo}`}
                                                                className="text-sm text-black">
                                                                {po}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                                <div className="flex w-full items-center">
                                                    <span className="text-sm text-gray-400">{`${addComma(info.price)}원~${addComma(
                                                        info.price
                                                    )}원/시간`}</span>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <figure
                                                    className="relative transition-all duration-300 cursor-pointer z-10"
                                                    onClick={() =>
                                                        setPageState(prevState => ({
                                                            ...prevState,
                                                            modal: {
                                                                ...prevState.modal,
                                                                image: true,
                                                            },
                                                        }))
                                                    }>
                                                    <div className="flex">
                                                        <img src={info.images[0]} alt="..." className="w-24 rounded-lg" />
                                                    </div>
                                                    <figcaption className="flex absolute bottom-1 right-1">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-5 h-5">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                                            />
                                                        </svg>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="flex flex-nowrap w-full items-center">
                                            <div className="flex flex-col w-full">
                                                <div className="flex flex-nowrap w-full justify-center gap-1">
                                                    {lodash.map(rentalTimeArray, (e, index) => {
                                                        // TODO: 현재 예약 시간 처리를 해야 하는데 좀 복잡하네?? 추후 의논으로 해결 필요.
                                                        let checkTime = false;
                                                        lodash.forEach(info.schedule, ls => {
                                                            if (ls.start <= e + 5 && ls.end >= e + 5) {
                                                                checkTime = true;
                                                            }
                                                        });
                                                        if (checkTime) {
                                                            return (
                                                                <div
                                                                    key={`publish-rental-page-rental-time-item-${index}`}
                                                                    className="border border-blue-400 w-1/2"></div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div
                                                                    key={`publish-rental-page-rental-time-item-${index}`}
                                                                    className="border border-gray-200 w-1/2"></div>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                                <div className="flex flex-nowrap w-full pt-1">
                                                    <div className="flex w-1/4 text-xs text-gray-400">6시</div>
                                                    <div className="flex w-1/4 text-xs text-gray-400">12시</div>
                                                    <div className="flex w-1/4 text-xs text-gray-400">18시</div>
                                                    <div className="flex w-1/4 text-xs text-gray-400">24시</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full pt-3">
                                            <div className="flex flex-nowrap w-full justify-end gap-2 border-b py-3 bg-white">
                                                <div className="flex flex-nowrap items-center justify-center gap-2">
                                                    <div className="flex h-2/3 w-5 bg-blue-500 rounded-sm"></div>
                                                    <div className="flex">
                                                        <span className="text-xs text-gray-400">예약 가능</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-nowrap items-center justify-center gap-2">
                                                    <div className="flex h-2/3 w-5 bg-gray-500 rounded-sm"></div>
                                                    <div className="flex">
                                                        <span className="text-xs text-gray-400">예약 불가</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                        <div className="flex flex-col w-full pt-3">
                            <div className="flex w-full bg-blue-50 py-1"></div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white">
                    <div className="flex flex-col w-full md:max-w-screen-lg space-y-4">
                        <div className="flex w-full">
                            <span className="text-sm">시설 및 이용 규칙</span>
                        </div>
                        <div className="flex w-full">
                            <div className="grid grid-cols-2 w-full gap-4">
                                <div className="flex flex-nowrap items-center gap-2">
                                    <div className="flex items-center object-center justify-center w-8 opacity-40">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shower.svg"></img>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs text-gray-400 line-through">샤워실</span>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <div className="flex items-center object-center justify-center w-8">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_park.svg" alt="..." />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs">뮤료주차</span>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <div className="flex items-center object-center justify-center w-8">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs">풋살화 대여</span>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <div className="flex items-center object-center justify-center w-8">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_beverage.svg" alt="..." />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs">음료 판매</span>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap items-center gap-2">
                                    <div className="flex items-center object-center justify-center w-8">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_toilet.svg" alt="..." />
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-xs">남녀 구분</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="flex flex-col w-full rounded-lg space-y-4 bg-gray-50 py-2 px-2">
                                <div className="flex w-full">
                                    <span className="text-xs">최근 3개월 이 구장을 방문한 플래버들이 일해요</span>
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <div className="flex flex-nowrap w-full gap-2">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_grass.svg" />
                                        <span className="text-xs">잔디 상태가 좋아요</span>
                                    </div>
                                    <div className="flex flex-nowrap w-full gap-2">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_correct.svg" />
                                        <span className="text-xs">시설 정보가 정확해요</span>
                                    </div>
                                    <div className="flex flex-nowrap w-full gap-2">
                                        <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_stadium_clean.svg" />
                                        <span className="text-xs">화장실이 깨끗해요</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="flex flex-col w-full space-y-4">
                                <div className="w-full space-y-2 py-1">
                                    <div className="mb-2 text-sm font-semibold">주차</div>
                                    <ul className="max-w-md space-y-1 text-sm text-gray-500 list-disc list-inside">
                                        <li>At least 10 characters (and up to 100 characters)</li>
                                        <li>At least one lowercase character</li>
                                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                                    </ul>
                                </div>
                                <div className="w-full space-y-2 py-1">
                                    <div className="mb-2 text-sm font-semibold">특이사항</div>
                                    <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                        <li>샤워실 이용 금지 / 공, 조끼 대여 불가 (코로나 확산 방지 차원 / 별도의 안내 시 까지)</li>
                                        <li>풋살화 2시간 6,000원 유료 대여(우천시 대여 불가)</li>
                                        <li>22:30 이전 현금,카드,계좌이체 // 22:30 이후 현금,계좌이체만 가능</li>
                                    </ul>
                                </div>
                                <div className="w-full space-y-2 py-1">
                                    <div className="mb-2 text-sm font-semibold">꼭 지켜주세요</div>
                                    <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                        <li>고성방가 및 휘슬 사용 금지 (소음 민원)</li>
                                        <li>민원 반복 발생 시 퇴장 조치할 수 있음</li>
                                        <li>흡연은 지정된 장소에서만 허용</li>
                                        <li>적발 시 추후 대관 이용 불이익</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full pt-3">
                            <div className="flex w-full bg-blue-50 py-1"></div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white">
                    <div className="flex flex-col w-full md:max-w-screen-lg space-y-4">
                        <div className="flex w-full">
                            <span className="text-sm">위치</span>
                        </div>
                        <div className="flex w-full">
                            <img src="http://psmever.iptime.org:8062/sample-image/map-1.png" alt="..." />
                        </div>
                        <div className="flex flex-nowrap w-full gap-3">
                            <span className="text-xs">서울 은평구 통일로 1050</span>
                            <span className="text-xs cursor-pointer underline">주소 복사</span>
                        </div>
                        <div className="flex flex-col w-full pt-3">
                            <div className="flex w-full bg-blue-50 py-1"></div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white sticky top-0">
                    <div className="flex flex-col w-full md:max-w-screen-lg space-y-6">
                        <div className="flex w-full">
                            <span className="text-lg font-semibold">예약 취소 및 환불 규정</span>
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <span className="text-sm">일반</span>
                            <div className="flex w-full">
                                <div className="grid grid-cols-2 w-full border rounded-lg border-gray-400">
                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">7일 전</div>
                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">100% 환불</div>
                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">5일 전</div>
                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">80% 환불</div>
                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">3일 전</div>
                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">50% 환불</div>
                                    <div className="flex text-xs border-r border-gray-400 px-2 py-2">2일 전 ~ 예약 당일</div>
                                    <div className="flex text-xs px-2 py-2">환불 불가</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <div className="mb-2 text-sm font-semibold">강수 시 변경 및 환불 규정</div>
                            <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                <li>
                                    아래 조건에 해당하는 경우, 플래비(홈페이지 우측 하단의 노란색 아이콘)를 통해 문의주시면 확인 후 변경 및
                                    환불을 도와드립니다.
                                </li>
                                <li>실내 구장은 강수로 인한 변경 및 환불 가능 조건에 해당하지 않습니다.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <div className="mb-2 text-sm font-semibold">변경 규정</div>
                            <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                <li>예약 시작 시간 2시간 전 기상청 날씨누리 해당 주소지를 기준으로 합니다 (확인하러 가기)</li>
                                <p className="px-5">- 오전 예약의 경우 전일 21시부터 변경 요청 가능</p>
                                <li>실내 구장은 강수로 인한 변경 및 환불 가능 조건에 해당하지 않습니다.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <div className="mb-2 text-sm font-semibold">환불 규정</div>
                            <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                <li>당일 천재지변으로 인해 구장 이용이 불가한 경우, 100% 환불됩니다.</li>
                                <p className="px-5">- 적용 기준: 호우경보, 대설경보, 태풍주의보, 태풍경보</p>
                            </ul>
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <div className="mb-2 text-sm font-semibold">그 외 취소 기준</div>
                            <ul className="space-y-1 text-sm text-gray-500 list-disc list-inside">
                                <li>결제 후 30분 이내 하루 1회에 한해 무료 취소가 가능합니다.</li>
                                <li>단순 변심에 의한 날짜 변경은 불가합니다.</li>
                                <li>예약 시간이 지나고 문의하는 경우 변경 및 환불이 불가합니다.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            {pageState.modal.image && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">전체 보기</div>
                            <div className="flex flex-col w-full pt-3 overflow-auto h-80">
                                <div className="flex flex-col w-full gap-1 divide-y scroll-m-0">
                                    <figure className="relative transition-all duration-300 cursor-pointer">
                                        <div className="">
                                            <img
                                                className="rounded-2xl"
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_corner.jpg`}
                                                alt="..."
                                            />
                                        </div>
                                    </figure>
                                    <figure className="relative transition-all duration-300 cursor-pointer">
                                        <div className="">
                                            <img
                                                className="rounded-2xl"
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_half.jpg`}
                                                alt="..."
                                            />
                                        </div>
                                    </figure>
                                    <figure className="relative transition-all duration-300 cursor-pointer">
                                        <div className="">
                                            <img
                                                className="rounded-2xl"
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_goal.jpg`}
                                                alt="..."
                                            />
                                        </div>
                                    </figure>
                                    <figure className="relative transition-all duration-300 cursor-pointer">
                                        <div className="">
                                            <img
                                                className="rounded-2xl"
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/DSC07845_l4piKiA.jpg`}
                                                alt="..."
                                            />
                                        </div>
                                    </figure>
                                    <figure className="relative transition-all duration-300 cursor-pointer">
                                        <div className="">
                                            <img
                                                className="rounded-2xl"
                                                src={`https://d31wz4d3hgve8q.cloudfront.net/media/Eunpyeong_A_corner2.jpg`}
                                                alt="..."
                                            />
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`닫기`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        image: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
        </div>
    );
};

export default RentalDetailPage;
