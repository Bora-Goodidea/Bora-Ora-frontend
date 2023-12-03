import ElementStyles from '@Style/ElementStyles';
import { ColorType, TwMacroSizeType } from '@Type/StylesInterface';

const {
    OramButtonStyle: { DefaultButton },
} = ElementStyles;

const OraButton = ({
    ButtonName,
    HandleClick,
    ButtonColor,
    ButtonHeight,
}: {
    ButtonName: string;
    HandleClick: () => void;
    ButtonColor?: ColorType;
    ButtonHeight?: TwMacroSizeType;
}) => {
    return (
        <DefaultButton type="button" Color={ButtonColor} Height={ButtonHeight ? ButtonHeight : `sm`} onClick={() => HandleClick()}>
            {ButtonName}
        </DefaultButton>
    );
};

export default OraButton;
