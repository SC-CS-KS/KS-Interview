# Java Basic

* object中定义了哪些方法？
```md
	clone()
	equals()
	hashCode()
	toString()
	notify()
	notifyAll()
	wait()
	finalize()
	getClass()
```
* for-each与常规for循环的效率对比
```md
	for-each能够让代码更加清晰，并且减少了出错的机会。
	使用for-each循环与常规的for循环相比，并不存在性能损失，即使对数组进行迭代也是如此。
	实际上，在有些场合下它还能带来微小的性能提升，因为它只计算一次数组索引的上限。
```

* hashCode的作用是什么？

* ”==“与”equals()"的区别
```md
	　“关系操作符生成的是一个boolean结果，它们计算的是操作数的值之间的关系”
		==就是用来比较值是否相等
	equals是Object类的方法，Object对它的实现是比较内存地址
		可以重写这个方法来自定义“相等”这个概念
```

* String, StringBuilder, StringBuffer的区别是什么？
```md
String: 不可变的字符序列，若要向其中添加新字符需要创建一个新的String对象
StringBuilder: 可变字符序列，支持向其中添加新字符（无需创建新对象）
StringBuffer: 可以看作线程安全版的StringBuilder
```
