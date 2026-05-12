---
title: 'summary'
publishDate: 2026-05-08
draft: false
excerpt: '...'
category: ''
tags: []
metadata: {}
---
# Full-Stack Java Backend Engineer Knowledge Catalog



# Block 1. Programming & Runtime Foundation

Foundation of all backend development.

## 1.1 Programming Basics

* variables
* data types
* operators
* conditionals
* loops
* methods/functions

## 1.2 Object-Oriented Programming (OOP)

* class/object
* encapsulation
* inheritance
* polymorphism
* abstraction
* interface
* abstract class

## 1.3 Java Core

* String
* collections
* generic
* enum
* exception
* IO/NIO
* reflection
* annotation

## 1.4 JVM

* JVM structure
* heap / stack
* GC
* class loading
* memory leak
* OOM

## 1.5 Multithreading

* thread
* thread lifecycle
* synchronized
* Lock
* volatile
* CAS
* thread safety

## 1.6 Concurrent Utilities

* ThreadPoolExecutor
* Future
* CompletableFuture
* CountDownLatch
* Semaphore

## 1.7 Sync vs Async

* synchronous
* asynchronous
* blocking
* non-blocking

## 1.8 High Concurrency Basics

* QPS/TPS
* throughput
* latency
* bottleneck
* traffic spike

---

# Block 2. Spring / Framework Core

Core backend framework understanding.

## 2.1 What is Framework

* framework vs library
* inversion of control

## 2.2 Spring Core

* Spring
* Spring Boot
* auto configuration
* starter

## 2.3 IoC / DI

* bean
* container
* BeanFactory
* ApplicationContext
* @Component
* @Service
* @Repository
* @Controller
* @Autowired
* @Resource

## 2.4 AOP

* proxy
* dynamic proxy
* CGLIB
* aspect
* advice
* pointcut

## 2.5 Spring Lifecycle

* bean lifecycle
* initialization
* circular dependency

## 2.6 Spring Boot Startup

* @SpringBootApplication
* auto scan
* starter loading
* configuration loading

---

# Block 3. Web & API Layer

Request processing layer.

## 3.1 HTTP Basics

* request/response
* method
* header
* cookie
* session
* status code

## 3.2 MVC

* MVC architecture
* Spring MVC
* DispatcherServlet

## 3.3 Request Flow

* request lifecycle
* controller mapping
* parameter binding

## 3.4 Controller

* @RestController
* @RequestMapping
* @GetMapping
* @PostMapping
* @PathVariable
* @RequestParam
* @RequestBody

## 3.5 Validation

* @Valid
* @NotNull
* @NotBlank
* global exception handling

## 3.6 Filter / Interceptor

* Filter
* Interceptor
* login check
* permission check
* request logging

## 3.7 API Design

* RESTful API
* pagination
* response wrapper
* API versioning

---

# Block 4. Business Logic & Domain

Most important real-world coding block.

## 4.1 Service Layer

* business logic
* service orchestration
* domain thinking

## 4.2 Transaction

* ACID
* transaction isolation
* @Transactional
* rollback
* propagation

## 4.3 State Management

* state transition
* order status
* coupon lifecycle

## 4.4 Idempotency

* repeated request
* duplicate callback
* token/idempotency key
* unique constraint

## 4.5 Business Flow

* payment flow
* refund flow
* coupon claim flow

## 4.6 Read & Debug Code

* trace request flow
* debug business logic
* find root cause

## 4.7 Design Patterns

* strategy
* factory
* template method
* chain of responsibility

---

# Block 5. Data & Persistence

Data storage and query layer.

## 5.1 Database Basics

* relational database
* table
* PK/FK
* normalization

## 5.2 SQL

* CRUD
* join
* group by
* index
* execution plan

## 5.3 MySQL

* transaction
* lock
* MVCC
* slow query

## 5.4 ORM / Persistence

* MyBatis
* mapper
* XML mapping
* dynamic SQL

## 5.5 Persistence Annotation

* @Table
* @Column
* @Id

## 5.6 Redis

* cache
* TTL
* distributed lock
* atomic operation

## 5.7 Data Consistency

* cache consistency
* DB consistency

---

# Block 6. Concurrency, Async & Distributed

High-traffic backend systems.

## 6.1 High Concurrency

* oversell
* hot key
* hotspot data
* high traffic protection

## 6.2 Locking

* optimistic lock
* pessimistic lock
* distributed lock

## 6.3 Async

* async processing
* async task
* callback

## 6.4 MQ

* Kafka
* RabbitMQ
* producer/consumer
* retry
* dead letter queue

## 6.5 Distributed System

* distributed transaction
* eventual consistency
* CAP
* service split

## 6.6 Resilience

* retry
* timeout
* circuit breaker
* rate limiting

## 6.7 Real Scenarios

* flash sale
* payment callback
* inventory deduction
* coupon claim

---

# Block 7. Infrastructure & Operations

Deployment + production environment.

## 7.1 Linux

* file system
* process
* permission
* command line

## 7.2 Shell

* bash
* shell script

## 7.3 SSH

* remote login
* key pair

## 7.4 Docker

* image
* container
* Dockerfile
* docker-compose

## 7.5 Nginx

* reverse proxy
* load balancing
* static resource

## 7.6 Deployment

* jar deployment
* CI/CD basics

## 7.7 Logs & Monitoring

* logback
* server log
* tracing
* metrics

## 7.8 Performance Tuning

* JVM tuning
* DB tuning
* thread pool tuning

---

# Block 8. Frontend & Full-Stack Interaction

Frontend-backend collaboration.

## 8.1 JavaScript

* ES6
* async/await
* Promise

## 8.2 TypeScript

* type system
* interface
* generic

## 8.3 Vue

* component
* props
* lifecycle
* routing

## 8.4 Frontend Request

* axios
* fetch

## 8.5 Frontend-Backend Interaction

* token
* CORS
* API integration

## 8.6 UI Framework

* layui
* element-ui

## 8.7 SSR

* server-side rendering basics

---

# Block 9. System Design & Performance

Architecture thinking.

## 9.1 Architecture

* layered architecture
* microservice
* modular design

## 9.2 Scalability

* horizontal scaling
* load balancing

## 9.3 Cache Design

* cache strategy
* cache consistency

## 9.4 Performance Optimization

* DB optimization
* API optimization
* JVM optimization

## 9.5 Distributed Architecture

* gateway
* service registry
* config center

## 9.6 Real System Design

* flash sale system
* payment system
* coupon system
* order system

---

# Block 10. AI Usage & AI-Enhanced Development

AI-assisted engineering.

## 10.1 AI Coding Tools

* ChatGPT
* Cursor
* Copilot

## 10.2 Prompt Engineering

* precise prompting
* debugging prompts
* architecture prompts

## 10.3 AI-Assisted Debugging

* log analysis
* stacktrace analysis

## 10.4 AI API Integration

* OpenAI API
* streaming response
* tool calling

## 10.5 RAG Basics

* embedding
* vector DB
* retrieval

## 10.6 AI Product Backend

* AI chat backend
* session memory
* prompt storage

## 10.7 AI + Backend Engineering

* AI-generated CRUD
* AI-assisted refactor
* AI code review
* AI workflow automation

---

# MOST IMPORTANT RELATIONSHIP

```text id="4xstj1"
Block 1 = language/runtime
Block 2 = framework
Block 3 = web request layer
Block 4 = business logic
Block 5 = data layer
Block 6 = high concurrency/distributed
Block 7 = deployment/operations
Block 8 = frontend interaction
Block 9 = architecture/system design
Block 10 = AI-enhanced engineering
```

