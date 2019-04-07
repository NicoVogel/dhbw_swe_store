import React, { Component } from 'react';
import './Table.scss';
import { SERVER_ADDRESS, REST_LINKS, headerStrings } from '../../templates/Resources';
import RedirectDetail from '../../atoms/RedirectDetail/RedirectDetail';

const axios = require('axios');

// TODO
// eslint-disable-next-line react/prefer-stateless-function
function updateRow(row) {
   axios.put(row._links.self.href, row ,{headers: {'Content-Type': 'application/json'}})
      .then(results => console.log(results))
      .catch(error => console.log(error));
}

function postRow(row, category) {
  axios.post(`${SERVER_ADDRESS}${REST_LINKS.get(category)}`, row ,{headers: {'Content-Type': 'application/json'}})
      .then(results => {
        console.log(results);
      })
      .catch(error => console.log(error));
}

function deleteRow (rowID, category) {
  axios.delete(`${SERVER_ADDRESS}${REST_LINKS.get(category)}/${rowID}`)
      .then(results => {
        console.log(results);
      })
      .catch(error => console.log(error));
}

class Table extends Component {

  constructor(props) {
    super(props);
    const { defaultTableHeaders, category } = this.props;

    let newEntry = {};
    defaultTableHeaders.forEach((headerElem) => {
      newEntry[headerElem] = '';
    });

    // activeRow: detailed view + delete button shows up
    // rowInEdit: user enters edit mode, text will be italic & change color
    this.state = {
      defaultTableHeaders,
      category,
      tableData: [],
      isLoaded: false,
      errorMsg: '',
      rowInEdit: -1,
      newEntry,
      activeRow: -1,
      toBeDeleted: -2,
    }
  }

