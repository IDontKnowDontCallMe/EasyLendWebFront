import React from 'react';
import { Form, Input, Button, Upload, Icon  } from 'antd';
import styles from './BasicInfoAuthForm.css';

const FormItem = Form.Item;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}


/*
created at 2017.9.11 b SJL

param{

  basicInfoAuth,

  updateIdentityCardPhoto()

}

 */
class BasicInfoAuthForm extends React.Component{

  constructor(props){
    super(props);
  }



  beforeUploadIdentityCardPhoto = (file) => {

    const fileReader = new FileReader();

    fileReader.onload = () => {

      this.props.updateIdentityCardPhoto({file:file, url:fileReader.result});

    };

    fileReader.readAsDataURL(file);

    return false;
  }

  beforeUploadFacePhoto = (file) => {

    const fileReader = new FileReader();

    fileReader.onload = () => {

      this.props.updateFacePhoto({file:file, url:fileReader.result});

    };

    fileReader.readAsDataURL(file);

    return false;
  }


  onConfirm = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        console.log(values);

        console.log(this.props.basicInfoAuth.identityCardPhotoUrl)
        console.log(this.props.basicInfoAuth.facePhoto)

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
              <Upload
                name="avatar"
                action="/upload"
                beforeUpload={this.beforeUploadIdentityCardPhoto}
                showUploadList={false}
                className={styles['avatar-uploader']}
              >
                {
                  this.props.basicInfoAuth.identityCardPhotoUrl ?
                  <img src={this.props.basicInfoAuth.identityCardPhotoUrl} className={styles['avatar']}/>  :
                  <Icon type="plus" className={styles['avatar-uploader-trigger']} />
                }
              </Upload>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="正脸照"
          >
            {getFieldDecorator('identityCardBack', {
              valuePropName: 'file',
            })(
              <Upload
                name="avatar"
                action="/upload"
                beforeUpload={this.beforeUploadFacePhoto}
                showUploadList={false}
                className={styles['avatar-uploader']}
              >
                {
                  this.props.basicInfoAuth.facePhotoUrl ?
                    <img src={this.props.basicInfoAuth.facePhotoUrl} className={styles['avatar']} />  :
                    <Icon type="plus" className={styles['avatar-uploader-trigger']} />
                }
              </Upload>
            )}
          </FormItem>


          <FormItem
            {...formItemLayout}
            label="父亲姓名"
          >
            {getFieldDecorator('fatherName', {
              rules: [{ required: true, message: '请输入父亲姓名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="父亲职业"
          >
            {getFieldDecorator('fatherWork', {
              rules: [{ required: true, message: '请输入父亲职业！' }],
            })(
              <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="父亲收入"
          >
            {getFieldDecorator('fatherIncome', {
              rules: [{ required: true, message: '请输入父亲收入！' }],
            })(
              <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="母亲姓名"
          >
            {getFieldDecorator('motherName', {
              rules: [{ required: true, message: '请输入母亲姓名！' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="母亲职业"
          >
            {getFieldDecorator('motherWork', {
              rules: [{ required: true, message: '请输入母亲职业！' }],
            })(
              <Input prefix={<Icon type="contacts" style={{ fontSize: 13 }} />} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="母亲收入"
          >
            {getFieldDecorator('motherIncome', {
              rules: [{ required: true, message: '请输入母亲收入！' }],
            })(
              <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} />
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
