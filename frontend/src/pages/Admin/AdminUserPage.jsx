import { Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";



const AdminUserPage = () => {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
   
  };
 
 
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img src={imgSrc}
        alt="avatar"
        style={{ width: '50px', height: '50px', borderRadius:"50%", }} />
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
  ];

  const fetchUsers = useCallback (async () => {
   setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`)
       

      if (response.ok) {
        const data = await response.json();
        setDataSource(data)
    
      } else {
        message.error("Login Failed");
      }
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchUsers()
  },[fetchUsers])



  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        
      
      </Space>
      <Table columns={columns} dataSource={dataSource} onChange={handleChange} rowKey={(record) => record._id} loading={loading} />
    </>
  );
};
export default AdminUserPage;
