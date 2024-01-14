import { ElementStyles, LayoutStyles } from '@Styles';
import { AtomRootState } from '@Recoil/AppRootState';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import SystemService from '@Module/System.Service';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { colorDebug } from '@Common/Helper';
import { OraSpinner } from './Element';

const { ServiceGetBaseData, ServiceGetSystemNotice, ServiceCheckStatus } = SystemService;

const { Title, Content } = ElementStyles.Sweetalert;
const { DefalutMainContainer } = LayoutStyles.DefalutLayoutStyle;
const { Wapper, Text } = LayoutStyles.SplashComponentStyle;
/**
 * 최초 서버 상태 체크 -> 공지사항 체크 -> 데이터 조회
 */
const SplashComponent = ({ LoadingControl }: { LoadingControl: (state: boolean | 'under') => void }) => {
    const [rootState, setRootState] = useRecoilState(AtomRootState);
    // const {handleAuthCheck} = useAuth();
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        const dataCheck = async () => {
            const { status, payload } = await ServiceGetBaseData();
            if (status) {
                setRootState(prevState => ({
                    ...prevState,
                    appCheckStatus: {
                        ...prevState.appCheckStatus,
                        data: true,
                    },
                    rootData: {
                        ...prevState.rootData,
                        code: payload.code,
                    },
                }));
            } else {
                // 에러 처리 (페이지 이동해서 서버에 문제가 생겼다고 알려줘야함)
            }
        };

        if (rootState.appCheckStatus.notice) {
            dataCheck().then();
        }
    }, [rootState.appCheckStatus.notice, setRootState]);

    // useEffect(() => {
    //     const authCheck = async () => {
    //         await handleAuthCheck({ tokenCheck: true });
    //     };
    //     if (rootState.appCheckStatus.data) {
    //         authCheck().then();
    //     }
    // }, [rootState.appCheckStatus.data]);

    useEffect(() => {
        const noticeCheck = async () => {
            const { payload } = await ServiceGetSystemNotice();
            if (payload) {
                MySwal.fire({
                    title: <Title>공지 사항</Title>,
                    html: <Content>{payload.notice}</Content>,
                }).then();
            }
            setRootState(prevState => ({
                ...prevState,
                appCheckStatus: {
                    ...prevState.appCheckStatus,
                    notice: true,
                },
            }));
        };

        if (rootState.appCheckStatus.server) {
            noticeCheck().then();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rootState.appCheckStatus.server, setRootState]);

    // 모두 체크 후
    useEffect(() => {
        const endCheck = () => {
            colorDebug('success', ':: App Init End :: ');
            setRootState(prevState => ({
                ...prevState,
                appState: true,
            }));
            LoadingControl(false);
        };

        const { server, notice, data } = rootState.appCheckStatus;
        if (server && notice && data) {
            endCheck();
        }
    }, [rootState.appCheckStatus, LoadingControl, setRootState]);

    useEffect(() => {
        const startCheck = async () => {
            colorDebug('info', ':: App Init Start :: ');

            const { status } = await ServiceCheckStatus();
            if (status) {
                setRootState(prevState => ({
                    ...prevState,
                    appCheckStatus: {
                        ...prevState.appCheckStatus,
                        server: true,
                    },
                }));
            } else {
                LoadingControl(`under`);
            }
        };

        startCheck().then();
    }, [LoadingControl, setRootState]);
    return (
        <DefalutMainContainer>
            <Wapper role="status">
                <OraSpinner />
                <Text>Loading...</Text>
            </Wapper>
        </DefalutMainContainer>
    );
};

export default SplashComponent;
