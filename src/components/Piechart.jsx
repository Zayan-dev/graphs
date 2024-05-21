import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { ChromePicker } from 'react-color'; // Importing ChromePicker from react-color

const Piechart = () => {
  const [data, setData] = useState([]);
  const [colorPalette, setColorPalette] = useState('random');
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState('#fff');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [colorPickerPosition, setColorPickerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const chartDom = document.getElementById('piechart');
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: 'Budget Distribution',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 'bottom'
      },
      series: [
        {
          type: 'pie',
          radius: '60%',
          data: data.map(item => ({
            value: item.value,
            name: item.name,
            itemStyle: { color: item.color }
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);

    myChart.on('click', (params) => {
      const { event, color, dataIndex } = params;
      const { offsetX, offsetY } = event;
      if (colorPickerVisible && currentIndex === dataIndex) {
        setColorPickerVisible(false);
      } else {
        setCurrentColor(color);
        setCurrentIndex(dataIndex);
        setColorPickerPosition({ x: offsetX, y: offsetY });
        setColorPickerVisible(true);
      }
    });

    return () => {
      myChart.dispose();
    };
  }, [data]);

  useEffect(() => {
    applyColorPalette(colorPalette);
  }, [colorPalette, data.length]);

  const handleNameChange = (index, newName) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].name = newName;
      return newData;
    });
  };

  const handleValueChange = (index, newValue) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].value = parseFloat(newValue);
      return newData;
    });
  };

  const handleAddComponent = () => {
    setData(prevData => [
      ...prevData,
      { value: 0, name: `Comp ${prevData.length + 1}`, color: getRandomColor() }
    ]);
  };

  const handleDeleteComponent = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getGrayScaleColor = (index, total) => {
    const shade = Math.floor((index / total) * 255);
    return `rgb(${shade}, ${shade}, ${shade})`;
  };

  const getCoolColor = (index, total) => {
    const hue = Math.floor((index / total) * 240); // Blue (240) to Cyan (180)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const getHotColor = (index, total) => {
    const hue = Math.floor((index / total) * 60); // Red (0) to Yellow (60)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const applyColorPalette = (palette) => {
    setData(prevData => {
      const total = prevData.length;
      return prevData.map((item, index) => {
        let color;
        switch (palette) {
          case 'grayscale':
            color = getGrayScaleColor(index, total);
            break;
          case 'cool':
            color = getCoolColor(index, total);
            break;
          case 'hot':
            color = getHotColor(index, total);
            break;
          default:
            color = getRandomColor();
        }
        return { ...item, color };
      });
    });
  };

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };

  const handleConfirmColor = () => {
    setData(prevData => {
      const newData = [...prevData];
      newData[currentIndex].color = currentColor;
      return newData;
    });
    setColorPickerVisible(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Select Color Palette:
          <select onChange={(e) => setColorPalette(e.target.value)}>
            <option value="random">Random</option>
            <option value="grayscale">GrayScale</option>
            <option value="cool">Cool Colors</option>
            <option value="hot">Hot Colors</option>
          </select>
        </label>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <label>
            Component {index + 1} Name:
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          </label>
          <label>
            Value:
            <input
              type="number"
              value={item.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
            />
          </label>
          <button style={{ border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', margin: '10px' }} onClick={() => handleDeleteComponent(index)}>Delete</button>
        </div>
      ))}
      <button style={{ border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', margin: '10px' }} onClick={handleAddComponent}>Add Component</button>
      <div id="piechart" style={{ width: '100%', height: '500px' }}></div>
      {colorPickerVisible && (
        <div style={{ position: 'absolute', top: colorPickerPosition.y, left: colorPickerPosition.x, zIndex: 1000, backgroundColor: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
          <ChromePicker
            color={currentColor}
            onChange={handleColorChange}
          />
          <button onClick={handleConfirmColor} style={{ border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', margin: '10px' }}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default Piechart;
