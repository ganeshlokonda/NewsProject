function News(props){
    return(
        <div className="news">
                <div className="picture">
                    {
                        props.url===null?<img src={"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"} alt="data" className="news_image"></img>:
                        <img src={props.url} alt="data" className="news_image"></img>
                    }
                    
                </div>
                <h2>{props.title?.substring(0,15)}</h2>
                <p>{props.desc?.substring(0,20).concat("....")}</p>
                <a href={props.tot} target="_blank" rel="noopener noreferrer">Read More</a>
                <div className="details">
                    <p>{props.author?.substring(0,20).concat("...")}</p>
                    
                </div>
                
        </div>
    );
}
export default News;