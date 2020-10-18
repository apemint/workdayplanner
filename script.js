////////////////////////////////////////////////////////////////
//////documet.ready function just in case///////////////////////
////////////////////////////////////////////////////////////////
$(document).ready(function () {



    ///////////////////////////////////////////////////////////////
    ////////////////VARIBALE STUFFS//////////////////////////
    //////////////////////////////////////////////////////

    // todays date header
    var todaysDateHeader = moment().format("dddd, MMMM Do YYYY, HH:mm a");;
    //console.log(todaysDateHeader);

    var hourNow = moment().format("H"); //var for hour right now, can compare with timeslots in a loop to get color
    //console.log(hourNow);

    //make currenttime into number
    var hourNum = parseInt(hourNow);
    //console.log(hourNum);




    //////////////////////////////////////////////////////////
    //////////////HEADER ///////////////////////////////////
    ///////////////////////////////////////////////////

    // this replaces text on header id to todays date varible
    $("#todays-date").text(todaysDateHeader);


    /////////////////////////////////////////////////////
    ///------------RUN FUNCTIONS---------////////////////
    ////////////////////////////////////////////////////////
    runColors();
    runSaves();
    runPlans();

    function runColors() {
        color9();
        color10();
        color11();
        color12();
        color13();
        color14();
        color15();
        color16();
        color17();
    };

    function runSaves() {
        save9();
        save10();
        save11();
        save12();
        save13();
        save14();
        save15();
        save16();
        save17();
    }

    function runPlans() {
        getPlan9()
        getPlan10()
        getPlan11()
        getPlan12()
        getPlan13()
        getPlan14()
        getPlan15()
        getPlan16()
        getPlan17()
    }



    //////////////////////////////////////////////////////////////////////
    //FUNCTIONS TO CHECK TIME FOR COLOR
    //////////////////////////////////////////////////////////////////////
    //can i loop this???
    function color9() {         // i can loop through time blocks with i but dont know how to target the right text area id
        if (hourNum < 9) {
            $("#area-9").addClass("future");
        }
        else if (hourNum == 9) {
            $("#area-9").addClass("present");
        }
        else if (hourNum > 9) {
            $("#area-9").addClass("past");
        }
    };

    function color10() {
        if (hourNum < 10) {
            $("#area-10").addClass("future");
        }
        else if (hourNum == 10) {
            $("#area-10").addClass("present");
        }
        else if (hourNum > 9) {
            $("#area-10").addClass("past");
        }
    };

    function color11() {
        if (hourNum < 11) {
            $("#area-11").addClass("future");
        }
        else if (hourNum == 11) {
            $("#area-11").addClass("present");
        }
        else if (hourNum > 11) {
            $("#area-11").addClass("past");
        }
    };

    function color12() {
        if (hourNum < 12) {
            $("#area-12").addClass("future");
        }
        else if (hourNum == 12) {
            $("#area-12").addClass("present");
        }
        else if (hourNum > 12) {
            $("#area-12").addClass("past");
        }
    };

    function color13() {
        if (hourNum < 13) {
            $("#area-13").addClass("future");
        }
        else if (hourNum == 13) {
            $("#area-13").addClass("present");
        }
        else if (hourNum > 13) {
            $("#area-13").addClass("past");
        }
    };

    function color14() {
        if (hourNum < 14) {
            $("#area-14").addClass("future");
        }
        else if (hourNum == 14) {
            $("#area-14").addClass("present");
        }
        else if (hourNum > 14) {
            $("#area-14").addClass("past");
        }
    };

    function color15() {
        if (hourNum < 15) {
            $("#area-15").addClass("future");
        }
        else if (hourNum == 15) {
            $("#area-15").addClass("present");
        }
        else if (hourNum > 15) {
            $("#area-15").addClass("past");
        }
    };

    function color16() {
        if (hourNum < 16) {
            $("#area-16").addClass("future");
        }
        else if (hourNum == 16) {
            $("#area-16").addClass("present");
        }
        else if (hourNum > 16) {
            $("#area-16").addClass("past");
        }
    };

    function color17() {
        if (hourNum < 17) {
            $("#area-17").addClass("future");
        }
        else if (hourNum == 17) {
            $("#area-17").addClass("present");
        }
        else if (hourNum > 17) {
            $("#area-17").addClass("past");
        }
    };

    ///run functions to check if working
    //definitely a way to loop this

    /////////////////////////////////////////////////////////////
    //FUNCTIONS TO "GET" LOCAL AND DISLPAY ON TEXT INPUT AREA////
    //////////////////////////////////////////////////////////// 
    function getPlan9() {
        var plan9 = localStorage.getItem("9");  //take plan from storage
        $("#area-9").text(plan9);               //replace text in input field with stored plan
    }

    function getPlan10() {
        var plan10 = localStorage.getItem("10");
        $("#area-10").text(plan10);
    }
    function getPlan11() {
        var plan11 = localStorage.getItem("11");
        $("#area-11").text(plan11);
    }
    function getPlan12() {
        var plan12 = localStorage.getItem("12");
        $("#area-12").text(plan12);
    }
    function getPlan13() {
        var plan13 = localStorage.getItem("13");
        $("#area-13").text(plan13);
    }
    function getPlan14() {
        var plan14 = localStorage.getItem("14");
        $("#area-14").text(plan14);
    }
    function getPlan15() {
        var plan15 = localStorage.getItem("15");
        $("#area-15").text(plan15);
    }
    function getPlan16() {
        var plan16 = localStorage.getItem("16");
        $("#area-16").text(plan16);
    }
    function getPlan17() {
        var plan17 = localStorage.getItem("17");
        $("#area-17").text(plan17);
    }

    //////////////////////////////////////////////////////////
    //FUNCTIONS TO GET USER INPUT AND "SET" TO LOCAL
    //////////////////////////////////////////////////////
    function save9() {
        $("#button9").on("click", function () {
            //get user input plans
            var inputPlan9 = $("#area-9").val();
            //set plans to localStorage
            localStorage.setItem("9", inputPlan9);
        })
    }
    //run function

    //log local storage to make sure it works
    //console.log(localStorage.getItem("9"));


    function save10() {
        $("#button10").on("click", function () {
            var inputPlan10 = $("#area-10").val();
            localStorage.setItem("10", inputPlan10);
        })
    }

    function save11() {
        $("#button11").on("click", function () {
            var inputPlan11 = $("#area-11").val();
            localStorage.setItem("11", inputPlan11);
        })
    }

    function save12() {
        $("#button12").on("click", function () {
            var inputPlan12 = $("#area-12").val();
            localStorage.setItem("12", inputPlan12);
        })
    }

    function save13() {
        $("#button13").on("click", function () {
            var inputPlan13 = $("#area-13").val();
            localStorage.setItem("13", inputPlan13);
        })
    }
    function save14() {
        $("#button14").on("click", function () {
            var inputPlan14 = $("#area-14").val();
            localStorage.setItem("14", inputPlan14);
        })
    }

    function save15() {
        $("#button15").on("click", function () {
            var inputPlan15 = $("#area-15").val();
            localStorage.setItem("15", inputPlan15);
        })
    }
    function save16() {
        $("#button16").on("click", function () {
            var inputPlan16 = $("#area-16").val();
            localStorage.setItem("16", inputPlan16);
        })
    }
    function save17() {
        $("#button17").on("click", function () {
            var inputPlan17 = $("#area-17").val();
            localStorage.setItem("17", inputPlan17);
        })
    }



})