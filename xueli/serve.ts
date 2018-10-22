import express from 'express';
import bodyParser from 'body-parser'
const app=express();
app.use(bodyParser.json());
export class Course{
     constructor(public id:number,public courseName:string,public images:string,public task:number,public person:number,public main:string){
}
}
export class Course1{
  constructor(public id:number,public images:string,public courseName:string,public main:string,public task:number,public person:number){
}
}
export class Course2{
  constructor(public id:number,public images:string,public courseName:string,public main:string,public task:number,public person:number){
}
}
export class Course3{
  constructor(public id:number,public images:string,public courseName:string,public main:string,public task:number,public person:number,public name1:string,public name2:string,public name3:string,public video:string){
}
}
export class list{
  constructor(public id:number,public name1:string,public name2:string,public name3:string,public name4:string,public name5:string,public name6:string,public name7:string,public name8:string,public name9:string,public content:string){
}
}
export class list1{
  constructor(public id:number,public image:string,public name:string,public content:string,public date:string,public a1:string,public a2:string,public a3:string){
}
}
export class list2{
  constructor(public id:number,public image1:string,public image2:string,public coursename:string,public content:string,public name:string,public date:string,public a1:number,public a2:number){
}
}
export class  list3{
  constructor(public id:number,public name:string,public people:string){
}
}
export class  task1{
  constructor(public id:number,public name:string,public task:string){
}
}
export class  task2{
  constructor(public id:number,public name:string,public task:string,public a:number,public b:number){
}
}
const courses=[
    new Course(1,'2016级混合应用开发','http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130',2,91,''),
    new Course(2,'2016级HTML5与CSS3前端开发','http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130',5,91,'本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap'),
    new Course(3,'JavaScript进阶(2016级H5方向基础课)','http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130',23,95,'《JavaScript进阶》是计算机软件及相关专业在H5前端开发方向基础课，它是为培养应用型人才掌握使用计算机的技能而开设的。本课程是一门有关JavaScript脚本语言的进阶课程。学习本课程的同学需具有一定的JavaScript语言基础。通过本课程的学习，可以进一步掌握JavaScript脚本语言（ES5）的相关知识（包括JS预解析、立即执行表达式、作用域及执行上下文、闭包、原型继承、正则表达式、异步等）。同时，也增加了ES6的相关知识（包括let与const、解构赋值、箭头函数、Promise、Generator、class等），为进一步学习计算机有关知识打下坚实基础'),
    new Course(4,'2016级操作系统','http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130',7,398,'操作系统是用户和计算机的接口，同时也是计算机硬件和其他软件的接口。操作系统的功能包括管理计算机系统的硬件、软件及数据资源，控制程序运行，改善人机界面，为其它应用软件提供支持，让计算机系统所有资源最大限度地发挥作用，提供各种形式的用户界面，使用户有一个好的工作环境，为其它软件的开发提供必要的服务和相应的接口等。实际上，用户是不用接触操作系统的，操作系统管理着计算机硬件资源，同时按照应用程序的资源请求，分配资源，如：划分CPU时间，内存空间的开辟，调用打印机等。'),
    new Course(5,'2016级数据库原理','http://usercontent.edu2act.cn/media/team/18-02-26/QMXWNRHDsraTaVofSiRCbF.png?imageView2/1/w/230/h/130',6,400,'2016级数据库原理课程的同步课，方便知识的分享和作业的布置'),
    new Course(6,'2016级数据结构','http://usercontent.edu2act.cn/media/team/17-09-15/ywftcr7DiN6JwRPEgUxPwB.jpg?imageView2/1/w/230/h/130',29,428,'在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象（数据元素）以及它们之间的关系和运算等的学科，而且确保经过这些运算后所得到的新结构仍然是原来的结构类型。'),
    new Course(7,'2016级面向程序设计(C++)','http://usercontent.edu2act.cn/media/team/17-09-14/wFmfsk8VswjGQtzimbK2EE.png?imageView2/1/w/230/h/130',48,394,'C++是在C语言的基础上开发的一种面向对象编程语言，属于编译型语言，应用广泛；C++支持多种编程范式 －－面向对象编程、泛型编程和过程化编程。其编程领域众广，常用于系统开发，引擎开发等应用领 域，支持类、封装、继承、多态等特性!'),
    new Course(8,'WEB(二)2016级3、4班','http://usercontent.edu2act.cn/media/team/17-09-11/bB4GibYLPRBWaWbPDvDynY.jpg?imageView2/1/w/230/h/130',14,104,'系统学习JavaScript和jQuery的相关知识')
];
const courses1=[
  new Course1(1,'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190',' Github 开源之旅视频课程第一季：启程','完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',14,3735),
  new Course1(2,'http://usercontent.edu2act.cn/media/cs/15-11-05/u6eBPFt2FGtndFqRwjByC3.jpg?imageView2/1/w/320/h/190','C软件开发工程师','对高级语言和程序设计的学习和训练被认为是计算科学专业的基本功之一。《程序设计基础》是计算机科学与技术专业的一门重要的专业基础课，也是软件工程专业的一门院专业必修课。课程主要包括两部分内容：C语言相关知识和程序设计技术。C是一种高效而又实用的面向过程的程序设计语言，是编程人员广泛使用的编程工具之一。',37,26558),
  new Course1(3,'http://usercontent.edu2act.cn/media/cs/15-10-26/JtXNabL6Wt64FGiRBWvE2U.jpg?imageView2/1/w/320/h/190','构建丰富的web应用:Javascript','Javascript 是世界上最流行的编程语言。应用Javascript可以构建交互效果丰富的Web应用。Javascript成为了每一个开发人员都知道的语言。',34,21112)
];
const courses2=[
  new Course2(1,'http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130','2016级混合应用开发','',2,91),
  new Course2(2,'http://www.edu2act.cn/static/img/course.png','2017-12-软件测试基础','',1,104),
  new Course2(3,'http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130','2017级Web开发(二)','',3,399),
  new Course2(4,'http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130','2016级测试方向-Web系统测试','该课程包含：测试基础知识复习和实操，探索式测试，敏捷测试，Web安全测试四部分。',3,52),
  new Course2(5,'http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130','2016级HTML5与CSS3前端开发','本课程主要学习HTML5的新特性、CSS3的新特性以及前端开发框架Bootstrap。',5,91),
  new Course2(6,'http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130','2017级3、4班软件测试基础','围绕软件测试基础知识包括基本概念、黑盒测试、白盒测试以及专题化测试等开展。',3,102),
  new Course2(7,'http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130','2018级信息素养实践','2018级学生《信息素养实践》课程在线同步课。',0,12),
  new Course2(8,'http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130','2018级计算机导论','计算机导论课程讲授计算机运行大概过程、简单数值数据在计算机中的表示、计算机硬件的基本组成以及计算机软件的相关知识。',1,396),
  new Course2(9,'http://www.edu2act.cn/static/img/course.png','2018-2019第一学期面向程序设计','',1,104),
  new Course2(10,'http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130','2017级数据结构',' 在计算机科学中，数据结构是一门研究非数值计算的程序设计问题中计算机的操作对象（数据元素）以及它们之间的关系和运算等的学科，而且确保经过这些运算后所得到的新结构仍然是原来的结构类型。',3,401),
  new Course2(11,'http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130','软件学院18级新生训练营','本课程是为河北师大18级软件学院的新生准备的先修课训练营，为培养18级新生，使新生提前接触，提前适应，优秀新生将会选入源码公社算法部，为编程俱乐部做预备队员。',0,78),
  new Course2(12,'http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130','2017级coding暑期训练营','本活动是为17级暑期训练营而创建，由源码公社和编程俱乐部发起，为17级的同学巩固基本语法、写程序的基本思路，并在此基础上，增加java的预习知识篇以及基本算法的基本培训。',13,92)

];
const courses3=[
  new Course3(1,'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','Github 开源之旅视频课程第一季：启程','完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ',14,3737,' 基础知识&实用工具','','课程说明（上）','http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
  new Course3(2,'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190 ','CSS3基础','CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性',12,2317,'WEB 前端开发',' CSS3静态样式','CSS3边框','http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4'),
  new Course3(3,'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190','HTML5基础','HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。',12,1312,'WEB 前端开发','HTML5新功能特性','地理位置定位','http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4'),
  new Course3(4,'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190','Selenium IDE WEB自动化测试入门视频课程（中）','上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。',13,3794,'软件测试','','承前启后','http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4'),
  new Course3(5,'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190','扩展的ICONIX软件过程实践','ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。',12,2269,'基础知识&实用工具','','愿景','http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4'),
  new Course3(6,'http://usercontent.edu2act.cn/media/cs/16-10-28/93BLumGUzRct9BRxKQgWnn.png?imageView2/1/w/320/h/190','Selenium IDE WEB自动化测试入门视频课程 上','上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。',11,3131,'软件测试','','课程简介','http://usercontent.edu2act.cn/media/cs/16-10-28/TSHTtAgU94rzHE4q49JeeW.mp4'),
  new Course3(7,'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190','网页制作与开发','本课程利用线上与线下相结合的授课方式，以网页开发主流软件Dreamweaver为工具，教给学生快速搭建网站的方法。培养学生具备能够利用有限的代码快速搭建出网站页面的能力。',42,1572,' WEB 前端开发','CSS基本样式修饰（一）','字体样式修饰','http://usercontent.edu2act.cn/media/cs/16-11-10/ZjH3sA2sSZhvj699c2MbyR.mp4'),
  new Course3(8,'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190','产品&amp;交互设计那些事儿','本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了一些在具体设计某些功能点时需要注意的问题。',5,1084,'产品设计','','产品&交互新人容易犯的n个错误','<http://usercontent.edu2act.cn/media/cs/16-09-08/SQBTUxgWYUHeiVaFzXhJuQ.mp4'),
  new Course3(9,'http://usercontent.edu2act.cn/media/cs/16-09-08/2sLJNqumrjAEQjwGMCGRN5.png?imageView2/1/w/320/h/190','VR AR产品设计的思考视频课程','“2016是VR元年”，这一观点早已在计算机互联网行业中流行开来，与VR相关的各种分析研究也是层出不穷。而随着Google Cardboard等技术逐渐普及，VR使用成本也在不断降低。VR技术不仅涉及到游戏领域，在训练、教育以及最新提出的全景直播等应用也开始被人不断提出，VR应用必将很快走出传统人们观念中游戏、三维模拟等应用范围，变成像微信、淘宝等常用手机应用一样融入日常生活中，而广大产品经理也需要充分了解VR技术背景，以全新角度规划用户需求发掘、产品功能设计等工作，以求为自身和企业牟取更多发展机遇。',3,4335,' 产品设计','','什么是VR和AR','http://usercontent.edu2act.cn/media/cs/16-09-08/zRSCXZtd3YeN8fFRD5SHfS.mp4'),
  new Course3(10,'http://usercontent.edu2act.cn/media/cs/16-09-02/QV7FBJ72fUkL3sv6Te2FEP.png?imageView2/1/w/320/h/190','ProcessOn界面原型绘制','ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能。本次课程主要介绍其界面原型图的绘制功能。课程主要包括以下几项：ProcessOn界面原型绘制功能的主要操作。ProcessOn界面原型绘制功能的使用技巧。以微信为主要参考，完成微信App的高保真界面原型设计。ProcessOn仅仅是界面原型绘制工具中较为简单的一种，想要完成高质量的原型软件还是使用Axure比较好，',2,4234,'产品设计','','','http://usercontent.edu2act.cn/media/cs/16-09-02/zGzaDrPpMMbCjH6RwRYWUL.mp4'),
  new Course3(11,'http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190','ProcessOn绘制流程图','绘制流程图是在产品设计过程中需求调研阶段非常重要的手段。流程图可以让流程图可以提供一种简单扼要的“缩略俯瞰图”，帮助观众快速了解业务如何运转。而在最关键的PRD文档中插入流程图可以让开发人员更顺畅的了解功能的流程。',4,3053,'产品设计','','流程图概述','http://usercontent.edu2act.cn/media/cs/16-09-02/3i8EkPgeNMGwJXNfkRvMhd.mp4'),
  new Course3(12,'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190','项目管理平台Redmine','本课程讲解了项目管理平台redmine的安装部署、管理员维护、普通用户使用，和其他同类型平台进行了简单的对比。让学员能够熟练的使用redmine进行项目进度的把握。',8,4432,'产品设计','','初识redmine','http://usercontent.edu2act.cn/media/cs/16-09-02/amGih73ADRR6rF4QJuh8xG.mp4')
]
const lists=[
  new list(1,'课程说明(上)','课程说明(下)','注册Github账户','Github个人主页','Github个人主页(下)','Github挖宝(上)','Github挖宝(下)','Github仓库','Git工具','Github是什么？学习Github的理由，以及课程安排等。'),
  new list(2,'1 CSS基础','1-1 CSS3简介','1-2 CSS3选择器','2 CSS3动态样式','2-1 CSS3渐变(上)','2-2 CSS3渐变(下)','2-3 CSS动画','2-4 CSS3 2D 3D 转换','3-CSS3静态样式','学习元素的边框的圆角、以及边框背景。'),
  new list(3,'HTML5简介','1-1 HTML5基础','2 HTML5新标签及其特性','2-1 HTML5标签新特性','2-2 HTML5音频标记','3 HTML5新功能特性','3-1 地理位置定位','3-2 离线应用',' 3-3 本地存储','学习在html5中如何Geolocation实现地理位置定位'),
  new list(4,'1 承前启后','2 常用命令1','3 常用命令2','4 Selenese','5 脚本语法','6 定位元素概述','7 四种简单的定位器','8 CSS定位器','','首先，说明了本课程的前置课程是Selenium IDE WEB自动化测试入门（上），建议大家完成上篇课程的学习并亲自动手完成上篇课程中演示的几个自动化测试案例，再此基础上再学习本课程。其次，总结了上篇中大家已经学习的知识和技能，并预告中篇课程要讲解的6个主题。再次，强调了学习中的一些问题，包括如何在51CTO上查看高清课程视频的方法，以及在中篇课程中每节课程后面安排了作业任务环节。最后，回放演示了在线计算器网站的自动化测试案例。'),
  new list(5,'1 愿景','2 业务用例分析','3 购票的现状业务分析','4 购票的现状业务分析(1)','5 购票的现状业务分析(2)','6 域建模','7 系统用例分析','8 完善系统用例分析','',''),
  new list(6,'1 课程简介','2 自动化测试概述1','3 自动化测试概述2','4 Selenium前世今生','5 Selenium IDE安装配置','6 Selenium IDE功能界面','7 制作自动化测试脚本','8 百度网站自动化脚本制作','','首先，介绍了课程开讲的背景，Selenium 相关的WEB自动化测试技术已经发展多年了，在很多公司都有应用，在网上有很多资料，虽然文档资料并不是很全面。但是51CTO学院居然没有一门专门介绍Selenium 的课程。因此，本课程在某种程度上填补了空白。其次，介绍了学习本课程的前提，需要先学习软件测试基础课程，以及web前端技术包括：HTML、CSS和JavaScript。最后，介绍了课程设置和安排。并将课程案例资料代码放到了GitHub上，地址是 https://github.com/wangding/seIDE，并演示了从GitHub下载自动化测试脚本，并运行自动化测试的效果。'),
  new list(7,'1 Web开发基础知识','1-1 Dreamweaver安装','1-2 web开发基础上','1-3 web开发基础下','2 HTML基础','2-1 网页文件的理解','2-2 HTML语法基础','2-3 自我介绍','','CSS中对于文字的字体、字号、粗细及是否倾斜的修饰方式'),
  new list(8,'1 产品交互新人容易犯的n个错误','2 别让这集中细节毁掉你的APP','3 移动端 PC端产品注册登录问题','4 8中App导航栏设计对比','5 复选框和开关的最佳设计','','','','','列举了作为产品新人和交互新人在做设计的时候容易犯的一些错误，让他们在工作中避免这些错误。'),
  new list(9,'1 什么事vR和AR','2 VR应用中的设计思考','3 AR应用的交互设计心得','','','','','','','介绍了什么是VR和AR，并对二者进行对比，以及VR技术对我们的生活带来的影响。'),
  new list(10,'1 Processon界面绘制基本操作','2 Processon界面绘制实例解析','','','','','','','','ProcessOn绘制流程图时的基本操作，以及使用技巧。还有在使用过程中的一些注意点'),
  new list(11,'1 流程图概述','2 业务流程图','3 业务流程图工具和实例','4 页面流程图','','','','','','简单的认识了流程图的作用，种类，和其他软件图的区别。'),
  new list(12,'1 初识redmire','2 项目配置','3 管理项目','4 普通用户账号管理','5 项目概述和活动','6 问题跟踪和路线图','7 日历和甘特图','8 新闻 文档 文件 讨论区 Wiki','','redmine概述，包括redmine功能介绍，redmine的优势，其他同类型平台对比等。'),
]
const lists1=[
  new list1(1,'http://usercontent.edu2act.cn/media/userheader/16-11-18/gTgy7az8ivRZx7rM2679nE.jpg?imageView2/1/w/120/h/120','4班-丁雪怡:',"GitHub是一个面向开源及私有软件项目的托管平台，同时也是一个it技术人员的社交平台.<br/>理由：1、这是一个开源平台，可以关注一些it大牛的账号<br/>2、可以在这个平台上查询和了解到许多it行业和it技术的动向<br/>3、GitHub是一个开源的平台，通过浏览和阅读可以解决我们的现实问题和增强我们的实战经验<br/>4、GitHub记录了使用者的使用情况和学习程度，可以直观了解到该用户的学习状况，为以后工作打好基础<br/>+'5、课程安排：启程、markdown、git进阶、团队协作'",'2017-04-26 20:46','转发','回复','赞'),
  new list1(2,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(3,'http://www.edu2act.cn/static/img/m.png','321地瓜回复土豆123','有道理','2017-10-13 10:26','转发','回复','赞'),
  new list1(4,'','','','','','',''),
  new list1(5,'','','','','','',''),
  new list1(6,'','','','','','',''),
  new list1(7,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(8,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(9,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(10,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(11,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
  new list1(12,'http://usercontent.edu2act.cn/media/userheader/17-08-21/3ZhbH44vcqrHhidpqxrejJ.png?imageView2/1/w/120/h/120','雪梨教育:','章节内容已更新','2016-11-30 17:06','转发','回复','赞'),
]
const lists2=[
  new list2(1,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg','类定义关键字详解','JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就 ','3-张馨元','2018-10-09 19:21',69,0),
  new list2(2,'http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg','一个JAVA文件中可包含多个main方法','一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只 ','3-张馨元','2018-10-09 19:17',57,2),
  new list2(3,'http://usercontent.edu2act.cn/media/userheader/17-07-18/KbeV987Y2GWmTnUD76Jzan.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg','数据结构-线性表的基本应用','1. 一元多项式的表示和相加        在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。因此，','杨伟斌','2018-10-08 14:28',58,0),
  new list2(4,'http://www.edu2act.cn/static/img/m.png','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/qrZ4o7jdDUfyqA96vEw74A.jpg','WEB开发(二)——字符串类型',' 在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存在的，但是字符串仍然可以遍历，通过下标的方式获取。为什么？ 为甚么字符串还有lengt','刘秀梅','2018-09-29 14:22',243,2),
  new list2(5,'http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256','http://usercontent.edu2act.cn/media/ckeditor/upload2018/0921/qrZ4o7jdDUfyqA96vEw74A.jpg','JavaScript event(事件对象)','      在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件对象中，会包含鼠标位置的信息，而键盘操作导致','刘孟祎','2018-09-28 09:40',55,0)
  
]
const lists3=[
  new list3(1,'#2015级程序设计基...#','6万'),
  new list3(2,'#2015级面向对象程...#','3万'),
  new list3(3,'#cms与模板制作#','3万'),
  new list3(4,'#数据结构#','3万'),
  new list3(5,'#数据库原理(5.6...#','2万'),
  new list3(6,'#Web开发（二）20...#','1万'),
  new list3(7,'#数据库系统概论...#','1万'),
  new list3(8,'#Web开发（二）20...#','1万'),
  new list3(9,'#Web开发（一）20...#','1万'),
]
const tasks1=[
   new task1(1,'任务五 canvas',' 2016级HTML5与CSS3前端开发'),
   new task1(2,'任务二 -- js基础练习与应用','2016级混合应用开发'),
   new task1(3,'任务四 文件与拖放','2016级HTML5与CSS3前端开发'),
   new task1(4,'任务一 -- 组件交互与服务 ','2016级混合应用开发')
]
const tasks2=[
  new task2(1,'任务二十三',' JavaScript进阶（2016级H5方向基础课）',18.00,20),
  new task2(2,'任务二十二 ','JavaScript进阶（2016级H5方向基础课）',9.00,10),
  new task2(3,'任务二十一','JavaScript进阶（2016级H5方向基础课）',9.00,10),
  new task2(4,'任务二十 ','JavaScript进阶（2016级H5方向基础课）',18.00,20)
]
//app.get('/api',(req,res)=>{
  // res.end("hello world");
 // res.json(courses);
//});
app.get('/api/courses',(req,res)=>{
   res.json(courses);
});
app.get('/api/courses1',(req,res)=>{
  res.json(courses1);
});
app.get('/api/courses2',(req,res)=>{
  res.json(courses2);
});
app.get('/api/courses3',(req,res)=>{
  res.json(courses3);
});
app.get('/api/courses2/:id',(req,res)=>{
  req.params;
  res.json(courses2.find((ele)=>ele.id==req.params.id));
});
app.get('/api/lists/:id',(req,res)=>{
  req.params;
  res.json(lists.find((ele)=>ele.id==req.params.id));
});
app.get('/api/lists1/:id',(req,res)=>{
  req.params;
  res.json(lists1.find((ele)=>ele.id==req.params.id));
});
app.get('/api/lists2',(req,res)=>{
  res.json(lists2);
});
app.get('/api/lists3',(req,res)=>{
  res.json(lists3);
});
app.get('/api/tasks1',(req,res)=>{
  res.json(tasks1);
});
app.get('/api/tasks2',(req,res)=>{
  res.json(tasks2);
});
app.get('/api/courses3/:id',(req,res)=>{
  req.params;
  res.json(courses3.find((ele)=>ele.id==req.params.id));
});
app.get('/api/courses/:id',(req,res)=>{
   req.params;
   res.json(courses.find((ele)=>ele.id==req.params.id));  //?
});
app.post('/api',(req,res)=>{
  console.log(req.body);    //req.body拿到请求的数
  res.json(courses);
})

      
app.listen(8080);