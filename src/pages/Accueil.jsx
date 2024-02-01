import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="div_accueil">
      <h1>Prochainement en librairie!</h1>

      <div className="div_accueil_book">
        <Link to="/books/2">
          <img
            className="div_accueil_book_img"
            src="https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg"
            alt="Livre"
          />
        </Link>
        <h2>Il me reste encore un œil</h2>
      </div>

      <p>
        «Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        molestias dolorum expedita necessitatibus rem ullam vel consectetur
        sapiente porro. Magnam, aspernatur maiores debitis deleniti iure illo
        dolore libero consectetur consequuntur! »
      </p>
    </div>
  );
}

export default Accueil;
