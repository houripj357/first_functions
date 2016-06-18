function deleteRubbish( array )
{
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]

	var arrayToString = array;
	arrayToString = arrayToString.join();

	var string = arrayToString;
	string = string.replace('*', '');

	var newArray = string;
	newArray = newArray.split(',');

	return newArray;
}

console.log(deleteRubbish(['a',1,'*',5]) == ['a',1,5]);