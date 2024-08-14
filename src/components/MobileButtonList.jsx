import "../styles/MobileButtonList.css"

function MobileButtonList ({onCategoryChange, activeCategory}) {
    return (
        <div className="planet-menu">
            <ul>
                <li
                className=""
                >overview</li>
                <li>structure</li>
                <li>surface</li>
            </ul>
        </div>
    )
}

export default MobileButtonList