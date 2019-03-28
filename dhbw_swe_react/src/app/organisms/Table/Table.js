import React, { Component } from 'react';
import './Table.scss';

class Table extends Component {
    render() { 
        const { tableHeaders, tableData, realTableData } = this.props;
        console.log(JSON.stringify(realTableData));
        return ( 
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th id='hiddencolumn'></th>
                        { tableHeaders.map((object) => <th>{object.text}</th>)}
                    </tr>
                    </thead>
                    
                    <tbody>
                    {
                        
                        tableData.map( (dataObject) => 
                            <tr>
                                <td id='hiddencolumn'></td>
                                {
                                    // TODO change defaultValue to value nad set change handler
                                    Object.keys(dataObject).map(key => {
                                        if(key !== '_links'){
                                            return <td><input className='input-field' type="text" defaultValue={dataObject[key]} /></td> 
                                      } return <td></td>;
                                })
                                    
                                }
                            </tr>
                        )
                    }
                    <tr>
                    <td id='hiddencolumn'> 
                    <button id='addbutton'>+</button>
                    </td>
                            {this.props.tableHeaders.map( (item) => <td><input className='input-field' type="text" placeholder={item.text}/></td>)}
                    </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Table;