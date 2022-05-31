$( document ).ready(function() {
    console.log( "ready!" );
    function allLink(){        
        console.log('WFDA', $(".nav-link"))
        for (let el of $(".nav-link")){
            console.log(el);
        }
    }

    var url = window.location.href;

    // passes on every "a" tag
    // $("a[role=tab]").each(function() {
    //     console.log('okattttttt', url, typeof(url))
    //     // checks if its the same on the address bar
    //     if (url == (this.href)) {
    //         $(this).closest("li").addClass("active");
    //         // $(this).closest("li").addClass("underline");
    //     }
    // });
    console.log(allLink(), 'ayoooooo', $(".nav-link"))
});