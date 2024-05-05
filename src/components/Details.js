import React, { useState } from 'react'
import * as XLSX from 'xlsx';
const Details = (props) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const handleSearch = () => {
    const filteredData = props.data.filter(item => String(item.case_id).trim().toLowerCase() === searchQuery.trim().toLowerCase());
    setSearchResult(filteredData);
    setShowResults(true);
    console.log(filteredData);
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
    const fileName = `${searchResult[0].client_name}.xlsx`;
    XLSX.writeFile(wb, fileName);
  }


  return (
    <>
      <div className="flex flex-col justify-center  items-center h-screen">
        <div className="text-center border border-gray-300 p-4 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-4 font-bold">Export Cases</h1>
          <div className="mb-4"></div>
          <div className="flex justify-center items-center"></div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter ID to search"
            className="border border-gray-300 px-4 py-2 mr-2 rounded-lg"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</button>
        </div>
        {showResults && (
          <div>
            <div style={{ height: "50vh" }}>
              {searchResult.length > 0 ? (
                <div className="border border-gray-300 p-4 rounded-lg text-left">
                  {searchResult.map((item, index) => (
                    <div key={index}>
                      {Object.entries(item).map(([key, value]) => (
                        <p key={`${index}-${key}`}>
                          <span className="font-bold">{key}: </span>{value}

                        </p>

                      ))}
                      {searchResult.length > 0 && (
                        <button onClick={generateExcel} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Download</button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No results found</p>
              )}
            </div>
          </div>
        )}

      </div>


    </>
  );
}

export default Details