import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator(8);

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  footer: 'hello'
}, {
  dataField: 'name',
  text: 'Product Name',
  footer: 'hello',
  filter: textFilter({
    id: 'identify',
    activeStyle: {
      backgroundColor: 'yellow'
    }
  })
}, {
  dataField: 'price',
  text: 'Product Price',
  footer: 'hello',
  filter: textFilter({
    activeStyle: {
      backgroundColor: 'yellow'
    }
  })
}];

const sourceCode = `\
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  footer: 'hello'
}, {
  dataField: 'name',
  text: 'Product Name',
  footer: 'hello',
  filter: textFilter({
    id: 'identify',
    activeStyle: {
      backgroundColor: 'yellow'
    }
  })
}, {
  dataField: 'price',
  text: 'Product Price',
  footer: 'hello',
  filter: textFilter({
    activeStyle: {
      backgroundColor: 'yellow'
    }
  })
}];

<BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />
`;

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

export default () => (
  <div>
    <BootstrapTable
      keyField="id"
      data={ products }
      columns={ columns }
      filter={ filterFactory() }
      selectRow={ selectRow }
    />
    <Code>{ sourceCode }</Code>
  </div>
);
