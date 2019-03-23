import React, { Component } from 'react';
import './Table.scss';

class Table extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        { this.props.tableHeaders.map((object) => <th>{ object.text}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.tableData.map( (dataObject) => 
                            <tr>
                                {
                                   Object.keys(dataObject).map( key => <td>{dataObject[key]}</td> )
                                }
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Table;