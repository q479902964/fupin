## 本地开发：webpack启动本地服务和打包

### 步骤
1. 首先，没有npm的先安装npm，然后执行npm install，安装本地开发所需模块

2. 终端执行 npm run dev 命令

3. 浏览器打开 localhost:8080/pages/login/login.html（端口号不确定，根据终端提示来）

4. 每个页面的代码放在了 src/pages 下，在里面修改代码

5. 修改之后，浏览器自动刷新，可以看到修改

6. 修改完毕之后，终端执行 npm run build 可对代码进行打包

7. 打完包的最终代码，放在了dist下面




## 部署到服务器

1. 部署之前，npm run check，可在本地提前查看代码部署到服务器的效果

2. 根据终端提示，打开localhost:8080/pages/login/login.html

3. 本地没问题了，可以把dist文件夹部署到测试环境

4. 注意将dist下的pages文件夹整个丢到服务器，而不是把pages下的所有页面直接部署上去

5. 这些页面，就算不部署到服务器，直接打开也是可以的，但是会有跳转问题


## 页面结构

login  登录页

index  首页列表

edit  添加和查看信息页

family  家庭信息表单页（页面做好了，没对接后端）

land  家庭公有资产页

personal  查看个人资产页

personalHouse  个人房产页

personalLand  个人土地信息页

personalVehicle  个人车辆页

personalFarm   个人农机页

personalLivestock  个人牲畜页

education  教育信息页

work   就业信息页

income   年收入页

marriage  婚姻信息页

migration  迁移信息页



