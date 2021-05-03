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
      <main className="page">
        <section className="clean-block about-us">
          <div className="container news-content">
            <div className="block-heading">
              <h2 className="text-info">News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="row justify-content-center">
              {this.state.data.map(element => (
                <div key={element.id} className="col-sm-6 col-lg-4">
                  <div className="card text-center clean-card">
                    <img
                      src={element.image}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <h5 className="card-title"> {element.name} </h5>
                      <Link to={`/news/${element.id}`}>
                        <button
                          style={{ background: '#9ac9fb' }}
                          className="btn"
                        >
                          Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default NewsPublic;
