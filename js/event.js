document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('del-text').style.display = 'none';
});

document.getElementById('del-conf').addEventListener('keyup', function(event){
    
    const deleteBtn = document.getElementById('delete-btn');
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})