import React from "react";

function About() {
  const styles = {
    backgroundImage: "url(https://i.pinimg.com/originals/ed/b9/33/edb933cbda54641ce3a171bf48a28bde.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return (
    <div>
      <div className="jumbotron-fluid text-center text-white" style={styles}>
      <br/>
      <h1 className="my-5">About Page</h1>
      <br/>
      </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

export default About;
