import React, { useState } from 'react';
import './teacher.css';

import { Table, Input, Button, Space, Radio } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function Teacher(props) {
  const [state, setState] = useState({
    searchText: '',
    searchedColumn: '',
  });

  const [selectionType, setSelectionType] = useState('checkbox');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setState({ searchText: '' });
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    render: (text) =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
      width: '10%',
      ...getColumnSearchProps('key'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Image',
      dataIndex: 'img',
      render: (data) => <img src={data} alt="" />,
      key: 'img',
      width: '20%',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      width: '20%',
      ...getColumnSearchProps('grade'),
    },
    {
      title: 'Assignment',
      dataIndex: 'assignment',
      key: 'assignment',
      width: '20%',
      ...getColumnSearchProps('assignment'),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Kare Hope',
      img: 'images/teacher2.jpg',
      grade: '11th',
      assignment: 'assignment',
    },
    {
      key: '2',
      name: 'Angelica Ramos',
      img: 'images/teacher8.jpg',
      grade: '11th',
      assignment: 'assignment',
    },
    {
      key: '3',
      name: 'Tom john',
      img: 'images/teacher6.jpg',
      grade: '11th',
      assignment: 'assignment',
    },
    {
      key: '4',
      name: 'Losis Ramos',
      img: 'images/teacher3.jpg',
      grade: '11th',
      assignment: 'assignment',
    },
  ];

  return (
    <div className="teacher">
      <div className="teacher-header">
        <h2>Courses</h2>
      </div>

      <div className="teacher-table">
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>
        <Table
          style={{ backgroundColor: '#fff', width: '80%' }}
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          bordered
          scroll={{ x: 300 }}
        />
      </div>
    </div>
  );
}

export default Teacher;
