import React from 'react';
import Axios from 'axios';
//import FirstPage from './FirstPage';
import SearchContent from './SearchContent';

class App extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        searchVal: "",
        searchType:"",
        year:"",
        flag: false,
        content: null
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        Axios.get("http://www.omdbapi.com/?apikey=8a9b5d6c",{
            params:{
                s: this.state.searchVal,
                type: this.state.searchType,
                y: this.state.year
            }
        })
        .then((resp) => {
            this.setState({
                content:resp.data.Search,
                flag:true
            })
        }) 
    }


    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Enter your Search</label>
                        <input type="text" onChange={this.handleChange} name="searchVal" value={this.state.searchVal} />
                    </div>
                    <div>
                        <label>Type</label>
                        <select onChange={this.handleChange} name="searhType" value={this.state.searchType}>
                            <option>movie</option>
                            <option>series</option>
                            <option>episodes</option>
                        </select>
                    </div>
                    <div>
                        <label>Year</label>
                        <input type="text" onChange={this.handleChange} name="year" value={this.state.year} />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                
                <SearchContent 
                    content={this.state.content} 
                    flag={this.state.flag} 
                />
            </>
        );
    }
}

export default App;