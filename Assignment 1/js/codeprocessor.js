/**
 * Your header documentation here for _listen
 *    For your reference...
 * 		event will hold an Event object with the pixels in
 *   	event.detail.data and the timestamp in event.timeStamp
 */

// Below is the array containing the letters for use in the translate function

let letters = [
    ["e","t","a","n","d"],
    ["o","i","r","u","c"],
    ["s","h","m","f","p"],
    ["l","y","g","v","j"],
    ["w","b","x","q","z"]
];

_listen = function(event)
{
	// First find gre
	for(let i = 0; i < (event.detail.data.length); i += 4){
        let greyScalePixel = [];
        greyScalePixel[i/4] = (event.detail.data[i] + event.detail.data[i+1] + event.detail.data[i+2])/3;
    } 
    
    let sumGreyScalePixel = 0;
    
    for(let j = 0; j < greyScalePixel.length; j++){
        sumGreyScalePixel += greyScalePixel[j];
    }
    
    averageGreyScale = sumGreyScalePixel/greyScalePixel.length;
    
    if (averageGreyScale > 127){
        bright = true;
    }
    
    if (bright){
        brightCount++;
    }
    else {
        darkCount++;
    }
};

/**
 * Your header documentation here for clear
 */
clear = function()
{
	// your code here
};

/**
 * Your header documentation here for translate
 */
translate = function()
{
	// your code here
};
