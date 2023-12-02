import { useState } from 'react';
import { OraModal, OraButton } from '@Elements';
import TemporaryData from '@Common/TemporaryData';
import lodash from 'lodash';

const initializeState = {
    modal: {
        selectInfo: true,
    },
};

const RegisterComplete = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            selectInfo: boolean;
        };
    }>(initializeState);

    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex w-full justify-center">
                <div className="bg-gray-200 w-full md:max-w-screen-lg">
                    <nav className="bg-white">
                        <div className="flex flex-nowrap items-center justify-between py-1">
                            <div
                                className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
                                onClick={() => console.debug('')}>
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
                                                onFocus={() => console.debug('')}
                                                onBlur={() => console.debug('')}
                                            />
                                        </div>
                                        <div className="flex"></div>
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
                        <div className="flex flex-col w-full space-y-20">
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-center">
                                    <img
                                        className="w-80"
                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_handshake.png"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex flex-col w-full items-center justify-center">
                                        <span className="text-2xl">플랩풋볼 가입을 마쳤습니다</span>
                                        <span className="text-base">이제 소셜 매치 데뷔전을 준비하세요</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex flex-col w-full items-center justify-center">
                                        <div className="flex flex-nowrap w-full h-24 bg-blue-600 rounded-full justify-between">
                                            <div className="flex flex-col items-left justify-center px-10">
                                                <div className="">
                                                    <span className="text-sm text-white font-bold">
                                                        미리 충전하고 전에 보던 매치를 신청하세요
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-white font-medium">12월 2일 토요일 09:00</span>
                                                </div>
                                                <div>
                                                    <span className="text-xs text-white font-medium">
                                                        서울 영등포 더에프 필드 B구장 *주차마감*
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center px-10">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-8 h-8 text-white">
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
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex w-full items-center justify-center">
                                    <div className="flex flex-col w-full items-center justify-center">
                                        <div className="flex flex-nowrap w-full h-44 bg-blue-100 rounded-xl justify-center">
                                            <div className="flex flex-col w-3/6 items-center justify-center space-y-4">
                                                <div className="flex flex-col w-full items-center justify-center">
                                                    <span className="text-lg text-blue-700 font-semibold">스카웃 코드 입력</span>
                                                </div>
                                                <div className="flex flex-col text-sm w-full items-center justify-center">
                                                    <span className="text-sm">친구에게 받은 스카웃 코드가 있다면 입력해주세요</span>
                                                </div>
                                                <div className="flex flex-col w-2/4">
                                                    <div className="flex">
                                                        <div className="relative w-full">
                                                            <input
                                                                type="search"
                                                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                                placeholder=""
                                                                required
                                                            />
                                                            <button
                                                                type="submit"
                                                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <span className="">입력</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex-1 w-full"></footer>
            {pageState.modal.selectInfo && (
                <OraModal
                    Children={
                        <div className="w-full overflow-auto h-96">
                            <div className="flex flex-col w-full space-y-4">
                                <div className="flex w-full">
                                    <img
                                        className=""
                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_cover_favorite_summer.jpg"
                                        alt="..."></img>
                                </div>
                                <div className="flex w-full">
                                    <div className="flex w-full">
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-3xl">선호하는 지역과 시간을</span>
                                            <span className="text-3xl">알려 주세요</span>
                                            <span className="text-sm pt-3">주변에 더 많은 매치를 열고 찾기 쉽게 도와드릴게요!</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full divide-y-2">
                                    <div className="flex flex-col w-full space-y-3">
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-sm font-semibold">선호 지역</span>
                                            <span className="text-xs font-semibold">주로 활동하는 지역을 선택해주세요</span>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">도시</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>선택</option>
                                                        <option value="">서울</option>
                                                        <option value="">경기</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">지역</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>선택</option>
                                                        <option value="">구로</option>
                                                        <option value="">강남</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full divide-y-2">
                                    <div className="flex flex-col w-full space-y-3">
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-sm font-semibold">활동 반경</span>
                                            <span className="text-xs font-semibold">플랩하러 어디까지 갈 수 있나요?</span>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="flex w-1/4">
                                                <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                    10Km
                                                </button>
                                            </div>
                                            <div className="flex w-1/4">
                                                <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                    20Km
                                                </button>
                                            </div>
                                            <div className="flex w-1/4">
                                                <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                    30Km
                                                </button>
                                            </div>
                                            <div className="flex w-1/4">
                                                <button className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                    40Km
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-xs font-semibold">풋살하러 어디까지 갈 수 있나요?</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full divide-y-2">
                                    <div className="flex flex-col w-full space-y-3">
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-sm font-semibold">평일 선호 시간</span>
                                            <span className="text-xs font-semibold">중복으로 선택할수 있어요</span>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="grid grid-cols-4 w-full gap-2">
                                                {lodash.map(TemporaryData.RegisterComplete.MatchTime, (e, index) => {
                                                    return (
                                                        <button
                                                            key={`publish-register-complete-page-weekday-item-${index}`}
                                                            className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                            <div className="flex flex-col object-center justify-center items-center">
                                                                <img className="h-3 w-3" src={`${e.image}`} alt="" />
                                                                <span>{e.name}</span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full divide-y-2">
                                    <div className="flex flex-col w-full space-y-3">
                                        <div className="flex flex-col w-full justify-start">
                                            <span className="text-sm font-semibold">주말/휴일 선호 시간</span>
                                            <span className="text-xs font-semibold">중복으로 선택할 수 있습니다</span>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="grid grid-cols-4 w-full gap-2">
                                                {lodash.map(TemporaryData.RegisterComplete.MatchTime, (e, index) => {
                                                    return (
                                                        <button
                                                            key={`publish-register-complete-page-weekend-item-${index}`}
                                                            className="w-full bg-white hover:bg-gray-100 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded shadow">
                                                            <div className="flex flex-col object-center justify-center items-center">
                                                                <img className="h-3 w-3" src={`${e.image}`} alt="" />
                                                                <span>{e.name}</span>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    Buttons={
                        <OraButton
                            ButtonName={`저장`}
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

export default RegisterComplete;
