# AngularJS - ngLoupeField directive

AngularJS directive to include loupe field components in your AngularJS applications! You can load the suggestions from a remote REST API, it also supports javascript objects.

It's based on [loupe field component](https://github.com/DISID/gvnix-samples/tree/master/quickstart-app#loupe-fields) from [gvNIX](http://www.gvnix.org/en/index.html) project.

Checkout the demo to see what it does.

## Requirements

Include the following components on your index.html before use ngLoupeField directive:

### jQuery, Angular & Angular Datatables

ngLoupeField uses [Angular Datatables](http://l-lin.github.io/angular-datatables/#/welcome) and [jQuery](https://jquery.com/) to display records on a dynamic table called [Datatable](https://www.datatables.net/).

To include Angular Datatables into your AngularJS project you must include the JS file in this order. AngularJS MUST use jQuery and not its jqLite!

```html
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.1/angular.min.js"></script>
	<script src="angular-datatables.min.js"></script>
```
Declare datatable dependencies on your module app like this:

```javascript
	var app = angular.module('app', ['datatables']);
```

### Font-Awesome

ngLoupeField directive uses [Font Awesome](http://fortawesome.github.io/Font-Awesome/) to print loupe icon, so
you need to include the stylesheet of Font-Awesome. 

```html
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
```

## Setup

Load the stylesheet of the loupe field component:

```html
	<link rel="stylesheet" href="dist/ngLoupeField.min.css">
```

Then in your HTML you should load ngLoupeField directive like this:

```html
	<script type="text/javascript" src="dist/ngLoupeField.min.js"></script>
```

In your main script file you should add it as dependency:

```javascript
	var app = angular.module('app', ['datatables', 'ngLoupeField']);
```

## Usage

TBC

## Attributes

TBC 

## Example

TBC

## Development

TBC

## Change Log

TBC
