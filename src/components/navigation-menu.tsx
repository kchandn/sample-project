import { useState } from "react";

function NavigationMenu() {
  const cityList = ["Bangalore", "Chennai", "Hyderabaad", "Mangalore"];
  const handleClick = (event: MouseEvent) => console.log(event);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h4>Our offices are in following location.</h4>
      {cityList.length === 0 && (
        <p>No other location except Bangalore in India</p>
      )}
      <ul className="list-group">
        {cityList.map((item, index) => (
          <li
            className={`list-group-item ${
              index === activeIndex ? "active" : ""
            }`}
            key={item}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavigationMenu;
