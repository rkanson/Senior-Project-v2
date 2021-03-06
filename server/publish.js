Meteor.publish('groups', function() {
  return Groups.find();
});

Meteor.publish('notes', function() {
  return Notes.find();
});

Meteor.publish('singleGroup', function(id) {
  check(id, String);
  return Groups.find({_id: id});
});
