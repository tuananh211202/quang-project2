import { Button, Col, Form, Input, Row, Table } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import { getColumn, getContent } from "../../utils";

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

const AppContent = () => {
    const location = useLocation();

    const content = getContent(location.pathname);
    const columns = getColumn(location.pathname);

    return <>
        <Row className="w-full">
            <Row className="w-full flex items-center justify-between p-2 border-solid border-b-2 h-12">
                <p>{content.headerText}</p>
                {
                    content.headerButtonText !== "" ?
                    <Button className="w-52">{content.headerButtonText}</Button>
                    : null
                }
            </Row>
            <Row className="w-full h-72 inline-block">
                <Row className="w-full flex items-center justify-center mt-10">
                    <Form className="w-2/5">
                        {
                            content.firstInputText !== "" ?
                            <Row className="w-full">
                                <Col span={16} offset={3}>
                                    <Form.Item label={content.firstInputText} name="name" className="w-full">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row> : null
                        }

                        {
                            content.secondInputText !== "" ?
                            <Row className="w-full">
                                <Col span={19}>
                                    <Form.Item label={content.secondInputText} name="group" className="w-full">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={4} offset={1}>
                                    <Button className="w-full">Select</Button>
                                </Col>
                            </Row> : null
                        }

                        {
                            content.thirdInputText !== "" ?
                            <Row className="w-full">
                                <Col span={17} offset={2}>
                                    <Form.Item label={content.thirdInputText} name="template" className="w-full">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={4} offset={1}>
                                    <Button className="w-full">Select</Button>
                                </Col>
                            </Row> : null
                        }   

                    </Form>
                </Row>
                <Row className="w-full flex items-center justify-center">
                    <Button className="w-20 mx-1">Find</Button>
                    <Button className="w-20 mx-1">Reset</Button>
                </Row>
            </Row>
            <Table columns={columns} dataSource={[]} className="w-full" bordered={true} size="small" rowSelection={{ ...rowSelection }} />
        </Row>
    </>
}

export default AppContent;