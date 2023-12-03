const OraInput = ({
    InputType,
    InputValue,
    Placeholder,
    HandleOnChange,
    InputButton,
}: {
    InputType: 'text' | 'password';
    InputValue: string;
    Placeholder: string;
    HandleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    InputButton?: React.ReactNode;
}) => {
    return (
        <>
            <input
                type={InputType}
                value={InputValue}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder={Placeholder}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => (HandleOnChange ? HandleOnChange(e) : '')}
            />
            {InputButton ?? InputButton}
        </>
    );
};

export default OraInput;
