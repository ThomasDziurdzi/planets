import "../styles/MobileButtonList.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function MobileButtonList() {
  const {onCategoryChange, activeCategory, planetIndex} = useContext(AppContext)
  
    const categories = [
        { label: "overview", dataKey: "overview" },
        { label: "structure", dataKey: "structure" },
        { label: "surface", dataKey: "geology" },
    ];

    const borderColors = [
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
        <div className="-mobile-planet-menu">
            <ul>
                {categories.map(({ label, dataKey }) => (
                    <li
                        key={label}
                        onClick={() => onCategoryChange(dataKey)}
                        style={{
                            color: activeCategory === dataKey ? "white" : "",
                            borderBottom:
                                activeCategory === dataKey
                                    ? `4px solid ${borderColors[planetIndex]}`
                                    : "",
                        }}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        </div>
    );
}


