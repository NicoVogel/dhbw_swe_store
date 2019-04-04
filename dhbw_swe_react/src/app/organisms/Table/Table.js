/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import './Table.scss';
import headerStrings from '../../templates/Resources';

// TODO
// eslint-disable-next-line react/prefer-stateless-function
class Table extends Component {

  constructor(props) {
    super(props);
    const { defaultTableHeaders, tableData } = this.props;

    this.state = {
      defaultTableHeaders,
      tableData,
    }
  }

  changeHandler = event => {
    console.log(event.target.value);
  }

  render() {

    const headerList = Object.keys(this.state.tableData[0]);
    const header = headerList.filter(elem => elem !== '_links').map((columnTitle, index) => (
      <th key={`header-${index}`}>{headerStrings.get(columnTitle)}</th>
    ));

    return (
      <div className="table-container">
        <table>
          {this.state.tableData.length === 0 ? null : (
            <thead>
              <tr key="header-row">
                <th id="hiddencolumn" key="header-hidden" />
                {header}
              </tr>
            </thead>
          )
          }

          <tbody>
            {
              this.state.tableData.map((dataObject) => {
                const elementID = `element-${dataObject._links.self.href.slice(-1)}`;

                return (
                  <tr key={elementID}>
                    <td id="hiddencolumn" key={`${elementID}-hidden`} />
                    {
                      // TODO change defaultValue to value nad set change handler
                      Object.keys(dataObject).filter(key => key !== '_links').map(key => (
                        <td key={`${elementID}-${key}`}>
                        <form>

                          <input className="input-field" type="text" key={`${elementID}-${key}-input`} value={dataObject[key]} onChange={this.changeHandler} />
                        </form>
                        </td>
                      ))
                    }
                  </tr>
                );
              })
            }
            <tr key="add-row">
              <td id="hiddencolumn" key="add-hidden">
                <button id="addbutton" type="submit" key="add-button">+</button>
              </td>
              {this.state.defaultTableHeaders.map((item, index) => <td key={`add-${index}`}><input className="input-field" type="text" key={`add-${index}-input`} placeholder={headerStrings.get(item)} /></td>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
