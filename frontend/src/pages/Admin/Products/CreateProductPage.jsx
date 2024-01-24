import { Form, Input, InputNumber, Select, Spin, message } from "antd";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";



const CreateProductPage = () => {

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    
    
    
      const onFinish = async values => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/products`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
    
            if (response.ok){
                message.success("Product edit success")
                form.resetFields();
            } else {
    
                message.error("Product edit error")
            }
    
        } catch (error) {
            console.log("Product edit error:", error)
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
                <Select.Option value="SmatPhone" key={"Smartphone"}>
                    Smart Phone
                </Select.Option>
              </Select>
              
            </Form.Item>
            
    
            {/* <Button type="primary" htmlType="submit">
              Edit
            </Button> */}
          </Form>
        </Spin>
      );
  
}

export default CreateProductPage