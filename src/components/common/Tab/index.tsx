import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { ComponentContainer, TabContainer, TabContentContainer, TabItems } from "./styles";
import { Label } from "../TextArea/styles";
import { TabProps } from "../types";
import { Col, Row } from "antd";
import { Item } from "rc-menu";

const Tab = ({ tabItems, tabOnChange, content, t }: TabProps) => {

  const [selectedTabIndex,setSelectedTabIndex] = useState(0);

  const onChange = (index:any) => {
    setSelectedTabIndex(index);
    tabOnChange(index);
  }

  return (
    <ComponentContainer>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Row>          
              <Col lg={8} md={8} sm={8} xs={8}>
                  <TabContainer>
                        {
                          tabItems.map((item: any) => (    
                            <TabItems active={item.id === selectedTabIndex ? true : false} onClick={() => onChange(item.id)} >{item.title}</TabItems>
                          ))
                        }
                  </TabContainer>                
              </Col>
          </Row>
          <Row>
            <Col lg={24} md={24} sm={24} xs={24}>
              <TabContentContainer>
                  {content}
              </TabContentContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    </ComponentContainer>
  )

}  

export default withTranslation()(Tab);
