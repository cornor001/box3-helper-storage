# 开发手册

如果你想要创建属于自己的脚本, 你可以在GitHub上为[此项目](https://github.com/alan-best/box3-helper-storage)发起`Pull Request`, 并在`list.json`中注册你的脚本

**关于API的用法和说明, 请看这里: [API指南](./script-api/index.html)**

## 创建脚本

使用文本编辑器新建一个JS文件, 编写你的脚本(具体参阅[API指南](./script-api/index.html)).

完成后在GitHub发起`Pull Request`(可以使用GitHub的`Upload File`上传你的文件,或者手动使用`git`)



## 注册脚本

在GitHub中编辑[列表文件](https://github.com/alan-best/box3-helper-storage/blob/master/list.json), 编辑完成后一样发起`Request Pull`, 清单编写规则如下:

清单是一维数组, 其中每一项都是`object`,每个`object`的`key`如下, 带`?`的是可选项

| Key | 数据类型 | 含义 |
| ---- | ---- | ---- |
| title | String |显示在选择脚本对话框的主要文字|
| desc? | String |显示在选择脚本对话框的描述性文字(灰色文字)|
| filename | String |脚本的文件名|
| type | "console" \| "style" \| "other" \| "addons" \| "security" \| <其他以mdi-开头的图标名> |脚本类型(脚本列表前面的图标)|
| force? | Boolean |在满足其他条件的情况下强制启用脚本(match范围不能过大,否则`Pull Request`可能会被拒绝)|
| match | String |匹配链接(不包括域名部分)的正则表达式|







