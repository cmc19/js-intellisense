I generated the documentation by doing the following. This will likely break if the layout of
underscorejs.org changes, however I plan on makeing any changes to the documentation by hand.  

* On underscorejs.org jquerify the page using chrome. There is many ways to do this, but I copy [this][1] code in to the console. 

* Then run the following code in the dev console in chrome. This will copy the description JSON to the clipboard.

```
$('#links').nextAll().remove();
$('#links').remove();
$('#introduction').remove();
var plist = [];
$('pre').remove();
$('p').each(function(){
	var p = $(this);
	p.find('b').remove();
	p.find('code').remove();
	p.find('.alias').remove();
	plist.push({
		//p:p,
		attr:p.attr('id'),
		body: p.html().replace(/<br>/g,' ').replace(/\n        /g,' ')
	});
});
plist = _.filter(plist, function(o){return o.attr != undefined;});
copy(JSON.stringify(plist));
```

* Paste the JSON into the html file in this folder for the value data. 


* Open the html file in browser.

* Clean up issues by hand. 

  [1] : https://github.com/rfkrocktk/jQuerify/blob/master/jQuerify.user.js
