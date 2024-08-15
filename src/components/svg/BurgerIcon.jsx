import PropTypes from "prop-types";

function BurgerIcon({
    width = "24",
    height = "17",
    fill = "#fff",
    className,
    onClick,
    alt,
}) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            onClick={onClick}
            alt={alt}
        >
            <g fill={fill} fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
        </svg>
    );
}

BurgerIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fill: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    alt: PropTypes.string,
};

export default BurgerIcon;
