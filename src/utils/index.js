export const getContent = (path) => {
    switch (path){
        case '/DataCollection-HostGroups':
            return {
                headerText: "Host Group",
                headerButtonText: "Create Host Group",
                firstInputText: "Name",
                secondInputText: "",
                thirdInputText: ""
            }
        case '/DataCollection-TemplateGroups':
            return {
                headerText: "Template Group",
                headerButtonText: "Create Template Group",
                firstInputText: "Name",
                secondInputText: "",
                thirdInputText: ""
            }
        case '/DataCollection-Template':
            return {
                headerText: "Template",
                headerButtonText: "Create Template",
                firstInputText: "Name",
                secondInputText: "Template Group",
                thirdInputText: ""
            }
        case '/DataCollection-Host':
            return {
                headerText: "Host",
                headerButtonText: "Create Host",
                firstInputText: "Name",
                secondInputText: "Host Group",
                thirdInputText: "Template"
            }

        case '/Monitoring-Hosts':
            return {
                headerText: "Host",
                headerButtonText: "",
                firstInputText: "Name",
                secondInputText: "",
                thirdInputText: ""
            }
        default:
            return {
                headerText: "",
                headerButtonText: "",
                firstInputText: "",
                secondInputText: "",
                thirdInputText: ""
            }
    }
}

export const getColumn = (path) => {
    switch (path){
        case '/DataCollection-HostGroups':
            return [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                },
                {
                    title: "Host",
                    dataIndex: "host",
                    key: "host"
                }
            ];
        case '/DataCollection-TemplateGroups':
            return [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                },
                {
                    title: "Templates",
                    dataIndex: "templates",
                    key: "templates"
                }
            ];
        case '/DataCollection-Template':
            return [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                },
                {
                    title: "Hosts",
                    dataIndex: "hosts",
                    key: "hosts"
                },
                {
                    title: "Items",
                    dataIndex: "items",
                    key: "items"
                },
                {
                    title: "Triggers",
                    dataIndex: "triggers",
                    key: "triggers"
                },
                {
                    title: "Dashboards",
                    dataIndex: "dashboards",
                    key: "dashboards"
                },
                {
                    title: "Graphs",
                    dataIndex: "graphs",
                    key: "graphs"
                },
                {
                    title: "Discovery",
                    dataIndex: "discovery",
                    key: "discovery"
                },
                {
                    title: "Web",
                    dataIndex: "web",
                    key: "web"
                },
                {
                    title: "Vendor",
                    dataIndex: "vendor",
                    key: "vendor"
                },
                {
                    title: "Version",
                    dataIndex: "version",
                    key: "version"
                }
            ];
        case '/DataCollection-Host':
            return [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                },
                {
                    title: "Items",
                    dataIndex: "items",
                    key: "items"
                },
                {
                    title: "Triggers",
                    dataIndex: "triggers",
                    key: "triggers"
                },
                {
                    title: "Graphs",
                    dataIndex: "graphs",
                    key: "graphs"
                },
                {
                    title: "Discovery",
                    dataIndex: "discovery",
                    key: "discovery"
                },
                {
                    title: "Web",
                    dataIndex: "web",
                    key: "web"
                },
                {
                    title: "Interfaces",
                    dataIndex: "interfaces",
                    key: "interfaces"
                },
                {
                    title: "Template",
                    dataIndex: "template",
                    key: "template"
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    key: "status"
                },
                {
                    title: "Availability",
                    dataIndex: "availability",
                    key: "availabilily"
                },
                {
                    title: "Agent encryption",
                    dataIndex: "encryption",
                    key: "encryption"
                }
            ];

        case '/Monitoring-Hosts':
            return [
                {
                    title: "Name",
                    dataIndex: "name",
                    key: "name"
                },
                {
                    title: "Interface",
                    dataIndex: "interface",
                    key: "interface"
                },
                {
                    title: "Availability",
                    dataIndex: "availability",
                    key: "availabilily"
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    key: "status"
                },
                {
                    title: "Latest data",
                    dataIndex: "latest",
                    key: "latest"
                }
            ];
        default:
            return [];
    }
}