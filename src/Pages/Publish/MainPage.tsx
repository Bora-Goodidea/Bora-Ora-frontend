const MainPage = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="min-h-screen flex flex-col w-2/3">
                <header className="p-2 bg-indigo-200">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between h-12" aria-label="Global">
                        <div className="flex lg:flex-1 border h-10 items-center">
                            <div className="flex pr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div className="flex lg:flex-1 text-1xl">Bora Ora</div>
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end border h-10 items-center">
                            <div className="flex border w-2/5">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-2 ps-10 text-sm rounded-lg focus:bg-gray-100 focus:border-blue-500"
                                        placeholder="지역, 구장, 팀 이름으로 찾기"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="flex-1 bg-indigo-50 p-2">
                    <div className="mb-20">Content</div>
                </main>
                <footer className="p-2 bg-indigo-200">Footer</footer>
            </div>
        </div>
    );
};

export default MainPage;
