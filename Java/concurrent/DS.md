# Java并发数据结构

## ThreadLocal 原理？

是一种以 空间换时间 的做法，在每个Thread里面维护了一个以开地址法实现的ThreadLocal.ThreadLocalMap。  
把数据进行隔离，数据不共享，自然就没有线程安全方面的问题了。  

ThreadLocal的设计理念与作用，是提供线程内的局部变量，在多线程环境下访问时能保证各个线程内的ThreadLocal变量各自独立。  

最常用于以下这个场景
多线程环境下存在对非线程安全对象的并发访问，而且该对象不需要在线程间共享。  
但是我们不想加锁，这时候可以使用ThreadLocal来使得每个线程都持有一个该对象的副本。

## ConcurrentHashMap的并发度是什么？  

segment的大小，默认为16，这意味着最多同时可以有16条线程操作ConcurrentHashMap。  
这也是ConcurrentHashMap对Hashtable的最大优势。  

## BlockingQueue有四个具体的实现

* ArrayBlockingQueue   

* LinkedBlockingQueue  
大小不定的BlockingQueue，
若其构造函数带一个规定大小的参数,生成的BlockingQueue有大小限制
若不带大小参数，所生成的BlockingQueue的大小由Integer.MAX_VALUE来决定，其所含的对象是以FIFO(先入先出)顺序排序的。  

* PriorityBlockingQueue  

* SynchronousQueue  

## 什么是ArrayBlockingQueue？

一个基于数组实现的阻塞队列，它在构造时需要指定容量。  
当试图向满队列中添加元素或者从空队列中移除元素时，当前线程会被阻塞。  

通过阻塞队列，我们可以按以下模式来工作：
工作者线程可以周期性的将中间结果放入阻塞队列中，其它线程可以取出中间结果并进行进一步操作。  
若工作者线程的执行比较慢（还没来得及向队列中插入元素），其他从队列中取元素的线程会等待它（试图从空队列中取元素从而阻塞）。  
若工作者线程执行较快（试图向满队列中插入元素），则它会等待其它线程取出元素再继续执行。  

## Hashtable的size()方法中明明只有一条语句"return count"，为什么还要做同步？
