import { ReactNode } from 'react';
import ElementStyles from '@Style/ElementStyles';

const {
    OraModalStyle: { ModalWapper, BackGroundBlur, FixedWapper, FlexWapper, RelativeWapper, ContentWapper, Contents, ButtonWapper },
} = ElementStyles;

const OraModal = ({ Children, Buttons }: { Children: ReactNode; Buttons?: ReactNode }) => {
    return (
        <ModalWapper>
            <BackGroundBlur />

            <FixedWapper>
                <FlexWapper>
                    <RelativeWapper>
                        <ContentWapper>
                            <Contents>{Children}</Contents>
                        </ContentWapper>
                        {Buttons && <ButtonWapper>{Buttons}</ButtonWapper>}
                    </RelativeWapper>
                </FlexWapper>
            </FixedWapper>
        </ModalWapper>
    );
};

export default OraModal;
