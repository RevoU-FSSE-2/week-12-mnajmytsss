import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(8).required("Please input your username!"),
  password: Yup.string()
    .min(8, "Password must be alphanumeric and min 8 characters")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/)
    .required("Please input your password!"),
});

const AccountInformation = () => {
  const formik = useFormik({
    initialValues: {
      username: " ",
      password: " ",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Success:", values);
    },
  });

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 500, paddingTop: 70, height: 300 }}
      autoComplete="off"
      onFinish={formik.handleSubmit}
      onFinishFailed={formik.handleBlur}
    >
      <Form.Item   
        label="Username"
        name="username"
        validateStatus={formik.errors.username ? "error" : ""}
        help={formik.errors.username}
      >
        <Input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateStatus={formik.errors.password ? "error" : ""}
        help={formik.errors.password}
      >
        <Input.Password
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AccountInformation;
