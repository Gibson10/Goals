Template.NewGoal.events({
    'click .fa-close': function(){
        Session.set('newGoal', false);
    }
})