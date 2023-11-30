const OraModal = ({
    LavelName,
    Checked = false,
    HandleOnChange,
}: {
    LavelName?: string;
    Checked: boolean;
    HandleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className="flex items-center">
            <input
                checked={Checked}
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={e => HandleOnChange(e)}
            />
            {LavelName && (
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                    {LavelName}
                </label>
            )}
        </div>
    );
};

export default OraModal;
