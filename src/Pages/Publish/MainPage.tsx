import React, { useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import MatMatchList from '@Common/MatchList.json';
import lodash from 'lodash';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { OraModal, OraButton, OraCheckBox } from '@Elements';
import Header from './Header';
import Footer from './Footer';

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
        area: false,
        gender: false,
        level: false,
    },
};

const MainPage = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            area: boolean;
            gender: boolean;
            level: boolean;
        };
    }>(initializeState);

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

    // https://ryurim.tistory.com/110 참조
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

    const [slideCurrent, setSlideCurrent] = useState<number>(1);

    const date = new Date();

    // const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const calendarArray = Array.from({ length: lastDay.getDate() }, (v, i) => i);

    const weekString = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap items-center h-20 justify-stretch gap-3">
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg font-bold">소셜매치</div>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg text-gray-500">구장 예약</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full justify-between pt-2">
                            {lodash.map(TemporaryData.Main.ExploreCategory.SocialMatch, (e, index) => {
                                return (
                                    <div
                                        className="flex cursor-pointer"
                                        key={`publish-main-page-explore-category-social-match-item-${index}`}>
                                        <div className="flex flex-col items-center py-2">
                                            <div className="flex">
                                                <img src={`${e.icon}`} alt={`${e.name}`} />
                                            </div>
                                            <p className="text-xs pt-1">{`${e.name}`}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center bg-gray-100 p-5 border-b-2">
                    <div className="w-full md:max-w-screen-lg">
                        <Slider {...bannerSlidersettings}>
                            {lodash.map(TemporaryData.Main.BannerSlide, (e, index) => {
                                return (
                                    <figure
                                        className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                        key={`publish-main-page-banner-slide-item-${index}`}>
                                        <div className="">
                                            <img className="rounded-2xl" src={`${e.url}`} alt="..." />
                                        </div>
                                        <figcaption className="flex absolute bottom-8 right-10 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <p className="text-white text-lg">{slideCurrent} | 6 +</p>
                                        </figcaption>
                                    </figure>
                                );
                            })}
                        </Slider>
                    </div>
                </section>
                <section className="flex w-full justify-center p-5 bg-white sticky top-0">
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
                        <div className="flex w-full h-full pt-5">
                            <div className="grid grid-row-1 grid-flow-col gap-2">
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
                                        <span>모든지역</span>
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
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                            />
                                        </svg>
                                        <span>혜택</span>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button className="bg-white text-sm text-gray-400 py-1 p-3 rounded-full border inline-flex items-center">
                                        <span>마감 가리기</span>
                                    </button>
                                </div>
                                <div className="flex">
                                    <button
                                        className="bg-white text-sm text-blue-700 py-1 p-3 rounded-full border border-blue-700 inline-flex items-center"
                                        onClick={() => {
                                            setPageState(prevState => ({
                                                ...prevState,
                                                modal: {
                                                    ...prevState.modal,
                                                    gender: true,
                                                },
                                            }));
                                        }}>
                                        <span>남자</span>
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
                                                    level: true,
                                                },
                                            }));
                                        }}>
                                        <span>레벨</span>
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

                <section className="flex w-full justify-center overflow-auto">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full flex-col divide-y scroll-m-0">
                            {lodash.map(MatMatchList, (e, index) => {
                                return (
                                    <div className="flex w-full border-b h-20" key={`publish-main-page-match-list-item-${index}`}>
                                        <div className="flex flex-none h-full w-32 pl-5 items-center justify-start">
                                            <p>{e.label_schedule9.slice(-5)}</p>
                                        </div>
                                        <div className="flex flex-col grow pl-3 justify-center">
                                            <p className="text-gray-600 text-base font-semibold">{e.label_title}</p>
                                            <div className="flex items-center">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={0.5}
                                                    stroke="orange"
                                                    className="w-3 h-3">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                                                    />
                                                </svg>
                                                <p className="flex items-center content-center pl-1 text-gray-400 text-xs">
                                                    남녀모두 · 6vs6 · 모든 레벨
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-none justify-end md:w-28">
                                            <div className="flex w-full items-center">
                                                {(() => {
                                                    if (e.is_finish === true) {
                                                        return (
                                                            <OraButton
                                                                ButtonName={`마감`}
                                                                ButtonColor={`gray`}
                                                                HandleClick={() => {
                                                                    //
                                                                }}
                                                            />
                                                        );
                                                    }

                                                    if (e.apply_status === `hurry`) {
                                                        return (
                                                            <OraButton
                                                                ButtonName={`마감입박!`}
                                                                ButtonColor={`red`}
                                                                HandleClick={() => {
                                                                    //
                                                                }}
                                                            />
                                                        );
                                                    }

                                                    return (
                                                        <OraButton
                                                            ButtonName={`신청 가능`}
                                                            ButtonColor={`blue`}
                                                            HandleClick={() => {
                                                                //
                                                            }}
                                                        />
                                                    );
                                                })()}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer IsMain={true} />

            {/* TODO: modal 은 레이아웃에서 처리 할것 */}
            {pageState.modal.area && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">지역</div>
                            <div className="w-full pt-3">
                                {lodash.map(TemporaryData.Main.AreaList, (e, index) => {
                                    return (
                                        <div
                                            className="w-full pl-10 border-b cursor-pointer"
                                            key={`publish-main-page-area-modal-area-item-${index}`}>
                                            <p className="text-xs py-3">{e}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`확인`}
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
            {pageState.modal.gender && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">성별</div>
                            <div className="flex flex-col w-full pt-3">
                                {lodash.map(TemporaryData.Main.GenderList, (e, index) => {
                                    return (
                                        <div className="flex pl-10 py-3 border-b" key={`publish-main-page-gender-modal-item-${index}`}>
                                            <OraCheckBox
                                                LavelName={e}
                                                Checked={false}
                                                HandleOnChange={() => {
                                                    //
                                                }}
                                            />
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
                                        gender: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
            {pageState.modal.level && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full text-sm pl-5">레벨</div>
                            <div className="flex flex-col w-full pt-3">
                                {lodash.map(TemporaryData.Main.LevelList, (e, index) => {
                                    return (
                                        <div className="flex pl-10 py-3 border-b" key={`publish-main-page-level-modal-item-${index}`}>
                                            <OraCheckBox
                                                LavelName={e}
                                                Checked={false}
                                                HandleOnChange={() => {
                                                    //
                                                }}
                                            />
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
                                        level: false,
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

export default MainPage;
