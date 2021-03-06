var textField,
       emailField;

function Field(type, displayText) {
    this.type = type || "";
    this.displayText = displayText || "";
}       

Field.prototype = {
    getElement: function() {
        var field = document.createElement("input");
        field.setAttribute("type", this.type);
        field.setAttribute("placeholder", this.displayText);
        return field;
    }
};

textField = new Field("text", "Please input your name");
emailField = new Field("email", "Please enter your email address");

window.addEventListener("load", function() {
    var body = document.body;
    body.appendChild(textField.getElement());
    body.appendChild(emailField.getElement());
}, false);