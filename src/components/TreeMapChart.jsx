import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import $ from 'jquery';

const ROOT_PATH = 'https://echarts.apache.org/examples';

function TreeMapChart() {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [diskData, setDiskData] = useState([]);
  const [parentNodes, setParentNodes] = useState([]);
  const [title, setTitle] = useState("");
  const [nodeName, setNodeName] = useState("");
  const [nodeValue, setNodeValue] = useState("");
  const [parentName, setParentName] = useState("");
  const [nodeToDelete, setNodeToDelete] = useState("");

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      setChartInstance(chart);

      $.get(ROOT_PATH + '/data/asset/data/disk.tree.json')
        .done((data) => {
          setDiskData(data);
          updateParentNodes(data);
          chart.setOption(getOption(data, title));
        })
        .fail(() => {
          console.error("Error loading data");
        });

      const handleResize = () => {
        chart.resize();
      };
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [chartRef, title]);

  const getOption = (data, title) => ({
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      formatter: function (info) {
        const value = info.value;
        const treePathInfo = info.treePathInfo;
        const treePath = [];
        for (let i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name);
        }
        return [
          '<div class="tooltip-title">' +
            echarts.format.encodeHTML(treePath.join('/')) +
            '</div>',
            echarts.format.addCommas(value)
        ].join('');
      }
    },
    series: [
      {
        name: title,
        type: 'treemap',
        visibleMin: 300,
        label: {
          show: true,
          formatter: '{b}'
        },
        upperLabel: {
          show: true,
          color:'white',
          height: 30
        },
        itemStyle: {
          borderColor: 'black'
        },
        levels: getLevelOption(),
        data: data
      }
    ]
  });

  const getLevelOption = () => [
    {
      itemStyle: {
        borderColor: '#777',
        borderWidth: 0,
        gapWidth: 1
      },
      upperLabel: {
        show: false
      }
    },
    {
      itemStyle: {
        borderColor: 'grey',
        borderWidth: 10,
        gapWidth: 2
      },
      emphasis: {
        itemStyle: {
          borderColor: '#ddd'
        }
      }
    },
    {
      colorSaturation: [0.35, 0.5],
      itemStyle: {
        borderWidth: 5,
        gapWidth: 10,
        borderColorSaturation: 0.5
      }
    }
  ];

  const updateParentNodes = (data) => {
    const nodes = [];
    const traverse = (nodes, level) => {
      for (const node of level) {
        nodes.push(node);
        if (node.children) {
          traverse(nodes, node.children);
        }
      }
    };
    traverse(nodes, data);
    setParentNodes(nodes);
  };

  const addNode = () => {
    if (nodeName && !isNaN(nodeValue) && nodeValue !== "") {
      const newData = [...diskData];
      const parent = findNode(newData, parentName);

      if (parent) {
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push({ name: nodeName, value: parseInt(nodeValue, 10) });
      } else {
        newData.push({ name: nodeName, value: parseInt(nodeValue, 10) });
      }

      setDiskData(newData);
      updateParentNodes(newData);
      chartInstance.setOption(getOption(newData, title));
      setNodeName("");
      setNodeValue("");
      setParentName("");
    }
  };

  const deleteNode = () => {
    if (nodeToDelete) {
      const newData = deleteNodeRecursively([...diskData], nodeToDelete);
      setDiskData(newData);
      updateParentNodes(newData);
      chartInstance.setOption(getOption(newData, title));
      setNodeToDelete("");
    }
  };

  const deleteNodeRecursively = (nodes, name) => {
    return nodes.filter(node => {
      if (node.name === name) {
        return false;
      }
      if (node.children) {
        node.children = deleteNodeRecursively(node.children, name);
      }
      return true;
    });
  };

  const findNode = (nodes, name) => {
    for (const node of nodes) {
      if (node.name === name) {
        return node;
      } else if (node.children) {
        const found = findNode(node.children, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  return (
    <div className="TreeMapChart">
      <input value={title} type='text' placeholder='Give your Tree Map a Name' onChange={(e) => setTitle(e.target.value)} />
      <div id="controls">
        <input type="text" id="nodeName" value={nodeName} placeholder="Node Name" onChange={(e) => setNodeName(e.target.value)} />
        <input type="number" id="nodeValue" value={nodeValue} placeholder="Node Value" onChange={(e) => setNodeValue(e.target.value)} />
        <select id="parentNode" value={parentName} onChange={(e) => setParentName(e.target.value)}>
          <option value="">Root</option>
          {parentNodes.map((node) => (
            <option key={node.name} value={node.name}>
              {node.name}
            </option>
          ))}
        </select>
        <button className='node-btn' onClick={addNode}>Add Node</button>
        <select id="deleteNode" value={nodeToDelete} onChange={(e) => setNodeToDelete(e.target.value)}>
          <option value="">Select Node to Delete</option>
          {parentNodes.map((node) => (
            <option key={node.name} value={node.name}>
              {node.name}
            </option>
          ))}
        </select>
        <button className='delete-node-btn' onClick={deleteNode}>Delete Node</button>
      </div>
      <div id="main" ref={chartRef} style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
}

export default TreeMapChart;
