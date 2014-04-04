Specifications
==============
This document specifies the Grocery List application created in this study.  
The mockups are available here: http://mlaval.github.io/js-xperiment/mockup  
  
There are 3 pages in this application:
- the **Home** page where the user can log in (not really secured)
- the **Main** page which displays the list of grocery lists
- the **List** page which sows one list, with edition mode

## Functional requirements ##

### All ###
When data are retrieved from or sent to the remote server, a loading indicator is displayed.  
If the communication fails, an error message is shown to the user.

### Home page ###
- Validation:
    - The user must contain only alphanumeric characters.
    - The password cannot be empty.
- Clicking on 'Sign in':
    - If the credentials are valid, lists are retrieved from the server and the Main pae is displayed.
    - Otherwise, an error message is displayed.
- Clicking the image triggers a login with default credentials.

### Main page ###
- Lists are always sorted by urgency status first, then by name.
- The background color of a list is linked to its urgency.
- Navigation:
    - If edition is not active, clicking on one of the list triggers a navigation to List page is **shopping** mode.
    - Clicking on 'Logout' triggers a navigation to the Home page.
- Clicking on 'Create list' activates the edition mode with a new empty item at the top.
- Edition mode is activated by clicking the 'Edit' button:
    - 'Edit' button becomes a 'Save' button.
    - List can be removed (click on the cross) and edited (click on the item), ordering is out of scope.
    - Only one item can be edited at a time.
    - Clicking on 'Save' ends the edition mode and update data on the server.

### List page ###
- Same edition logic as the Main page.
- Navigation: clicking on 'Close' triggers a navigation to the Home page.
- When edition is not active, is 'Save'button is available at the bottom of the page.
- The list can be filtered to to display all (default), left or picked items.
- The 'n items left' is refreshed live.
- Quantity is a number.

## Technical requirements ##

### Components ###
The following components should be implemented:
- Editable list
- Editable list element
- Three-states switch

### Data model ###
A list ca be represented with the following data model:
```
{
    id: "123456789",
    name: "Supermarket",
    shop: "Tesco in Houston",
    urgency: "H", //L, M or H
    user: {
        name: "Test",
        password: "fdsfadf32423fsd" //md5 string
    },
    items: [
        {
            name: "Tomatoes",
            quantity: 1,
            unit: "kg" //p, kg or l
        },
        ...
    ]
}
```