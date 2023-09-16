
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "antd";

const validationSchema = yup.object({
  FullName: yup.string()
    .required("Please input your full name!"),
  EmailAddress: yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'invalid email address')
    .required("Please input your email address!"),
  DateOfBirth: yup.date()
    .required("Please input your date of birth!")
    .max(new Date(), "Invalid date of birth"),
});

const PersonalInformation = () => {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      EmailAddress: "",
      DateOfBirth: null
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
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onFinish={formik.handleSubmit}
      onFinishFailed={formik.handleBlur}
    >
      <Form.Item
        label="Full Name"
        name="FullName"
        validateStatus={formik.touched.FullName && formik.errors.FullName ? "error" : ""}
        help={formik.touched.FullName && formik.errors.FullName}
      >
        <Input
          name="FullName"
          value={formik.values.FullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="EmailAddress"
        validateStatus={formik.touched.EmailAddress && formik.errors.EmailAddress ? "error" : ""}
        help={formik.touched.EmailAddress && formik.errors.EmailAddress}
      >
        <Input
          name="EmailAddress"
          value={formik.values.EmailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="DateOfBirth"
        validateStatus={
          formik.touched.DateOfBirth && formik.errors.DateOfBirth ? "error" : ""
        }
        help={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
      >
        <DatePicker
          name="DateOfBirth"
          value={formik.values.DateOfBirth}
          onChange={(date) => formik.setFieldValue("DateOfBirth", date)}
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

export default PersonalInformation;
