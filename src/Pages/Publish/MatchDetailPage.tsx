import React, { useState } from 'react';
import TemporaryData from '@Common/TemporaryData';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import lodash from 'lodash';
import { OraButton } from '@Elements';

/**
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_goal.jpeg
https://d31wz4d3hgve8q.cloudfront.net/media/ydp_thef_half.jpeg
http://psmever.iptime.org:8062/assets/temp/detail-chart.png
 */
const MatchDetailPage = () => {
    const [slideCurrent, setSlideCurrent] = useState<number>(1);
    const slidersettings = {
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

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 w-full bg-gray-100">
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        <Slider {...slidersettings}>
                            {lodash.map(TemporaryData.Detail.slideList, (e, index) => {
                                return (
                                    <figure
                                        className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                        key={`publish-main-page-banner-slide-item-${index}`}>
                                        <div className="">
                                            <img className="object-fill h-96 w-full" src={`${e}`} alt="..." />
                                        </div>
                                        <figcaption className="flex absolute bottom-8 left-1/2 rounded-full w-24 items-center justify-center backdrop-blur-sm bg-white/30 cursor-pointer">
                                            <p className="text-white text-lg">{slideCurrent} | 3 +</p>
                                        </figcaption>
                                    </figure>
                                );
                            })}
                        </Slider>
                        {/* Contents End */}
                    </div>
                </section>
                <section className="flex w-full justify-center">
                    <div className="w-full md:max-w-screen-lg">
                        {/* Contents Start */}
                        <div className="flex w-full bg-gray-100 gap-2">
                            <div className="flex flex-col w-2/3 overflow-y-scroll gap-2">
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full p-2 bg-gray-200 rounded-3xl">
                                        <div className="flex flex-col w-full space-y-5 p-2">
                                            <div className="flex">
                                                <span className="text-base font-semibold">플래버 오브 더 매치</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full space-y-5 p-2">
                                            <div className="flex flex-col w-full space-y-4">
                                                <div className="flex w-full item-center justify-center">
                                                    <div className="flex flex-col w-full object-center items-center justify-center">
                                                        <img
                                                            className="h-8 w-8"
                                                            src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_plaber_of_the_match_emoji.svg"
                                                            alt="..."
                                                        />
                                                        <span className="text-sm font-semibold">Plaber Of The Match</span>
                                                    </div>
                                                </div>
                                                <div className="flex w-full item-center justify-around">
                                                    <div className="flex flex-col">
                                                        <div className="flex h-12 w-10 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_blue_back.svg)]">
                                                            <span className="text-lg font-semibold text-white">2</span>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <span className="text-xs">우의명</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="flex h-12 w-10 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_yellow_back.svg)]">
                                                            <span className="text-lg font-semibold text-white">2</span>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <span className="text-xs">진하영</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="flex h-12 w-10 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_red_back.svg)]">
                                                            <span className="text-lg font-semibold text-white">2</span>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <span className="text-xs">서보문</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-full item-center justify-around">
                                                    <div className="flex flex-col">
                                                        <div className="flex items-center justify-center">
                                                            <span className="text-xs text-gray-400">
                                                                플래버 오브 더 매치는 가장 매너가 좋고
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center justify-center">
                                                            <span className="text-xs text-gray-400">
                                                                긍정적인 분위기를 만들어 준 플래버예요
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full p-2">
                                        <div className="flex flex-col">
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="orange"
                                                    className="w-5 h-5">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </svg>
                                                <span className="text-xs">플래버 오브 더 매치에 대해 알아보세요</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex">
                                            <span className="text-base font-semibold">매치 데이터</span>
                                        </div>
                                        <div className="flex items-center object-center gap-8">
                                            <div className="flex w-full h-20 bg-gray-200 rounded-lg">
                                                <div className="flex w-full flex-col items-center justify-center">
                                                    <span className="text-xs text-gray-400">전체</span>
                                                    <span className="text-xs text-gray-400">아마추어3</span>
                                                </div>
                                            </div>
                                            <div className="flex w-full h-20 rounded-lg">
                                                <div className="flex w-full flex-col items-center object-center justify-center gap-2">
                                                    <div className="flex h-10 w-8 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_blue_back.svg)]">
                                                        <span className="text-xs font-semibold text-white">오라</span>
                                                    </div>
                                                    <div className="flex items-center justify-center border">
                                                        <span className="text-xs">아마추어2</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-full h-20 rounded-lg">
                                                <div className="flex w-full flex-col items-center object-center justify-center gap-2">
                                                    <div className="flex h-10 w-8 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_red_back.svg)]">
                                                        <span className="text-xs font-semibold text-white">오라</span>
                                                    </div>
                                                    <div className="flex items-center justify-center border">
                                                        <span className="text-xs">아마추어2</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex w-full h-20 rounded-lg">
                                                <div className="flex w-full flex-col items-center object-center justify-center gap-2">
                                                    <div className="flex h-10 w-8 bg-cover items-center justify-center bg-[url(https://d31wz4d3hgve8q.cloudfront.net/static/img/bibs_yellow_back.svg)]">
                                                        <span className="text-xs font-semibold text-white">오라</span>
                                                    </div>
                                                    <div className="flex items-center justify-center border">
                                                        <span className="text-xs">아마추어2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center object-center">
                                            <span className="text-xs font-semibold">레벨 분포도</span>
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
                                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-nowrap w-full h-28 justify-between gap-3">
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-0"></div>
                                                    </div>
                                                    <span className="text-xs">0%</span>
                                                    <span className="text-xs text-gray-400">루키</span>
                                                </div>
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-1/5"></div>
                                                    </div>
                                                    <span className="text-xs">20%</span>
                                                    <span className="text-xs text-gray-400">스타터</span>
                                                </div>
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-2/5"></div>
                                                    </div>
                                                    <span className="text-xs">40%</span>
                                                    <span className="text-xs text-gray-400">비기너</span>
                                                </div>
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-full"></div>
                                                    </div>
                                                    <span className="text-xs">100%</span>
                                                    <span className="text-xs text-gray-400">아마추어</span>
                                                </div>
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-1/5"></div>
                                                    </div>
                                                    <span className="text-xs">20%</span>
                                                    <span className="text-xs text-gray-400">세미프로</span>
                                                </div>
                                                <div className="flex flex-col w-full h-full justify-end items-center">
                                                    <div className="flex flex-col w-full border bg-gray-100 h-16 object-bottom justify-end">
                                                        <div className="w-full bg-orange-500 h-1/5"></div>
                                                    </div>
                                                    <span className="text-xs">20%</span>
                                                    <span className="text-xs text-gray-400">프로</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="orange"
                                                    className="w-5 h-5">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </svg>
                                                <span className="text-xs">팀 레벨이 맞지 않으면 친구끼리 와도 다른 팀이 될 수 있어요</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-1">
                                                <span className="text-base font-semibold">플레이 스타일</span>
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
                                                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-2">
                                                    <img
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_graph_bar_blue.svg"
                                                        alt="..."
                                                    />
                                                    <span className="text-xs">매치 평균</span>
                                                    <img
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_graph_bar_yellow.svg"
                                                        alt="..."
                                                    />
                                                    <span className="text-xs">전체 평균</span>
                                                </div>
                                                <div className="flex"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <img
                                                className="w-2/3"
                                                src="http://psmever.iptime.org:8062/assets/temp/detail-chart.png"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex w-full justify-start">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        className="h-4 w-4"
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_pom.svg"
                                                        alt="..."
                                                    />
                                                    <span className="text-xs">POM이 15명 있어요</span>
                                                </div>
                                            </div>
                                            <div className="flex w-full justify-start pl-6">
                                                <span className="text-xs text-gray-400">
                                                    POM은 서로 존중하고 격려하며 함게 즐길 수 있도록 매치에 긍정적인 에너지를 불어넣어 주는
                                                    플래버예요
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex">
                                            <span className="text-base font-semibold">매치 포인트</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_level.svg" alt="..." />
                                                <span className="text-sm text-gray-600">모든 레벨</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_gender.svg" alt="..." />
                                                <span>남녀 모두</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg" alt="..." />
                                                <span className="text-sm text-gray-600">6vs6 3파전</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_max_player_cnt.svg"
                                                    alt="..."
                                                />
                                                <span className="text-sm text-gray-600">10~18명</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                                <span className="text-sm text-gray-600">풋살화/운동화</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border"></div>
                                    <div className="flex flex-col w-full p-2 space-y-4">
                                        <div className="flex flex-col">
                                            <div className="flex gap-2">
                                                <img
                                                    className="h-6 w-6"
                                                    src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_woman.svg"
                                                    alt="..."
                                                />
                                                <span className="text-sm">아직 여자 플래버는 0명이에요</span>
                                            </div>
                                            <div className="flex pl-8">
                                                <span className="text-xs text-gray-500">
                                                    서로 배려하며, 함께 즐겨요. 내 힘이 누군가에게 큰 아픔이 될 수 있습니다. 지나친 몸싸움과
                                                    강한 슛을 조심해 주세요.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-nowrap items-center gap-2">
                                            <img
                                                className="h-6 w-6"
                                                src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_manager.svg"
                                                alt="..."
                                            />
                                            <span className="text-sm">강만호 매니저가 진행해요</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex">
                                            <span className="text-base font-semibold">경기장 정보</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_stadium.svg" alt="..." />
                                                <span className="text-sm text-gray-600">40x20m</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shower.svg" alt="..." />
                                                <span className="text-sm text-gray-300 line-through">샤워실</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_park.svg" alt="..." />
                                                <span className="text-sm text-gray-600">유료주차</span>
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2">
                                                <img src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_info_shoes.svg" alt="..." />
                                                <span className="text-sm text-gray-600">풋살화대여</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full border"></div>
                                    <div className="flex flex-col w-full p-2 space-y-4">
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">구장 특이사항</span>
                                            </div>
                                            <div className="flex max-w-full">
                                                <span className="w-full text-sm text-gray-500 font-sans text-left whitespace-pre-line">
                                                    {`
                                                        ■풋살장 가는 길: 엘리베이터를 이용하여 8층 풋살장으로 이동 (주말 오전 9시 매치 입장 시 후문[정문에서 코스트코 방향으로 이동]을 통해 8시 40분 부터 출입 가능)

                                                        ■주차: 매치 신청 시 선착순 3대 2시간 무료 (롯데마트 8층 주차장은 사용 불가)
                                                        -주차 미등록자는 더에프 사무실 직원에게 문의 /010-6587-8487)
                                                        -주차 등록은 매치 30분 이내 변경 및 신청 불가(이후 10분당 500원)
                                                        -21시 이후 입차 시 주차비용 발생
                                                        -연타임 주차 신청 가능 (출차 시 부스에 이야기하면 연타임 처리)
                                                        (* 종종 주차누락이 있어 무료 주차 사전등록을 완료했음에도 1층 주차 차단기에서 통과가 안된다면, 사전 주차등록한 차량의 번호를 주차부스 담당자에게 소통해주세요.)

                                                        ■풋살화: 대여 가능(3,000원, Size : 250~285) 구장 입구에 있는 8층 더에프 사무실에서 대여 (사이즈별 재고 여부는 구장 측으로 문의 주세요.)

                                                        ■워밍업존: A구장 정면에 워밍업존 무료 이용 가능 (패스 리바운더, 사이클, 벤치프레스, 스텝 레더 등)

                                                        ■흡연: A구장 옆에 흡연장 이용 (흡연 구역 외 마트내 흡연 적발시 퇴장 조치 및 과태료 부과)

                                                        ■화장실: 7층 화장실 이용

                                                        ■무단 출입 금지: 레슨용 시설 더에프랩(실내)와 스킬피치 앞에 무단 출입금지 안내문이 비치되어 있습니다.

                                                        ■기타: 긴급 시 사용 가능한 자동 제세동기가 8F 더에프 필드 사무실 옆 벽면에 설치돼 있습니다.

                                                    `}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex">
                                            <span className="text-base font-semibold">매치 진행 방식</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full p-2 space-y-4">
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">매치 규칙</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">모든 파울은 사이드라인에서 킥인</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            골키퍼에게 백패스 가능. 손으로는 잡으면 안 돼요
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">사람을 향한 태클 금지</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">진행 방식</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">풋살화와 개인 음료만 준비하세요</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">매니저가 경기 진행을 도와드려요</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            골키퍼와 휴식을 공평하게 돌아가면서 해요
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">레벨 데이터를 기준으로 팀을 나눠요</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            친구끼리 와도 팀 실력이 맞지 않으면 다른 팀이 될 수 있어요
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">알아두면 좋아요</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">서로 존중하고 격려하며 함께 즐겨요</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            오라에서는 하루 평균 250매치가 진행되고 있어요
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            매일 4,500여 명이 팀 없이도 풋살을 즐기고 있어요
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full p-2 bg-white">
                                    <div className="flex flex-col w-full space-y-5 p-2">
                                        <div className="flex">
                                            <span className="text-base font-semibold">환불 정책</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full p-2 space-y-4">
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">신청 취소 시 환불 기준</span>
                                            </div>
                                            <div className="flex w-full">
                                                <table className="w-full border-collapse border border-slate-500">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">
                                                                매치 2일 전
                                                            </td>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">무료 취소</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">
                                                                매치 1일 전
                                                            </td>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">80% 환급</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">
                                                                당일 ~ 매치 시작 90분 전까지
                                                            </td>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">20% 환급</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">
                                                                매치 시작 90분 이내
                                                            </td>
                                                            <td className="text-sm text-gray-500 border border-gray-400 p-1">환불 불가</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">그 외 취소 기준</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            결제 후 30분 이내에는 하루 1회에 한해 무료 취소가 가능합니다. (단, 매치 시작
                                                            90분 이내일 경우 불가)
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            쿠폰 신청자는 매치 시작 90분 전까지 취소 시 쿠폰이 반환됩니다.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            결제 시 실 결제금액(쿠폰 제외)을 기준으로 위 규정에 따라 환급됩니다.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            현장에서 매치가 취소되는 경우 참가비는 진행되지 않은 시간만큼 다음날 오전
                                                            환급됩니다.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            매치 시작 90분 전까지 최소 인원이 모이지 않을 시 카카오톡 혹은 LMS으로 안내되며,
                                                            자동 전액 환불됩니다. (단, 공지 전 직접 취소하시는 경우 상단 일반 환불 규정대로
                                                            처리되니 유의하시길 바랍니다)
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">
                                                    다음의 경우는 환불이 불가합니다.
                                                </span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            구장, 날짜, 시간 등을 실수로 잘못 선택한 경우
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            부상, 취업 등 개인 사정으로 신청된 매치에 참여하지 못하는 경우
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            단체 혹은 지인과의 참가로 매치 취소 혹은 변경을 원하는 경우
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            황사/미세먼지로 인해 취소 혹은 변경을 요청하는 경우
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            단순 변심으로 취소 혹은 변경을 요청하는 경우
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">유의사항</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            무단 불참하거나 매치 시작 90분 이내에 취소하면 패널티를 받을 수 있습니다.
                                                            (참여가 어려울 경우, 환불이 불가능하더라도 원활한 매치 진행을 위해 나의 플랩에서
                                                            미리 취소해주세요.)
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">변경 정책</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            변경은 취소와 동일한 환불 규정으로 적용됩니다.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            변경은 상단 환불 정책 기준 100% 환불일 경우에만 가능하며, 규정 외 요청은 적용이
                                                            불가합니다.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">우천 및 폭설 정책</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <span className="w-full text-sm text-gray-500 font-sans text-left whitespace-pre-line">
                                                    {`
                                                            기상청 날씨누리 예보에 따라 진행 여부 및 환불 가능 여부를 공지해드립니다.
                                                            - 공지 시점
                                                            오전(12시 이전) 매치 : 하루 전 22시 기준, 매치 진행 시간의 강수량 예보가 1mm 이상 시
                                                            오후(12시 이후) 매치 : 매치 시작 4시간 전 기준, 매치 진행 시간의 강수량 예보가 1mm 이상 시
                                                            - 공지 방법 : 카카오톡 또는 문자(본인 인증된 연락처)
                                                            ‘강수 안내 알림톡’을 받고, 매치 시작 90분 전까지 취소하면 전액 환불됩니다.
                                                            갑작스러운 기상 악화로 1mm 이상 강수 예보가 발생하였으나 매치 3시간 전까지 알림톡이 발송되지 못한 경우, 아래와 같이 처리됩니다.
                                                            매치 시작 1시간 30분 ~ 3시간 전까지 홈페이지 우측 하단 채널톡으로 문의 시 확인 후 강수 안내 알림톡 발송 또는 전액 환불 처리
                                                            매치 시작까지 1시간 30분 미만 남은 경우 매치 확정 후 현장으로 출발한 참가자가 있을 수 있어 현장 방문 후 매니저에게 취소 의사 전달 시 전액 환불 처리 가능(익일 오전 일괄 환급)
                                                            알림톡 발송 없이 직접 취소하시는 경우 상단의 일반 환불 규정대로 처리되니 유의하시길 바랍니다.
                                                            별도 공지가 없을 시 매치는 정상 진행됩니다.
                                                            다수의 인원이 취소하거나, 구장 상태가 좋지 않아 진행이 어렵다면 매치 시작 90분 이내라도 매치를 취소합니다.
                                                            현장에서 매치가 취소되거나 중단되면 진행하지 못한 시간만큼 캐시로 환불됩니다.

                                                    `}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <span className="text-sm text-gray-500 font-semibold">소셜매치 취소 방법</span>
                                            </div>
                                            <div className="flex w-full px-6">
                                                <ul className="list-disc">
                                                    <li>
                                                        <span className="text-sm text-gray-500">
                                                            마이페이지 → 신청 내역 → 소셜 매치 탭 클릭 → 취소를 원하는 매치의 신청내역 클릭
                                                            후 취소
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-sm text-gray-500">신청 내역 바로 가기</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/3">
                                <div className="flex flex-col h-10 sticky top-0 w-full bg-white">
                                    <div className="flex flex-col w-full p-2 bg-white">
                                        <div className="flex flex-col w-full space-y-5 p-2">
                                            <div className="flex">
                                                <span className="text-sm font-semibold">12월 5일 화요일 15:00</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-lg">서울 영등포 더에프 필드 B구장</span>
                                            </div>
                                            <div className="flex flex-nowrap gap-2">
                                                <span className="text-sm text-gray-500">서울특별시 영등포구 선유로 138</span>
                                                <span className="text-sm text-gray-500 underline">주소복사</span>
                                                <span className="text-sm text-gray-500 underline">지도보기</span>
                                            </div>
                                            <div className="flex flex-nowrap gap-2">
                                                <div className="flex flex-nowrap items-center justify-center gap-2">
                                                    <img
                                                        className="h-4 w-4"
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_viewer.svg"
                                                        alt="..."
                                                    />
                                                    <span className="text-sm text-gray-500">216</span>
                                                </div>
                                                <div className="flex flex-nowrap items-center justify-center gap-2">
                                                    <img
                                                        className="h-4 w-4"
                                                        src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_bookmark_filled.svg"
                                                        alt="..."
                                                    />
                                                    <span className="text-sm text-gray-500">2</span>
                                                </div>
                                            </div>
                                            <div className="border"></div>
                                            <div className="flex flex-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-semibold">10,000원</span>
                                                    <span className="text-xs text-gray-500"> / 2시간</span>
                                                </div>
                                            </div>
                                            <div className="border"></div>
                                            <div className="flex flex-nowrap">
                                                <div className="flex flex-nowrap w-full items-center justify-between gap-2">
                                                    <div className="flex flex-col w-1/2">
                                                        <div className="flex flex-nowrap">
                                                            <span className="text-xs text-blue-500 underline">다음 일정을 미리 예약</span>
                                                            <span className="text-xs">하세요</span>
                                                        </div>
                                                        <div className="flex">
                                                            <span className="text-xs text-gray-500">2일 전까지 무료 취소</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-1/2">
                                                        <OraButton
                                                            ButtonName={`매치 신청`}
                                                            ButtonColor={`blue`}
                                                            HandleClick={() => console.debug('click')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contents End */}
                    </div>
                </section>
                <section className="flex w-full justify-center h-5"></section>
            </main>

            <Footer />
        </div>
    );
};

export default MatchDetailPage;
