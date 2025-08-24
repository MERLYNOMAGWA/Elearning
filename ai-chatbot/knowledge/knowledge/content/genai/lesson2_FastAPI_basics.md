# **Section Seven: FastAPI Basics**
---

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a953852c-d342-4227-95cb-26bc2e5e8e56/207cfd0f-71d6-4c86-b433-a140699becfb/Untitled.png)

It’s Friday night, and your phone dings "Order received!" Your pizza will arrive in 30 minutes. Ever wondered how your toppings, address, and payment zip from your phone to the pizza shop and back with delivery status?

**APIs** make it happen fast, invisible, and everywhere.

**Why FastAPI?**

- **APIs are the bridge** between your app and the real world: payments, messages, food, or fun!
- **FastAPI** is the fastest, friendliest way to build Python APIs.
- Used by Netflix, Uber, and everyday coders like you!

**By the end of this lesson:**

You’ll build your own API and unlock the power to make apps talk, no magic, just Python.

---

## 💡 Topic: What is an API (Recap)

When you open your pizza app and tap your favorite topping, you’re not talking directly to the kitchen. Instead, your order goes through a “waiter” the API. The waiter understands both you and the kitchen and makes sure the message gets through correctly.

In technical terms, **API** stands for *Application Programming Interface,* but all you need to remember is that it’s a set of rules for how two programs can communicate. One app asks for something, the API delivers the request, and brings back a response. It’s just like ordering at a restaurant:

- **You** ask for food (the client’s request).
- The **waiter** delivers your order to the kitchen (the API in action).
- The **kitchen** makes the pizza (the server processes the request).
- The **waiter** brings your pizza to your table (the API delivers the response).

<aside>
💡

**Remember**, APIs are the messengers that let different programs communicate, request, and deliver information, just like a waiter in a restaurant.

</aside>

So every time your app wants something from pizza toppings to the latest weather update, it sends a request through an API. The API returns exactly what your app needs, in a format both sides understand. The most common “language” these APIs use is something called **JSON,** which looks a lot like a Python dictionary.

> For example:
> 
> 
> `{ "topping": "mushrooms", "size": "large" }`
> 

## 💡 Topic: What is FastAPI?

> So now you know what an API is. But how do you *build* one? That’s where **FastAPI** shines.
> 

FastAPI is a modern tool for making APIs in Python. It’s designed to make your life easier, whether you’re brand new to web programming or building something big. Here’s why developers (including total beginners) love FastAPI:

- **It’s blazing fast:** Your APIs respond instantly, even under heavy load.
- **It’s super clear:** FastAPI uses Python’s type hints, making it easier to write, read, and debug your code.
- **You get docs for free:** Build an API and FastAPI automatically creates a webpage where you and anyone else can test your endpoints with a click.
- **It’s trusted:** Big companies use it, but it’s easy enough for you to start your own project today.

### 🤓 **Let’s Break Down the Key Ingredients**

**1. Endpoints: The Menu Items of Your API**

An **endpoint** is a specific URL where your API does something useful. Imagine each endpoint as a different page on your menu:

- `/menu` shows all available pizzas
- `/order` lets you order a pizza
- `/orders` lists all the orders you’ve made

When you visit these URLs (endpoints), you’re telling your API which “dish” you want.

**2. HTTP Methods: How You Place Your Order**

![image.png](attachment:e9e65b74-2421-4643-892c-d0414fa4edd5:image.png)

Every endpoint speaks a few basic “verbs”; these are the **HTTP methods**:

- **GET:** “Show me the menu.” (Retrieve data)
- **POST:** “I want to order a pizza.” (Create new data)
- **PUT:** “Change my order to large.” (Update existing data)
- **DELETE:** “Cancel my order.” (Remove data)

Just like at a restaurant, you can ask for the menu, place a new order, or change your mind all by using the right method.

**3. Request & Response: The Back-and-Forth Conversation**

When you interact with an API, you’re always part of a two-way street:

- **Request:** You send the details of what you want, maybe it’s “I want a pepperoni pizza, size large.”
- **Response:** The API sends something backmaybe a confirmation, a receipt, or a list of all available toppings.

