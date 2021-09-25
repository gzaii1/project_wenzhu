# 文竹
想创造一个可以让大家自由发挥, 随意挥洒墨水的小站

## 技术栈
web端: 框架总体采用`react`+`typescript`进行构建,
数据流采用`mobx + mst`进行管理,
样式设计采用`scss`,
文本编辑基于`draft-js`进行二次开发,
暂时并未采用其他样式库

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

### 代码修改
##### 使用主题
主题统一在`/src/styles/themes.scss`下进行编辑和汇总, 可参考已有的主题进行添加.
添加完成后, 需要在`/src/store/Common.model`中, 给`ThemeTypes`添加对应的新主题名称
---
应用主题方案
在需要应用主题的`.scss`文件中, 对于主题特有的属性, 可以在`@include themeify { ... }`中添加,
通过`themed()`等函数获取指定的主题属性, 就可以正常使用了
例如:

```scss
// 非主题样式
.example {
    box-sizing: border-box;
}

// 主题样式
@include themeify {
    // 通过themeify.scss中声明好的函数 获取需要的属性
    $color: themed(main);
    .example {
        background-color: $color;
    }
}
```
