var selectedFile;

//save selected file 
//$("#myFile").on("change",function(event){
  //  selectedFile=event.target.files[0];
    
//});

//uploadfile
function uploadFile(a,b){
    var filename =selectedFile.name;
    var storageRef=firebase.storage().ref('/'+a+'/'+b+'/'+filename);
    var uploadTask=storageRef.put(selectedFile);

    uploadTask.on('state_changed', function(snapshot){

    },function (error) {
        
    },function () {
        var downloadURL= uploadTask.snapshot.downloadURL;
        console.log(downloadURL);

    });

}