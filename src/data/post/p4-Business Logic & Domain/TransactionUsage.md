---
title: 'Transaction usage'

publishDate: 2026-4-28

updateDate: 2026-4-28

draft: false

excerpt: '' # 摘抄

category: 'Business Logic & Domain'

author: 'QYep'

metadata: {}
---

### What is a Transaction?

- A **transaction** is a group of operations that must be treated as **one unit**.
- In database terms, it follows **ACID**:
    - **Atomicity** → all succeed OR all fail
    - **Consistency** → data stays correct
    - **Isolation** → concurrent transactions don’t break each other
    - **Durability** → once committed, data is permanent

### What is `@Transactional`?

- `@Transactional` is implemented by AOP to automatically manage transaction lifecycle for business methods.
    
    ```jsx
    @Service
    public class CouponService {
    
        @Transactional
        public void claimCoupon(Long userId, Long campaignId) {
            // 1. check stock
            // 2. deduct stock
            // 3. create user coupon
            // 4. create claim record
        }
    }
    ```
    
    - Spring automatically start transaction before method, commit if success or rollback if exception.
- How it actually works (very important for debugging)
    - Step 1: Spring creates a proxy object —— YourService → Proxy → Real Method
    - Step 2: AOP intercepts method call —— call method() → [AOP intercept] → start transaction → execute method → success>commit/error>rollback
- Transaction only works on PUBLIC methods
- Self-call will FAIL (classic bug)  —— because AOP proxy is bypassed
    
    ```jsx
    public void A() {
    	B(); // ❌ transaction NOT applied
    }
    
    @Transactional
    public void B() {}
    ```
    
- Default rollback only for RuntimeException

---
