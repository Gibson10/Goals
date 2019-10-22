

Template.Goals.onCreated(function(){
    var self=this;
    self.autorun(function(){
        
       self.subscribe('goals');
       
    });
});

Template.Goals.helpers({
    goals:()=>{
        return Goals.find({})
    }
})

Template.Goals.helpers({
    updateRecipeId:function(){
        return this._id;
    }
})

Template.Goals.events({
    'click .new-recipe': function(){
        
        console.log("hello");
        sAlert.success('New Goal Added', {onClose: function() {console.log('closing alert...');}});



        Session.set('newGoal', true);
    }
})