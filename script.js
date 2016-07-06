/*
 * Render table for provided json object
 */
function jsonToTable(options) {
    var settings = $.extend({  //Default settings for function jsonToTable
        head: [],
        jsonProperties: null,
        tableId: '#jsonToTable',
        link: '',
        addClass: function (index, key, val, object) {
        },
        processing: function (object) {
        },
        sort: function (a, b) {
        }
    }, options);

    $table = $(settings.tableId);
    $tableCaption = $(settings.head);

    // Create thead
    $table.append('<thead><tr></tr></thead>');
    $thead = $(settings.tableId + ' > thead > tr:first');

    $.each($tableCaption, function (key, val) {
        $thead.append('<th>' + val + '</th>');
    });

    $tbody = $table.append('<tbody></tbody>');

    // Write error if property 'link' will be empty
    if (settings.link == '' || settings.link == null) {
        throw 'Please, fill link property according documentation'
    }

    $.getJSON(settings.link).done(function (data) {	// Load JSON-encoded data from the server and convert it to object
        if (settings.sort instanceof Function) {	// Check if sort is a function
            data = data.sort(settings.sort);	// and call the function for sorting every cell of table
        } else {
            throw 'Property "sort" must be an instance of Function';	//or write error
        }

        $.each(data, function (key, val) { // Add <tr> to tbody
            $tbody.append('<tr></tr>');
            var valueObj = this; // Save this of object for loop below
            var index = key;

            if (settings.processing instanceof Function) {	// Check if processing is a function
                val = settings.processing(val);		// And call the function for data pre-processing
            } else {
                throw 'Property "conversion" must be an instance of Function'; // or write error
            }

            $.each(valueObj, function (key, val) { // Check if jsonProperties array isn't empty and current key in the json object
                if (settings.jsonProperties && $.inArray(key, settings.jsonProperties) === -1) {
                    return;
                }

                if (settings.addClass instanceof Function) {	// Check if addClass is a function
                    var customCssClass = settings.addClass(index + 1, key, val, valueObj); //Call addClass
                    if (typeof customCssClass == 'string') {	// Check if function return string
                        $tbody.find('tr:last').append('<td class="' + customCssClass + '">' + val + '</td>');
                    } else {
                        $tbody.find('tr:last').append('<td>' + val + '</td>');	// If addClass is empty write <td> without class
                    }
                }
            });
        });
    })
};