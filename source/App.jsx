import { default as React, PropTypes } from 'react';
import {Link} from 'react-router';

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="top-nav">
                        <div className="container">
                            <div className="nav-wrapper">
                                <a className="brand-logo" href="#">Antoine's Demos</a>
                                <ul className="right hide-on-med-and-down" id="nav-mobile">
                                    <li>
                                        <Link to="/react-vr-player">VR Player Demo</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                {this.props.children}
            </div>
        );
    }

}

export default App;
