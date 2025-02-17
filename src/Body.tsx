import { ReactNode } from 'react';
import { Col, Row } from 'antd';

interface Props{
  outlet:ReactNode;
}

export const Body=({outlet}:Props)=>{
  return(
    <div>
      <Row>
        <Col span={20} push={4} style={{padding:'30px'}}>
          {outlet}
        </Col>
        <Col span={4} pull={20} style={{background:'#BEDAFF'}}>
          страницы
        </Col>
      </Row>
    </div>

  )
}

