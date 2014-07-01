$('#test').on('click', function () {
    // Prepare your page structure
    var newPage = $("<div data-role='page' id='page'><div data-role=header><a data-iconpos='left' data-icon='back' href='#' data-role='button' data-rel='back'>Back</a><h1>Dynamic Page</h1></div><div data-role=content>Stuff here</div></div>");

    // Append the new page into pageContainer
    newPage.appendTo($.mobile.pageContainer);

    // Move to this page by ID '#page'
    $.mobile.changePage('#page');
});