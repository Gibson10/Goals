import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import { Jobs } from 'meteor/msavin:sjobs'
import { Email } from 'meteor/email';




Goals=new Meteor.Collection('goals');
FutureTasks = new Meteor.Collection('future_tasks'); 

Goals.allow({
    insert:function(userId,doc){
        return !!userId;
    },
    update :function(userId, doc){
        return !!userId;
    },
    remove:function(userId, doc){
    return !!userId;
    }
})


KeyResult=new SimpleSchema({
    keyresult:{
        type:String
    },
    milestone:{
        type:String
    },
    start:{
        type: Date,
        autoform: {
        afFieldInput: {
            type: "bootstrap-datetimepicker",
             dateTimePickerOptions: {}
              }
            }
        },
    end:{
        type: Date,
        autoform: {
        afFieldInput: {
            type: "bootstrap-datetimepicker",
            dateTimePickerOptions: {}
            }
            }
    
         },
    allDay:{
        type:Boolean,
        defaultValue:false,
        optional:true,
         } 
});

GoalsSchema=new SimpleSchema({
Objective:{
  type:String,
  label:"Objective"
},
Status:{
    type:String,
    label:"Status"

},
KeyResults: {
    type: Array,
   },
   'KeyResults.$':{
    type: KeyResult
   },
isGoal:{
       type:Boolean,
       defaultValue:false,
       optional:true,
   },
author: {
    type:String,
    label: "Author",
    autoValue:function(){
        return this.userId;
    }
    },
createdAt:{
    type:new Date(),
    label:"Created At",
    autoValue:function(){
            return new Date()
        }
    },     
});


Meteor.methods({
    toggleObjectiveItem:function(id,currentState){
        Goals.update(id,{
            $set:{isGoal: !currentState}
        });
    },
    deleteObjective:function(id){
        Goals.remove(id);
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);
        process.env.MAIL_URL="smtps://njine10@gmail.com:Gibson@1080710807@smtp.gmail.com:465/";
        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();
        if (!this.isSimulation) {
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }}

})

// Jobs.register({
//     "sendReminder": function (to, message) {
//         var instance = this;

//         var call = HTTP.put("http://www.magic.com/sendEmail", {
//             to: to,
//             message: message
//         })


//         if (call.statusCode === 200) {
//             instance.success(call.result);
//         } else {
//             instance.reschedule({
//                 in: {
//                     minutes: 5
//                 }
//             });
//         }
//     }
// })


Goals.attachSchema( GoalsSchema );