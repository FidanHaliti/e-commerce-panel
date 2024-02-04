import { Button, Form, Input, InputNumber, Select, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductUpdatePage = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const productId = params.id;

  console.log(productId)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const [categoriesResponse, singleProductResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ]);

        if (!categoriesResponse.ok || !singleProductResponse.ok) {
          message.error("Veri getirme başarısız.");
          return;
        }

        const [categoriesData, singleProductData] = await Promise.all([
          categoriesResponse.json(),
          singleProductResponse.json(),
        ]);

        setCategories(categoriesData);

        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            img: singleProductData.img.join("\n"),
            colors: singleProductData.colors.join("\n"),
            sizes: singleProductData.sizes.join("\n"),
            category: singleProductData.category,
          });
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, productId, form]);

  const onFinish = async (values) => {
    console.log(values);
    const imgLinks = values.img.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const sizes = values.sizes.split("\n").map((link) => link.trim());
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          sizes,
          img: imgLinks,
        }),
      });

      if (response.ok) {
        message.success("Ürün başarıyla güncellendi.");
        navigate("/admin/products");
      } else {
        message.error("Ürün güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.log("Ürün güncelleme hatası:", error);
    } finally {
      setLoading(false);
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
};

export default ProductUpdatePage;
