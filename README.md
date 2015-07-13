# AngularJS - ngLoupeField directive

AngularJS directive to include loupe field components in your AngularJS applications! You can load the suggestions from a remote REST API, it also supports javascript objects.

It's based on [loupe field component](https://github.com/DISID/gvnix-samples/tree/master/quickstart-app#loupe-fields) from [gvNIX](http://www.gvnix.org/en/index.html) project.

Checkout the demo to see what it does.

## Requirements

Include the following components on your index.html before use ngLoupeField directive:

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
	var app = angular.module('app', ['ngLoupeField']);
```

## Usage

If you want a loupe field on your AngularJS application, you can just use `<ng-loupe-field>` tag in your HTML adding some necessary attributes.

### Attributes

`id` : Unique identifier of the new loupe field. Every loupe field must have an unique id to prevent errors. If the same id is defined, a WARN will be appear on console.

`path` : Path URL to get JSON object. You could use a REST URL or a local .json file.

`columns` : Columns of the JSON object for which you want to search. This columns will be visible on modal dialog when you press loupe button.

`caption` : Column that you want to use as value when select an item on table.

`placeholder` : *(optional)* Text that you want to show when input loupe field is empty. 

## Example

HTML:
```html
	  <ng-loupe-field id="users"
	    path="http://jsonplaceholder.typicode.com/users"
	    columns="name, username, email, address.street"
	    caption="email"
	    placeholder="type to search users..."></ng-loupe-field>
```

If you want to show a complete example, visit [demo sources](https://github.com/jcagarcia/ngLoupeField/tree/master/demo);

## Development

Feel free to send your issues and pull-requests.

## Change Log

TBC
