## Color（颜色）学习

> 颜色是通过眼、脑和我们的生活经验所产生的对光的视觉感受，我们肉眼所见到的光线，是由波长范围很窄的电磁波产生的，不同波长的电磁波表现为不同的颜色，对色彩的辨认是肉眼受到电磁波辐射能刺激后所引起的视觉神经感觉。
> 颜色具有三个特性，即色相，明度，和饱和度。颜色的三个特性及其相互关系可以用三度空间的颜色立体来说明。

#### 简介

[深入理解 color model(颜色模型)](https://www.jianshu.com/p/f03e9ac9c9ef)
[色彩转换](https://github.com/ibireme/yy_color_convertor)
[www.brucelindbloom.com](http://www.brucelindbloom.com/)
[HiDefColor.com](HiDefColor.com)
[查色](https://www.colortell.com/colorspeed)

[资料 1](https://baike.1688.com/doc/view-d2746747.html)
[资料 2](https://zh.wikipedia.org/wiki/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F)
[资料 3](https://zh.wikipedia.org/wiki/SRGB%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4)
[资料 4](https://zh.wikipedia.org/wiki/Adobe_RGB%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4)
[资料 5](http://www.chinahtml.com/1006/127569975918865.html)
[资料 6](https://www.google.com/search?source=hp&ei=qTy1XfOQN5fi-gS45ozgBA&q=rgb%E4%B8%8Esrgb&oq=rgb%E4%B8%8Esrgb&gs_l=psy-ab.3..0.229.2620..2851...0.0..0.519.2882.2-5j3j0j1......0....1..gws-wiz.vT6kE9ghx3U&ved=0ahUKEwiziZ6n67vlAhUXsZ4KHTgzA0wQ4dUDCAY&uact=5)
在前端领域中，我们最常见的关于颜色的定义有`rgb(光学三原色)`、`rgba(光学三原色+透明度)`、`HEX(十六进制)`：

- rgb(255, 255, 255)
- rgba(255, 255, 255, 1)
- #FFFFFF

如果接触过 threejs 你可能还见过`0xffffff`数值型十六进制的写法

其中 rgb 是目前运用最广的色彩模式之一.
而 HEX 色彩模式是 rgb 的另一种表现形式。
![img](https://upload-images.jianshu.io/upload_images/1668324-a451b06b18ee79b1.png?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp)

而在整个颜色领域较为广泛、普遍受认可的颜色模式有以下几种：

- RGB ：R(Red, 红)、G(Green, 绿)、B(Blue, 蓝)组成的`光学三原色`
- RGBA ：RGB + Alpha，RGB 之上附加了额外的信息。Alpha 通道一般用作不透明度参数
- HEX ：`RGB`、`RGBA`十六进制的表现形式。0xFFFF00、0x80FFFF00(80: Alpha)
- HSL ：H(Hue, 色相)、S(Saturation, 饱和度)、L(Lightness, 亮度)，一种单向圆锥形空间
  ![img](https://img-blog.csdn.net/2018090616223028?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNTk4MDcy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- HSB ：或作 HSV, B(Brightness, 明度)、V(Value, 色明度)。一种对称圆锥形空间
  ![img](http://h.hiphotos.baidu.com/baike/s%3D220/sign=e498df0bf21fbe09185ec4165b610c30/0df431adcbef7609d46579e22edda3cc7cd99e65.jpg)
- CMYK ：应用于印刷工业的色彩模型，C(Cyan, 青色|天蓝色)，M(Magenta, 品红色|洋红色)，Y(Yello, 黄色)，K(blocK, 黑色，防止与 Blue 混淆所以取 K)。CMY 为`色彩三原色`
  ![img](https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9107d126ddca7bcb7d7bc02986320c5e/4610b912c8fcc3ce20f421d69845d688d43f201b.jpg)
- LAB ：是基于人对颜色的感觉来设计的，L(Lightness, 亮度) A(红与绿的饱和度) B(蓝与黄的饱和度)，LAB 可以表示的颜色范围大于 RGB 和 CMYK
- XYZ ：

#### 本章目标

- 学习各个颜色模式基础知识原理
- 学习各个颜色模式之间的转换
- 实现各个颜色模式之间的转换函数
- 实现各个颜色模式的调色板
- 拓展出其他知识

#### 1.1 RGB

RGB 是我们使用最广泛的一种颜色模式，RGB 的 R G B 代表着`光学三原色`。
即`三原色光模式（RGB color model）`

##### 名称

`RGB`、`光学三原色`、`三原色光模式`、`RGB颜色模型`、`红蓝绿颜色模型`

##### 特征

- 因为人类视觉感色细胞的原因，红绿蓝成为三原色合成色彩的基础
- rgb 颜色模型的主要目标是在电子系统中检测、表示和显示图像

![光学三原色](https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=61b81963b319ebc4c478719bb227cf79/10dfa9ec8a1363277a59e435918fa0ec08fac77b.jpg)
通常情况下，RGB 各有 256 级亮度，用数字表示为从 0、1、2...直到 255。注意虽然数字最高是 255，但 0 也是数值之一，因此共 256 级。
按照计算，256 级的 RGB 色彩总共能组合出约 1678 万种色彩，即 256×256×256=16777216。通常也被简称为`1600万色`或`千万色`。也称为`24位色`(2 的 24 次方)。

RGB 颜色模型通常采用单位立方体来表示：
![RGB颜色模型](http://h.hiphotos.baidu.com/baike/s%3D220/sign=4b9e892d34a85edffe8cf921795509d8/c9fcc3cec3fdfc0365ea03c5d43f8794a4c22639.jpg)
![RGB颜色模型](https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=0737033009f79052eb1f403c3cf2d738/0dd7912397dda1448aa71c91b2b7d0a20cf48662.jpg)


#### 1.2 RGBA

RGBA是代表Red和Alpha的色彩空间。虽然它有的时候被描述为一个颜色空间，但是它其实仅仅是RGB模型的附加了额外的信息。

##### 名称

`RGBA`、`ARGB`

##### 特征

- RGB模型扩展Alpha透明度参数

Alpha通道一般用作不透明度参数。如果一个像素的alpha通道数值为0%，那它就是完全透明的（也就是看不见的），而数值为100%则意味着一个完全不透明的像素（传统的数字图像）。
有时它也被写成ARGB（像RGBA一样，但是第一个数据是alpha）


#### 1.2 HEX

RGBA是代表Red和Alpha的色彩空间。虽然它有的时候被描述为一个颜色空间，但是它其实仅仅是RGB模型的附加了额外的信息。

##### 名称

`RGBA`、`ARGB`

##### 特征

- RGB模型扩展Alpha透明度参数

Alpha通道一般用作不透明度参数。如果一个像素的alpha通道数值为0%，那它就是完全透明的（也就是看不见的），而数值为100%则意味着一个完全不透明的像素（传统的数字图像）。
有时它也被写成ARGB（像RGBA一样，但是第一个数据是alpha）


