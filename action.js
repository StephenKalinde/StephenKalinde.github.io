var selectedFile;

//save selected file 
$("myFile").on("change",function(event){
    selectedFile=event.target.files[0];
    
});

//uploadfile
function uploadFile(companyName,dptName){
    var filename =selectedFile.name;
    var storageRef=firebase.storage().ref('/'+companyName+'/'+dptName+'/'+filename);
    var uploadTask=storageRef.put(selectedFile);

    uploadTask.on('state_changed', function(snapshot){

    },function (error) {
        
    },function () {
        var downloadURL= uploadTask.snapshot.downloadURL;
        console.log(downloadURL);

    });

}