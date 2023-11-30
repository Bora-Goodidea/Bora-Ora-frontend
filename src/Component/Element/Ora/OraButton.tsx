import ElementStyles from '@Style/ElementStyles';

const {
    OramButtonStyle: { DefaultButton },
} = ElementStyles;

const OraButton = ({ ButtonName, HandleClick }: { ButtonName: string; HandleClick: () => void }) => {
    return (
        <DefaultButton type="button" onClick={() => HandleClick()}>
            {ButtonName}
        </DefaultButton>
    );
};

export default OraButton;
