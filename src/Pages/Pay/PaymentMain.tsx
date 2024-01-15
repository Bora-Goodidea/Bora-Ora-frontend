import { useState } from 'react';
import Header from '@Page/Publish/Header';
import Footer from '@Page/Publish/Footer';
import { OraCheckBox, OraButton } from '@Elements';

const initializeState = {
    contentsToggle: {
        step1: false,
        step2: false,
        step3: false,
    },
};

const PaymentPage = () => {
    const [pageState, setPageState] = useState<{
        contentsToggle: {
            step1: boolean;
            step2: boolean;
            step3: boolean;
        };
    }>(initializeState);
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full bg-gray-50 pb-10">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex w-full bg-white">
                            <figure className="relative transition-all duration-300">
                                <div className="">
                                    <img
                                        className="rounded-2xl"
                                        src={`https://d31wz4d3hgve8q.cloudfront.net/static/img/cover_default.jpg`}
                                        alt="..."
                                    />
                                </div>
                                <figcaption className="flex absolute bottom-1 left-5 items-center justify-center">
                                    <div className="flex flex-col">
                                        <span className="text-lg text-white">12월 17일 일요일</span>
                                        <span className="text-lg text-white">21:00 ~ 23:00</span>
                                        <span className="text-lg text-white">서울 은행 롯데몰 실내</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        <div className="flex flex-col w-full gap-3">
                            <div className="flex flex-col w-full bg-white p-5">
                                <div className="flex flex-col w-full space-y-3">
                                    <div className="flex w-full">
                                        <span className="text-xs">결제</span>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <span className="text-sm">이용금액</span>
                                        <span className="text-sm">100,000</span>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="flex w-full border-2 border-gray-50"></div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <span className="text-base font-semibold">결제 금액</span>
                                        <span className="text-base font-semibold">100,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full bg-white p-5">
                                <div className="flex flex-col w-full space-y-3">
                                    <div className="flex w-full">
                                        <span className="text-xs">결제 수단</span>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <div className="flex items-center">
                                            <input
                                                checked={true}
                                                type="radio"
                                                value=""
                                                className="w-4 h-4 bg-gray-100 focus:ring-blue-500"
                                                onChange={() => console.debug('click')}
                                            />
                                            <label className="ms-2 text-sm font-medium text-gray-900 items-center flex gap-2">
                                                카카오페이
                                                <div className="flex">
                                                    <img
                                                        className="h-4"
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_kakaopay.png"
                                                        alt="..."></img>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full bg-white p-5">
                                <div className="flex flex-col w-full space-y-3">
                                    <div className="flex flex-col w-full border-b border-gray-200 py-5">
                                        <div
                                            className="flex flex-nowrap w-full justify-between cursor-pointer"
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step1: !prevState.contentsToggle.step1,
                                                    },
                                                }))
                                            }>
                                            <span className="text-xs">이것만은 꼭!</span>
                                            <div className="text-xs">
                                                {pageState.contentsToggle.step1 ? (
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
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="flex items-center">
                                                {pageState.contentsToggle.step1 && (
                                                    <span className="w-full text-xs text-gray-500 font-sans text-left whitespace-pre-line ">
                                                        {`
                                                    제시간에 경기를 마쳐 주세요. 예약 시간을 초과하지 않도록 3~5분 전에 마무리 하는 게 좋습니다.

                                                    다른 사용자나 인근 주민에게 피해를 끼치는 행동을 삼가주세요. 음식 조리, 배달 취식, 음주는 할 수 없습니다. 너무 크게 소리 지르면, 민원으로 시설 사용을 중단할 수 있습니다.

                                                    풋살화(TF)를 신고 플레이 해주세요. 풋살장에서 축구화(FG, HG, AG, MG) 착용은 나와 상대방의 부상을 유발합니다.

                                                    이용자 부주의로 시설을 파손하면, 손해배상을 청구할 수 있습니다. 이 점 유의해 주세요.

                                                    `}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border-b border-gray-200 py-5">
                                        <div
                                            className="flex flex-nowrap w-full justify-between cursor-pointer"
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step2: !prevState.contentsToggle.step2,
                                                    },
                                                }))
                                            }>
                                            <span className="text-xs">부상과 보험</span>
                                            <div className="text-xs">
                                                {pageState.contentsToggle.step2 ? (
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
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="flex items-center">
                                                {pageState.contentsToggle.step2 && (
                                                    <span className="w-full text-xs text-gray-500 font-sans text-left whitespace-pre-line ">
                                                        {`
                                                    플랩은 상대를 배려하고, 나를 지키는 안전한 플레이를 권장합니다.

                                                    거친 플레이를 하는 참가자에게 매너 카드를 발급하여 안전하고 즐거운 매치 문화를 만들어 나갑니다.

                                                    다른 사람에게 피해를 끼치는 경우 이용이 정지될 수 있습니다.

                                                    축구, 풋살 등 부상의 위험성이 내재된 경기 규칙 안에서 발생한 부상 대부분이 개인에게 책임이 있음을 판단하고 있습니다.

                                                    경기 규칙 안에서 발생한 부상 대부분은 책임을 묻기 어렵다는 판결 사례가 많습니다.

                                                    그러나 과도한 힘을 사용해 일부러 상대를 다치게 할 경우 법원이 배상을 결정한 판례가 있습니다.

                                                    플랩에서 직접 운용하는 보험 상품은 없습니다. 소셜 매치 참여 전 실손의료보험 가입 여부를 확인해 주세요.


                                                    *자주 묻는 질문에서 '부상'을 검색해 법적 보상에 대한 자세한 내용을 확인해 보세요.

                                                    `}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border-b border-gray-200 py-5">
                                        <div
                                            className="flex flex-nowrap w-full justify-between cursor-pointer space-y-2"
                                            onClick={() =>
                                                setPageState(prevState => ({
                                                    ...prevState,
                                                    contentsToggle: {
                                                        ...prevState.contentsToggle,
                                                        step3: !prevState.contentsToggle.step3,
                                                    },
                                                }))
                                            }>
                                            <span className="text-xs">환불 안내</span>
                                            <div className="text-xs">
                                                {pageState.contentsToggle.step3 ? (
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
                                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="flex w-full items-center">
                                                {pageState.contentsToggle.step3 && (
                                                    <div className="flex flex-col w-full space-y-2">
                                                        <div className="flex flex-col w-full space-y-1">
                                                            <span className="text-xs">취소 시 환불 기준</span>
                                                            <div className="flex w-full">
                                                                <div className="grid grid-cols-2 w-full border rounded-lg border-gray-400">
                                                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">
                                                                        7일 전
                                                                    </div>
                                                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">
                                                                        100% 환불
                                                                    </div>
                                                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">
                                                                        5일 전
                                                                    </div>
                                                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">
                                                                        80% 환불
                                                                    </div>
                                                                    <div className="flex text-xs border-b border-r border-gray-400 px-2 py-2">
                                                                        3일 전
                                                                    </div>
                                                                    <div className="flex text-xs border-b border-gray-400 px-2 py-2">
                                                                        50% 환불
                                                                    </div>
                                                                    <div className="flex text-xs border-r border-gray-400 px-2 py-2">
                                                                        2일 전 ~ 예약 당일
                                                                    </div>
                                                                    <div className="flex text-xs px-2 py-2">환불 불가</div>
                                                                </div>
                                                            </div>
                                                            <span className="text-xs font-semibold">
                                                                결제 완료 후 30분 이내는 무료 취소가 가능합니다. (하루 1회 제한)
                                                            </span>
                                                            <span className="text-xs text-gray-400">
                                                                환불 수수료율은 위 표와 같이 적용되며, 예약 시간에 가까울수록 취소 수수료가
                                                                큽니다.
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col w-full space-y-1">
                                                            <div className="mb-2 text-xs font-semibold">강수 시 변경 및 환불 규정</div>
                                                            <ul className="space-y-1 text-xs text-gray-500 list-disc list-inside">
                                                                <li>
                                                                    예약 시작 2시간 전 기상청 날씨누리 기준 시간당 5mm 이상의 강수량이
                                                                    예보되는 경우, 예약 날짜를 변경할 수 있습니다.
                                                                </li>
                                                                <li>
                                                                    예약 당일 천재지변(호우경보, 대설경보, 태풍주의보, 태풍경보)으로 인해
                                                                    구장 이용이 어려우면 100% 환불됩니다.
                                                                </li>
                                                                <li>실내 구장의 경우, 변경 및 환불 가능 조건에 해당하지 않습니다.</li>
                                                                <li> 변경 및 환불 필요시 직접 문의주셔야 확인 후 안내 드릴 수 있습니다.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border-gray-200 py-5">
                                        <div className="flex w-full">
                                            <OraCheckBox
                                                Checked={false}
                                                LavelName={`네, 위내용을 보고 동의해요`}
                                                HandleOnChange={() => console.debug('checked')}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border-gray-200 py-5">
                                        <div className="flex w-full">
                                            <OraButton
                                                ButtonName={`100,000원 결제하기`}
                                                HandleClick={() => console.debug('click')}
                                                ButtonColor={`blue`}
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

export default PaymentPage;
