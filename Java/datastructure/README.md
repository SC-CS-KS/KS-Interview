# Java 数据结构

   * [Java 数据结构](#java-数据结构)
      * [Collection 与 Collections的区别是什么？](#collection-与-collections的区别是什么)
      * [Map, Set, List, Queue、Stack特点及用法](#map-set-list-queuestack特点及用法)
      * [ArrayList, LinkedList, Vector的区别是什么？](#arraylist-linkedlist-vector的区别是什么)
      * [TreeMap, LinkedHashMap, HashMap的区别是什么？](#treemap-linkedhashmap-hashmap的区别是什么)
         * [Hashmap 考察点](#hashmap-考察点)
         * [什么时候会使用HashMap？他有什么特点？](#什么时候会使用hashmap他有什么特点)
         * [HashMap 在put和get的时候是怎么工作的？](#hashmap-在put和get的时候是怎么工作的)
         * [equals()和hashCode()的都有什么作用？](#equals和hashcode的都有什么作用)
         * [HashMap的key为什么一般用字符串比较多，能用其他对象，或者自定义的对象吗？为什么？](#hashmap的key为什么一般用字符串比较多能用其他对象或者自定义的对象吗为什么)
         * [刚才提到HashMap不是线程安全的，你怎么理解线程安全。原理是什么？ 几种方式避免线程安全的问题。](#刚才提到hashmap不是线程安全的你怎么理解线程安全原理是什么-几种方式避免线程安全的问题)
         * [如果HashMap的大小超过了负载因子(load factor)定义的容量，怎么办？](#如果hashmap的大小超过了负载因子load-factor定义的容量怎么办)
      * [ConcurrentHashMap 的实现原理?](#concurrenthashmap-的实现原理)

## Collection 与 Collections的区别是什么？

Collection 是 Java 集合框架中的基本接口。
Collections 是 Java 集合框架提供的一个工具类，其中包含了大量用于操作或返回集合的静态方法。

## Map, Set, List, Queue、Stack特点及用法

* Map  

存储键值对的数据类型都实现了这个接口，表示“映射表”。
支持的两个核心操作是get(Object key)以及put(K key, V value)  

* Set  

实现了这个接口的集合类型中不允许存在重复的元素，代表数学意义上的“集合”
它所支持的核心操作有add(E e), remove(Object o), contains(Object o)  

* List  

集合框架中的列表类型都实现了这个接口，表示一种有序序列。
支持get(int index), add(E e)等操作。  

* Queue  

集合框架中的队列接口，代表了“先进先出”队列  
支持add(E element),remove()等操作  

* Stack  

表示堆栈的数据类型，堆栈是一种“后进先出”的数据结构。
支持push(E item), pop()等操作。 

## ArrayList, LinkedList, Vector的区别是什么？

ArrayList: 内部采用数组存储元素，支持高效随机访问，支持动态调整大小
LinkedList: 内部采用链表来存储元素，支持快速插入/删除元素，但不支持高效地随机访问
Vector: 可以看作线程安全版的ArrayList

## TreeMap, LinkedHashMap, HashMap的区别是什么？

* HashMap   

底层实现是散列表，因此它内部存储的元素是无序的。  

* TreeMap   

的底层实现是红黑树，所以它内部的元素的有序的，  
排序的依据是自然序或者是创建TreeMap时所提供的比较器（Comparator）对象。  

* LinkedHashMap    

可以看作能够记住插入元素的顺序的HashMap。  

### Hashmap 考察点

HashMap的面试问题能够考察面试者的线程问题、Java内存模型问题、
线程可见与不可变问题、Hash计算问题、链表结构问题、二进制的&、|、<<、>>等问题。

### 什么时候会使用HashMap？他有什么特点？

是基于Map接口的实现，存储键值对时。    
它可以接收null的键值，是非同步的。  
HashMap存储着Entry(hash, key, value, next)对象。  

### HashMap 在put和get的时候是怎么工作的？

### equals()和hashCode()的都有什么作用？

通过对key的hashCode()进行hashing，并计算下标( n-1 & hash)，从而获得buckets的位置
如果产生碰撞，则利用key.equals()方法去链表或树中去查找对应的节点

### HashMap的key为什么一般用字符串比较多，能用其他对象，或者自定义的对象吗？为什么？

### 刚才提到HashMap不是线程安全的，你怎么理解线程安全。原理是什么？ 几种方式避免线程安全的问题。

### 如果HashMap的大小超过了负载因子(load factor)定义的容量，怎么办？

如果超过了负载因子(默认0.75)，则会重新resize一个原来长度两倍的HashMap，并且重新调用hash方法。  

## ConcurrentHashMap 的实现原理?

特点是读取数据时无需加锁，写数据时可以保证加锁粒度尽可能的小。
采用“分段存储”，只需对要进行写操作的数据所在的“段”进行加锁。