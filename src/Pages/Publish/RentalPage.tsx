import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import TemporaryData from '@Common/TemporaryData';
import RentalList from '@Common/RentalList.json';
import { OraSpinner } from '@Elements';
import lodash from 'lodash';
import { addComma } from '@Helper';
import { OraModal, OraButton, OraCheckBox } from '@Elements';

const initializeState = {
    modal: {
        area: false,
        areaChange: false,
        time: false,
        size: false,
        inout: false,
        floor: false,
        image: false,
    },
};

const RentalPage = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            area: boolean;
            areaChange: boolean;
            time: boolean;
            size: boolean;
            inout: boolean;
            floor: boolean;
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
    const rentalTimeArray = Array.from({ length: 48 }, (v, i) => {
        const inNumber = i + 6;

        return inNumber >= 24 ? (inNumber - 24 >= 24 ? inNumber - 48 : inNumber - 24) : inNumber;
    });

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full space-y-4">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap items-center h-20 justify-stretch gap-3">
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg text-gray-500">소셜매치</div>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg font-bold">구장 예약</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full justify-between pt-2">
                            <div className="grid grid-row-1 grid-flow-col gap-2">
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() => {
                                            console.debug('click');
                                        }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    area: true,
                                                },
                                            }));
                                        }}>
                                        <span>내지역</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-blue-600 py-1 p-3 rounded-full border border-blue-600 inline-flex items-center"
                                        onClick={() => alert('준비 중입니다.')}>
                                        <span>12월 11일</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    time: true,
                                                },
                                            }));
                                        }}>
                                        <span>시간</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    size: true,
                                                },
                                            }))
                                        }>
                                        <span>구장 크기</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    inout: true,
                                                },
                                            }))
                                        }>
                                        <span>실내외</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center"
                                        onClick={() =>
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    floor: true,
                                                },
                                            }))
                                        }>
                                        <span>바닥 종류</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center bg-gray-100 p-5 border-b-2">
                    <div className="w-full md:max-w-screen-lg">
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.Rental.BannerSlide, (e, index, lists) => {
                                return (
                                    <figure
                                        className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                        key={`publish-rentel-page-banner-slide-item-${index}`}>
                                        <div className="">
                                            <img className="rounded-2xl" src={`${e.url}`} alt="..." />
                                        </div>
                                        <figcaption className="flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <p className="text-white text-lg">
                                                {slideCurrent} | {lists.length} +
                                            </p>
                                        </figcaption>
                                    </figure>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
                <section className="flex w-full justify-center sticky top-0 z-20">
                    <div className="w-full md:max-w-screen-lg">
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
                </section>
                <section className="flex w-full justify-center overflow-auto">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full flex-col space-y-5">
                            {(() => {
                                const templists = lodash.map(RentalList.results, (r: any) => {
                                    const mainStadiumName = r.name;

                                    // "is_partnership": true,
                                    // "is_parking": true,
                                    // "is_wear": false,
                                    // "is_shower": false,
                                    // "is_shoes": false,
                                    // "is_rental": true,
                                    // "is_bibs": false, // 쪼끼
                                    // "is_toilet": 2, // 화장실
                                    // "is_ball": false,

                                    const stadiumOption: any = [];

                                    if (r.is_parking) {
                                        stadiumOption.push(`주차`);
                                    }

                                    if (r.is_shower) {
                                        stadiumOption.push(`샤워 가능`);
                                    }

                                    if (r.is_shoes) {
                                        stadiumOption.push(`신발 대여`);
                                    }

                                    if (r.is_bibs) {
                                        stadiumOption.push(`조끼대여`);
                                    }

                                    if (r.is_toilet === 1) {
                                        stadiumOption.push(`화장실 남녀 구분`);
                                    } else if (r.is_toilet === 2) {
                                        stadiumOption.push(`화장실`);
                                    }

                                    if (r.is_ball) {
                                        stadiumOption.push(`공 대여`);
                                    }

                                    return lodash.map(r.stadiums, (el: any) => {
                                        const gubunName = lodash.has(el, `name`) && el.name ? el.name : ``;
                                        return {
                                            name: `${mainStadiumName} ${gubunName}`,
                                            stadiumOption: stadiumOption,
                                            product_option: [`${el.size_x}x${el.size_y}`, `${el.inout_door_nm}`, `${el.stadium_type_nm}`],
                                            price: lodash.has(el.products[0], `product_price`) ? el.products[0].product_price / 2 : 0,
                                            schedule: lodash.map(el.products, p => {
                                                return {
                                                    start: Number(p.start_t.substring(0, 2)),
                                                    end: Number(p.end_t.substring(0, 2)),
                                                };
                                            }),
                                            images: lodash.map(el.images, i => {
                                                return i.image;
                                            }),
                                        };
                                    });
                                });

                                const lists: Array<{
                                    name: string;
                                    price: number;
                                    product_option: Array<string>;
                                    schedule: Array<{ start: number; end: number }>;
                                    stadiumOption: Array<string>;
                                    images: Array<string>;
                                }> = [];

                                lodash.forEach(templists, e => {
                                    lodash.forEach(e, el => {
                                        lists.push(el);
                                    });
                                });

                                return lodash.map(lists, (l, index) => {
                                    return (
                                        <div
                                            key={`publish-rentel-page-rental-list-item-${index}`}
                                            className="flex w-full flex-col space-y-2 cursor-pointer">
                                            <div className="flex flex-nowrap w-full items-center justify-between">
                                                <div className="flex flex-col">
                                                    <div className="flex items-center">
                                                        <span className="text-md font-bold">{l.name}</span>
                                                    </div>
                                                    <div className="flex w-full items-center gap-1">
                                                        {lodash.map(l.product_option, (po, indexPo) => {
                                                            if (indexPo === 0) {
                                                                return (
                                                                    <span
                                                                        key={`publish-rental-page-rental-product-option-item-${index}-${indexPo}`}
                                                                        className="text-sm text-black">
                                                                        {po}
                                                                    </span>
                                                                );
                                                            } else {
                                                                return (
                                                                    <React.Fragment
                                                                        key={`publish-rental-page-rental-product-option-item-${index}-${indexPo}`}>
                                                                        <span className="">•</span>
                                                                        <span className="text-sm text-gray-400">{po}</span>
                                                                    </React.Fragment>
                                                                );
                                                            }
                                                        })}
                                                    </div>
                                                    <div className="flex w-full items-center">
                                                        <span className="text-sm text-gray-400">{`${addComma(l.price)}원~${addComma(
                                                            l.price
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
                                                            <img src={l.images[0]} alt="..." className="w-24 rounded-lg" />
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
                                                            lodash.forEach(l.schedule, ls => {
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
                                                <div className="flex w-full border-b"></div>
                                            </div>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full flex-col space-y-2 py-4 items-center justify-center">
                            <OraSpinner />
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full flex-col space-y-2 py-4">
                            <div className="flex flex-col w-full items-center justify-center">
                                <div className="flex">
                                    <span className="text-sm text-gray-400">비제휴 구장 더보기</span>
                                </div>
                                <div className="flex">
                                    <span className="text-xs text-gray-400">예약 가능 여부는 구장에 직접 확인해 주세요.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer IsMain={false} />

            {pageState.modal.area && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">지역</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="flex pl-5 py-3 border-b justify-between">
                                    <div className="flex items-center">
                                        <span className="text-xs">내 지역</span>
                                    </div>
                                    <div className="flex">
                                        <OraButton
                                            ButtonName={`편집하기`}
                                            ButtonColor={`blue`}
                                            HandleClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    modal: {
                                                        ...prevState.modal,
                                                        area: false,
                                                        areaChange: true,
                                                    },
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                {lodash.map(TemporaryData.Main.AreaList.slice(1, -1), (e, index) => {
                                    return (
                                        <div className="flex pl-5 py-3 border-b" key={`publish-rent-page-search-area-modal-item-${index}`}>
                                            <span className="text-xs">{e}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`적용`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        area: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.areaChange && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">내 지역</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="flex flex-nowrap w-full">
                                    <div className="flex flex-col w-2/6">
                                        <div className="flex pl-5 py-3 bg-gray-100 cursor-pointer">
                                            <span className="text-xs">내지역</span>
                                        </div>
                                        {lodash.map(TemporaryData.Main.AreaList.slice(1, -1), (e, index) => {
                                            if (index === 1) {
                                                return (
                                                    <div
                                                        className="flex pl-5 py-3 bg-white cursor-pointer"
                                                        key={`publish-rent-page-search-my-area-modal-area-item-${index}`}>
                                                        <span className="text-xs">{e}</span>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div
                                                        className="flex pl-5 py-3 bg-gray-100 cursor-pointer"
                                                        key={`publish-rent-page-search-my-area-modal-area-item-${index}`}>
                                                        <span className="text-xs">{e}</span>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="flex w-4/6">
                                        <div className="flex flex-col w-full px-2 space-y-1">
                                            <div className="flex flex-nowrap border-b items-center py-3">
                                                <div className="flex pr-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="gray"
                                                        className="w-4 h-4 cursor-pointer">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-xs">은평</span>
                                                <span className="text-xs">∙</span>
                                                <span className="text-xs">서대문</span>
                                                <span className="text-xs">∙</span>
                                                <span className="text-xs">마포</span>
                                                <span className="text-xs text-red-600 pl-2">2</span>
                                            </div>
                                            <div className="flex flex-nowrap border-b items-center py-3">
                                                <div className="flex pr-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="gray"
                                                        className="w-4 h-4 cursor-pointer">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="text-xs">노원</span>
                                                <span className="text-xs">∙</span>
                                                <span className="text-xs">도봉</span>
                                                <span className="text-xs">∙</span>
                                                <span className="text-xs">성동</span>
                                                <span className="text-xs text-red-600 pl-2">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`적용`}
                            ButtonColor={`blue`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        areaChange: false,
                                        area: true,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.time && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">시간</div>
                            <div className="w-full text-xs pl-5">시작시간 기준</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="grid grid-cols-4 w-full gap-1">
                                    {lodash.map(TemporaryData.Rental.TimeModal, (e, index) => {
                                        return (
                                            <div className="flex" key={`publish-rent-page-time-select-modal-item-${index}`}>
                                                <OraButton
                                                    ButtonName={`${e.start}~${e.end}시`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() =>
                                                        setPageState(prevState => ({
                                                            ...prevState,
                                                            modal: {
                                                                ...prevState.modal,
                                                                time: false,
                                                            },
                                                        }))
                                                    }
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            time: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            time: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.size && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">구장크기</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="flex flex-col w-full gap-1">
                                    {lodash.map(TemporaryData.Rental.StadiumSize, (e, index) => {
                                        return (
                                            <div className="flex" key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            size: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            size: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.inout && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">실내외</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="flex flex-col w-full gap-1">
                                    {lodash.map(TemporaryData.Rental.InOut, (e, index) => {
                                        return (
                                            <div className="flex" key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            inout: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            inout: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
            {pageState.modal.floor && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">바닥 종류</div>
                            <div className="flex flex-col w-full pt-3">
                                <div className="flex flex-col w-full gap-1">
                                    {lodash.map(TemporaryData.Rental.floor, (e, index) => {
                                        return (
                                            <div className="flex" key={`publish-rent-page-size-check-box-modal-item-${index}`}>
                                                <OraCheckBox Checked={false} HandleOnChange={() => console.debug('check')} LavelName={e} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <>
                            <OraButton
                                ButtonName={`초기화`}
                                ButtonColor={`default`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            floor: false,
                                        },
                                    }))
                                }
                            />
                            <OraButton
                                ButtonName={`필터 적용`}
                                ButtonColor={`blue`}
                                HandleClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            floor: false,
                                        },
                                    }))
                                }
                            />
                        </>
                    }
                />
            )}
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

export default RentalPage;
