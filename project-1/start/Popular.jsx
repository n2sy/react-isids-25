import React from "react";

function Popular() {
  return (
    <div class="container">
      <h3 class="text-center mb-4">Livres populaires</h3>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="Livre 1"
            />
            <div class="card-body">
              <h5 class="card-title">Titre du Livre 1</h5>
              <p class="card-text">
                Un résumé captivant pour ce livre incontournable.
              </p>
              <a href="#" class="btn btn-primary">
                Voir plus
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="Livre 2"
            />
            <div class="card-body">
              <h5 class="card-title">Titre du Livre 2</h5>
              <p class="card-text">
                Découvrez pourquoi ce livre est un best-seller.
              </p>
              <a href="#" class="btn btn-primary">
                Voir plus
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="Livre 3"
            />
            <div class="card-body">
              <h5 class="card-title">Titre du Livre 3</h5>
              <p class="card-text">
                Un récit qui restera gravé dans votre mémoire.
              </p>
              <a href="#" class="btn btn-primary">
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
