import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ListProduct from './listProduct'

const URL = 'https://mighty-escarpment-30014.herokuapp.com/api/produto'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {  list: [] }
        this.handleSearch = this.handleSearch.bind(this)        
        this.refresh()
    }

    refresh(textSearch = '') {
        const search = textSearch ? `&description__regex=/${textSearch}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, textSearch, list: resp.data }))
    }

    handleSearch(e) {
        this.refresh(e)
    }

    render() {
        return (
            <div>
                <PageHeader name='mmartan' handleSearch={this.handleSearch}></PageHeader>                
                <ListProduct list={this.state.list} />
            </div>
        )
    }
}