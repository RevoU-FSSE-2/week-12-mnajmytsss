
import { Form, Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  StreetAddress: Yup.string().required("Please input your street address!"),
  City: Yup.string().required("Please input your City!"),
  State: Yup.string().required("Please input your State!"),
  ZipCode: Yup.number().required("Please input your Zip Code!"),
});

const PersonalInformation = () => {
  const formik = useFormik({
    initialValues: {
      StreetAddress: "",
      City: "",
      State: "",
      ZipCode: "",
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
        label="Street Address"
        name="StreetAddress"
        validateStatus={formik.touched.StreetAddress && formik.errors.StreetAddress ? "error" : ""}
        help={formik.touched.StreetAddress && formik.errors.StreetAddress}
      >
        <Input
          name="StreetAddress"
          value={formik.values.StreetAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="City"
        name="City"
        validateStatus={formik.touched.City && formik.errors.City ? "error" : ""}
        help={formik.touched.City && formik.errors.City}
      >
        <Input
          name="City"
          value={formik.values.City}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="State"
        name="State"
        validateStatus={formik.touched.State && formik.errors.State ? "error" : ""}
        help={formik.touched.State && formik.errors.State}
      >
        <Input
          name="State"
          value={formik.values.State}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Form.Item>

      <Form.Item
        label="Zip Code"
        name="ZipCode"
        validateStatus={formik.touched.ZipCode && formik.errors.ZipCode ? "error" : ""}
        help={formik.touched.ZipCode && formik.errors.ZipCode}
      >
        <Input
          name="ZipCode"
          value={formik.values.ZipCode}
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

export default PersonalInformation;
