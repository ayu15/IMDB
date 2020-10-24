import React from 'react';
import './SearchContent.css';

const SearchContent = (props) => {
    if(props.flag === true){
        var data = props.content.map((i) => {
            return(
                <div className="content-wrapper" key={i.imdbID}>
                    <div className="title">
                        {i.Title}
                    </div>
                    <div className="body-wrapper">
                        <div className="left-body">
                            <img src={i.Poster} alt={i.Title} width="300" height="180" />
                        </div>
                        <div className="right-body">
                            <div className="type">Type : {i.Type}</div>
                            <div className="year">Year : {i.Year}</div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            );
        })
    } else{ data = null;}


    return (
        <div>
            {data}
        </div>
    );
}

export default SearchContent;