import React from 'react'
import { Message, Icon, Button, Grid, Divider } from 'semantic-ui-react';


class ZhiMaAuthForm extends React.Component {

  onClick = () => {

    this.props.doZhiMaAuth({
      permit: 1,
      phone: this.props.userPhone,
    });

  }

  render(){



    return (

      <Grid columns={2} relaxed>
        <Grid.Column>
          <Message
            info
          >
            <Message.Content>
              <Message.Header>我们将获取您的:</Message.Header>
              <Message.List>
                <Message.Item>芝麻信用评分</Message.Item>
                <Message.Item>信用消费记录</Message.Item>
                <Message.Item>花呗记录</Message.Item>
              </Message.List>

            </Message.Content>

          </Message>
        </Grid.Column>


        <Grid.Column verticalAlign="middle">
          <Button primary size="massive" attached="right" onClick={this.onClick} loading={this.props.loading}>芝麻信用授权</Button>
        </Grid.Column>

      </Grid>



    );

  }

}

export default ZhiMaAuthForm;


{/*<Form>*/}
  {/*<div>*/}

    {/*<FormItem*/}
      {/*{...formItemLayout}*/}
      {/*label="芝麻信用账号"*/}
    {/*>*/}
      {/*{getFieldDecorator('zhimaId', {*/}
        {/*rules: [{ required: true, message: '请输入芝麻信用账号！' }],*/}
      {/*})(*/}
        {/*<Input />*/}
      {/*)}*/}
    {/*</FormItem>*/}

    {/*<FormItem*/}
      {/*{...formItemLayout}*/}
      {/*label="密码"*/}
    {/*>*/}
      {/*{getFieldDecorator('password', {*/}
        {/*rules: [{ required: true, message: '请输入密码！' }],*/}
      {/*})(*/}
        {/*<Input />*/}
      {/*)}*/}
    {/*</FormItem>*/}

    {/*<FormItem*/}
      {/*wrapperCol={{ span: 12, offset: 6 }}*/}
    {/*>*/}
      {/*{getFieldDecorator('submit')(*/}
        {/*<Button type="primary" htmlType="submit" >确认</Button>*/}
      {/*)}*/}
    {/*</FormItem>*/}

  {/*</div>*/}

{/*</Form>*/}
