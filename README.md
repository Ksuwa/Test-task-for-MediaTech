----
# jsonToTable()

Function can convert JSON data type to HTML table.

----
##Usage
Add function **jsonToTable()** to your HTML file and fill desired and required properties.

----
##Properties
* **head:** - create tag <thead></thead> in your HTML file and add values from filled head array to <td></td> tag. Default head is empty.

* **jsonProperties:** - if you want to choose certain object fields, fill  jsonProperties array. Default function take all object values.

* **tableId:** - id of HTML table in which the JSON-object coverted. Default id is *#jsonToTable*.

* **link:** - link to JSON-file. Default it is empty. Required property.
* **addClass:** - call the function which add class to certain <td></td> tag. Function arguments:
 * index - number of Object;
 * key - property of Object;
 * val - value of Object;
 * object - data-Object.

* **processing:** - call the function for object pre-processing. Function arguments:
 * object - data-Object;

* **sort:** - call the function of a comparator that sorts an array of objects transmitted. Function arguments:
 * a, b - Objects which are compared.

----
##Example
```javascript
jsonToTable({
    head: ['#', 'Имя', 'Возраст'],
    jsonProperties: ['id', 'name', 'age'],
    tableId: '#users',
    link: 'users.json',
    
    addClass: function(index, key, val, object) {
        if (key == 'id') {
            return 'example';
        }
    },
    
    processing: function(object) {
        return object.id = 67;
    },
    
    sort: function(a, b) {
        if (a.age > b.age) {
            return 1;
        } else if (a.age < b.age) {
            return -1;
        }
        return 0;
    } 
});
```
