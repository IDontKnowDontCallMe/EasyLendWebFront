import React from 'react';

class PageHeader extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.headerName ? this.props.headerName : '暂无标题'}</span>
        <hr/>
      </div>
    );
  }

}

export default PageHeader;
