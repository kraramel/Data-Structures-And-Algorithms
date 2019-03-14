# Data Structures And Algorithms
## Introduction 

This a simple repository where i will try to write implementation of the data structures i will learn. The choice of the programming language is going to be JavaScript. By the time i'm writing this introduction, i can say that i'm just learning JavaScript, so my main goal is to learn the language and trying to understand it more by using data structures and implementing some basic algorithms. So this repository is a way to show my evolution in the language through data structures and algorithms. Hope you will like it.


# Table of Contents
1. [Big O](#big-o)
1. [How to solve problems](#how-to-solve-problems)
1. [Arrays](#arrays)
2. [Hash Tables](#hash-tables)
3. [Linked Lists](#linked-lists)  
4. [Stacks](#example)
5. [Queues](#example)
6. [Trees](#example)
7. [Graphs](#example)
8. [Recursion](#example)
9. [Sorting](#example)
10. [Searching + BFS + DFS](#example)
11. [Dynamic Programming](#example)


## Big O

First i'm going to ask you this question : What is a good code ? Well the answer is that the code must be :
1. Readable
2. Scalable

Readability means that your code is generally clean, and others can easily understand it.

Scalable is related to our subject **Big O** . Big O allows us to measure the idea of scalable code. And it reflects the relation between the number of elements that we put as an input in a function and the number of operations that the function needs in order to get the results.

If you want to learn more about this subject you can check this [**Big-O cheat sheet**](http://bigocheatsheet.com/).

But keep in mind that "_**Optimal optimization can be the root of all evil**_".

## How to solve problems

Before we dive into coding problems, data structures and algorithms and all of these fun coding details. we must first  understand this one principle : **How to solve problems** . In this section we are going to talk about technical interviews and how to succeed in them.

First we need to know what companies are looking for. Most people tend to think it's just technical skills. But there is actually four things : 
1. **Analytic Skills**
2. **Coding Skills**
3. **Technical Skills**
4. **Communication skills**

**Analytic Skills** : It is how you can think through a problem and analyzethings. And when you're coding during an interview, they want to hear your tought process and how you go from not  knowing the answer to solving the problem

**Coding Skills** : Is your coding clean, organized and readable

**Technical Skills** : Do you know the fundamentals, do you understand the pros and cons of different solutions

**Communication Skills** : Are you going to fit well and work well in the company


## Arrays

Arrays which are sometimes called lists, organizes items sequentially, that means one after another in memory.

So in JavaScript there is some methods that we can use with arrays.

const strings = ['a', 'b', 'c', 'd'];
1. **push**  : Allows us to add something in the end of the array. ( **0(1)** )


> strings.push( 'e' );  **===>**   [ 'a', 'b', 'c', 'd', 'e' ]

2. **pop** : Removes the last item in the array. ( **O(1)** )

> strings.pop( ); **===>**   [ 'a', 'b', 'c' ]

3. **unshift** : Add an item in the beginning of the array. ( **O(n)** )

> strings.unshift( 'x' ); **===>**   [ 'x', 'a', 'b', 'c', 'd' ]


4. **splice** : Add something in the middle of the array. ( **O(n)** )

> strings.splice( 2 , 0 , ' superman ' ); **===>**   [ 'a', 'b', 'superman', 'c', 'd' ]

This means go to index 2 where c was initially and put superman there, and shift everything to the right.
We can also delete with splice (Second parameter).

### Types of arrays 

There is two types of arrays : 

- Static arrays : They are fixed in size, meaning you need to specify the number of elements your array will hold ahead of time. 

- Dynamic arrays : They automatically allocate memory according to the increase in size of the array.

Luckily for us in JavaScript, arrays are dynamic. We don't have to worry about the allocation of memory.


### Implementing an array

First we are going to create our own array data structure, we are not going to use the pre-implemented type of array that JavaScript has.
> You can check the [code](/Arrays/arrayClass.js)

### Exercice 1 : Reverse a String

- Create a function that reverses a string:
- Example : '**I love JavaScript**' should be '**tpircSavaJ evol I**'

NOTE ==> **Strings are simply array of characters**

> Here is the [Solution](/Arrays/reverseString.js)

### Exercise 2 : Merge Sorted Arrays

- You are given 2 sorted arrays as an input
- And as an output you have to obtain one sorted array that is the fusion of the two input arrays

> Here is the [Solution](/Arrays/mergeSortedArrays.js)

## Hash Tables

In JavaScript, objects are a type of Hash Tables.
Luckily for us, pretty much every language has a built in hash table just like arrays. In python they are called dictionaries, in JavaScript as we said are objects, and in Java they are called maps.
I'm going to be brief about how hash tables works.

First we have to know that a hash table have keys and values. For each key, we find a value.
Now a way of how hash tables works is we have the key which is, as an example, **"orange"** and this key is used as the index of where to find the value in memory.

This is done with something called a **hash function**.
The **hash function** gets to decide where to put the data on our memory. So what's a **hash function** ?

A **hash function** is simply a function that generates a value of fixed length for each input that it gets. Some hash function that you should know : 
- MD5
- SHA-256 et SHA-512

Some key aspects of **hash functions** :

- It's one way
- How many times i put a specific word, the result is going to be the same. But as soon as i change one thing in the input the output is going to completely change. ( Even with capital letters )

### Hash Collisions 
In JavaScript i can create an object :
```
let user ={
    age: 34,
    name: amin,
    magic: true,
    scream: function scream(){
        console.log('GHOOOOOOOR');
    }
}
```
So all of these properties are all going to be placed somewhere in memory at different adresses. Biut i can access this really, really fast.
```
user.age //0(1)
user.spell = 'aboono aboono'; // add the spell         //property with the associated value O(1)
user.scream(); // i can access this function in memory with O(1);
```
So all of this is nice but there is a problem with hash tables, and it is **Hash Collision** 
The collision happens when the hash function gives to two different keys the same adresse in memory. And one of the solution that solve this problem are **Linked Lists**. 

Below an illustration of what we just learned.
![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg/800px-Hash_table_5_0_1_1_1_1_1_LL.svg.png)

### Hash tables in different languages

Now in JavaScript, in an object like `user` that we saw before, if you pass a key that is a number or a function it actually gets stringified and it only allows string keys but with the new version of JvaScript (ES6), you actually have something called Map and Sets.

A map is created like this : ``const a = new Map();`` 
The map allows you to save any datatype as the key.
It also maintains insertion order.

A Set is very similar to map but it only storess keys, no values.
it's created like this : ``const b = new Set();``

### Implementing a Hash Table

> You can check the [code](/HashTables/hashTableClass.js)

### Why Hash Tables

Hash tables are great when you want quick access to certain values. Unlike arrays, where we have to search through the whole array ( O(n) ) . This is why we see hash tables in places like DataBases.
But one problem that we mentionned before is the idea of no concept of order .

Again to see the difference between Hash Tables and Arrays, you can check the [**Big-O cheat sheet**](http://bigocheatsheet.com/)  .

### Exercise 1 : First Recurring Character

- Create a function that search in an array and tells you which number gets repeated first.
- Given an array as an input : **[2, 5, 8, 9, 1, 9]** 
- It should return **9** 
- If there is no number that gets repeated it should return **undefined**

> Here is the [Solution](/HashTables/firstRecurringCharacter.js)

## Linked Lists

It is a simply an element that links to the next element that links to the next element that links to the next element and it keeps going until the last element that points to **null** .

So for **JavaScript**, it doesn't come pre-built with **Linked Lists** . But Luckily for us we can build one.

> A pretty good [website](https://visualgo.net/en/list) for visualizing **Linked Lists** .


### Implementing a Linked List

Now it's time to create our own linked list, below is the structure that we are going to use :
```
// 69 --> 100 --> 11

let  myLinkedList{
    head: {
        value: 69,
        next: {
            value: 100,
            next: {
                value: 11,
                next: null
            }
        }
    }
}
```
> You can check the [code](/HashTables/hashTableClass.js)

## License
>You can check out the full license [here](https://github.com/kraramel/Data-Structures-And-Algorithms/blob/master/LICENSE.md)

This project is licensed under the terms of the **GNU General Public License v3.0** license.


