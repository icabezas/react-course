import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state = { displayBio: false };

    toggleBio = () => {
        //IMPORTANTE: NEVER EVER DIRECTLY MODIFY STATE VALUE
        this.setState({ displayBio: !this.state.displayBio });
    }
    
    render()  {

        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Irene</p>
                <p>I'm learning React.js! :D</p>
                {

                    this.state.displayBio ? (
                        <div>
                            <p>Vivo en Olesa de Montserrat</p>
                            <p>Mi lenguaje favorito es Java</p>
                        <button onClick={this.toggleBio}>No me cuentes mas</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleBio}>Cuentame mas</button>
                        </div>
                    )

                }

                <hr />
                <Projects />
            </div>
        );
    }
}

export default App;