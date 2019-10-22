import { Jobs } from 'meteor/msavin:sjobs';




Template.Goal.onCreated(function(){
  this.editMode=new ReactiveVar(false);
  this.editMode.set(false);   

// Jobs.run("sendReminder", "njine10@gmail.com", "The future is here!", {
//     on: {
//         hour: 7,
//         minute: 32
//     },
//     priority: 9999999999
// });
Meteor.call('sendEmail',
    'njine10@gmail.com',
    'gibson.njine@watson.is',
    'Test',
    'Hello world!'
);
})

Template.Goal.helpers({
    updateRecipeId: function(){
        return this._id
    },
    editMode:function(){
        return Template.instance().editMode.get();
    }
})

Template.Goal.events({
    'click .toggle-menu': function(){
        console.log(this.isGoal);
        console.log(this._id);

        Meteor.call("toggleObjectiveItem",this._id, this.isGoal);
    },
    'click .fa-trash':function(){
        console.log(this._id);

        Meteor.call('deleteObjective', this._id);
    },
    // 'click .fa-pencil' :function(){
    //     Session.set('editMode',!Session.get('editMode'));

    // }
    'click .fa-pencil' :function(event, template){
        template.editMode.set(!template.editMode.get());

    }
})