$(function () {

    var Historypage = $('#text');


    
    function getData(lat, long) {
        $.ajax({

            url: "/finalproject/jsonfile.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var history = data.history;
                var beginnings = data.beginnings;
                
                
                $("#text1").text("The earliest evidence of weightlifting dates to China’s Zhou Dynasty, which took place from the 10th century B.C. until 256 B.C. During this time, military recruits were required to pass weightlifting tests before they were accepted into the military. Various sculptures from ancient Greek civilizations also portray the sport, depicting Greeks lifting heavy stones.");
                $('#text3').text("The sport of weightlifting made its first Olympic appearance at the 1896 games. During these games, Launceston Elliott of Great Britain won the “One-Hand Lift” contest; Viggo Jensen of Denmark won the “Two-Hand Lift.");
               
                
                
            }
        });


    }

});