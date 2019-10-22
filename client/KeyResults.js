

Template.KeyResults.onCreated(function(){
    var self=this;
    self.autorun(function(){
       self.subscribe('goals');
    });
});

Template.KeyResults.helpers({
    goals:()=>{
        return Goals.find({isGoal:true})
    }
})

// Template.KeyResults.events({
//     "click .NewKey": function(){
//         console.log(this._id);
//     }
// })