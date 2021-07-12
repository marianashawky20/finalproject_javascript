

    var img=[
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        ]


        img.sort(function (){
    

    
            return 0.5 - Math.random();

    


    })
    


    for( let i=0;i<img.length;i++){
        console.log(img[i])
    }
  