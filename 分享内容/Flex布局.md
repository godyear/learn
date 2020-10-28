# Flex布局

## 1：flex是什么？



![image-20201022101901961](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022101901961.png)



+ `flex`是添加到CSS[`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display)属性的新值
+ 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
+ 伴随`inline-flex`它使它所应用的元素成为 `flex container`,并且该元素的每个子元素都成为`flex item`
+ 这些项目随后将参与弹性布局，并且可以应用CSS灵活框布局模块中定义的所有属性。
+ 该`flex`属性是Flexbox的属性的略写`flex-grow`，`flex-shrink`和`flex-basis`
+ 另外`<flex>`可以在CSS Grid Layout中引用 `a flexible length`

## 2：flex布局能做什么？

> Flex 布局，可以简便、完整、响应式地实现各种页面布局





## 3：flex基本概念

### 容器(container)

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"

####  容器轴

容器默认存在两根轴：

+ 水平的 `主轴(main axis)`
  + 主轴的开始位置（与边框的交叉点）叫做 `main start`，结束的位置叫做`main end`
+ 垂直的 `交叉轴(cross axis)`
  + 交叉轴的开始位置叫做 `cross start`，结束的位置叫做`cross end`

### 项目(item)

它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

+ 项目默认沿 `主轴`排列：
  + 单个项目占据的主轴空间叫做`main size`
  + 占据的交叉轴空间叫做`cross size`

### 图示



这里用一张图来展示：![image-20201022104405861](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022104405861.png)



## 4：容器的属性

### 4.1：flex-direction

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

+ `flex-direction: row;`                       ![image-20201022105309404](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022105309404.png)

+ `flex-direction: row-reverse;`:      ![image-20201022105349142](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022105349142.png)

+ `flex-direction: column;`                 ![image-20201022105416206](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022105416206.png)

+ `flex-direction: column-reverse;`![image-20201022105444959](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022105444959.png)



### 4.2：flex-wrap

**`flex-wrap`** 指定 flex 元素单行显示还是多行显示 。如果允许换行，这个属性允许你控制行的堆叠方向

+ `flex-wrap: nowrap;`             ![image-20201022110129510](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022110129510.png)

+ `flex-wrap: wrap;`                   ![image-20201022110150405](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022110150405.png)

+ `flex-wrap: wrap-reverse;`  ![image-20201022110219791](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022110219791.png)



### 4.3：flex-flow

**`flex-flow`** 属性是 flex-direction 和 flex-wrap 的简写

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```



### 4.4：justify-content

**`justify-content`** 属性定义了浏览器之间，如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间

+ `justify-content: start;`                   ![image-20201022111411846](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022111411846.png)

+ `justify-content: center;`                ![image-20201022111440818](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022111440818.png)

+ `justufy-content: space-between;` ![image-20201022111512600](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022111512600.png)

+ `justify-content: space-around;`   ![image-20201022111539058](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022111539058.png)

+ `justify-content: space-evenly;`   ![image-20201022112325561](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022112325561.png)
  + 该属性 均匀排列每个元素 每个元素之间的间隔相等 



### 4.5：align-items

`align-items`属性定义项目在交叉轴上如何对齐

+ `align-items: center;`     ![image-20201022114756664](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022114756664.png)

+ `align-items: start;`       ![image-20201022114818361](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022114818361.png)
+ `align-items: end;`           ![image-20201022114835712](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022114835712.png)



### 4.6：align-content

**`align-content`** 属性设置了浏览器如何沿着 `弹性盒子布局` 的 `主轴 `和  `网格布局`的`主轴`在内容项之间和周围分配空间

(多根轴线的对齐方式)

+ `align-content: start;`                        ![image-20201022115412314](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022115412314.png)

+ `align-content: center;`                      ![image-20201022115442493](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022115442493.png)

+ `align-content: space-between;`       ![image-20201022115518544](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022115518544.png)

+ `align-content: space-around;`         ![image-20201022115538816](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022115538816.png)

  



## 5：项目的属性

### 5.1 order(顺序)

+ **`order`** 属性规定了弹性容器中的可伸缩项目在布局时的顺序。

+ 元素按照 `order` 属性的值的增序进行布局。拥有相同 `order` 属性值的元素按照它们在源代码中出现的顺序进行布局。
+ **注意**: `order` 仅仅对元素的视觉顺序 (**visual order**) 产生作用，并不会影响元素的逻辑或 tab 顺序。 **`order`** 不可以用于非视觉媒体，例如 speech。

```html
<!--html文件-->
<div class="box">
  <div class="box1">1</div>
  <div class="box2">2</div>
  <div class="box3">3</div>
</div>h
```

```css
/*Css文件*/
.box {
  width: 800px;
  height: 800px;
  border: 2px solid red;
  display: flex;
}

.box div {
  width: 200px;
  height: 200px;
  background-color: chartreuse;
  font-size: 50px;
  text-align: center;
  line-height: 200px;
  flex: 1 0 auto;
  order: 3;
}

.box div:nth-child(2) {
  background-color: coral;
  order: 0;
}

.box div:nth-child(3) {
  background-color: darkkhaki;
  order: 5;
}
```

![image-20201022135711889](C:\Users\17840\AppData\Roaming\Typora\typora-user-images\image-20201022135711889.png)



### 5.2：flex-grow(扩大)

**`flex-grow`**属性设置flex项主大小的伸缩增长因子。

```html

<div id="content" style="height: 300px;width: 1000px;">
  <div class="box1" style="background-color:red;">A</div>
  <div class="box1" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box" style="background-color:brown;">D</div>
  <div class="box" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```



### 5.3：flex-shrink(缩小)

**`flex-shrink`** 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值



### 5.4：flex-basis

