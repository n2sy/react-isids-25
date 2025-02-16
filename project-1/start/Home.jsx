import React from "react";
import Popular from "../components/Popular";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <section class="bg-light py-5">
        <div class="container text-center">
          <h2 class="display-5 fw-bold">
            Découvrez des livres pour tous les goûts
          </h2>
          <p class="lead">
            Des classiques intemporels aux derniers best-sellers, trouvez votre
            prochaine lecture ici.
          </p>
          <a href="#" class="btn btn-primary btn-lg">
            Explorer le catalogue
          </a>
        </div>
      </section>
      <section class="py-5">
        <Popular></Popular>
      </section>
      <section class="bg-dark text-white py-5">
        <Contact></Contact>
      </section>
    </>
  );
}

export default Home;