  componentDidMount() {
    this.getTableData();
    // this is a workaround as getTableData is not called after postRow *async bullshit* :)
    // this.interval = setInterval(() => this.getTableData(), 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  getTableData() {
    const { category } = this.state;
    console.log(`refresh data for ${category}`);
    axios.get(`${SERVER_ADDRESS}${REST_LINKS.get(category)}`)
      .then((results) => {
        if (results.status === 200) {
          this.setState({
            ...this.state,
            tableData: results.data._embedded[category],
            isLoaded: true,
          });
        }
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMsg: `${error}`,
        });
      });
  }

  // ----------------------------------------------------
  /* HANDLER */

  onChangeAddElementHandler = (event) => {

    this.setState({
      ...this.state,
      newEntry:{
        ...this.state.newEntry,
        [event.target.id]:event.target.value,
      }
    })
  }

  onClickAddRowHandler = (event) => {
    const missingEntriesCount = Object.keys(this.state.newEntry).filter(key => this.state.newEntry[key].length === 0).length;
    
    if(missingEntriesCount === 0) {
      postRow(this.state.newEntry, this.state.category);
      let newEntry = {};
      this.props.defaultTableHeaders.forEach((headerElem) => {
        newEntry[headerElem] = '';
      });

      this.setState({
        ...this.state,
        newEntry,
      })
    } 
  }

  changeHandler = (event) => {
    // TODO
  }

  onFocusChangeElementHandler = (event) => {
    const rowIndex = event.target.id.split('_')[0];
    this.setState({
      ...this.state,
      rowInEdit: parseInt(rowIndex),
      activeRow: -1,
      toBeDeleted: -2,
    });
  }

  onBlurChangeElementHandler = event => {
  
   const rowLine = parseInt(event.target.id.split('_')[0]);
   const columnKey = event.target.id.split('_')[1];
   
   const newValue = event.target.value;
    
    this.setState(state => {
      // create new table where the change is added
     const tableData = state.tableData.map((row, rowIndex) => {
       if(rowIndex===rowLine) {
         // change the value at the right spot
         if (row[columnKey] !== newValue) {
           row[columnKey] = newValue;      
           updateRow(row);
          }
        } 
      return row;
     });
     // only touch tableData, the rest remains original
     return {
       ...this.state,
       tableData,
       rowInEdit: -1,
       activeRow: -1,
       toBeDeleted: -2,
     }
   });
  }

  onClickDeleteRowHandler = (event) => {
    const rowID = event.target.id.split('_')[0];
    // const rowIndex = event.target.id.split('_')[1];
    const { activeRow, toBeDeleted, category } = this.state;

    // this prevents the user from deleting on first click by saving the step inbetween
    if (activeRow !== toBeDeleted) {
      this.setState({
        ...this.state,
        toBeDeleted: activeRow,
      });
    } else {

      deleteRow(rowID, category);
      this.setState({
        ...this.state,
        activeRow: -1,
        toBeDeleted: -2,
      })
    }
  }

  onClickMakeActive = (event) => {
    // if the input field is clicked instead of td, the id field is different
    // category will be included and need to be splitted
    const rowIndex = event.target.id.split('_')[0];
    this.setState({
      ...this.state,
      activeRow: parseInt(rowIndex),
      toBeDeleted: -2,
    })
  }

  resetActive = () => {
    this.setState({
      ...this.state,
      activeRow: -1,
      rowInEdit: -1,
      toBeDeleted: -2,
    })
  }

  onDoNothing = (event) => {
    // override parents onclick method
    event.stopPropagation();
  }
  /** */

  render() {

    const {
      isLoaded, errorMsg, activeRow, rowInEdit, toBeDeleted, category
    } = this.state;
    let header;

    if(this.state.tableData.length !== 0){
     
      const headerList = Object.keys(this.state.tableData[0]).filter(elem => elem !== '_links');
      header = headerList.map((columnTitle, index) => (
        <th key={`header-${index}`}>{headerStrings.get(columnTitle)}</th>
      ));
    }
    return (
      <div className="table-container">
        {isLoaded
          ? (
          <table>
            {this.state.tableData.length === 0 ? null : (
              <thead>
                <tr key="header-row">
                  <th className="hiddencolumn" key="header-hidden" />
                  {header}
                </tr>
              </thead>
            )
            }

            <tbody>
              {
                this.state.tableData.map((dataObject, rowIndex) => {
                  const selfLinkURL = dataObject._links.self.href;
                  let elementID = selfLinkURL.split('/');
                  elementID = elementID[elementID.length-1];

                  return (
                    <tr key={`element-${elementID}`} id={`row-${rowIndex}`} className={ rowIndex !== toBeDeleted ? '' :  'to-be-deleted' }>
                      <td className="hiddencolumn" key={`remove-${elementID}-hidden`}>
                      { activeRow !== rowIndex ? null : (
                          <button 
                          className="button button-remove"
                          type="submit" key={`remove-${elementID}-button`}
                          id={`${elementID}_${rowIndex}`}
                          onClick={this.onClickDeleteRowHandler}>
                            X
                          </button>
                        )
                      }
                        
                      </td>
                      {
                        Object.keys(dataObject).filter(key => key !== '_links').map((key, columnIndex) => (
                          <td 
                          key={`element-${elementID}-${key}`} 
                          id={`${rowIndex}`} 
                          onClick={this.onClickMakeActive}
                          >

                            <input 
                            className={`input-field ${rowInEdit === rowIndex ? 'in-edit': ''}`}
                            type="text" 
                            key={`element-${elementID}-${key}-input`} 
                            defaultValue={dataObject[key]} 
                            id={`${rowIndex}_${key}`}
                            onChange={this.changeHandler}
                            onBlur={this.onBlurChangeElementHandler} 
                            onClick={this.onDoNothing}
                            onFocus={this.onFocusChangeElementHandler} />
                            
                          { /* only apply the redirect arrow for the first column of products and if the row is active  */
                            (columnIndex === 0 && category === 'product' && rowIndex === activeRow) ? 
                            <RedirectDetail id={elementID} />
                            : null
                          }
                          </td>
                        ))
                      }
                    </tr>
                  );
                })
              }
              <tr key="add-row">
                <td className="hiddencolumn" key="add-hidden">
                  <button className="button button-add" type="submit" key="add-button" onClick={this.onClickAddRowHandler} >+</button>
                </td>
                {this.state.defaultTableHeaders.map((item, index) => 
                  <td key={`add-${index}`}>
                    <input 
                      className="input-field" 
                      type="text" 
                      key={`add-${index}-input`} 
                      id={`${item}`}
                      placeholder={headerStrings.get(item)}
                      value={this.state.newEntry[item]}
                      onChange={this.onChangeAddElementHandler}
                      onFocus={this.resetActive}
                      />
                  </td>)}
              </tr>
            </tbody>
          </table>
          )
          : [
            errorMsg.length === 0 ? <h1 key="temp-loading">LOADING</h1> : <h1 key="temp-error">{errorMsg}</h1>,
          ]
        }
        
        
      </div>
    );
  }
}

export default Table;
