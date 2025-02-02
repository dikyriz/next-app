const InputToggle = ({name, label, defaultCheck = false}) => {
    return (
        <div className="form-control w-32 my-3">
            <span className="label-text">{label}</span>
            <label className="label cursor-pointer">
                <input type="checkbox" className="toggle toggle-lg toggle-primary" name={name} defaultChecked={defaultCheck}/>
            </label>
        </div>
    );
};

export default InputToggle;