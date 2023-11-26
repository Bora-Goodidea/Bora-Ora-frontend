const MainPage = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="min-h-screen flex flex-col w-2/3">
                <header className="p-2">
                    <nav className="bg-white border-gray-200">
                        <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4">
                            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
                            </a>
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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Search icon</span>
                                    </div>
                                    <input
                                        type="text"
                                        id="search-navbar"
                                        className="p-2 ps-10 hidden md:block md:w-[300px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="지역, 구장, 팀 이름으로 찾기"
                                    />
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
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
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
                    <div className="flex w-full">
                        <div className="flex p-3 text-lg font-bold">소셜매치</div>
                        <div className="flex p-3 text-lg text-gray-500">
                            팀
                            <div className="flex pb-1">
                                <span className="text-sm rounded-lg m-1 bg-blue-700 text-white">new</span>
                            </div>
                        </div>

                        <div className="flex p-3 text-lg text-gray-500">구장 예약</div>
                    </div>
                </header>
                <main className="flex-1  p-2">
                    <div className="flex w-full gap-10 border">
                        <div className="border">
                            <div className="flex flex-col items-center">
                                <div className="flex">
                                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/explore_earlybird.svg" alt="" />
                                </div>
                                <div className="">얼리버드</div>
                            </div>
                        </div>
                        <div className="shrink-0 border">
                            <div className="flex flex-col items-center">
                                <div className="flex">
                                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/explore_seeding.svg" alt="" />
                                </div>
                                <div className="">비기너</div>
                            </div>
                        </div>
                        <div className="shrink-0 border">
                            <div className="flex flex-col items-center">
                                <div className="flex">
                                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/explore_semipro.svg" alt="" />
                                </div>
                                <div className="">세미프로</div>
                            </div>
                        </div>
                        <div className="shrink-0 border">
                            <div className="flex flex-col items-center">
                                <div className="flex">
                                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/explore_fire.svg" alt="" />
                                </div>
                                <div className="">첼린지</div>
                            </div>
                        </div>
                        <div className="shrink-0 border">
                            <div className="flex flex-col items-center">
                                <div className="flex">
                                    <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/explore_ball.svg" alt="" />
                                </div>
                                <div className="">축구매치</div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">Content</div>
                    <div className="mb-20">Content</div>
                </main>
                <footer className="p-2 ">Footer</footer>
            </div>
        </div>
    );
};

export default MainPage;
