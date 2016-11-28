/**
 * Created by alex_ on 11/10/2016.
 */
//---------------Constants for Page_Onload function---------------------------------------------------------------------
const StoryOne = "There was once a man who was living a cucumber. He was very tall and angry. The reason why this man has been angry was from the fact he lived in a cucumber. It was the best cucumber on the housing market though, which is why a lot of people figured it was from another reason. The man went out in public with a suite top and khaki shorts, which is the newest trend in fashion. When he was walking down the street he noticed people looking at him. Come to find out when he looked into a business window for a reflection he had a glitter all over his back, which made him shine out in public. After finding out about that he stormed back to his cucumber house and stayed mad against the public and about his house. He lived as an angry man living in a cucumber after all.";

const StoryTwo = "Standing in the Park, I was wondering why a Frisbee gets larger the closer it gets. Then it hit me.";
const StoryThree = "My grandpa said, always leave them wanting more. Ironically, that's how he lost his job in disaster relief.";

const StoryFour = "There is a major difference between animals. Some keep their young till they get older. Some just kick them out of the house by age of 5. The most common animal that kicks the kids out early are Goats. Just for your information Goat's babies are called kids! haha. Now the ones who seem to like to keep their young are the Marsupials which is outrageous, its like keeping kids till their 25 years old, and the kid is still getting mail from their work! The moral of the story is, animals are just as messed up as we are in society. We can now see the correlation from where we get it!";
//----------------------------------------------------------------------------------------------------------------------
//-----------Constants to Call for Page_Onload Function-----------------------------------------------------------------
const StoryA = 0;
const StoryB = 1;
const StoryC = 2;
//---------------Random Function for Page_Onload function to randomly pick stories--------------------------------------

function RandomInt (low, high)
{
    return Math.floor(Math.random()*(high-low+1)) + low;
}

//--------------Page_Onload Function------------------------------------------------------------------------------------
function PageOnload()
{
    var OnloadInt = RandomInt(0, 2);

    if (OnloadInt == StoryA)
    {
        document.getElementById("divRandomStories").innerHTML = StoryOne;
    }
    else if (OnloadInt == StoryB)
    {
        document.getElementById("divRandomStories").innerHTML = StoryTwo;
        document.getElementById("divRandomStories2").innerHTML = StoryThree;
    }
    else if (OnloadInt == StoryC)
    {
        document.getElementById("divRandomStories").innerHTML = StoryFour;
    }
}
//----------------------------------------------------------------------------------------------------------------------
//--To grab information easier from questionnaire
function $(id)
{
    return document.getElementById(id);
}
//----------------------------------------------------------------------------------------------------------------------
//--Constants for labeling of answers, and Variables to hold info for Save();
const WEAPON = "Weapon";
const DICE_ROLL = "Dice roll";
const ADJECTIVE_1 = "Adjective 1";
const FAVORITE_COLOR = "Favorite Color";
const PET = "Pet";
const FAVORITE_FOOD = "Favorite Food";
const MONSTER = "Monster";
const ADJECTIVE_2 = "Adjective 2";
const SURVIVAL = "Survival";
const VICTIMS = "Victims";
const NOUN_1 = "Noun 1";
const BUTTON = "Button Choice";
const KIDS = "Number of Kids";
const FOOD = "Food for life";
const VALUABLE_ITEM = "Valuable Item";

//---

var weapon;
var diceRoll;
var adjective1;
var favoriteColor;
var pet;
var favoriteFood;
var monster;
var adjective2;
var survival;
var victims;
var noun1;
var button;
var kids;
var food;
var valuableItem;

//--To Save information to local storage
function Save()
{

}
