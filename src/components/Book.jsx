function Book(props) {
  return (
    <div className="div_book">
      <img src={props.imageURL} alt="Livre" />
      <h1>{props.title}</h1>
    </div>
  );
}

export default Book;
