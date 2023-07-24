import { Button, Col, Input, Row, Space } from "antd";
import React, { useState } from "react";
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
import AppRoute from "../route/AppRoute";

const getItem = (label, key, children, type) => {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
    {
        type: "divider"
    },
    getItem('Dashboards', 'Dashboards'),
    {
        type: "divider"
    },
    getItem('Monitoring', 'Monitoring',[
        getItem('Hosts', 'Hosts')
    ]),
    {
        type: "divider"
    },
    getItem('Services', 'Services'),
    {
        type: "divider"
    },
    getItem('Inventory', 'Inventory'),
    {
        type: "divider"
    },
    getItem('Data Collection', 'DataCollection', [
        getItem('Host Groups', 'HostGroups'),
        {
            type: "divider"
        },
        getItem('Template Groups', 'TemplateGroups'),
        {
            type: "divider"
        },
        getItem('Template', 'Template'),
        {
            type: "divider"
        },
        getItem('Host', 'Host')
    ]),
    {
        type: "divider"
    },
    getItem('Alerts', 'Alerts'),
    {
        type: "divider"
    }
];

const AppLayout = () => {
    const [openKeys, setOpenKeys] = useState(['dashboards']);
    const navigate = useNavigate();

    return <>
        <Row className="w-full">
            <Col span={3} className="border-solid border-2 h-screen">
                <Space className="w-full h-full justify-between" direction="vertical">
                    <Input.Search className="w-full p-2" placeholder="Search"></Input.Search>
                    <Row className="w-full">
                        <Menu 
                            defaultSelectedKeys={['dashboards']} mode="inline" items={items} className="w-full" 
                            onClick={(e) => navigate("/" + e.keyPath.reverse().join('-'))} // route
                        />
                    </Row>
                    <Row className="w-full p-2">
                        <Button className="w-full">Sign out</Button>
                    </Row>
                </Space>
            </Col>
            <Col span={21}>
                <AppRoute />
            </Col>
        </Row>
    </>
}

export default AppLayout;