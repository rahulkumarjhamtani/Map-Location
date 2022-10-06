function findLocation()
    {

        //-37.866963
        //144.980615

        var latitude = document.getElementById('latitude').value;
        var longitude = document.getElementById('longitude').value;

        console.log('Latitude =',latitude);
        console.log('Longitude =',longitude);

        /*document.getElementById('map').innerHTML = '<iframe src="https://maps.google.com/?q=-37.866963,144.980615" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';*/

        var url = '<iframe src="https://maps.google.com/?q='+latitude+','+longitude+'&output=embed" width="800" height="400" style="border:0;"></iframe>';

        document.getElementById('map').innerHTML = url;


    }