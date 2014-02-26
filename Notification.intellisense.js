function Notification(title, options) {
    /// <summary>
    /// The Notification object is used to configure and display desktop notifications to the user.
    /// </summary>
    /// <param name="title" type="String" optional="false"></param>
    /// <param name="options" type="Object" optional="true">
    /// An object that allows to configure the notification. It can have the following properties: <br/>
    /// dir : The direction of the notification; it can be auto, ltr, or rtl <br/>
    /// lang: Specify the lang used within the notification. This string must be a valid BCP 47 language tag. <br/>
    /// body: A string representing an extra content to display within the notification <br/>
    /// tag: An ID for a given notification that allows to retrieve, replace or remove it if necessary <br/>
    /// icon: The URL of an image to be used as an icon by the notification 
    /// </param>
    /// <field name='dir'>Read Only: The direction used by the notification as defined within the constructor options.</field>
    /// <field name='lang'>Read Only: The code lang used by the notification as defined within the constructor options.</field>
    /// <field name='body'>Read Only: The body string used by the notification as defined within the constructor options.</field>
    /// <field name='tag'>Read Only: The id of the notification (if any) as defined within the constructor options.</field>
    /// <field name='icon'>Read Only: The URL of the image used as an icon as defined within the constructor options.</field>
    /// <field name='onclick' type='Function'>A handler for the click event. It is triggered each time the user clicks on the notification.</field>
    /// <field name='onshow'  type='Function'>A handler for the show event. It is triggered when the notification is displayed.</field>
    /// <field name='onerror' type='Function'>A handler for the error event. It is triggered each time the notification encounters an error.</field>
    /// <field name='onclose' type='Function'>A handler for the close event. It is triggered when the user closes the notification.</field>

    this.close = function () {
        /// <summary>
        /// This method allows to programmatically close a notification.
        /// </summary>
    }
}
Notification.requestPermission = function (callback) {
    /// <summary>
    /// This method is used to ask the user if he allows the page to display notifications.
    /// </summary>
    /// <param name="callback" type="Function" optional="false" value='function(permission){}'>
    /// An optional callback function that is called when the user chooses a permission.
    /// The permission picked by the user is a string passed as the first argument to the callback function. 
    /// Possible values for this string are granted, denied, or default.
    /// </param>

    if (typeof callback === 'Function')
        callback("");
}