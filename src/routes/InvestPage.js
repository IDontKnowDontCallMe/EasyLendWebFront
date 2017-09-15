/**
 * Created by hyx on 2017/9/13.
 */

import React from 'react';
import PageHeader from '../components/PageHeader.js';
import {Button, Card} from 'semantic-ui-react';

const cards = [
  {
    name: '中银稳富131-34期',
    rates: '5.17%',
    description: '如果本理财产品所投资的信托项目出现未及时足额支付理财计划本金及利息的情况,本理财产品的收益率可能低于预期最高收益率,收益可能为0,甚至发生本金损失。'
  },
  {
    name: '中银集富理财计划2017-001-HQ期',
    rates: '5.07%',
    description: '如果本理财计划的交易对手或者所投资债券的发行人发生信用违约,则可能影响投资收益,甚至致使理财计划本金受到损失。'
  },
  {
    name: '中银智荟理财计划2017年006期',
    rates: '5.0%',
    description: '如果本理财计划的交易对手或者所投资债券的发行人发生信用违约，则可能影响投资收益，甚至致使理财计划本金受到损失。'
  },
  {name: '中银智荟理财计划2017年004期', rates: '5.45%', description: '如果本理财计划的交易对手或者所投资债券的发行人发生信用违约，则可能影响投资收益，甚至致使理财计划本金受到损失。'},
  {
    name: '中银平稳理财计划-智荟系列2017年【11】期',
    rates: '5.35%',
    description: '资金信托，动产信托，不动产信托，有价证券信托，其他财产或财产权信托，作为投资基金或者基金管理公司的发起人从事投资基金业务，经营企业资产的重组、购并及其项目融资、公司理财、财务顾问等业务，受托经营国务院有关部门批准的证券承销业务，办理居间、咨询、资信调查等业务，代保管及保管箱业务，以存放同业、拆放同业、贷款、租赁、投资方式运用固有财产，以固有财产为他人提供担保，从事同业拆借，法律法规规定或中国银行业监督管理委员会批准的其他业务。'
  },
  {
    name: '中银智荟理财计划2017年007期',
    rates: '5.45%',
    description: '资金信托，动产信托，不动产信托，有价证券信托，其他财产或财产权信托，作为投资基金或者基金管理公司的发起人从事投资基金业务，经营企业资产的重组、购并及其项目融资、公司理财、财务顾问等业务，受托经营国务院有关部门批准的证券承销业务，办理居间、咨询、资信调查等业务，代保管及保管箱业务，以存放同业、拆放同业、贷款、租赁、投资方式运用固有财产，以固有财产为他人提供担保，从事同业拆借，法律法规规定或中国银行业监督管理委员会批准的其他业务。'
  },
  {
    name: '中银平稳理财计划-智荟系列2017年【14】期',
    rates: '5.45%',
    description: '触发提前终止的条件包括但不限于:在理财计划存续期内,若国家相关法律、法规、监管规定出现重大变更或者其它突发事件和因素引起金融市场情况出现重大变化以及其它原因导致理财计划管理人认为理财计划已经不适合继续帮助投资者实现投资目标的，理财计划管理人有权宣布提前终止本理财计划。'
  },
  {
    name: '中银智荟理财计划2014年009期',
    rates: '5.30%',
    description: '收益率可能低于预期甚至发生本金损失'
  },
  {
    name: '博·弈14天按期开放网银专属（保本型）',
    rates: '3.00%',
    description: '暂无'
  }
];

const CardGroups = () => (
  <div>
    <PageHeader headerName="投资"/>
    <Card.Group itemsPerRow={4} style={{marginTop: -10}}>
      {
        cards.map((card, i) =>
          <Card>
            <Card.Content>
              <Card.Header>
                {card.name}
              </Card.Header>
              <Card.Meta style={{fontSize: 14, fontWeight: 'bold', margin: '8px 0'}}>
                利率：{card.rates}
              </Card.Meta>
              <Card.Description>
                风险说明：{card.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>详情</Button>
                <Button basic color='blue'>投资</Button>
              </div>
            </Card.Content>
          </Card>
        )
      }
    </Card.Group>
  </div>
);

export default CardGroups;
