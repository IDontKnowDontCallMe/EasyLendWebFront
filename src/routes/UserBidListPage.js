import React from 'react'
import {Pagination} from 'antd';
import {connect} from 'dva'
import UserBidsList from '../components/UserBidsList';
import PageHeader from '../components/PageHeader';



class UserBidListPage extends React.Component{

  onPaginationChange = (page, pageSize) => {

    this.props.dispatch({
      type:'userBidListInfo/updateStartIndex',
      payload: {startIndex: (page-1)*6},
    })

  }

  render(){


    return (
      <div>
        <PageHeader headerName="我发起的标"/>
        <UserBidsList
          dataSource={this.props.userBidListInfo.bidList}
          startIndex={this.props.userBidListInfo.startIndex}
        />
        <Pagination
          total={this.props.userBidListInfo.listSize}
          defaultPageSize={6}
          onChange={this.onPaginationChange}
        />
      </div>
    );

  }


}

function mapStateToProps({ userBidListInfo, loginUser }) {
  return {
    userBidListInfo,
    loginUser,
  };
}

export default connect(mapStateToProps)(UserBidListPage);
