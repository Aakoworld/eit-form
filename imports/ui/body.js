import {Template} from 'meteor/templating';
import {Eits} from '../api/eits.js';
import "./body.html"
import "./templates/eit_list.js"
import "./templates/eit.js"

Template.body.events({
  'submit .form'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const firstName = target.firstname.value;
    const lastName = target.lastname.value;
    const gender = target.gender.value;
    const dob = target.dob.value;
 
    // Insert a task into the collection
    Eits.insert({ 
    	Firstname : firstName, 
    	Lastname : lastName, 
    	Gender : gender, 
    	DOB : dob
    });
 
    // Clear form
    target.firstname.value = '';
    target.lastname.value = '';
    target.gender.value = '';
    target.dob.value = '';
  },
});

