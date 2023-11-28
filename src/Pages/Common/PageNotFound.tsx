import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Const from '@Const';

const pageName = `존재 하지 않은`;

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>{`${Const.Site.title} | ${pageName}`}</title>
                <meta name="description" content={`${pageName} 페이지`} />
            </Helmet>

            <>
                <>페이지가 존재 하지 않아요</>
                <>찾고 계신 페이지가 존재하지 않습니다.</>

                <div onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}>
                    <span>뒤로</span>
                </div>
            </>
        </>
    );
};

export default PageNotFound;
