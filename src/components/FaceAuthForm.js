import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class FaceAuthForm extends React.Component{



  render(){

    return (
      <Form
      >
        <Button type="primary" htmlType="submit">人脸识别</Button>
      </Form>
    );

  }

}

export default Form.create({})(FaceAuthForm);
