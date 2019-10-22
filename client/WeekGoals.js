

Template.WeekGoals.onCreated(function(){
    var self=this;
    self.autorun(function(){
       self.subscribe('goals');
    });
});

Template.WeekGoals.helpers({
    goals:()=>{
        return Goals.find({isGoal:true})
    }
})