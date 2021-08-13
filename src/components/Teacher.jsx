import React, { useState } from 'react';
import './teacher.css';

import { Table, Input, Button, Space, Radio } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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

  
  const dispatch = useDispatch()

  const handleDelete = (key) => {
    dispatch(props.delete(key))
  };
  
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '5%',
      ...getColumnSearchProps('id'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Image',
      dataIndex: 'img',
      render: (data) => <img src={data.files} alt="" />,
      key: 'img',
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      width: '15%',
      ...getColumnSearchProps('grade'),
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'delete',
      width: '5%',
      render: (_, record) => (
        <button
          style={{
            color: 'red',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={()=>handleDelete(record)}
        >
          Delete
        </button>
      ),
    },
  ];

  

  const history = useHistory();
  return (
    <div className="teacher">
      <div className="teacher-header">
        <h2>{props.name}</h2>
        <button onClick={() => history.push(`/add-new-${props.name}`)}>
          + {props.name}
        </button>
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
          style={{ backgroundColor: '#fff' }}
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={props.data}
          bordered
          scroll={{ x: 500 }}
        />
      </div>
    </div>
  );
}

export default Teacher;
