
[toc]

### WXML 模板

#### 简介

使用上跟HTML语法类似，区别是：

 * 标签必须都是闭合的
 * 属性大小写敏感
 
#### 数据绑定 {{}}
 
 完成界面的实时更新。
 
 xxx.js 文件
 
* 页面初始数据

	``` js
	<!--初始化数据 time-->
	Page({
		data: {
			time: (new Date()).toString()
		}
	})
	```
	
	``` wxml
	<!--数据绑定-->
	<text>{{time}}</text>
	```
注： 属性值的绑定必须要包裹在双引号中。

#### 逻辑语法

{{}} 中可以进行简单的逻辑运算。注意：要在{{}}内部。

* 三元运算
* 算术运算
* 字符串变量拼接
* 数组

#### 条件逻辑
使用控制属性, 如wx:if，判断标签是否需要渲染。

``` js
<!--if-->
wx:if="{{condition}}"
<!--else if-->
wx:elif="{{condition}}"
<!--else-->
wx:else
```

#### 列表渲染
控制属性：wx:for="{{Array}}"

* 默认下表为index，默认列表项为item。

	``` js
	<view wx:for="{{array1}}" wx:key="{{index}}">
	  {{index}}: {{item.name}}
	</view>
	
	<!--脚本-->
	Page({
	  data: {
	    array1: [
	      {
	        name: 'foo'
	      },
	      {
	        name: 'bar'
	      }
	    ]
	  },
	}
	```
* 可以使用wx:for-index, wx:for-item 指定数组的下标、数组项名字

	``` js
	<view wx:for="{{array1}}" wx:key="{{index}}" wx:for-index="idx" wx:for-item="child">
	  {{idx}}: {{child.name}}
	</view>
	```
* wx:key
	* 字符串
	* 保留关键字this代表在循环中的item本身，这种表示需要item本身是一个唯一的字符串或者数字
	
	``` js
	<!--unique 为数组项一个字段-->
	<switch wx:for="{{array2}}" wx:key="unique"> {{item.id}} </switch>
	<!--数组项为互不相等的数字-->
	<switch wx:for="{{array3}}" wx:key="*this"> {{item}} </switch>
	```
	
	当数据改变触发渲染层重新渲染时，会校正带有key的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身状态，并且提高列表渲染时的效率。
	
#### 模板

* 在模板中定义代码片段，然后再不同的地方调用。
* 模板的名字使用 name 属性定义。
* 在 `<template><template/>` 中定义代码片段。
* 使用 is 决定使用哪个模板，并且 is 可以动态决定具体要渲染哪个模板。
* 使用 data 传入数据。

	``` js
	<!--
	{
	  index: 0,
	  msg: 'this is a template',
	  time: '2016-06-18'
	}
	-->
	
	<template name="msgItem">
	  <view>
	    <text> {{index}}: {{msg}} </text>
	    <text> Time: {{time}} </text>
	  </view>
	</template>
	
	<template is="msgItem" data="{{...item}}"/>
	
	<!-- 输出
	0: this is a template Time: 2016-06-18
	-->
	```

#### 引用
两种文件引用方式：

* import 
	* 可以在该文件中使用目标文件定义的template
	* 不具备递归特性，有作用域的概念 
* include
	* 将目标文件中的除了`<template/> <wxs/>` 外的整个代码引入，相当于拷贝到include位置

#### 共同属性
所有wxml 标签都支持的属性叫做共同属性：

* id
* class
* style
* hidden
* data-*
* bind* / catch*

### WXSS样式
微信小程序的CSS。

#### 文件组成

* 项目公共样式
	* app.wxss 
* 页面样式
	* 与页面位置同级、名字相同 
* 其它样式
	* 可以被项目公共样式和页面样式引用
 	
#### 尺寸单位
引入rpx(responsive pixel)尺寸单位。

#### WXSS引用
#### 内联样式
#### 选择器
#### 官方样式库
	




