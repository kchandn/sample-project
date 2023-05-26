function MainContent() {
  const name = "Chandan Kumar";
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="/src/assets/chandan.JPG"
        className="card-img-top"
        alt="Chandan"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Hello, My name is Chandan Kumar. I am a software Engineer.
        </p>
        <a href="#" className="btn btn-primary">
          Profile summary
        </a>
      </div>
    </div>
  );
}

export default MainContent;
