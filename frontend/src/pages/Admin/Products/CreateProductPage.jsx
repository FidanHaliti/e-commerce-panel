import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";



const CreateProductPage = () => {

    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [form] = Form.useForm();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
      const fetchCategories = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${apiUrl}/api/categories`);
    
          if (response.ok) {
            const data = await response.json();
            setCategories(data);
          } else {
            message.error("Data fetch error");
          }
        } catch (error) {
          console.log("Data error: error");
        } finally {
          setLoading(false);
        }
      };
      fetchCategories();
    }, [apiUrl]);
    
    
      const onFinish = async values => {
        const imgLinks = values.img.split("\n").map((link) => link.trim());
        const colors = values.colors.split("\n").map((link) => link.trim());
        const sizes = values.sizes.split("\n").map((link) => link.trim());
        console.log(values)

        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/products`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...values,
                  price:{
                    current:values.current,
                    discount:values.discount,
                  },
                  colors,
                  sizes,
                  img: imgLinks,
                }),
              });
    
            if (response.ok){
                message.success("Product created")
                form.resetFields();
            } else {
    
                message.error("Product create error")
            }
    
        } catch (error) {
            console.log("Product create error:", error)
        }finally{
            setLoading(false)
        }
      };
    
    
      return (
        <Spin spinning={loading}>
          <Form
          form={form}
            name="basic"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Product Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter product name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item
              label="Product Categories"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please enter your Categories!",
                },
              ]}
            >
              <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
              
            </Form.Item>

            <Form.Item
              label="Product Price"
              name="current"
              rules={[
                {
                  required: true,
                  message: "Please enter your price!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Product Discount rate"
              name="discount"
              
              rules={[
                {
                  required: true,
                  message: "Please enter your discount!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Product Description"
              name="description"
              
              rules={[
                {
                  required: true,
                  message: "Please enter your description!",
                },
              ]}
            >
               <ReactQuill theme="snow" style={{
                backgroundColor:"white"
               }} />
            </Form.Item>
           

            <Form.Item
              label="Product Image (Link)"
              name="img"
              rules={[
                {
                  required: true,
                  message: "Please enter your 4 image!",
                },
              ]}
            >
              <Input.TextArea 
              placeholder="Write each image link on a new line."
              autoSize={{minRows:4}}/>
              
            </Form.Item>
            <Form.Item
              label="Product Color (Link)"
              name="colors"
              rules={[
                {
                  required: true,
                  message: "Please enter your colors!",
                },
              ]}
            >
              <Input.TextArea 
              placeholder="Write each colors on a new line."
              autoSize={{minRows:4}}/>
              
            </Form.Item>
            <Form.Item
              label="Product Sizes"
              name="sizes"
              rules={[
                {
                  required: true,
                  message: "Please enter your sizes!",
                },
              ]}
            >
              <Input.TextArea 
              placeholder="Write each sizes on a new line."
              autoSize={{minRows:4}}/>
              
            </Form.Item>
          
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form>
        </Spin>
      );
  
}

export default CreateProductPage