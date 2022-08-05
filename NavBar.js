import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from 'react';
import PagiNation from './usePagination';
import "../index.css";

function NavBar() {

  const [sortType, setSortType] = useState('Sort by:');
  const handleSortSelect = (e) => {
    setSortType(e)
  }

  const [itemSize, setItemSize] = useState('Show 15');
  const handleSizeSelect = (e) => {
    setItemSize(e)
  }

  return (

    <Alert style={{ width: '94%', marginLeft: '-1rem' }} className="navContainer nav glass1" id="nav">
      <div style={{ marginTop: '-1rem', marginBottom: '-1rem' }}>
        <div class="btn-group" style={{ marginRight: '1.5rem' }} >

          <DropdownButton
            id="btn-group"
            variant='secondary'
            title={sortType}
            onSelect={handleSortSelect}
          >
            <Dropdown.Item eventKey="Sort By Popularity">Popularity</Dropdown.Item>
            <Dropdown.Item eventKey="Sort By Latest">Latest</Dropdown.Item>
            <Dropdown.Item eventKey="Sort By Price: low to high">Price: low to high</Dropdown.Item>
            <Dropdown.Item eventKey="Sort By Price: high to low">Price: high to low</Dropdown.Item>
          </DropdownButton>
        </div>

        <div class="btn-group" style={{ marginRight: '26.5rem' }}>

          <DropdownButton
            variant='secondary'
            title={itemSize}
            onSelect={handleSizeSelect}
          >
            <Dropdown.Item eventKey="Show 15">Show 15</Dropdown.Item>
            <Dropdown.Item eventKey="Show 25">Show 25</Dropdown.Item>
            <Dropdown.Item eventKey="Show 35">Show 35</Dropdown.Item>
            <Dropdown.Item eventKey="Show All">Show All</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='btn-group mt-3' style={{ position: 'relative' }}  >
          <PagiNation />
        </div>
      </div>
    </Alert>

  );


}
export default NavBar;

