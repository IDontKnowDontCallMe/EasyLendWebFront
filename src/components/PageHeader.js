import React from 'react';
import styles from './PageHeader.css'

class PageHeader extends React.Component {

  render() {
    return (
      <div className={styles['div-size']}>
        <span className={styles['header-text']}>{this.props.headerName ? this.props.headerName : '暂无标题'}</span>
        {/*<hr className={styles['under-line']} />*/}
      </div>
    );
  }

}

export default PageHeader;
