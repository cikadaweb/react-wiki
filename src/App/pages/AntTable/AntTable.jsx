import { Component } from 'react';

import { PrinterOutlined } from '@ant-design/icons';
import { Table, Button } from 'antd';
import ReactToPrint from 'react-to-print';

import { log } from '@/utils/log';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [],
    };

    this.dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '3',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '4',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '5',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '6',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '7',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '8',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '9',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '10',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '11',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
      {
        key: '12',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];

    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  }

  handleRowSelect = (record, selected) => {
    log('Выбранная строка: ', record.key);
    log('Выбрано: ', selected);
  };

  handleSelectAll = (selected, selectedRows, changeRows) => {
    log('Выбраны все строки: ', selected);
    log('Выбранные строки: ', selectedRows);
    log('Измененные строки: ', changeRows);
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedKeys, selectedRows) => {
        log('selectedKeys: ', selectedKeys);
        this.setState({ selectedRowKeys: selectedKeys });
      },
      onSelect: this.handleRowSelect,
      onSelectAll: this.handleSelectAll,
    };

    return (
      <div className="container">
        <ReactToPrint
          trigger={() => (
            <Button
              type="primary"
              icon={<PrinterOutlined />}
              onClick={() => {}}>
              Сформировать отчет
            </Button>
          )}
          content={() => this.componentRef}
          documentTitle="New documnet"
          pageStyle="print"
        />
        <Table
          ref={(el) => (this.componentRef = el)}
          dataSource={this.dataSource}
          columns={this.columns}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default Test;
