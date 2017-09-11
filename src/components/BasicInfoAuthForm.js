import React from 'react';
import { Form, Input, Button, Upload, Icon  } from 'antd';

const FormItem = Form.Item;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}


/*
created at 2017.9.11 b SJL
 */
class BasicInfoAuthForm extends React.Component{

  constructor(props){

    super(props);


  }

  handleChange = (info) => {

    const fileReader = new FileReader();


  }

  beforeUpload = (file) => {

    return false;
  }


  onConfirm = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {


        console.log(values);

      }
    });

  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form
        onSubmit={this.onConfirm}
      >
        <div>
          <FormItem
            {...formItemLayout}
            label="身份证正面照"
          >
            {getFieldDecorator('identityCardFront', {
              valuePropName: 'file',
            })(
              <Upload name="avatar" action="/upload.do" beforeUpload={this.beforeUpload} onChange={this.handleChange} >
                {
                  this.state.imageUrl ?
                    <img src={imageUrl} alt="" className="avatar" /> :
                    <Icon type="plus" className="avatar-uploader-trigger" />
                }
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="身份证背面照"
          >
            {getFieldDecorator('identityCardBack', {
              valuePropName: 'file',
            })(
              <Upload name="avatar" action="/upload.do" >
                <Icon type="plus" className="avatar-uploader-trigger" />
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="人脸照片"
          >
            {getFieldDecorator('faceImage', {
              valuePropName: 'file',
            })(
              <Upload name="avatar" action="/upload.do" >
                <Icon type="plus" className="avatar-uploader-trigger" />
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="父或母姓名"
          >
            {getFieldDecorator('parent', {
              rules: [{ required: true, message: '请输入父或母姓名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="父或母电话"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: '请输入父或母电话！' }],
            })(
              <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            {getFieldDecorator('submit')(
              <Button type="primary" htmlType="submit" >确认</Button>
            )}
          </FormItem>

        </div>

      </Form>
    );

  }

}

export default Form.create({})(BasicInfoAuthForm);
