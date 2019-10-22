

Template.calendar.onCreated(function(){
    var self=this;
    self.autorun(function(){
        
       self.subscribe('goals');
       
       
    });
});

Template.calendar.onRendered(() => {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var event = [];

    Goals.find({author:Meteor.userId()}).map(function(goals){
        for(i=0;i<goals.KeyResults.length; i++){
            event.push(goals.KeyResults[i]);
        }
        // console.log(goals.KeyResults);
        // event.push(goals.KeyResults);

    });

    // console.log(event);
    for(i=0;i<event.length; i++){
        console.log(event[i])
    }

//    for(i=0;i<name.length;i++){
//        console.log(i);

// //    }
// console.log(event)

   
    $('#calendarDiv').fullCalendar({
        header: {
            left: 'basicDay, basicWeek, month',
            center: 'title',
            right: 'today prev,next'
        },
        editable: true,
        weekends: false,

    
         events:event,
    
        // events: [{
        //     id: 1,
        //     title: 'Birthday',
        //     start: new Date(y, m, 1),
        //     allDay: true,
        //     description: 'Happy Birthday',
        // }, {
          
        //     title: 'Concert',
        //     start: '2016-12-07T21:00:00',
        //     end :'2016-12-07T23:00:00',
        //     allDay: false,
        //     color: '#e74c3c'
        // }, {
        //     id: 3,
        //     title: 'Lunch',
        //     start: new Date(y, m, 16, 14),
        //     end: new Date(y, m, 16, 16),
        //     allDay: false,
        //     color: '#3498db'
        // }, {
        //     id: 4,
        //     title: 'Class',
        //     start: new Date(y, m, 20, 10),
        //     allDay: false,
        //     color: '#9b59b6'
        // }, {
        //     id: 5,
        //     title: 'Party',
        //     start: new Date(y, m, 5, 18),
        //     allDay: true,
        //     color: '#e67e22'
        // }],
        
        
        
        dayClick: function(date) {
            alert("Clicked on " + date.format());
        },
        eventClick: function(event) {
            alert("Key Result: " + event.keyresult + "\n Milestone: " + event.milestone + "\nEvent time: " + moment(event.start).format("hh:mm A"));
        },
        eventMouseover: function(calEvent) {
            $(this).css('background-color', 'black');
        }
    });
});