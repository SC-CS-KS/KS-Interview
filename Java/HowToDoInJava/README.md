# HowToDoInJava - Java Interview Questions  

## 1.1 核心Java面试问题系列

### 第一部分 

* 如何在Java中创建不可变对象？算上所有好处？  
* Java是按引用传递还是按值传递？  
* finally块的用途是什么？Java中的finally块是否可以保证被调用？ 最终何时不调用块？
* 为什么有两个Date类；为什么？ 一个在java.util包中，另一个在java.sql中？
* 什么是标记界面？
* 为什么Java中的main（）被声明为public static void main？
* 将String创建为new（）和原义文字有什么区别？
* String中的substring（）如何工作？
* 解释HashMap的工作。
* 接口和抽象类之间的区别？
* 什么时候覆盖hashCode和equals（）？

### 第二部分  

* 为什么要避免使用finalize（）方法？  
* 为什么不应该在多线程环境中使用HashMap？ 它也会引起无限循环吗？  
* 解释抽象和封装？ 它们有什么关系？  
* 接口和抽象类之间的区别？  
* StringBuffer如何保存内存？  
* 为什么在对象类而不是线程中声明了wait and notify？  
* 编写Java程序以在Java中创建死锁并修复死锁？  
* 如果您的Serializable类包含一个不可序列化的成员，该怎么办？ 您如何解决？  
* 解释Java中的瞬态和volatile关键字？  
* Iterator和ListIterator之间的区别？  

### 第三部分

* 什么是同步？ 类级别锁定和对象级别锁定？  
* sleep（）和wait（）之间的区别？  
* 您可以为该参考变量分配null吗？  
* 如果&&和＆??之间的区别怎么办？  
* 如何重写equals和hashCode（）方法？  
* 解释所有访问修饰符？
* 什么是垃圾收集？ 我们可以执行吗？
* 什么是原生关键字？  
* 什么是序列化？ 解释渔获物？  

## 1.2 对象初始化的最佳做法

在Java中，对象初始化被认为是一个很重的过程，你需要知道每个新创建的对象是如何影响内存和应用程序性能的。  
一个简单的例子是Java包装类，它从外部看起来非常简单，就像原语一样，但实际上它们并没有看上去那么简单。  

了解Java如何帮助你在包装类(如Double、Long或Integer)内部缓存对象。  

## 1.3 HashMap 是如何工作的

* HashMap如何存储键值对？  
* HashMap如何解决冲突？  
* HashMap中如何使用hashCode（）和equals（）方法？  
* 密钥的随机/固定hashCode（）值的影响？  
* 在多线程环境中使用HashMap？  

## 1.4 HashMap Key 好的设计

* 为什么String是HashMap的好钥匙？  
* 您将如何设计一个用作键的类？    
* 您将重写Key类中的hashCode（）方法吗？ 有什么影响？  
* 为可以作为HashMap关键对象的类编写语法？  

## 1.5 ConcurrentHashMap 相关问题

HashMap不是线程安全的。  
可以在并发应用程序中使用HashTable，但是它会影响应用程序性能。  
所以有ConcurrentHashMap，它是HashMap的并发版本，具有与HashMap相同的性能，同时也是线程安全的。  

## 1.6 Java 集合框架 相关问题  

* 解释 Collections 层次？  
* 集和列表之间的区别？  
* Vector和ArrayList之间的区别？
* HashMap和HashTable之间的区别？
* Iterator和ListIterator之间的区别？
* 为什么Map接口没有扩展Collection接口？
* 如何将String数组转换为ArrayList？
* 如何反转列表？  
* HashSet如何存储元素？  
* 是否可以将null元素添加到TreeSet或HashSet中？
* 什么是IdentityHashMap和WeakHashMap？
* 什么时候使用HashMap或TreeMap？
* 如何使 collection 只读？
* 如何使 collection 线程安全？  
* fail-fast 和 fail-safe 之间有什么区别？
* 什么是 Comparable 和 Comparator 接口？
* 什么是Collections和Arrays类？
* 什么是队列和堆栈？ 列出他们的差异？

## 1.7 什么是Java中的多态性

简而言之，多态就是我们可以创建在不同程序环境下表现不同的函数或引用变量的能力。  
与继承，抽象和封装一样，多态是面向对象编程的主要构建块之一。  

## 1.8 Java中的抽象是什么  


## 1.9 抽象 和 封装

了解抽象和封装之间的区别是深入理解这两个概念的关键，不能孤立地学习两者。  

