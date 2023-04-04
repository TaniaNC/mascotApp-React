import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [mascota, setMascota] = useState([]);

  const { id } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    RickAndMortyService.getCharactersById(id).then((data) => setMascota(data));
  }, [id]);

  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body">
            <strong className="d-inline-block mb-2 text-success">
              {mascota.species}
            </strong>
            <h3 className="mb-0 text-dark">{mascota.name}</h3>
            <div className="mb-1 text-muted">
              {new Date(mascota.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted">
              <p className="card-text black">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>

              <ul className="list-group mt-1">
                <li className="list-group-items">Ciuherfc jewdn</li>
                <li className="list-group-items">dnjuwdw</li>
                <li className="list-group-items">dsandsd </li>
                <li className="list-group-items"> jewdn</li>
                <li className="list-group-items">Cidn</li>
              </ul>

              <div className="btn-group" style={{ marginLeft: "15px" }}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <Link to={"/"} className="nav-link px-2 text-success">
                    Volver
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <img
            className="img-fluid rounded-start imgDetalle"
            height="auto"
            src={mascota.image}
            alt="img del mascota"
          />
        </div>
      </div>
    </div>
  );
};
