import React from 'react'
import ReactTable from "react-table"
import "react-table/react-table.css"
import { formatReal } from "../utils/utils"

export default props => {
    return (
        <ReactTable
            data={props.list}
            columns={[
                {
                    Cell: row => {
                        return row.original.images.map(i => (<img height={34} src={i} />))
                    }
                },
                {
                    Cell: row => <div> <label className="productName">{row.original.name}</label> <br /><label className="productDescription">{row.original.description}</label></div>
                },
                {
                    Cell: row => <div> <label className="productPriceBefore">{formatReal(row.original.priceBefore)}</label>
                      &nbsp;<label>  por {formatReal(row.original.price)}</label></div>
                }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    )
}