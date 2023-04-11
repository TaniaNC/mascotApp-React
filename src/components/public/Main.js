import React, { Component } from "react";
// import RickAndMortyService from "../../services/RickAndMorty.service";
import { Cards } from './Cards';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { mascotas: [] };
  }

  componentDidMount() {
    /// HOOK >> STATE
    // RickAndMortyService.getAllCharacters()
    //   .then((data) => this.setState({ mascotas: data.results }))
    //   .catch((eror) => console.log(error));
  }

  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">TO DO= que ande la url de user-form</h1>
              <p className="lead text-muted">
                Something short and leading about the collection
                below—itscontents, the creator, etc. Make it short and sweet,
                but not too short so folks don't simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* /// HOOK >> STATE  /// */}
        {/* <Cards mascotas={this.state.mascotas} /> */}

        <Cards />

      </main>
    );
  }
}