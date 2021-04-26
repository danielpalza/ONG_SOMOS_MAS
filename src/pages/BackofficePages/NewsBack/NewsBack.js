import React from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'reactstrap';

//@route /backoffice/news

const initalState = [
  {
    id: 1,
    title: 'Title 1',
    image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    createdAt: 'CreationDate',
  },
  {
    id: 2,
    title: 'Title 2',
    image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    createdAt: 'CreationDate',
  },
  {
    id: 3,
    title: 'Title 3',
    image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    createdAt: 'CreationDate',
  },
  {
    id: 4,
    title: 'Title 4',
    image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png',
    createdAt: 'CreationDate',
  },
];

class NewsBack extends React.Component {
  state = {
    id: '',
    title: '',
    image: '',
    createdAt: '',
    data: initalState,
  };
  // function to delete new from server
  deleteNew = newId => {
    axios
      .delete(`news/${newId}`)
      .then(res => {
        let newData = [...this.state.data];
        newData.splice(newId, 1);
        this.setState({
          id: newData.length + 1,
          title: '',
          image: '',
          createdAt: '',
          data: newData,
        });
      })
      .catch(err => console.log(err));
  };
  // function to import news from the server
  getNews() {
    axios
      .get('news/')
      .then(res => {
        let newData = res.data;
        this.setState({
          id: newData[newData.length - 1].id + 1,
          data: newData,
        });
      })
      .catch(err => console.log("Couldn't fetch data. Error: " + err));
  }

  handleEdit = urlId => {
    this.props.history.push(this.props.location.pathname + `/${urlId}`);
  };

  render() {
    return (
      <div>
        <Container className="text-left">
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Created at</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(element => (
                <tr>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td>{element.image}</td>
                  <td>{element.createdAt}</td>
                  <td>
                    <Button
                      onClick={() => this.handleEdit(element.id)}
                      color="primary"
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={() => this.deleteNew(element.id)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default NewsBack;
