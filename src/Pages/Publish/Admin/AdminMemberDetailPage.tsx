import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminNav from './AdminNav';

const AdminMemberDetailPage = () => {
    return (
        <div className="min-h-screen h-screen flex flex-col dark:bg-gray-700">
            <AdminHeader />

            <div className="flex-1 flex flex-row overflow-y-hidden">
                <main className="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs overflow-y-auto dark:bg-gray-700">
                    {/* Contents Section */}
                    <div className="flex w-full h-full items-baseline justify-center">
                        <div className="flex flex-col w-full max-w-3xl justify-center p-5 shadow-2xl">
                            <div className="flex w-full">
                                <div className="flex">
                                    <span className="text-lg text-gray-900 dark:text-white">회원 정보</span>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-center justify-center">
                                <div className="flex w-full items-center justify-center px-2">
                                    <div className="flex flex-col w-full p-5">
                                        <div className="flex flex-col gap-6 mb-6 md:grid-cols-2">
                                            <div className="flex w-full items-center justify-center">
                                                <img
                                                    className="h-auto max-w-lg rounded-lg"
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_profile_default.png"
                                                    alt="image description"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    이미지 업로드
                                                </label>
                                                <input
                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                    id="file_input"
                                                    type="file"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    회원 번호
                                                </label>
                                                <input
                                                    type="number"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="1111"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    가입경로
                                                </label>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Web"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">종류</label>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="카카오톡"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">레벨</label>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">일반</option>
                                                    <option value="0002">관리자</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    이메일
                                                </label>
                                                <input
                                                    type="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="xxxx@xxx.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    비밀번호
                                                </label>
                                                <input
                                                    type="password"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="*************"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
                                                <input
                                                    type="text"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="이름"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">성별</label>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">남성</option>
                                                    <option value="0002">여성</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">생년월일</label>
                                            <div className="flex gap-6 md:grid-cols-1">
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">1990</option>
                                                    <option value="0002">1991</option>
                                                </select>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">01</option>
                                                    <option value="0002">02</option>
                                                </select>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">01</option>
                                                    <option value="0002">02</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    좋아하는 스타일
                                                </label>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">공격</option>
                                                    <option value="0002">벨런스</option>
                                                    <option value="0003">스타일</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    자신 있는 능력
                                                </label>
                                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option value="">선택</option>
                                                    <option value="0001">슛</option>
                                                    <option value="0002">패스</option>
                                                    <option value="0002">드리블</option>
                                                    <option value="0002">체력</option>
                                                    <option value="0002">스피드</option>
                                                    <option value="0002">피지컬</option>
                                                    <option value="0002">골키퍼</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    포인트
                                                </label>
                                                <input
                                                    type="number"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="12,973"
                                                />
                                            </div>
                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    마지막 로그인
                                                </label>
                                                <input
                                                    type="text"
                                                    readOnly={true}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="2023.12.17 08:00"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-nowrap w-full gap-8">
                                            <div className="flex w-1/2">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    취소
                                                </button>
                                            </div>
                                            <div className="flex w-1/2">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    저장
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contents Section */}
                </main>

                <AdminNav />
            </div>

            <AdminFooter />
        </div>
    );
};

export default AdminMemberDetailPage;
