import React, { useState } from 'react'
import '../CssFiles/Button.css'
import '../CssFiles/FirNumber.css'
import * as XLSX from 'xlsx';
const CaseNumber = ({data}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const handleSearch = (e) => {
    e.preventDefault();
    const filteredData = data.filter(item => String(item.caseNumber2) === searchQuery);
    setSearchResult(filteredData);
    setShowResults(true);
  
  };
  const handleReset = () => {
    setSearchQuery('');
    setSearchResult([]);
    setShowResults(false);
  };

  const generateExcel = () => {
    const ws = XLSX.utils.json_to_sheet(searchResult, {header: [], skipHeader: true});
    const wsout = XLSX.utils.sheet_to_json(ws, {header: 1, raw: false});
    
    const wscols = Object.keys(searchResult[0]);
    const transposedData = wscols.map((key, i) => [key, ...wsout.map(row => row[i])]);
    
    const ws_transposed = XLSX.utils.json_to_sheet(transposedData, {header: [], skipHeader: true});
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws_transposed, "Results");
  
    // Use the client's name as the file name
    const fileName = `${searchResult[0].petitioner}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }
  return (
    <>

    <div className='form_section'>
      <form className="form_container" onSubmit={handleSearch}>
        <div className='heading'>
          <h1>All Fields Marked with <span className='asteric_important'>*</span>are required</h1>
        </div>
        <div className='input_fields'>
          <label htmlFor='court'>Case Number</label>
          <input type='text'
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
          
          placeholder='Type Case Number' className='fir_number_input' />
        </div>
        <button  className="btn" type='submit' onClick={handleSearch}>Search</button>
          <button className="btn"  type='button' onClick={handleReset}>Reset</button>
           
           <div className="output">
      {showResults && searchResult.length > 0 ? searchResult.map((item, index) => (     
          
        <table  key={index}>
        <tr>
          <th>CNR</th>
          <td>{item.cnr}</td>
        </tr>
        <tr>
          <th>Year</th>
          <td>{item.year}</td>
        </tr>
        <tr>
          <th>Petitioner</th>
          <td>{item.petitioner}</td>
        </tr>
        <tr>
          <th>Respondent</th>
          <td>{item.respondent}</td>
        </tr>
        <tr>
          <th>Case Number</th>
          <td>{item.caseNumber}</td>
        </tr>
        <tr>
          <th>Case Number 2</th>
          <td>{item.caseNumber2}</td>
        </tr>
        <tr>
          <th>Case Type</th>
          <td>{item.caseType}</td>
        </tr>
        <tr>
          <th>Decision Date</th>
          <td>{item.decisionDate}</td>
        </tr>
        <tr>
          <th>ID</th>
          <td>{item.id}</td>
        </tr>
      </table>
      
      )) : <p>No Results to Show. Please Enter the Correct Case Number</p>
      }
</div>
{showResults && searchResult.length > 0 && (
  <button className="btn" onClick={generateExcel}>Download Excel</button>
)}
   
      </form>
    </div>



  </>
  )
}

export default CaseNumber