import { OraButton } from '@Elements';
import Header from './Header';
import Footer from './Footer';

const ChangeProfilePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex min-h-screen items-center justify-center">
                            <div className="flex w-full md:max-w-2xl">
                                <div className="flex flex-col w-full items-center justify-center space-y-5">
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="flex flex-col space-y-3 justify-center items-center">
                                            <div className="flex w-full justify-center">
                                                <img
                                                    className="h-16 w-16"
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/img_profile_default.png"
                                                    alt="..."
                                                />
                                            </div>
                                            <div className="flex w-full justify-center">
                                                <OraButton
                                                    ButtonName={`사진 바꾸기`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('click')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">이름</label>
                                            <input
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                value="하영 바보"
                                                placeholder="..."
                                                onChange={() => console.debug('onChange')}
                                            />
                                            <span className="text-xs text-gray-500">프로필에 표시되는 이름이에요</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full flex flex-col">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">사용자 이름</label>
                                            <input
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                value="HkiXi"
                                                placeholder="..."
                                                onChange={() => console.debug('onChange')}
                                            />
                                            <span className="text-xs text-gray-500 pt-2">
                                                사용자 이름은 프로필 페이지 주소와 친구 초대 코드로 사용돼요
                                            </span>
                                            <span className="text-xs text-gray-500">https://localhost:3030/player/HkiXi</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">소개</label>
                                            <input
                                                type="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                value=""
                                                placeholder="주 1회 영등포에서 오라해요"
                                                onChange={() => console.debug('onChange')}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full border-8"></div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">성별</label>
                                            <div className="flex flex-nowrap w-full gap-2">
                                                <OraButton
                                                    ButtonName={`남자`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`여자`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">좋아하는 스타일</label>
                                            <div className="flex flex-nowrap w-full gap-2">
                                                <OraButton
                                                    ButtonName={`공격`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`밸런스`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`수비`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center">
                                        <div className="w-full">
                                            <label className="block mb-2 text-xs font-medium text-gray-600">자신있는 능력</label>
                                            <div className="grid grid-cols-3 w-full gap-2">
                                                <OraButton
                                                    ButtonName={`슛`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`패스`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`드리블`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`체력`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`스피드`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`피지컬`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                                <OraButton
                                                    ButtonName={`골키퍼`}
                                                    ButtonColor={`default`}
                                                    HandleClick={() => console.debug('client')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-full items-center justify-center pt-5">
                                        <div className="w-full">
                                            <OraButton
                                                ButtonName={`저장하기`}
                                                ButtonColor={`blue`}
                                                ButtonHeight={'lg'}
                                                HandleClick={() => console.debug('client')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ChangeProfilePage;
