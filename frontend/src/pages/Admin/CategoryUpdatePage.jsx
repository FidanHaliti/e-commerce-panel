import { Button, Form, Input, Spin, message } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CategoryUpdatePage = () => {
const [loading, setLoading] = useState(false);
const [form] = Form.useForm();
const params = useParams()
const categoryId = params.id;
const apiUrl = import.meta.env.VITE_API_BASE_URL;



  const onFinish = async values => {
    setLoading(true)
    try {
        const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

        if (response.ok){
            message.success("Category edit success")
        } else {

            message.error("Category edit error")
        }

    } catch (error) {
        console.log("Category edit error:", error)
    }finally{
        setLoading(false)
    }
  };
useEffect(() => {
    const fetchSingleCategory = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);
    
          if (!response.ok) {
            throw new Error("Data is not imported")
           
          }
          const data = await response.json();
          
          if(data) {
            form.setFieldsValue({
                name: data.name,
                img:data.img,
            })
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

 
  fetchSingleCategory();
}, [apiUrl, categoryId, form]);



  return (
    <Spin spinning={loading}>
      <Form
      form={form}
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please edit your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Image (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please edit your image!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form>
    </Spin>
  );
};

export default CategoryUpdatePage;
