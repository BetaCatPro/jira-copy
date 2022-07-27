# Jira

## Available Scripts

启动项目

```shell
npm start
```

启动 json-server

```shell
npm run json-server
```

## 项目配置

### json-server middware
1. 编写middleware.js文件
2. 注入到json-server中：
   更改package.json:
```shell
"json-server": "json-server __json_server_mock__/db.json --watch --port 3001 --middlewares ./__json_server_mock__/middleware.js"
```



### 开发工具包

安装：`npx imooc-jira-tool` [npm](https://preview.npmjs.com/package/jira-dev-tool)

if browser's console tip a error,execute the below directive:

npx msw init public




