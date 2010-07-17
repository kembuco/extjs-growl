# ExtJS Growl

Surely it's been done before, but this is a growl implementation based on ExtJS.  The project goal was to keep it simple, but looking nice.  IE was not a project goal.  In fact, it was only tested in FF 3.6 and Chrome 5 and it uses stuff like alpha transparency and CSS border-radius, so chances aren't good that it works.

## Usage

First, you need to include the resource files.  The js has to be included after the ExtJS files, which are not included in this project.  Not sure how all that licensing stuff works.  It would look something like so:

	<link rel="stylesheet" href="/css/ext/ux/Growl.css" />
	<script type="text/javascript" src="/js/ext/ux/Growl.js"></script>
	
And then you can use it like so:

	Ext.ux.Growl.notify({title: "Warning", message: "There is someone behind you.", iconCls: "x-warning"});
	
This will display a notification with a title, a message, and an icon defined in css with a class of "x-warning". The options you can pass into the `notify` method are:

* **title** (string): Will be displayed as the top div inside the notification container.
* **message** (string): Will be displayed as the bottom div inside the notification container.
* **iconCls** (string): The class name to use as the background image for the notification container.  Can be moved around with CSS, but there are sensible defaults provided.
* **content** (string): The content for the notification container.  If provided title and message will be ignored, as is their markup.
* **pin** (boolean): The notification will not fade away after the specified duration.  The user will have to close the icon explicitly.
* **closable** (boolean): If set to true, the notification will include a closer icon on hover
* **click** (function): Overrides global `click` config
* **show** (function): Overrides global `show` config
* **close** (function): Overrides global `close` config
* **alignment** (string): Overrides global `alignment` config
* **duration** (string): Overrides global `duration` config
* **context** (string/id): Overrides global `context` config
* **offset** (array): Overrides global `offset`config

The last thing you need to know is that you can configure how notifications work globally.  Before making any calls to `notify` you can call `init` like this:

	Growl.init({
        context: "main", // The growl container will be aligned to an element with the id of "main"
        offset: [-5, 5], // and offset from the contex by -5px top/5px right
        alignment: "tr-tr" // and aligned with it's top right to the top right of the context
	});
	
Global options include:

* **alignment** (string): The ExtJS *alignTo* config for the alignment of the growl container (default: "t-t")
* **duration** (integer): How long the notification will be visible before it fades out (default: 3 seconds)
* **context** (string/id): The element to which the growl container should be aligned (default: document)
* **offset** (array): The ExtJS *alignTo* offset config for the alignment of the growl containter (default: [0, 0])
* **show** (function): The function called after the notification has been appended/inserted into the growl container.  Override to get custom display functionality.
	* **notification** (Element): The notification container ExtJS Element
	* **options** (Object): The options that were passed into the `notify` call
* **click** (function): The function called when the notification is clicked
	* **notification** (Element): The notification container ExtJS Element
	* **evt** (Event): The click event
	* **elt** (Element): The target element for the click
	* **options** (Object): The options that were passed into the `notify` call
* **close** (function): The function called when the close icon is clicked

## Contributions
Contributions are certainly welcome via pull request

	git clone git://github.com/kembuco/extjs-growl.git