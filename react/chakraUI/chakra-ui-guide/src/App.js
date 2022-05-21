import React from "react";
import { chakra } from '@chakra-ui/core';

// 创建标准chakra ui 组件的方法
const LaGouButton = chakra('button', {
  themeKey: 'LaGouButton'
});

function App() {
  return <div>
    <LaGouButton size="md" variant="danger">我是按钮</LaGouButton>
  </div>;
}

export default App;
