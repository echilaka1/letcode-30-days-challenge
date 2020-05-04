# 30-Day LeetCoding Challenge

- Single Number: Given a non-empty array of integers, every element appears twice except for one. Find that single one.

- Happy Number: Write an algorithm to determine if a number is "happy". A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

- Maximum Subarray: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

- Move Zeros: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

- Best Time to Buy and Sell Stock II: Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times). Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

- Group Anagrams: Given an array of strings, group anagrams together.

- Counting Elements: Given an integer array arr, count element x such that x + 1 is also in arr. If there're duplicates in arr, count them seperately.

- Middle of the Linked List: Given a non-empty, singly linked list with head node head, return a middle node of linked list. If there are two middle nodes, return the second middle node.

- Backspace String Compare: Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

- Min Stack: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
	- push(x) -- Push element x onto stack.
	- pop() -- Removes the element on top of the stack.
	- top() -- Get the top element.
	- getMin() -- Retrieve the minimum element in the stack.

- Diameter Of A Binary Tree: Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

- Last Stone Weight: We have a collection of stones, each stone has a positive integer weight.

	- Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
		- If x == y, both stones are totally destroyed;
		- If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
		- At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

- Contigous Array: Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

- Perform String Shift: You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
	- direction can be 0 (for left shift) or 1 (for right shift). 
	- amount is the amount by which string s is to be shifted.
	- A left shift by 1 means remove the first character of s and append it to the end.
	- Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
	Return the final string after all operations.

- Product Of An Array Except Self: Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

- Valid Parenthesis String: Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
	- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
	- Any right parenthesis ')' must have a corresponding left parenthesis '('.
	- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
	- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
	- An empty string is also valid.

- Number Of Islands: Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

- Minimum Path Sum: Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
	- Note: You can only move either down or right at any point in time.

- Search In Rotated Sorted Array: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
	- You are given a target value to search. If found in the array return its index, otherwise return -1.
	- You may assume no duplicate exists in the array.
	- Your algorithm's runtime complexity must be in the order of O(log n).

- Construct Binary Search Tree from Preorder Traversal: Return the root node of a binary search tree that matches the given preorder traversal.
	- (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

- Left Most Column With Atleast A One: A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order. Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1. You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:
	- BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
	- BinaryMatrix.dimensions() returns a list of 2 elements [rows, cols], which means the matrix is rows * cols.

Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

- Subarray Sum Equals K: Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

- Bitwise AND of Numbers Range: Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

- LRU Cache: Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
	- get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
	- put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
The cache is initialized with a positive capacity.
Follow up:
Could you do both operations in O(1) time complexity?

- Jump Game: Given an array of non-negative integers, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.

- Longest Common Subsequence: Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings. If there is no common subsequence, return 0.

- Maximal Square: Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

- Binary Tree Maximum Path Sum: Given a non-empty binary tree, find the maximum path sum.For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.