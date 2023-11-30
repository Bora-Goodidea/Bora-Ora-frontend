import { Helmet } from 'react-helmet-async';
import Const from '@Const';

const pageName = `공사중`;

const UnderConstructionPage = () => {
    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <>
                <>서버 작업중....</>
                <>서버 작업중 입니다 잠시후 다시 이용해 주세요.</>

                <div onClick={() => window.location.replace(`/`)}>
                    <span>새로고침</span>
                </div>
            </>
        </>
    );
};

export default UnderConstructionPage;
