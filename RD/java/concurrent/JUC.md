# java.util.concurrent

* ConcurrentHashMap的并发度是什么
```md
segment的大小，默认为16
	这意味着最多同时可以有16条线程操作ConcurrentHashMap
这也是ConcurrentHashMap对Hashtable的最大优势
```
* Hashtable的size()方法中明明只有一条语句"return count"，为什么还要做同步？
* ArrayBlockingQueue
```md
	一个基于数组实现的阻塞队列，它在构造时需要指定容量。
	当试图向满队列中添加元素或者从空队列中移除元素时，当前线程会被阻塞。
	通过阻塞队列，我们可以按以下模式来工作：
		工作者线程可以周期性的将中间结果放入阻塞队列中，其它线程可以取出中间结果并进行进一步操作。
		若工作者线程的执行比较慢（还没来得及向队列中插入元素），其他从队列中取元素的线程会等待它（试图从空队列中取元素从而阻塞）
		若工作者线程执行较快（试图向满队列中插入元素），则它会等待其它线程取出元素再继续执行。
```
* BlockingQueue有四个具体的实现
```md
	ArrayBlockingQueue
	LinkedBlockingQueue
		大小不定的BlockingQueue
		若其构造函数带一个规定大小的参数,生成的BlockingQueue有大小限制
		若不带大小参数,所生成的BlockingQueue的大小由Integer.MAX_VALUE来决定
		其所含的对象是以FIFO(先入先出)顺序排序的
	PriorityBlockingQueue
	SynchronousQueue
```