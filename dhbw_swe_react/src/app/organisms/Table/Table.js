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
                        { this.props.tableHeaders.map((object) => <th>{object.text}</th>)}
                    </tr>
                    </thead>
                    
                    <tbody>
                    {
                        this.props.tableData.map( (dataObject) => 
                            <tr>
                                {
                                    // TODO change defaultValue to value nad set change handler
                                    Object.keys(dataObject).map(key => <td><input className='input-field' type="text" defaultValue={dataObject[key]} /></td> )
                                }
                            </tr>
                        )
                    }
                    <tr>
                            {this.props.tableHeaders.map( (item) => <td><input className='input-field' type="text" placeholder={item.text}/></td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Table;