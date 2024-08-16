import PropTypes from "prop-types";
import "../styles/MobileButtonList.css";

export default function ButtonList({
    onCategoryChange,
    activeCategory,
    planetIndex,
}) {
    const categories = [
        { label: "overview", dataKey: "overview" },
        { label: "structure", dataKey: "structure" },
        { label: "surface", dataKey: "geology" },
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
                {categories.map(({ label, dataKey }) => (
                    <li
                        key={label}
                        onClick={() => onCategoryChange(dataKey)}
                       
                    >
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
