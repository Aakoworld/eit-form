import {Template} from 'meteor/templating';
import {Eits} from '../../api/eits.js';
import './eit_list.html';
var eitData = [
{
	Firstname:"Abimbola",
	Lastname:"Oladeji",
	Gender:"Female",
	DOB:new Date().toDateString()
},
{
	Firstname:"Feranmi",
	Lastname:"Ogundipe",
	Gender:"Female",
	DOB:new Date().toDateString()
},
{
	Firstname:"Taiwo",
	Lastname:"Oladeji",
	Gender:"Male",
	DOB:new Date().toDateString()
}

];

Template.eitList.helpers({
	eits:function () {
		return Eits.find({});
	}
})