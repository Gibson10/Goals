import { AccountsClient } from 'meteor/accounts-base'

// Accounts.onLogin(function () {
//     FlowRouter.go('goals-book');
//   });
  
// Accounts.onLogout(function(){
//     FlowRouter.go('home'); 
// });




// FlowRouter.triggers.enter([function(context, redirect)
// {
//     if(!Meteor.userId()){
//         FlowRouter.go('home');
//     }
// }]);

if (Meteor.isClient){
    Accounts.onLogin(function(){
     console.log('onLogin event');
     FlowRouter.go('goals-book');
    });
    Accounts.onLogout(function(){
        console.log('onLogin event');
        FlowRouter.go('home');
       });
   }




FlowRouter.route('/',{
    name:'home',
    action(){
        // if(Meteor.userId()){
        //     FlowRouter.go('goals-book');
        // }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});



FlowRouter.route('/goals-book',{
    name:'goals-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'Goals'});
    }
});


FlowRouter.route('/goal/:id',{
    name:'goal',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'GoalSingle'});
    }
});
FlowRouter.route('/week-goals',{
    name:'weekgoals',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'WeekGoals'});
    }
});
FlowRouter.route('/key-results',{
    name:'KeyResults',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'KeyResults'});
    }
});

FlowRouter.route('/calendar',{
    name:'calendar',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout',{main:'calendar'});
    }
});