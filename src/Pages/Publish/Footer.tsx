import TemporaryData from '@Common/TemporaryData';
import lodash from 'lodash';

const Footer = () => {
    return (
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
                                        |마케팅 제안 marketing@plabfootball.com | 언론, 연구 team@plabfootball.com | 02-704-7983 주식회사
                                        마이플레이컴퍼니 | 사업자번호 650-81-00575 | 대표 강동규 | 통신판매업 신고 2020-서울마포-4411
                                        Copyright PLAB All rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
