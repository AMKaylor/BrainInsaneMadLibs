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
//--Function to check for valid inputs for text boxes
function Validation1()
{
    if ($("txtAdjective1").value === "")
    {
        $("error1").innerHTML = "Please enter your answer above. **Example: Dirty";
        return false;
    }
    return true;
}

function Validation2()
{
    if ($("txtColor").value === "")
    {
        $("error2").innerHTML = "Please enter your answer above. **Example: Red";
        return false;
    }
    return true;
}

function Validation3()
{
    if ($("txtFavoriteFood").value === "")
    {
        $("error3").innerHTML = "Please enter your answer above. **Example: Pizza";
        return false;
    }
    return true;
}

function Validation4()
{
    if ($("txtAdjective2").value === "")
    {
        $("error4").innerHTML = "Please enter your answer above. **Example: Rusty";
        return false;
    }
    return true;
}

//----------------------------------------------------------------------------------------------------------------------
//---Master Combination of all validation()'s
function Validation()
{
    Validation1();
    Validation2();
    Validation3();
    Validation4();
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

//------------------------------------------------

var weapon = "";
var diceRoll = "";
var adjective1 = "";
var favoriteColor = "";
var pet = "";
var favoriteFood = "";
var monster = "";
var adjective2 = "";
var survival = "";
var victims = "";
var noun1 = "";
var button = "";
var kids = "";
var food = "";
var valuableItem = "";
//----------------------------------------------------------------------------------------------------------------------

    //--Question 1
function Question1()
{
    var selectedWeapon = $("Weapon").selectedIndex;
    if (selectedWeapon == 0)
    {
        weapon = " Paper towel ";
    }
    else if (selectedWeapon == 1)
    {
        weapon = " Baseball Bat ";
    }
    else if (selectedWeapon == 2)
    {
        weapon = " Fly Swatter ";
    }
    else if (selectedWeapon == 3)
    {
        weapon = " BasketBall ";
    }
    else if (selectedWeapon == 4)
    {
        weapon = " Newspaper Roll ";
    }
    return weapon;
}


    //--Question 2
function Question2() {
    if ($("rad1").checked == true)
    {
        diceRoll = " 1 ";
    }
    else if ($("rad2").checked == true)
    {
        diceRoll = " 2 ";
    }
    else if ($("rad3").checked == true)
    {
        diceRoll = " 3 ";
    }
    else if ($("rad4").checked == true)
    {
        diceRoll = " 4 ";
    }
    else if ($("rad5").checked == true)
    {
        diceRoll = " 5 ";
    }
    else if ($("rad6").checked == true)
    {
        diceRoll = " 6 ";
    }
    return diceRoll;
}

    //--Question 3
function Question3()
{
    adjective1 = $("txtAdjective1").innerHTML;
    return adjective1;
}

    //--Question 4
function Question4()
{
    favoriteColor = $("txtColor").innerHTML;
    return favoriteColor;
}

    //--Question 5
function Question5()
{
    var selectedPet = $("Pets").selectedIndex;
    if (selectedPet == 0)
    {
        pet = " Dog ";
    }
    else if (selectedPet == 1)
    {
        pet = " Cat ";
    }
    else if (selectedPet == 2)
    {
        pet = " Tiger ";
    }
    else if (selectedPet == 3)
    {
        pet = " Elephant ";
    }
    else if (selectedPet == 4)
    {
        pet = " Weasel ";
    }
    else if (selectedPet == 5)
    {
        pet = " Zebra ";
    }
    return pet;
}

    //--Question 6
function Question6()
{
    favoriteFood = $("txtFavoriteFood").innerHTML;
    return favoriteFood;
}

    //--Question 7
function Question7()
{
    if ($("radBigFoot").checked == true)
    {
        monster = " Big Foot ";
    }
    else if ($("radChupacabra").checked == true)
    {
        monster = " Chupacabra ";
    }
    else if ($("radMutatedTarantula").checked == true)
    {
        monster = " Mutated Tarantula ";
    }
    else if ($("radYeti").checked == true)
    {
        monster = " Yeti ";
    }
    else if ($("radGodzilla").checked == true)
    {
        monster = " Godzilla ";
    }
    return monster;
}

    //--Question 8
function Question8()
{
    adjective2 = $("txtAdjective2").innerHTML;
    return adjective2;
}

    //--Question 9
function Question9()
{
    if ($("radTossWoodenSticks").checked == true)
    {
        survival = " Toss the Wooden Sticks ";
    }
    else if ($("radStringTheShoelace").checked == true)
    {
        survival = " String together wooden sticks by shoelace ";
    }
    else if ($("radSitDown").checked == true)
    {
        survival = " You give up, and sit down ";
    }
    else if ($("radStartFire").checked == true)
    {
        survival = " Start a fire with sticks and shoelace ";
    }
    return survival;
}

    //--Question 10
function Question10()
{
    var selectedVictim = $("Victims").selectedIndex;
    if (selectedVictim == 0)
    {
        victims = " Mom ";
    }
    else if (selectedVictim == 1)
    {
        victims = " Dad ";
    }
    else if (selectedVictim == 2)
    {
        victims = " Brother ";
    }
    else if (selectedVictim == 3)
    {
        victims = " Sister ";
    }
    else if (selectedVictim == 4)
    {
        victims = " That annoying friend ";
    }
    else if (selectedVictim == 5)
    {
        victims = " That one guys everyone knows ";
    }
    else if (selectedVictim == 6)
    {
        victims = " That crazy girl/boy ";
    }
    return victims;
}

    //--Question 11
function Question11() {
    if ($("radChair").checked == true)
    {
        noun1 = " Chair ";
    }
    else if ($("radDuck").checked == true)
    {
        noun1 = " Duck ";
    }
    else if ($("radFire").checked == true)
    {
        noun1 = " Fire ";
    }
    else if ($("radWheelchair").checked == true)
    {
        noun1 = " Wheelchair ";
    }
    else if ($("radApple").checked == true)
    {
        noun1 = " Apple ";
    }
    return noun1;
}

    //--Question 12
function Question12()
{
    if ($("radBlueButton").checked == true)
    {
        button = " Blue Button ";
    }
    else if ($("radIndigoButton").checked == true)
    {
        button = " Indigo Button ";
    }
    else if ($("radBlackButton").checked == true)
    {
        button = " Black Button ";
    }
    else if ($("radSlimyButton").checked == true)
    {
        button = " Slimy Button ";
    }
    else if ($("radBrokenButton").checked == true)
    {
        button = " Broken Button ";
    }
    return button;
}

    //--Question 13
function Question13()
{
    var selectedKids = $("Kids").selectedIndex;
    if (selectedKids == 0)
    {
        kids = " 5 ";
    }
    else if (selectedKids == 1)
    {
        kids = " 6 ";
    }
    else if (selectedKids == 2)
    {
        kids = " 7 ";
    }
    else if (selectedKids == 3)
    {
        kids = " 8 ";
    }
    else if (selectedKids == 4)
    {
        kids = " 9 ";
    }
    return kids;
}

    //--Question 14
function Question14()
{
    var selectedFood = $("Food").selectedIndex;
    if (selectedFood == 0)
    {
        food = " Pizza ";
    }
    else if (selectedFood == 1)
    {
        food = " Potatoes ";
    }
    else if (selectedFood == 2)
    {
        food = " Salad ";
    }
    else if (selectedFood == 3)
    {
        food = " Sushi ";
    }
    else if (selectedFood == 4)
    {
        food = " Hot Dogs ";
    }
    else if (selectedFood == 5)
    {
        food = " Doritos ";
    }
    return food;
}

    //--Question 15
function Question15()
{
    if ($("radSapphire").checked == true)
    {
        valuableItem = " Sapphire ";
    }
    else if ($("radRuby").checked == true)
    {
        valuableItem = " Ruby ";
    }
    else if ($("radDiamond").checked == true)
    {
        valuableItem = " Diamond ";
    }
    else if ($("radTopaz").checked == true)
    {
        valuableItem = " Topaz ";
    }
    else if ($("radGold").checked == true)
    {
        valuableItem = " Gold ";
    }
    else if ($("radSilver").checked == true)
    {
        valuableItem = " Silver ";
    }
    return valuableItem;
}

//----------------------------------------------------------------------------------------------------------------------
//--Condensed Question Check Function
function AllQuestionCheck()
{
    Question1();
    Question2();
    Question3();
    Question4();
    Question5();
    Question6();
    Question7();
    Question8();
    Question9();
    Question10();
    Question11();
    Question12();
    Question13();
    Question14();
    Question15();
}

//----------------------------------------------------------------------------------------------------------------------
//--Save button function
function Save()
{
    ClearError();
    Validation();
    AllQuestionCheck();

    localStorage.setItem(WEAPON,weapon);
    localStorage.setItem(DICE_ROLL, diceRoll);
    localStorage.setItem(ADJECTIVE_1,adjective1);
    localStorage.setItem(FAVORITE_COLOR,favoriteColor);
    localStorage.setItem(PET,pet);
    localStorage.setItem(FAVORITE_FOOD,favoriteFood);
    localStorage.setItem(MONSTER,monster);
    localStorage.setItem(ADJECTIVE_2,adjective2);
    localStorage.setItem(SURVIVAL,survival);
    localStorage.setItem(VICTIMS,victims);
    localStorage.setItem(NOUN_1,noun1);
    localStorage.setItem(BUTTON,button);
    localStorage.setItem(KIDS,kids);
    localStorage.setItem(FOOD,food);
    localStorage.setItem(VALUABLE_ITEM,valuableItem);
}

//----------------------------------------------------------------------------------------------------------------------
//--Clear function (Clears both form and Storage)
function Clear()
{
    ClearError();
    localStorage.clear();

    $("Weapon").selectedIndex = 0;
    $("rad1").checked = true;
    $("txtAdjective1").value = "";
    $("txtColor").value = "";
    $("Pets").selectedIndex = 0;
    $("txtFavoriteFood").value = "";
    $("radBigFoot").checked = true;
    $("txtAdjective2").value = "";
    $("radTossWoodenSticks").checked = true;
    $("Victims").selectedIndex = 0;
    $("radChair").checked = true;
    $("radBlueButton").checked = true;
    $("Kids").selectedIndex = 0;
    $("Food").selectedIndex = 0;
    $("radSapphire").checked = true;
}

//--Clear Error Messages
function ClearError()
{
    $("error1").innerHTML = "";
    $("error2").innerHTML = "";
    $("error3").innerHTML = "";
    $("error4").innerHTML = "";
}
//----------------------------------------------------------------------------------------------------------------------
