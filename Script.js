$(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
        e.preventDefault()
        var title = $("#InTitle");
        var subtitle = $("#SubTitle");
        var subtitletwo = $("#SubTitleTwo");

        var three = $("#Three");
        var four = $("#Four");
        var five = $("#Five");
        var six = $("#Six");



        title.slideToggle("slow", function () {});
        title.animate({
            left: '400px',
            height: '500px',
            fontSize: '100px',
            width: '500px'

        }, "slow").delay(1200).slideToggle(600, function () {

            subtitle.fadeIn('slow').animate({
                left: '200px',
                top: '300',
                height: '500px',
                fontSize: '50px',
                width: '1000px'
            }, 1000, function () {
                subtitletwo.fadeIn('slow').animate({
                    right: '200px',
                    top: '400',
                    height: '500px',
                    fontSize: '25px',
                    width: '1000px'
                }, 1000, function () {


                    subtitletwo.delay(1000)
                    subtitle.slideToggle('slow')
                    subtitletwo.slideToggle('slow')

                    three.fadeIn('slow').delay(1000).animate({
                        right: '200px',
                        top: '400',
                        height: '500px',
                        fontSize: '25px',
                        width: '1000px'
                    }, 1000).delay(2000).fadeOut(200, function () {

                        four.fadeIn(500).animate({
                            fontSize: '300px',
                        }, "slow").delay(500);
                        four.fadeOut(500, function () {

                            five.animate({
                                height: '100 %',


                            }, 1000).animate({
                                top: "-3500px"

                            }, 100000, function () {

                                six.animate({
                                    top: '0',
                                    height: '100%',
                                }, 1000);


                            }).delay(100);



                        });

                    });


                });
            });
        });

        //Subtitle animation




    }
})
