import React, { useEffect, useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import Slider from 'react-slick';
import { OraModal, OraButton } from '@Elements';
import lodash from 'lodash';

const modalMatcgSlidersettings = {
    dots: true,
    className: 'center',
    infinite: false,
    centerPadding: '',
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
};

const initializeState = {
    modal: {
        mainMenu: false,
    },
    searchDropDown: false,
    mainModalMatch: [],
};

const Header = () => {
    const [pageState, setPageState] = useState<{
        modal: {
            mainMenu: boolean;
        };
        searchDropDown: boolean;
        mainModalMatch: Array<{ image: string; name: string }>;
    }>(initializeState);

    useEffect(() => {
        setPageState(prevState => ({
            ...prevState,
            mainModalMatch: TemporaryData.Main.MainModalList.Match.map(e => e),
        }));
    }, []);

    return (
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
                                                            <div className="text-sm text-gray-500 border-b-2 py-3">경산 월드 풋살클럽</div>
                                                            <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                구리 워커힐 아천 축구장
                                                            </div>
                                                            <div className="text-sm text-gray-500 border-b-2 py-3">전주 오풋살 풋살장</div>
                                                            <div className="text-sm text-gray-500 border-b-2 py-3">
                                                                김포 싸커코어 축구교실
                                                            </div>
                                                            <div className="text-sm text-gray-500 border-b-2 py-3">대구 유천 풋살장</div>
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
                    </div>
                </nav>
            </div>

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
                            ButtonColor={`blue`}
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
        </header>
    );
};

export default Header;
