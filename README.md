# ngLoupeField

AngularJS directive to include loupe field component in your AngularJS applications! You can load the suggestions from a remote REST API, it also supports promises.

Checkout the demo to see what it does.

# Setup

To use it you need of course AngularJS, so make sure it is loaded first. I always like to use Google's CDN for that:

```html
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>
```

Also you should load the stylesheet of the loupe field component:

```html
	<link rel="stylesheet" href="dist/ngLoupeField.min.css">
```

Then in your HTML you should load it before the script of your main app. Like this:

```html
	<script type="text/javascript" src="dist/ngLoupeField.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
```

In your main script file you should add it as dependency:

```javascript
	var app = angular.module('app', ['ngLoupeField']);
```

# Usage

TBC