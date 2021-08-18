import React, { useState } from 'react';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../actions';
 export default function Table() {
  
    const items = useSelector((state) => state.ProductReducer.items);
  return (
    <div class="table-responsive">

<table className="table-responsive " style={{ width: '100%', alignItems: 'center', textAlign: 'center' }} className="table table-bordered table-hover">
                <thead>
                    <tr >
                        <th >אפשריות</th>
                        <th>סהכ שעות</th>
                        <th>שעות</th>
                        <th>שעות ידניות</th>
                        <th>שעות חריגות</th>
                        <th>שם העובד</th>
                        <th>מספר תז </th>
                        <th><h3></h3></th>
                    </tr>
                </thead>

                

                {items.map((item, index) => (
                    <tr key={item}>
                        <td className="col1" style={{ textAlign: 'center' }}>
                            {item.options}
                        </td>
                        <td className="col1" style={{ textAlign: 'center' }}>
                            {item.totalHours}
                        </td>
                        <td className="col2" style={{ textAlign: 'center' }}>
                            {item.hours}
                        </td>
                        <td className="col3" style={{ textAlign: 'center' }}>
                            {item.manualhours}
                        </td>
                        <td className="col4" style={{ textAlign: 'center' }}>
                            {item.extraordinaryhours}
                        </td>
                        <td className="col5" style={{ textAlign: 'center' }}>
                            {item.name}
                        </td>
                        <td className="col6" style={{ textAlign: 'center' }}>
                            {item.idOfWorker}
                        </td>
                        
                       
                    </tr>
                ))}
            </table>






  {/* <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
  <tr >
      
  <td className="table-active">...
  
  </td>
  
 
  <td className="table-dark ">...</td>
  <td className="table-light">...</td>
  <td className="table-light">...</td>
  <td className="table-light">...</td>
  <td className="table-light">...</td>
  <td className="table-light">...</td>
 
</tr>

  </tbody>
  </table> */}
</div>
  );
}


// import React from 'react';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

// export default function TableExample(props) {
//   return (
//     <Table className="table">  
//       <Thead>
//         <Tr>
//           <Th>Event</Th>
//           <Th>Date</Th>
//           <Th>Location</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         <Tr>
//           <Td>Tablescon</Td>
//           <Td>9 April 2019</Td>
//           <Td>East Annex</Td>
//         </Tr>
//         <Tr>
//           <Td>Capstone Data</Td>
//           <Td>19 May 2019</Td>
//           <Td>205 Gorgas</Td>
//         </Tr>
//         <Tr>
//           <Td>Tuscaloosa D3</Td>
//           <Td>29 June 2019</Td>
//           <Td>Github</Td>
//         </Tr>
//       </Tbody>
//     </Table >
//   );
// }
