

Template.GoalSingle.onCreated(function(){
    var self=this;
    self.autorun(function(){
       var id=FlowRouter.getParam('id');
       self.subscribe('singleGoal',id);
    })
})

Template.GoalSingle.helpers({
    goal:()=>{
        var id=FlowRouter.getParam('id');
        // console.log(Goals.findOne({_id:id}));
        return Goals.findOne({_id:id});
    }
})