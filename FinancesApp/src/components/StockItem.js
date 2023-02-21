function StockItem(props) {

  const price = props.price.toFixed(1)
  const change = props.change.toFixed(1)
  return (
    <div className="stock-item">
      <p>{props.name}</p>
      <p>${price}</p>
      <p>{change}%</p>
    </div>
  );
}

export default StockItem;
