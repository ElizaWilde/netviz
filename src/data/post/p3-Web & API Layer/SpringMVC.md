---
title: 'MVC & Spring MVC'

publishDate: 2026-4-23

updateDate: 2026-4-23

draft: false

excerpt: '' # 摘抄

category: 'Web & API Layer'
# Foundation, Framework, Web, Data
# Concurrency ⭐, Infrastructure, Frontend, System Design ⭐, AI ⭐

author: 'QYep'

metadata: {}
---

### MVC

- MVC is a **design pattern**, not a specific technology. **MVC = Model + View + Controller**
    - Model：data + business state (also includes DTO,entities,domain objects)
    - View：what user sees
    - Controller：receives request, calls business logic

### Spring MVC

- Spring MVC is a web application framework,  the part of Spring that handles HTTP requests (web layer)  So in your backend:
    
    ```
    Spring Boot
       ↓
    Spring MVC (web layer)
       ↓
    Your Controller code
    ```
    
- Spring MVC = DispatcherServlet + Controller mapping + Parameter binding + Response rendering
    - It is responsible for: receiving HTTP requests, routing them to controllers, binding parameters. returning responses (JSON / view)
    
    #### Core components inside Spring MVC
    
    | Component | Role |
    | --- | --- |
    | DispatcherServlet | entry point |
    | HandlerMapping | find controller |
    | HandlerAdapter | execute method |
    | Controller | business entry |
    | ViewResolver | render response |
    
    #### Full request flow (Spring MVC core)
    
    1. Request arrives
        
        ```jsx
        POST /coupon/claim
        ```
        
    2. DispatcherServlet receives it
        - This is the **entry point of Spring MVC**
        - why DispatcherServlet is important?
            - All HTTP requests go through dispatcherServlet, it enables: unified request handling, interceptor support, exception handling, logging, security filters
        - Who creates DispatcherServlet?
            - In old Spring MVC (manual config)
                
                You had to configure it yourself:
                
                ```
                <servlet>
                <servlet-name>dispatcher</servlet-name>
                <servlet-class>DispatcherServlet</servlet-class>
                </servlet>
                ```
                
            - In Spring Boot
                - You **do NOT create it manually,** Spring Boot does it automatically using **auto-configuration**
                - Because you added:
                    
                    ```
                    spring-boot-starter-web
                    ```
                    
                    Spring Boot:
                    
                    - detects web dependency
                    - creates DispatcherServlet
                    - registers it
                    - maps it to `/`
    3. Handler Mapping
        
        Spring finds:`@PostMapping("/coupon/claim")`→ maps映射 request to method
        
    4. Handler Adapter适配器
        
        Responsible for:
        
        - calling controller method
        - preparing parameters
    5. Parameter binding绑定
        
        ```jsx
        @RequestBody ClaimRequest req    JSON → Java object
        ```
        
    6. Execute Controller
        
        ```jsx
        couponService.claim(req);
        ```
        
    7. Return result
        
        ```jsx
        return "ok";
        ```
        
    8. View resolution / JSON conversion
        - If `@RestController` → JSON
        - If `@Controller` → HTML view
    9. Response sent
        
        HTTP 200 OK


---
