import PropTypes from "prop-types";
import "../styles/ButtonList.css";

export default function ButtonList({
    onCategoryChange,
    activeCategory,
    planetIndex,
}) {
    const categories = [
        { label: "overview", dataKey: "overview" },
        { label: "internal structure", dataKey: "structure" },
        { label: "surface geology", dataKey: "geology" },
    ];

    const categoryColors = [
        "#419EBB",
        "#EDA249",
        "#6f2ed6",
        "#D14C32",
        "#D83A34",
        "#CD5120",
        "#1ec2a4",
        "#2d68f0",
    ];

    return (
        <div className="planet-menu">
            <ul>
                {categories.map(({ label, dataKey }, index) => (
                    <li
                        key={label}
                        onClick={() => onCategoryChange(dataKey)}
                        style={{
                            backgroundColor:
                                activeCategory === dataKey
                                    ? `${categoryColors[planetIndex]}`
                                    : "",
                        }}
                    >
                        <span>0{index + 1} </span>
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ButtonList.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    activeCategory: PropTypes.string.isRequired,
    planetIndex: PropTypes.number.isRequired,
};
