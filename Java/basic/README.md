# Java 基础

## object中定义了哪些方法？

clone()
equals()
hashCode()
toString()
notify()
notifyAll()
wait()
finalize()
getClass()

## for-each 与 常规for循环的 效率对比

for-each能够让代码更加清晰，并且减少了出错的机会。  
使用for-each循环与常规的for循环相比，并不存在性能损失，即使对数组进行迭代也是如此。  
实际上，在有些场合下它还能带来微小的性能提升，因为它只计算一次数组索引的上限。  

## hashCode的作用是什么？



## ”==“与”equals()"的区别  

“关系操作符生成的是一个boolean结果，它们计算的是操作数的值之间的关系”
==就是用来比较值是否相等
equals是Object类的方法，Object对它的实现是比较内存地址
	可以重写这个方法来自定义“相等”这个概念

## String, StringBuilder, StringBuffer的区别是什么？

String: 不可变的字符序列，若要向其中添加新字符需要创建一个新的String对象
StringBuilder: 可变字符序列，支持向其中添加新字符（无需创建新对象）
StringBuffer: 可以看作线程安全版的StringBuilder

## IO与NIO的区别？

IO 是面向流的，这意味着我们需要每次从流中读取一个或多个字节，直到读取完所有字节。
NIO是面向缓冲的，也就是说会把数据读取到一个缓冲区中，然后对缓冲区中的数据进行相应处理。

IO 是阻塞 IO，而 NIO 是非阻塞 IO  

NIO中存在一个称为选择器（selector）的东西，它允许你把多个通道（channel）注册到一个选择器上，
然后使用一个线程来监视这些通道，若这些通道里有某个准备好可以开始进行读或写操作了，则开始对相应的通道进行读写。
而在等待某通道变为可读/写期间，请求对通道进行读写操作的线程可以去干别的事情。
