const EmailRegisterPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="flex w-full justify-center"></header>

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="flex flex-nowrap h-screen w-full">
                        <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <div className="">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                            풋살 하고 싶을땐
                                        </h1>
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-700 md:text-2xl">
                                            오라 풋볼
                                        </h1>
                                    </div>

                                    <div className="">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-900">이메일</label>
                                            <input
                                                type="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">비밀번호</label>
                                                    <input
                                                        type="password"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="********"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">비밀번호 확인</label>
                                                    <input
                                                        type="password"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="********"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full pt-2">
                                            <p className="text-xs text-green-400">매치 참여시 본인 확인 및 참여 안내톡을 보내드립니다.</p>
                                            <p className="text-xs text-green-400">이름과 휴대폰 번호를 꼭 바르게 적어주세요!</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">이름</label>
                                                    <input
                                                        type="email"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="name@company.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex w-1/2">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">성별</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>선택</option>
                                                        <option value="">남성</option>
                                                        <option value="">여성</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-nowrap w-full">
                                            <div className="flex w-full">
                                                <div className="flex flex-col w-full pt-2">
                                                    <p className="text-xs text-green-400">2자 이상 10자 이하의 한글/영어로 설정해주세요</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex flex-nowrap w-full gap-1">
                                            <div className="flex w-1/3">
                                                <div className="w-full">
                                                    <label className="block mb-2 text-xs font-medium text-gray-900">생년월일</label>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>1990</option>
                                                        <option value="">1991</option>
                                                        <option value="">1992</option>
                                                        <option value="">1993</option>
                                                        <option value="">1994</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex w-1/3">
                                                <div className="w-full">
                                                    <div className="h-6"></div>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>선택</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex w-1/3">
                                                <div className="w-full">
                                                    <div className="h-6"></div>
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected>선택</option>
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                        <option value="">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex w-full">
                                            <div className="flex items-center">
                                                <input
                                                    checked={true}
                                                    type="radio"
                                                    value=""
                                                    name="default-radio"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                                />
                                                <label className="ms-2 text-sm font-medium text-gray-900 ">
                                                    오라 서비스 이용 약관 및 개인 정보 수집 및 이용에 동의합니다.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex w-full">
                                            <button
                                                type="submit"
                                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2">
                                                <span>회원 가입</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-white md:mt-5 sm:max-w-md xl:p-0">
                                <div className="flex w-full items-center justify-center">
                                    <span className="text-xs cursor-pointer">이미 아이디가 있다면 여기에서 로그인하세요</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EmailRegisterPage;
