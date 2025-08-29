import React,{useEffect , useState} from "react";
import Newsitem from "./Newsitem";
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const  Newscmp =(props)=> {
 const [articles , setarticles] = useState([])
  const [loading , setloading] = useState(true)
  const[page ,setpage] = useState(1)
  const [totalResult , setotalResult] = useState(0)

  useEffect(() => {
    document.title = `${props.category}-News Jocky`;
    componentDidMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // document.title = `${props.category}-news jocky`


 const  componentDidMount = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=543ef57aaa6946b48fe1a48d59af3c77&page=${ page-1}&pagesize=${props.pagesize}`
  let data  =  await fetch(url)
  let parseddata = await data.json()
  console.log(parseddata)
  setarticles(parseddata.articles)
  setotalResult(parseddata.totalResults)
 }

// handleprevious = async() =>{
//   console.log("previous")
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=543ef57aaa6946b48fe1a48d59af3c77&page=${ this.state.page-1}&pagesize=${props.pagesize}`
//   let data  =  await fetch(url)
//   let parseddata = await data.json()
//   console.log(parseddata)

//   this.setState({
//     page: this.state.page-1,
//      articles: parseddata.articles

//   })

// }
// handlenext = async() =>{
//   console.log("next")
//   if( this.state.page+1>Math.ceil(this.state.totalResults/props.pagesize)){

//   }
//   else{
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=543ef57aaa6946b48fe1a48d59af3c77&page=${ this.state.page-1}&pagesize=${props.pagesize}`
//   let data  =  await fetch(url)
//   let parseddata = await data.json()
//   console.log(parseddata)

//   this.setState({
//     page: this.state.page+1,
//     articles: parseddata.articles
//   })

//   }

// }
 const fetchMoreData = async () => {
  const nextPage = page + 1;
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=543ef57aaa6946b48fe1a48d59af3c77&page=${nextPage}&pagesize=${props.pagesize}`;
  
  const data = await fetch(url);
  const parsedData = await data.json();
  setarticles(articles.concat(parsedData.articles))
  setotalResult(parsedData.totalResults)
setpage( nextPage)

};



    return (
      <div className="container my-3">
        <h2 className="text-center"> News Jocky --Top Headlines from {props.category} category </h2>
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">
          { articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={ element.title?element.title:""}
                  description={ element.description ?element.description:""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
             

              
            )
            
          })}
        </div>
         </InfiniteScroll>
       
      </div>
    );
  
  }
 Newscmp. defaultProps ={
    country:"in",
    pagesize: 8,
    category:""
  }
   Newscmp. propTypes ={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  }

export default Newscmp;
