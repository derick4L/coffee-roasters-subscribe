import "./styles.css";

function CollectionCards() {
  return (
    <>
      <div className="collection-title-container">
        <div className="collection-title">
          <p>our collection</p>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-card-image">
          <img
            //because of webpack, i have to render the image like this
            src={require("../../assets/home/desktop/image-gran-espresso.png")}
            alt="Gran Expresso"
            id="gran-expresso"
          />
        </div>
        <div className="collection-card-content">
          <h4>Gran Expresso</h4>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-card-image">
          <img
            src={require("../../assets/home/desktop/image-planalto.png")}
            alt="Planalto"
            id="planalto"
          />
        </div>
        <div className="collection-card-content">
          <h4>Planalto</h4>
          <p>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-card-image">
          <img
            src={require("../../assets/home/desktop/image-piccollo.png")}
            alt="Piccollo"
            id="piccollo"
          />
        </div>
        <div className="collection-card-content">
          <h4>Piccollo</h4>
          <p>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>
      </div>
      <div className="collection-card">
        <div className="collection-card-image">
          <img
            src={require("../../assets/home/desktop/image-danche.png")}
            alt="Danche"
            id="Danche"
          />
        </div>
        <div className="collection-card-content">
          <h4>Danche</h4>
          <p>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </div>
    </>
  );
}
export default CollectionCards;
