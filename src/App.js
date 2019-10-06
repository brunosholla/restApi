import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }

    }

    componentDidMount() {
        fetch('http://localhost:8080/hi')
            .then(res => res.json())
            .then((data) => {
                this.setState({user: data})
            })
            .catch(console.log)
    }

    render() {
       const {user}=this.state

        return user!==null?(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{`${user.firstname} ${user.lastname}`}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <p className="card-text">{user.address}</p>
                </div>
            </div>
        ):(<div> No data</div>)
    }
}

export default App;