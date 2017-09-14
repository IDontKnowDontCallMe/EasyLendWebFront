/**
 * Created by hyx on 2017/9/14.
 */
import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import PageHeader from '../components/PageHeader.js';

const cards = [
  {
    bank: '中国工商银行',
    total: 10000,
    rent_time: '2017-8-01',
    deadline: '2017-10-01'
  },
  {
    bank: '中国工商银行',
    total: 5000,
    rent_time: '2017-10-01',
    deadline: '2017-11-01'
  },
  {
    bank: '中国农业银行',
    total: 8000,
    rent_time: '2017-11-01',
    deadline: '2017-12-01'
  },
  {
    bank: '中国农业银行',
    total: 6500,
    rent_time: '2017-11-01',
    deadline: '2017-12-01'
  }
];

const PayBackCard = () => (
  <div>
    <PageHeader headerName="还款"/>
    <Card.Group itemsPerRow={4}>
      {
        cards.map((card, i) =>
          <Card>
            <Card.Content style={{fontSize: 16, fontWeight: 'bold'}}>
              待还款项{i}
            </Card.Content>
            <Card.Content>
              <Card.Description>
                借款金额：￥{card.total}<br/>
                借款银行：{card.bank}<br/>
                借款时间：{card.rent_time}<br/>
                还款期限：{card.deadline}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='blue'>还款</Button>
              </div>
            </Card.Content>
          </Card>
        )
      }
    </Card.Group>
  </div>
);

export default PayBackCard;
