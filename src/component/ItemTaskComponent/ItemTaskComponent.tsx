import "./ItemTaskComponent.css";

const ItemTaskComponent = ({ item }: { item: string }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <label htmlFor="" className="labelTask">
        {item}
      </label>
    </div>
  );
};

export default ItemTaskComponent;
