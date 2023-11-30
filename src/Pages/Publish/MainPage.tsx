import React, { useEffect, useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import MatMatchList from '@Common/MatchList.json';
import lodash from 'lodash';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import { OraModal, OraButton, OraCheckBox } from '@Elements';

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

const modalMatcgSlidersettings = {
    dots: true,
    className: 'center',
    // centerMode: true,
    infinite: false,
    centerPadding: '',
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
};

const initializeState = {
    modal: {
        mainMenu: false,
        area: false,
        gender: false,
        level: false,
    },
    searchDropDown: false,
    mainModalMatch: [],
};

const MainPage = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            mainMenu: boolean;
            area: boolean;
            gender: boolean;
            level: boolean;
        };
        searchDropDown: boolean;
        mainModalMatch: Array<{ image: string; name: string }>;
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

    useEffect(() => {
        setPageState(prevState => ({
            ...prevState,
            mainModalMatch: TemporaryData.Main.MainModalList.Match.map(e => e),
        }));
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex w-full justify-center">
                <div className="bg-gray-200 w-full md:max-w-screen-lg">
                    <nav className="bg-white">
                        <div className="flex flex-nowrap items-center justify-between py-1">
                            <div
                                className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                                onClick={() =>
                                    setPageState(prevState => ({
                                        ...prevState,
                                        modal: {
                                            ...prevState.modal,
                                            mainMenu: true,
                                        },
                                    }))
                                }>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <span className="self-center text-2xl font-semibold whitespace-nowrap">보라 오라</span>
                            </div>
                            <div className="flex flex-nowrap md:order-2">
                                <div className="relative items-center flex flex-nowrap">
                                    <div className="hidden md:flex md:absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search icon</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <input
                                                type="text"
                                                id="search-navbar"
                                                className="p-2 ps-10 hidden md:block md:w-[300px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="지역, 구장, 팀 이름으로 찾기"
                                                onFocus={() =>
                                                    setPageState(prevState => ({
                                                        ...prevState,
                                                        searchDropDown: true,
                                                    }))
                                                }
                                                onBlur={() =>
                                                    setPageState(prevState => ({
                                                        ...prevState,
                                                        searchDropDown: false,
                                                    }))
                                                }
                                            />
                                        </div>
                                        <div className="flex">
                                            {pageState.searchDropDown && (
                                                <div className="absolute rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 p-5 z-50">
                                                    <div className="flex flex-col gap-4 h-[50vh] overflow-scroll">
                                                        <div className="flex flex-nowrap gap-3">
                                                            <div className="text-lg font-semibold">구장</div>
                                                            <div className="text-lg">팀</div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="text-lg font-semibold">최근 검색어</div>
                                                            <div className="text-sm px-4">하영이, 바보</div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="text-lg font-semibold">인기 키워드</div>
                                                            <div className="flex flex-nowrap gap-2 px-4">
                                                                <div className="border rounded-full px-2 text-sm text-gray-500">수원</div>
                                                                <div className="border rounded-full px-2 text-sm text-gray-500">부천</div>
                                                                <div className="border rounded-full px-2 text-sm text-gray-500">안산</div>
                                                                <div className="border rounded-full px-2 text-sm text-gray-500">천안</div>
                                                                <div className="border rounded-full px-2 text-sm text-gray-500">안양</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="text-lg font-semibold">새로운 구장</div>
                                                            <div className="flex flex-col gap-2 px-4">
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    동대문 토모 풋살피치
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">오산 풋살파크</div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    고양 솔레아스풋볼 일산 중산점
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    하남 야구 풋살 스포츠 아카데미
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    하남 감일 키커스스포츠
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    경산 월드 풋살클럽
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    구리 워커힐 아천 축구장
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    전주 오풋살 풋살장
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    김포 싸커코어 축구교실
                                                                </div>
                                                                <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                    대구 유천 풋살장
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-nowrap pl-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                                <div className="relative mt-3 md:hidden border">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="search-navbar"
                                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap items-center h-20 justify-stretch gap-3">
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg font-bold">소셜매치</div>
                            </div>
                            <div className="flex flex-nowrap items-center">
                                <div className="flex text-lg text-gray-500">팀</div>
                                <span className="h-4 text-xs rounded-full bg-blue-700 text-white">new</span>
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

                <section className="flex w-full justify-center h-100 overflow-auto">
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
                                                    남녀모두 · 6vs6 · 3파전 · 모든 레벨
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

            <footer className="flex-1 w-full">
                <section className="flex w-full justify-center bg-green-500">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap h-52">
                            <div className="flex flex-col w-1/2">
                                <p className="text-lg text-white pt-10">원하는 매치가 없다면</p>
                                <p className="text-sm pt-2">보라하고 싶은 곳을 추천해 주세요</p>
                                <div className="flex items-center pt-5">
                                    <button className="w-20 bg-white text-gray-600 text-sm py-1 px-3 rounded">추천 하기</button>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 items-end justify-end">
                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_thunder.png" className="w-60" alt=""></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center bg-black">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-nowrap py-10">
                            <div className="flex flex-nowrap w-1/2 ustify-start gap-10">
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">매치</div>
                                    <div className="text-gray-500 text-xs py-1">모든 매치</div>
                                    <div className="text-gray-500 text-xs py-1">여자 매치</div>
                                    <div className="text-gray-500 text-xs py-1">남녀모두 매치</div>
                                    <div className="text-gray-500 text-xs py-1">스타터 매치</div>
                                    <div className="text-gray-500 text-xs py-1">티셔츠 매치</div>
                                    <div className="text-gray-500 text-xs py-1">초급 매치</div>
                                    <div className="text-gray-500 text-xs py-1">중금 매치</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">서비스 지역</div>
                                    {lodash.map(TemporaryData.Main.AreaList, (e, index) => {
                                        return (
                                            <div
                                                className="text-gray-500 text-xs py-1"
                                                key={`publish-main-page-footer-area-list-item-${index}`}>
                                                {e}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">오라풋볼</div>
                                    <div className="text-gray-500 text-xs py-1">오라풋볼 소개</div>
                                    <div className="text-gray-500 text-xs py-1">공지사항</div>
                                    <div className="text-gray-500 text-xs py-1">자주 묻는 질문</div>
                                    <div className="text-gray-500 text-xs py-1">오라 매거진</div>
                                    <div className="text-gray-500 text-xs py-1">매니저 지원</div>
                                    <div className="text-gray-500 text-xs py-1">구장 제휴</div>
                                    <div className="text-gray-500 text-xs py-1">채용</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">쇼셜 미디어</div>
                                    <div className="text-gray-500 text-xs py-1">인스타 그램</div>
                                    <div className="text-gray-500 text-xs py-1">유투브</div>
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="flex flex-col">
                                    <div className="text-white text-sm py-2">localhost.com</div>
                                    <div className="text-gray-500 text-xs py-2">풋살하고 싶을 땐, 오라풋볼</div>
                                    <div className="text-gray-500 text-xs py-2">이용 약관 | 개인정보 처리방침 | 사업자 정보 확인</div>
                                    <div className="text-gray-500 text-xs py-2">
                                        <p>
                                            플랩풋볼 | 서울특별시 마포구 잔다리로31 제우피스빌딩 2층 | 대표 메일 contact@plabfootball.com
                                            |마케팅 제안 marketing@plabfootball.com | 언론, 연구 team@plabfootball.com | 02-704-7983
                                            주식회사 마이플레이컴퍼니 | 사업자번호 650-81-00575 | 대표 강동규 | 통신판매업 신고
                                            2020-서울마포-4411 Copyright PLAB All rights reserved.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            {/* TODO: modal 은 레이아웃에서 처리 할것 */}
            {pageState.modal.mainMenu && pageState.mainModalMatch.length > 0 && (
                <OraModal
                    Children={
                        <div className="w-full">
                            <div className="w-full">
                                <div className="w-full text-sm pl-5">소셜 매치</div>
                                <div className="w-full">
                                    <Slider {...modalMatcgSlidersettings}>
                                        {lodash.map(pageState.mainModalMatch, (ml, index) => {
                                            return (
                                                <div className="flex pt-5" key={`publish-main-page-main-modal-match-slide-item-${index}`}>
                                                    <div className="flex justify-center h-10">
                                                        <img src={`${ml.image}`} alt="..." className="w-8 h-6" />
                                                    </div>
                                                    <div className="flex justify-center text-xs">{`${ml.name}`}</div>
                                                </div>
                                            );
                                        })}
                                    </Slider>
                                </div>
                            </div>
                            <div className="w-full pt-10">
                                <div className="w-full text-sm pl-5">팀</div>
                                <div className="flex flex-nowrap w-full gap-10 pl-10">
                                    {lodash.map(TemporaryData.Main.MainModalList.Team, (ml, index) => {
                                        return (
                                            <div className="flex flex-col pt-5" key={`publish-main-page-main-modal-temp-item-${index}`}>
                                                <div className="flex justify-center">
                                                    <img src={`${ml.image}`} alt="..." />
                                                </div>
                                                <div className="flex justify-center text-xs">{`${ml.name}`}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-full pt-10">
                                <div className="w-full text-sm pl-5">
                                    <div className="flex items-center">
                                        <div className="flex">구장 예약</div>
                                        <div className="flex pl-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-4 h-4">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full pt-10">
                                <div className="w-full text-sm pl-5 border-b"></div>
                            </div>
                            <div className="w-full pt-10">
                                <div className="flex flex-nowrap w-full text-sm pl-5">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="pl-2">매니저 지원</div>
                                </div>
                            </div>
                            <div className="w-full pt-1">
                                <div className="flex flex-nowrap w-full text-sm pl-5">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="pl-2">구장 제휴</div>
                                </div>
                            </div>
                            <div className="w-full pt-1">
                                <div className="flex flex-nowrap w-full text-sm pl-5">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-4 h-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                                            />
                                        </svg>
                                    </div>
                                    <div className="pl-2">매거진</div>
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`확인`}
                            HandleClick={() =>
                                setPageState(prevState => ({
                                    ...prevState,
                                    modal: {
                                        ...prevState.modal,
                                        mainMenu: false,
                                    },
                                }))
                            }
                        />
                    }
                />
            )}
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
