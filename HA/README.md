# 高可用  

## [限流](throttling/README.md)

## 降级

## 熔断  

## 限流、降级和熔断的区别？  

限流是从系统的流量入口考虑，从进入的流量上进行限制，达到保护系统的作用。  
熔断强调的是服务之间的调用能实现自我恢复的状态。  
降级，是从业务的维度考虑，流量大了，可以干掉一些，保护其他正常使用。  

服务熔断一般是下游服务故障导致的，而服务降级一般是从整体系统负荷考虑，由调用方控制。  
触发原因不同，通常情况下，熔断发生的条件要更加严重，发生的概率要小。  

## 保证服务高可用的常用策略有哪些？

容量评估  
负载均衡  
限流  
排队  
服务降级
服务隔离    
熔断  
多数据中心  
分层过滤  
提前分流  

## 如何设计一个高可用系统？  

## 如何设计一个高并发系统？  

思路：  
* 系统拆分  
* 缓存  
* MQ  
* 分库分表  
* 读写分离  
* ElasticSearch  
ES 是分布式的，可以随便扩容，分布式天然就可以支撑高并发，因为可以通过扩容来扛更高的并发。  
一些比较简单的查询、统计类的操作，可以考虑用 es 来承载，  
还有一些全文搜索类的操作，也可以考虑用 es 来承载。  

[参考](https://doocs.github.io/advanced-java/#/./docs/high-concurrency/high-concurrency-design)  

