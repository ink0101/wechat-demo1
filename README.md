## 微信小程序demo

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
	
	当数据改变触发渲染层重新渲染时，会校正带有key的组件，框架会




