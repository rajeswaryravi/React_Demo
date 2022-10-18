import './css/ContentComponent.css';

function ContentComponent(props){
return (
    <div className="content">
       <div className="content_header">
           <h3>{props.content}</h3>
           <div className="content1"></div>
           <div className="content2"></div>
           <div className="content3"></div>
           <div className="content4"></div>
           <div className="content5"></div>
        </div>    
        <div className="list_header">
        <h3>{props.item}</h3>
            <div className="item">Item1</div>
            <div  className="item">Item2</div>
            <div  className="item">Item3</div>
            <div  className="item">Item4</div>
            <div  className="item item5">Item5</div>
        </div>
    </div>
);
}

export default ContentComponent;