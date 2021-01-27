import Form, { Field } from './components/Form';
// import Form, { Field } from 'rc-field-form';
import { useEffect } from 'react';
import { Input } from 'antd'

const nameRules = {
  required: true,
  message: '请输入姓名'
}
const ageRules = {
  required: true,
  message: '请输入年龄'
}

const ControlForm = () => {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log('onFinish', val);
  }

  const onFinishFailed = (err, val) => {
    console.log('onFinishFaild', err, val);
  }
  
  useEffect(() => {
    console.log('form', form);
    form.setFieldsValue({
      username: 'default'
    });
  }, [])

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Field name="username" rules={[nameRules]}>
        <Input placeholder="Username" />
      </Field>
      <Field name="age" rules={[ageRules]}>
        <Input placeholder="age" />
      </Field>

      <button>Submit</button>
    </Form>
  );
};

export default ControlForm;