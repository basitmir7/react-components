import "./Card1.css";

//use font awesme icons with react to make the card work

const Card = () => {
  return (
    <div class="container">
      <div class="wrapper card">
        <div class="border">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            porro.
          </p>
          <div class="icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
