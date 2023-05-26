function NavigationMenu() {
  const cityList = ["Bangalore", "Chennai", "Hyderabaad", "Mangalore"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h4>Our offices are in following location.</h4>
      {cityList.length === 0 && (
        <p>No other location except Bangalore in India</p>
      )}
      <ul className="list-group">
        {cityList.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavigationMenu;
