# Thread Pool

## 为什么要使用线程池？

1. 避免频繁地创建和销毁线程，达到线程对象的重用。  
2. 使用线程池还可以根据项目灵活地控制并发的数目。

## 线程池的用法

可以调用ThreadPoolExecutor的某个构造方法来自己创建一个线程池。  

但通常情况下我们可以使用Executors类提供给我们的静态工厂方法来更方便的创建一个线程池对象。  

建了线程池对象后，我们就可以调用submit方法提交任务到线程池中去执行了，  
线程池使用完毕后我们要记得调用shutdown方法来关闭它。  

## 线程池的实现

ThreadPoolExecutor 继承自 AbstractExecutorService 实现了 ExecutorService 接口。  
ScheduledThreadPoolExecutor 继承自 ThreadPoolExecutor 实现了 ExecutorService 和 ScheduledExecutorService 接口。  

有多个构造方法，最终都指向这个最多参数的构造方法：  
* corePoolSize  
核心运行的线程个数，也就是当超过这个范围的时候就需要将新的异步任务放入到等待队列中，  
小于这个数时添加进来的异步任务一般直接新建Thread 执行。  

* maximumPoolSize
最大线程个数，当大于了这个值就会将准备新加的异步任务由一个丢弃处理机制来处理。  
大于 corePoolSize 且小于 maximumPoolSize 则新建 Thread 执行。  
但是当通过newFixedThreadPool 创建的时候，corePoolSize 和 maximumPoolSize 是一样的，  
而corePoolSize 是先执行的，所以他会先被放入等待队列而不会执行到下面的丢弃处理中。  

* workQueue  
任务等待队列，当达到 corePoolSize的时候就向该等待队列放入线程信息（默认为一个LinkedBlockingQueue）。

* keepAliveTime
默认是 0，当线程没有任务处理后空闲线程保持多长时间，不推荐使用；

* threadFactory
是构造 Thread 的方法，一个接口类，可以使用默认的 default实现，也可以自己去包装和传递，主要实现 newThread 方法即可；

* defaultHandler
当参数 maximumPoolSize 达到后丢弃处理的方法实现，java 提供了 5种丢弃处理的方法。  

## 如果你提交任务时，线程池队列已满，这时会发生什么？  

如果使用的是无界队列LinkedBlockingQueue，继续添加任务到阻塞队列中等待执行。  

如果使用的是有界队列比如ArrayBlockingQueue，  
任务首先会被添加到ArrayBlockingQueue中，ArrayBlockingQueue满了，会根据maximumPoolSize的值增加线程数量。  
如果增加了线程数量还是处理不过来，ArrayBlockingQueue继续满，  
那么则会使用拒绝策略RejectedExecutionHandler处理满了的任务，默认是AbortPolicy。  
