// eslint-disable-next-line
import React, { useState } from 'react';
import { Button, Progress } from 'semantic-ui-react'
function BoardItem({row}) {
   return (
    <tr>
      <td>{row.brdno}</td>
      <td>{row.brdtitle}</td>
      <td>{row.brdwriter}</td>
      <td>{row.brddate}</td>
      <td><Button primary>Test</Button></td>
      <td><Progress percent={66} indicating/></td>
    </tr>
  )
};
function BoardList() {
  const sampleBoard = [ 
    { brdno: 1, brdwriter: 'Lee SunSin', brdtitle: 'If you intend to live then you die', brddate: new Date().toLocaleTimeString() },
    { brdno: 2, brdwriter: 'So SiNo', brdtitle: 'Founder for two countries', brddate: new Date().toLocaleTimeString() } 
  ];
  const [boardList, setBoardList] = useState(sampleBoard);
  
  return (
    <div>
      <table border="0"> 
        <tbody> 
          <tr align="center"> 
            <td width="50">No.</td> 
            <td width="300">Title</td> 
            <td width="100">Name</td> 
            <td width="100">Date</td> 
          </tr> 
          { boardList.map(row => (<BoardItem key={row.brdno} row={row} />) ) } 
        </tbody> 
      </table> 
    </div>
  )
}

export default BoardList;
