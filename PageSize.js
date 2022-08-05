import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function PageSize() {
  return (
    <>
    <DropdownButton
          variant='secondary'
          >
          <Dropdown.Item eventKey="Show 15">Show 15</Dropdown.Item>
          <Dropdown.Item eventKey="Show 25">Show 25</Dropdown.Item>
          <Dropdown.Item eventKey="Show 35">Show 35</Dropdown.Item>
          <Dropdown.Item eventKey="Show All">Show All</Dropdown.Item>
        </DropdownButton>

    <form method="POST" action="" class="form-electro-wc-ppp"><select name="ppp" onchange="this.form.submit()" class="electro-wc-wppp-select c-select">
    <option value="12">Show 12</option>
    <option value="24">Show 24</option>
    <option value="48">Show 48</option>
    <option value="96">Show 96</option>
    <option value="-1">Show All</option>
</select>
</form>
            </>
  )
}

export default PageSize
