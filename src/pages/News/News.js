import React from 'react';
import { getHttpRequest } from '../../helper/axios/index';
import { Link } from 'react-router-dom';
import './news.css';

class NewsPublic extends React.Component {
  state = {
    data: [],
  };
  //function to get news from db
  componentDidMount() {
    getHttpRequest('/news')
      .then(res => {
        this.setState({
          data: res.data,
        });
      })
      .catch(err => console.log("Couldn't fetch data. Error: " + err));
  }

  render() {
    return (
      <div className="cards">
        {this.state.data.map(element => (
          <div key={element.id} className="card">
            <img src={element.image} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title"> {element.name} </h5>
              <Link to={`/novedades/${element.id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsPublic;
