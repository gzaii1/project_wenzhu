# 文竹
想创造一个可以让大家自由发挥, 随意挥洒墨水的小站

## 技术栈
web端: `react`(使用CRA创建), 数据流采用`mobx + mst`进行管理, 样式设计采用scss, 暂时并未采用其他样式库

### 目录结构
- config: webpack打包相关配置
- mock: mock数据存放位置
- scripts: 部分启动脚本
- server.js: mock启动文件(后续已采用yapi作为mock源, 逐渐弃用)
- src: 项目核心代码
    - components: 公用组件
    - hooks: 公用hooks存放
    - pages: 页面存放
    - store: mobx全局store存放, 各model存放
    - utils: 工具函数存放
    - layout.tsx: 布局组件
    - routes.tsx: 路由组件
### 使用并安装
安装依赖:
```
npm install 或 yarn
```

开始项目:
```
npm run start
```

启用mock数据:
```
npm run mock
```
