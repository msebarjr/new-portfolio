const FilteredButton = (props) => {
    return (
        <button
            className={`filter-button ${props.cname}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

export default FilteredButton;
