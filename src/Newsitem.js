import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';


export class Newsitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[],
            loading: false,
            page : 1
        }
       
        document.title =`${this.CapitalizeFirstLetter(
            this.props.category)}-NewsMonkey`;
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=22a99176c98046edb16f32aeb1d4affb`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles,
        totalResults:parsedData.totalResults,
    loading : false})
    }
    previouspage = async ()  => {
        console.log('hello');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=22a99176c98046edb16f32aeb1d4affb&page=${this.state.page - 1 }&pageSize={this.props.pagesize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState ({
            page : this.state.page - 1,
            articles : parsedData.articles,
            loading : false
        })
    }
    nextpage = async (props)  => {
        console.log('hello');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=22a99176c98046edb16f32aeb1d4affb&page=${this.state.page + 1 }&pageSize={this.props.pagesize}`;
        this.setState ({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState ({
            page : this.state.page +1,
            articles : parsedData.articles,
            loading : false
        })
    }
   CapitalizeFirstLetter =(string) => {
       return string.charAt(0).toUpperCase()+string.slice(1);
   }


    render(){
        return (

            <div className="container my-3 ">
                <h1 className="text-center">News-Monkey {this.CapitalizeFirstLetter(this.props.category)} Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                 <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <News title={element.title} description={element.description} imageurl={element.urlToImage} 
                           newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="conatiner d-flex justify-content-between">
                <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previouspage}>&laquo;  Previous</button>
                <button type="button"disabled={this.state.page >= 4} className="btn btn-dark" onClick={this.nextpage}>Next  &raquo;</button>
                </div>
            </div>
        )
    }
}


export default Newsitem