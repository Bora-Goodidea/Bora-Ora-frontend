import ElementStyles from '@Style/ElementStyles';
import { ColorType } from '@Type/StylesInterface';

const {
    OramButtonStyle: { DefaultButton },
} = ElementStyles;

const OraButton = ({ ButtonName, HandleClick, ButtonColor }: { ButtonName: string; HandleClick: () => void; ButtonColor?: ColorType }) => {
    return (
        <DefaultButton type="button" Color={ButtonColor} onClick={() => HandleClick()}>
            {ButtonName}
        </DefaultButton>
    );
};

export default OraButton;
