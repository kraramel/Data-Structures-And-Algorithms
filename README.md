# Data Structures And Algorithms
## Introduction 

This a simple repository where i will try to write implementation of the data structures i will learn. The choice of the programming language is going to be JavaScript. By the time i'm writing this introduction, i can say that i'm just learning JavaScript, so my main goal is to learn the language and trying to understand it more by using data structures and implementing some basic algorithms. So this repository is a way to show my evolution in the language through data structures and algorithms. Hope you will like it.


# Table of Contents
1. [Big O](#example)
1. [How to solve problems](#example)
1. [Arrays](#example)
2. [Hash Tables](#example2)
3. [Linked Lists](#third-example)  
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
> You can check the [code](/arrayClass.js)

### Exercice 1 : Reverse a String

- Create a function that reverses a string:
- Example : '**I love JavaScript**' should be '**tpircSavaJ evol I**'

NOTE ==> **Strings are simply array of characters**

> Here is the [Solution](/reverseString.js)



## License
>You can check out the full license [here](https://github.com/kraramel/Data-Structures-And-Algorithms/blob/master/LICENSE.md)

This project is licensed under the terms of the **GNU General Public License v3.0** license.


