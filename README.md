----
# jsonToTable()

Function can convert JSON data type to HTML table.

----
##Usage
Add function **jsonToTable()** to your HTML file and fill desired and required properties.

----
##Properties
* **head: ** - Create tag <thead></thead> in your HTML file and add values from filled head array to <td></td> tag. Defoult head is empty.

* **jsonProperties: ** - If you want to choose certain object fields, fill  jsonProperties array. Defoult function take all object values.

* **tableIds: ** - id of HTML table in which the JSON-object coverted. Defoult id is *#jsonToTable*.

* **link: ** - link of JSON-file. Defoult it is empty. Required property.
* **addClass: ** - call the function which add class to certain <td></td> tag. Function arguments:
 * index - number(-s) of Object;
 * key - property(-ies) of Object;
 * val - value(-es) of Object;
 * object - data-Object.

* **processing: ** - call the function for object pre-processing. Function arguments:
 * object - data-Object;

* **sort: ** - call the function of a comparator that sorts an array of objects transmitted. Function arguments:
 * a, b - array which are compared.

----
##Example
    jsonToTable({
	        head: ['#', 'Имя', 'Возраст'],
		jsonProperties: ['id', 'name', 'age'],
		tableId: '#users',
		link: 'users.json'
            addClass: function(index, key, val, object){},
		processing: function(object) {},
		sort: function(a, b){} });
