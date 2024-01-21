import { Button, Popconfirm, Space, Table, message } from "antd";

import { useCallback, useEffect, useState } from "react";

const AdminUserPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
  };

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Delete the user"
          description="Are you sure to delete this user?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            deleteUser(record.email);
          }}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Login Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });

      if (response.ok) {
        message.success("Delteted is Succes");
        fetchUsers();
      } else {
        message.error("Delete Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table
        columns={columns}
        dataSource={dataSource}
      
        rowKey={(record) => record._id}
        loading={loading}
      />
    </>
  );
};
export default AdminUserPage;
