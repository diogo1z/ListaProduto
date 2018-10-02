import React, { Component } from 'react'
import Grid from '../template/grid'


export default class PageHeader extends Component{
    constructor(props) {
        super(props)        
        this.state = { search: props.search, name: props.name }
        this.handleChange = this.handleChange.bind(this)        
    }

    handleChange(e) {
        this.setState({ search: e.target.value })
        if (e.target.value.length > 3){
            this.props.handleSearch(e.target.value)
        }
    }

    render(){
        return (
            <div>
                <header className='header'>
                    <Grid cols='12 7 8'>
                        <h2>{this.state.name}</h2>
                    </Grid>
                    <Grid cols='12 5 4'>
                        <input id='search' className='form-control inputSearchHeader'
                            placeholder='Search'
                            onChange={this.handleChange}                            
                            value={this.state.search}></input>
                    </Grid>
                </header>
                <div role='form' className='listForm'>
                    <Grid cols='12 12 12' classname="subTitle">
                        <label className="subTitleText">{this.state.search == "" || this.state.search == undefined ? "Lista de produtos" : this.state.search }  </label>
                    </Grid>
                </div>    
            </div >
        )        
    }
}