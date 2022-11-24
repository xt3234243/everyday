#### 第一题：介绍一下css的盒子模型

~~~
css的盒子模型：标准盒子模型，IE盒子模型
标准盒子模型：margin、border、padding、content
IE盒子模型：margin、content（border+padding+content）
通过css转换盒子模型:
box-sizing:content-box  //标准盒子模型
box-sizing：border-box  //IE盒子模型
~~~

#### 第二题：line-height和height区别

~~~	
line-height是每一行文字的高，如果文字换行则整个盒子高度会增大（行数*行高）
height是一个死值，就是这个盒子的高度不会变
~~~

#### 第三题:css选择符有哪些？哪些属性可以继承？

~~~	
css选择符
通配（*）
id选择器（#）
类选择器（.)
标签选择器（div、p、h1...）
相邻选择器（+）
后代选择器（ul li）
子元素选择器（>)
属性选择器（a[href]）
css属性哪些可以继承：
文字系列：font-size、color、line-height.....
***不可继承属性：border、padding、margin....
~~~

#### 第四题：CSS优先级算法如何计算

~~~	
优先级比较：！important>内联样式>id>class>标签>通配
~~~

~~~	
CSS权重计算：
第一：内联样式（style）  权重值：1000
第二：id选择器     权重值：100
第三：类选择器   权重值：10
第四：标签&伪元素选择器   权重值：1
第五：通配、>、+       权重值：0
~~~

#### 第五题：用CSS画一个三角形

~~~	
主要用border属性
首先搞一个div盒子
然后设置高度和宽度为0
之后如果想画左三角形，就把左边框不设置透明，其他都设置透明，依次类推右三角形，上三角形也是这样的
~~~

#### 第六题：一个盒子不给宽度和高度如何水平垂直居中？

~~~	
第一种方法：用flex布局，给父元素添加justify-content：center，align-items：center
<style type="text/css">
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 300px;
        border: 5px solid red;
      }
      .main {
        background: blue;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="main">main</div>
    </div>
  </body>

~~~

~~~	
第二种方法：子绝父相，left：50%    top：50%
 <style type="text/css">
      * {
        margin: 0;
        padding: 0;
      }
      /* 子绝父相 */
      .container {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        position: relative;
        width: 300px;
        height: 300px;
        border: 5px solid red;
      }
      .main {
        position: absolute;
        left: 50%;
        top: 50%;
        background: blue;
        //translate(x,y)	定义 2D 转换，沿着 X 和 Y 轴移动元素。
        transform: translate(-50%, -50%);
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="main">main</div>
    </div>
  </body>
~~~

#### 第七题：display有哪些值？说明他们的作用？

~~~	
none： 隐藏元素
block： 把某某元素转换成块元素
inline:   把某某元素转换成内联元素
inline-block：把某某元素转换成行内块元素
~~~

#### 第八题：对BFC规范（块级格式化上下文：block formatting context）的理解

~~~
1.了解BFC:块级格式化上下文
2.BFC的原则：如果一个元素具有BFC，那么内部元素再怎么弄，都不会影响到外面的元素
3.如何触发BFC:
float的值非none
overflow的值非visible
display的值为：inline-block、table-cell
position的值为：absolute、fixed
~~~

#### 第九题：清除浮动有哪些方式？

~~~	
1.触发BFC
2.多创建一个盒子，添加样式：clear：both
3.after方式
  ul:after{
      content：' ';
      display：block;
      clear：both
  }
~~~

#### 第十题：在网页中的应该使用奇数还是偶数的字体？为什么呢？

~~~	
偶数：让文字在浏览器上表现更好看

另外说明：ui给前端一般设计图都是偶数的，这样不管是布局也好，转换px也好，方便一点
~~~

#### 第十一题：有几种定位（？分别是根据什么定位的？

~~~	
static（默认） 没有定位
fixed：固定定位,相对于浏览器窗口（可视窗口）进行定位
relative：相对于自身定位不脱离文档流
absolute：相对于第一个有relative的父元素，脱离文档流（子绝父相）
relative和absolute区别
1.relative不脱离文档，absolute脱离文档
2.relative相对于自身，absolute相对于第一个有relative的父元素
3.relative如果有left、right、top、bottom那么只显示left和top的效果
absolute如果有left、right、top、bottom那么都会产生效果

~~~



