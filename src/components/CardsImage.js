const CardsImage = ({ source, newStyle, name  }) => {
  return  <img src={source} className={newStyle} alt={name} />
};

export default CardsImage;
