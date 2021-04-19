import React from 'react'
import axios from 'axios'
import './news.css'


const initalState = [
    {id: 1, title: 'Title 1', image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png', createdAt: 'CreationDate'},
    {id: 2, title: 'Title 2', image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png', createdAt: 'CreationDate'},
    {id: 3, title: 'Title 3', image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png', createdAt: 'CreationDate'},
    {id: 4, title: 'Title 4', image: 'https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png', createdAt: 'CreationDate'}
];

class NewsPublic extends React.Component {
    state={
        id: '',
        title: '',
        image: '',
        data: initalState
    }
    //function to get news from db 
    getNews() {
        axios.get('news/')
        .then(res => {
          let newData = res.data;
          this.setState({
            id: newData[newData.length - 1].id + 1,
            data: newData
          })
        })
        .catch(err => console.log("Couldn't fetch data. Error: " + err))
    }

    render (){
        return (
            <div className= 'cards'>
                {this.state.data.map((element) => (
                                <div className='card'>
                                    <img src={element.image} className='card-img-top'/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{element.title}</h5>
                                        <a href='#' class='btn btn-primary'>Details</a>
                                    </div>
                                </div>
                            ))}
            </div>
        )
    }
}

export default NewsPublic;
