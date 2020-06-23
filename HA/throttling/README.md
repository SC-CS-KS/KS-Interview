# 限流

## 什么是限流？

限流可以认为服务降级的一种，限流就是限制系统的输入和输出流量已达到保护系统的目的。  

一般来说系统的吞吐量是可以被测算的，为了保证系统的稳定运行，  
一旦达到的需要限制的阈值，就需要限制流量并采取一些措施以完成限制流量的目的。  

比如：延迟处理，拒绝处理，或者部分拒绝处理等等。  

## 限流的方法有哪些？

* 计数器  

控制单位时间内的请求数量  

问题：  
假设在 00:01 时发生一个请求，在 00:01-00:58 之间不在发送请求，  
在 00:59 时发送剩下的所有请求 n-1 (n为限流请求数量)，  
在下一分钟的 00:01 发送n个请求，这样在2秒钟内请求到达了 2n - 1 个。  

* 滑动窗口  

滑动窗口是对计数器方式的改进, 增加一个时间粒度的度量单位。  
把一分钟分成若干等分(6份,每份10秒)，在每一份上设置独立计数器，在 00:00-00:09 之间发生请求计数器累加1。  
当等分数量越大限流统计就越详细。  

* Leaky Bucket 漏桶  

规定固定容量的桶，有水进入，有水流出。    
对于流进的水我们无法估计进来的数量、速度， 对于流出的水我们可以控制速度。  

* Token Bucket 令牌桶  

规定固定容量的桶，token 以固定速度往桶内填充，  
当桶满时 token 不会被继续放入，每过来一个请求把 token 从桶中移除，如果桶中没有 token 不能请求。  

## 有哪些限流开源实现方式？

* Spring Cloud Gateway  

默认使用redis进行限流。  

* sentinel  

通过配置来控制每个url的流量，滑动窗口算法。  

* Nginx  

连接数限流模块（ngx_http_limit_conn_module）  
漏桶算法实现的请求限流模块（ngx_http_limit_req_module）  

* OpenResty  

lua-resty-limit-traffic  

* Guava RateLimiter  

采用令牌桶算法