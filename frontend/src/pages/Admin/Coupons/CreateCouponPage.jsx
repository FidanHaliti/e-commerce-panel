import { Button, Form, Input, Spin, message } from "antd";

import { useState } from "react";



const CreateCouponPage = () => {

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    
    
    
      const onFinish = async values => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/coupons`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
    
            if (response.ok){
                message.success("Copuon edit success")
                form.resetFields();
            } else {
    
                message.error("Copuon  edit error")
            }
    
        } catch (error) {
            console.log("Copuon  edit error:", error)
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
              label="Copuon Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Please edit your Copuon !",
                },
              ]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item
              label="Discont Percent"
              name="discountPercent"
              rules={[
                {
                  required: true,
                  message: "Please edit your discountPercent!",
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
  
}

export default CreateCouponPage