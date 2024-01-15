import lodash from 'lodash';
import ElementStyles from '@Style/ElementStyles';

const { Wrapper, SelectLabel, Select } = ElementStyles.OraSelectStyle;

const OraSelect = ({
    Label,
    Value,
    Options,
    HandleOnChange,
}: {
    Label?: string;
    Value: string;
    Options: Array<{ text: string; value: string }>;
    HandleOnChange?: ({ value, text }: { value: string; text: string }) => void;
}) => {
    return (
        <Wrapper>
            {Label && <SelectLabel>{Label}</SelectLabel>}
            <Select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    HandleOnChange &&
                        HandleOnChange({
                            value: e.target.value,
                            text: e.target.selectedOptions[0].text,
                        });
                }}>
                <option value={Value ?? Value}>선택</option>
                {lodash.map(Options, (element, index) => {
                    return (
                        <option key={`ora-select-option-item-${index}`} value={element.value}>
                            {element.text}
                        </option>
                    );
                })}
            </Select>
        </Wrapper>
    );
};

export default OraSelect;
