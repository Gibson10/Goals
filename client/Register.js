Template.Register.events({
    'submit .register':function(){ 
        event.preventDefault();
        var emailVar=event.target.email.value;
        var passVar=event.target.password.value;
        console.log(emailVar);
        console.log("Form submited");
        Accounts.createUser({
            email:emailVar,
            password:passVar,
        });

    }
});