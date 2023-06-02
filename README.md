#Miao：Github仓库查看器

**使用的npm的包：**

1.   npm install eslint --save-dev
2.   npm i axios -S
3.   npm i react-router-dom
4.   npm install dayjs --save
5.   npm i --save react-redux
6.   npm install @reduxjs/toolkit

**实现的功能**：

1. 登录界面：

   - 登录后记录用户信息，再次访问，可直接跳转至用户界面
   - 退出登录后，访问用户界面会跳转到登录界面

2. 用户界面：展示用户的的信息、所有用户的github项目及项目信息

   - 用户信息：头像、简介、关注数、粉丝数、其他信息
   - 分页功能：一页展示5个项目，可按按钮切换当前页
   - 排序功能：可按照收藏或分享的降序排序展示
   - 搜索功能：根据用户名展示相应项目

3. 项目详情页：

   - 展示项目的所有文件名称，可通过链接访问
   - 展示项目的收藏和关注数、描述、关键词、分享量等信息
   - 展示项目的贡献者，及头像

   

   



  
