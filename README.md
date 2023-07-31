# Image gallery

> A simple

## Table of contents

- [Image gallery](#image-gallery)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Status](#status)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript.

## Screenshots

![Example screenshot](./assets/screenshot.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

```js
export const createTaskElement = (taskText) => {
	const taskItem = document.createElement('li');

	// Create a span to display the task text (hidden while editing)
	const taskSpan = document.createElement('input');
	taskSpan.value = taskText;

	// Add a delete button to the task
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
	deleteButton.className = 'clear-btn';
	deleteButton.addEventListener('click', () => deleteTask(taskItem));

	taskItem.appendChild(taskSpan);
	taskItem.appendChild(deleteButton);

	return taskItem;
};
```

## Status

Project is: _done_
