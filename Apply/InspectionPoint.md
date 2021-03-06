# 考察点

* 技术功底考察
> * 基本功考察
> * 技术广度考察
> * 底层技术考察
> * 技术深度考察
* 项目经验考察
* 系统设计考察

```md
以上三个方面 一般 综合来考察。

如 关于 MQ 的相关知识，会有如下问题：
说说你们公司线上生产环境用的是什么消息中间件？
那你们线上系统有哪些技术挑战，为什么必须要在系统里引入消息中间件？
你们的消息中间件技术选型为什么是 RabbitMQ？
为什么不用 RocketMQ 或者是 Kafka？技术选型的依据是什么？
你们怎么保证消息中间件的高可用性？避免消息中间件故障后引发系统整体故障？
使用消息中间件技术的时候，你们怎么保证投递出去的消息一定不会丢失？
你们怎么保证投递出去的消息只有一条且仅仅一条，不会出现重复的数据？
如果消费了重复的消息怎么保证数据的准确性？
你们线上业务用消息中间件的时候，是否需要保证消息的顺序性？
如果不需要保证消息顺序，为什么不需要？假如我有一个场景要保证消息的顺序，你们应该如何保证？
下游消费系统如果宕机了，导致几百万条消息在消息中间件里积压，此时怎么处理？
你们线上是否遇到过消息积压的生产故障？如果没遇到过，你考虑一下如何应对？
你们用的是 RabbitMQ？那你说说 RabbitMQ 的底层架构原理，逻辑架构、物理架构以及数据持久化机制？
你们 RabbitMQ 的最高峰 QPS 每秒是多少？线上如何部署的，部署了多少台机器，机器的配置如何？
你们用的是 Kafka？那你说说 Kafka 的底层架构原理，磁盘上数据如何存储的，整体分布式架构是如何实现的？
再说说 Kafka 是如何保证数据的高容错性的？零拷贝等技术是如何运用的？高吞吐量下如何优化生产者和消费者的性能？
看过 Kafka 的源码没有。如果看过，说说你对 Kafka 源码的理解？
你们用的是 RocketMQ？RocketMQ 很大的一个特点是对分布式事务的支持，你说说它在分布式事务支持这块机制的底层原理？
RocketMQ 的源码看过么，聊聊你对 RocketMQ 源码的理解？
如果让你来动手实现一个分布式消息中间件，整体架构你会如何设计实现？
```

* 整体背景考察
* 与岗位需求的匹配 




