# 熔断

## 什么是熔断？  

熔断本质上是一个过载保护机制，概念来源于电子工程中的断路器。  

在互联网系统中的熔断机制是指，当下游服务因访问压力过大而响应变慢或失败，  
上游服务为了保护自己以及系统整体的可用性，可以暂时切断对下游服务的调用。  

## Sentinel 还是 Hystrix？ 
 
侧重点：  
Sentinel 主要以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度来帮助用户提升服务的稳定性。  
Hystrix 的关注点在于以隔离和熔断为主的容错机制，超时或被熔断的调用将会快速失败，并可以提供 fallback 机制。  

[参考](https://doocs.github.io/advanced-java/#/./docs/high-availability/sentinel-vs-hystrix)  

