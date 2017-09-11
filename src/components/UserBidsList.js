import React from 'react';
import {  Card, Button } from 'antd';

/*
*
* param{
*
*   dataSource:
*   startIndex:
*
* }
*
* */

class UserBidsList extends React.Component{

  getItems = () => {

    let i = 0;
    const result = [];

    this.props.startIndex? i = this.props.startIndex: i=0;

    if( !this.props.dataSource || this.props.dataSource.length === 0){
      return [];
    }
    else{

      while( i < this.props.dataSource.length){

        result.push(this.props.dataSource[i]);
        if(result.length >= 6){
          return result;
        }

        i++;

      }
      return result;
    }

  }

  getCardList = (data) => {

    if( !data || data.length === 0){
      return (
        <span>暂无数据</span>
      );
    }
    else{

      const result = [];

      data.forEach((value,index,arr)=>{
        result.push(
          <div>
            <Card title={value.state===0? "接标中": (value.state===1? "接标完成": "被取消")}>
              <div>
                {value.bidId}
              </div>
              <div>
                借款金额:{value.money}元
              </div>
              <div>
                创建日期:{value.date}
              </div>
              <div>
                有效期:{value.bidValidPeriod}天
              </div>
            </Card>
            <br/>
          </div>
        );
      })

      return result;
    }

  }

  render(){

    const data = this.getItems();

    return (

      <div>
        {this.getCardList(data)}
      </div>


    );

  }


}

export default UserBidsList;
