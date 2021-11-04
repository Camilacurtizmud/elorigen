import { Component } from 'react';
import TitleComponent from './title/title';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'El Origen'
        }
    }
    render() {
        return (
            <div>
                <TitleComponent name={this.state.name} />
            </div>
        );
    }
}

export default Catalogo;

