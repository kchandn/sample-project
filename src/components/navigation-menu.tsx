import { useState } from "react";

interface Props {
  listHeading: string;
  listItem: string[];
}

function NavigationMenu(props: Props) {
  const handleClick = (event: MouseEvent) => console.log(event);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h4>{props.listHeading}</h4>
      {props.listItem.length === 0 && (
        <p>No other location except Bangalore in India</p>
      )}
      <ul className="list-group">
        {props.listItem.map((item, index) => (
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
