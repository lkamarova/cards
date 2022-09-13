const Card = (prop) => {
  return (
    <div className="card" >
      {prop.image}
      <div className="card-body">
        <h5 className="card-title">{prop.title}</h5>
        <p className="card-text">{prop.text}</p>
        {prop.children}
      </div>
    </div>
  );
};

export default Card;
