# Box3-helper

这里是Box3-helper的主页面

## 这是什么

Box3-helper是一个用于方便普通用户使用现有代码的浏览器插件

## 使用方法

当浏览器安装了这个插件后, 在访问Box3有关页面(box3.codemao.cn或box3.fun)时, 会显示一个对话框让你选择要使用的脚本, 如下图

![对话框页面](./images/index-1.png)

当你点击"加载并运行"时, 所选脚本的代码就会按顺序注入到页面中

其中灰色打勾的项目是必选项, 这些脚本在特定的页面必须被加载, 剩下的没有打勾的项目就是可选的

如果你不想加载任何脚本(包括必选项), 你可以选择"不加载任何脚本(纯净模式)",此操作会直接忽略对话框



## 对于开发人员

如果你想要创建属于自己的脚本, 你可以在GitHub上为[此项目](https://github.com/alan-best/box3-helper-storage)发起`Pull Request`, 并在`list.json`中注册你的脚本

关于Box3-helper脚本特有的API以及更详细的指南, 请参阅 [开发手册](./dev/index.html)