The API always replies in a predictable format, most often JSON, which is easy for computers *and* humans to read.

**4. JSON: The Common Language**

Here’s what a JSON pizza order might look like:

```json
{
  "topping": "pepperoni",
  "size": "large"
}
```

You can think of JSON as the universal order slip; no matter where you go, any web API can understand it.

<aside>
💡 Are you confused? Ask a question on Piazza!

</aside>

**5. Type Hints & Pydantic: Keeping Orders Clean**

You don’t want the kitchen to get a confusing order, right?

FastAPI uses Python’s **type hints** and a helper called **Pydantic** to make sure the data you send is clear and correct. If you try to order a “gigantic” pizza and only small, medium, and large exist, FastAPI will catch the mistake before it reaches the kitchen.

This is like having your waiter double-check the order before handing it over, catching mistakes before they become a problem.

**6. Instant Docs: See, Click, Test**

One of the best things about FastAPI is that it gives you interactive documentation for free.

When you run your FastAPI app, you can open `/docs` in your browser. There you’ll see every endpoint, every possible request, and you can even try them out without writing extra code or using outside tools. It’s like being able to fill out and submit your own pizza order right from the menu, just to see what happens.

### 🛒 **Putting It All Together: The Pizza Shop in API Terms**

| Real-World Action | API Endpoint | HTTP Method | What You Send | What You Get Back |
| --- | --- | --- | --- | --- |
| See menu | `/menu` | GET | nothing | toppings, sizes |
| Place order | `/order` | POST | pizza details | confirmation |
| List all orders | `/orders` | GET | nothing | list of orders |
| Cancel an order | `/order/{id}` | DELETE | order id | cancellation |

### ✍️ **Reflection**

Once done, answer the following questions inside your notes:

1. What is an API, and why do you think they’re important for apps and websites today?
2. Think of an app or service you use every week (food delivery, maps, messaging, etc). Where do you suspect it’s using APIs under the hood?

## 📋 Instructions

1. **Step one:** Take the following course in Pydantic 👇 (interactive lesson, not a quiz 😉) 

https://quizizz.com/join?gc=19225964

1. **Step Two:** Take the following quick starter course in Fast API
    
    https://youtu.be/iWS9ogMPOI0
    

1. **Step 3:** Take the following  crash course in Fast API 
    
    https://youtu.be/rvFsGRvj9jo
    

1. **Step 4:** Take the following crash course in deploying a backend ( An API) on Vercel. 
    
    https://youtu.be/8R-cetf_sZ4
    
    <aside>
    ⛔
    
    **Note: You are required to go through all the content found in this section before moving on to the next**
    
    </aside>
    

## **🧠 Exercise / Project**

1. Please visit this page to access the project for this section 👇
    
    [Project: Build a Task Tracker backend with FastAPI](https://www.notion.so/Project-Build-a-Task-Tracker-backend-with-FastAPI-21352c038379818d8693e4f41f961681?pvs=21)
    

## :icons8_people_256:Peer Review Activity

1. After completing the Exercise found above, head over to the peer review link below 👇 and give helpful feedback to your classmates and receive some too!
    
    [Peer Review Activity: Task Tracker API with FastAPI](https://www.notion.so/Peer-Review-Activity-Task-Tracker-API-with-FastAPI-21352c038379818ab43be0bbbfbd9d21?pvs=21)
    

## 📚 Additional Resources

- https://fastapi.tiangolo.com/#interactive-api-docs (FastAPI DOCS)
- https://chatgpt.com/g/g-cKXjWStaE-python ( A Python coding assistant in ChatGPT)
- https://chatgpt.com/g/g-0vQ5EDqFG-fastapi ( FastAPI code generator / debugger gpt)

## Meme Break 😎

---

![This will be you soon 😎 ](attachment:0b759377-46c6-42e2-9ac3-46632270f4d9:image.png)

This will be you soon 😎 

[How API work !   #funny #memes.mp4](attachment:8d781ce3-24fe-4620-b7e5-a31038d539d9:How_API_work_!___funny_memes.mp4)

      

---