## 1.10 接口和抽象类之间的区别？

自从Java语言诞生以来，就已经清晰地把抽象类和接口相分离。  
但到了Java 8，发生了很多变化，它的核心概念之一是功能接口。  

功能接口完全改变了我们看待Java语言的两个基本构建块的方式。 

## 1.11 枚举的相关问题

枚举已成为核心构建块很长时间了，在大多数流行的Java库中都可以看到它们。  
它帮助你以更加面向对象的方式管理常量。  

* 枚举与枚举类之间的区别？  
* 枚举可以与String一起使用吗？  
* 我们可以扩展枚举吗？  
* 写枚举的语法？  
* 如何在枚举中实现反向查找？  
* 什么是EnumMap和EnumSet？  

## 1.12 Java序列化和 Serializable 接口

* 什么是serialVersionUID？  
* 什么是readObject和writeObject？  
* 您将序列化和反序列化一个类吗？  
* 您将如何对类进行更改，以使序列化不中断？  
* 我们可以序列化静态字段吗？  

## 1.13. Java Main 方法

* Java main 方法语法？
* 为什么main方法是 公有的（public）？
* 为什么main方法是 静态的（static）？
* 为什么main方法返回值是 void？
* 当调用main方法时，内部会发生什么？

## 1.14. Java 对象克隆

* clone（）方法如何工作？
* Java中的浅拷贝是什么？
* 什么是复制构造函数？
* Java中的深拷贝是什么？
* 创建对象的深拷贝的不同方法？  

## 1.15 什么是 CountDownLatch?


## 1.16 为什么字符串是不可变的?  

不变对象意味着对象的状态一旦初始化，就永远无法更改。  
Java中的String类和wrapper类为不可变类。  

接下来我们来回答为什么字符串是不可变的：  
1. 最重要的原因是安全性  
Java类加载机制对作为参数传递的类名称起作用，然后在类路径中搜索这些类。  
如果字符串是可变的，那么任何人都可以轻松地注入自己的类加载机制。  
2. 性能  
String类的不可变性，使得字符串池发挥作用，提高了性能。  
3. 线程安全  
不可变对象在多线程应用程序中的多个线程之间共享时是安全的。  

## 1.17 怎样才能使得一个Java类不可变

通常，通过以下步骤可实现Java的不变性：  
1. 不要给类中的字段提供任何的赋值方法；
2. 使所有字段为final 和 private；
3. 不允许子类覆盖方法  
最简单的方法是将类声明为final，Java中的final类无法被继承。  
4. 返回深拷贝的对象，其中包含类中所有可变字段的拷贝内容  
永远记住，实例变量要么是可变的，要么是不可变的。  
标识它们并为所有可变对象返回带有拷贝内容的新对象。

复杂巧妙的的方法是使构造函数私有，并在工厂方法中构造实例。  

* JDK中的不可变类：  
String  
Wrapper（包装类） Integer, Long, Double etc等
Immutable collection classes 如 Collections.singletonMap() 等.
java.lang.StackTraceElement
Java enums (理想情况下应该如此)
java.util.Locale
java.util.UUID  

* 使类不可变的好处  
1. 易于构建，测试和使用  
2. 自动是线程安全的，并且没有同步问题
3. 不需要复制构造函数  do not need a copy constructor
4. 不需要拷贝的实现 do not need an implementation of clone
5. 允许hashCode*()使用延迟初始化，并缓存其返回值
6. 用作字段时不需要防御性地拷贝
7. 作为更好的Map Key 和Set元素（这些对象在集合中时不得更改状态）
8. 在构造时就建立了其类不变式，因此无需再次检查
9. 总是具有“失败原子性”（ “failure atomicity”，约书亚·布洛赫（Joshua Bloch）使用的术语）： 
如果不可变的对象抛出异常，则永远不会处于不希望的状态或不确定的状态。  

[参考](https://howtodoinjava.com/java/basics/how-to-make-a-java-class-immutable/)  

## 2.1 什么是线程安全？  

* 线程安全的正确性是什么？  
* 举个线程安全类的例子吗？  
* 您将如何设计线程安全的Java类？  
* 不变类线程安全吗？  

## 2.2 对象级锁与类级锁


## 2.3 “implements Runnable” and “extends Thread”的区别？

* Thread and Runnable的区别?  
* 通过 Runnable interface 创建可以运行线程？
* 两者之间应首选哪种方法？  

